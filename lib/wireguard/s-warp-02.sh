#!/bin/bash

# Script configuration
version="1.0"
default_config_dir="/etc/wireguard"
log_file="/var/log/warp-setup.log"
backup_dir="/etc/wireguard/backups"
registration_url="https://api.cloudflareclient.com/v0a737/reg"

# Get real user's home directory even when running with sudo
if [ -n "$SUDO_USER" ]; then
  user_home=$(getent passwd "$SUDO_USER" | cut -d: -f6)
else
  user_home="$HOME"
fi

# Color codes for output
red='\033[0;31m'
green='\033[0;32m'
yellow='\033[1;33m'
nc='\033[0m' # No Color

# Logging functions
log() {
  local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
  echo -e "${timestamp} $1" | tee -a "$log_file"
}

error() {
  log "${red}ERROR: $1${nc}"
  exit 1
}

warn() {
  log "${yellow}WARNING: $1${nc}"
}

success() {
  log "${green}SUCCESS: $1${nc}"
}

# Check if running as root
check_root() {
  if [ "$EUID" -ne 0 ]; then
    error "This script must be run as root"
  fi
}

# Check dependencies
check_dependencies() {
  local deps=("wg" "curl" "jq" "openssl")
  for dep in "${deps[@]}"; do
    if ! command -v "$dep" &>/dev/null; then
      error "$dep is required but not installed."
    fi
  done
}

# Create required directories
setup_directories() {
  mkdir -p "$default_config_dir" "$backup_dir" "$(dirname "$log_file")" "$user_home/.warp"
  chmod 700 "$default_config_dir" "$backup_dir"
  # Ensure .warp directory is owned by the real user
  if [ -n "$SUDO_USER" ]; then
    chown -R "$SUDO_USER:$(id -gn "$SUDO_USER")" "$user_home/.warp"
  fi
}

# Backup existing configuration
backup_config() {
  local config_file="$1"
  if [ -f "$config_file" ]; then
    local backup_file="$backup_dir/warp-$(date +%Y%m%d_%H%M%S).conf"
    cp "$config_file" "$backup_file"
    success "Backed up existing configuration to $backup_file"
  fi
}

# Generate new WireGuard keypair
generate_keys() {
  log "Generating new WireGuard keypair..."
  private_key=$(wg genkey)
  public_key=$(echo "$private_key" | wg pubkey)
  if [ -z "$private_key" ] || [ -z "$public_key" ]; then
    error "Failed to generate WireGuard keys"
  fi
  success "Generated WireGuard keypair"
}

# Register with Cloudflare
register_device() {
  local device_name="$1"
  log "Registering device with Cloudflare..."

  # Format current date for ToS
  tos_date=$(date +"%Y-%m-%dT%H:%M:00+01:00")

  # Construct registration payload
  local payload="{
        \"key\":\"$public_key\",
        \"install_id\":\"\",
        \"warp_enabled\":true,
        \"tos\":\"$tos_date\",
        \"type\":\"Linux\",
        \"locale\":\"en-US\",
        \"name\":\"$device_name\"
    }"

  # Make API request
  local response
  response=$(curl -s -f -d "$payload" "$registration_url")
  if [ $? -ne 0 ]; then
    error "Failed to register with Cloudflare"
  fi

  echo "$response"
}

# Extract configuration from response
parse_response() {
  local response="$1"
  local config_file="$2"

  # Extract required information
  endpoint=$(echo "$response" | jq -r '.config.peers[0].endpoint.host')
  peer_pubkey=$(echo "$response" | jq -r '.config.peers[0].public_key')
  ipv4_addr=$(echo "$response" | jq -r '.config.interface.addresses.v4')
  ipv6_addr=$(echo "$response" | jq -r '.config.interface.addresses.v6')
  license=$(echo "$response" | jq -r '.account.license')
  client_id=$(echo "$response" | jq -r '.config.client_id')

  # Validate extracted data
  if [ -z "$endpoint" ] || [ -z "$peer_pubkey" ] || [ -z "$ipv4_addr" ] || [ -z "$ipv6_addr" ]; then
    error "Failed to parse Cloudflare response"
  fi
}

# Create WireGuard configuration
create_config() {
  local config_file="$1"
  log "Creating WireGuard configuration at $config_file"

  cat >"$config_file" <<EOF
[Interface]
Address = $ipv4_addr/32
Address = $ipv6_addr/128
DNS = 1.1.1.1,1.0.0.1,2606:4700:4700::1111,2606:4700:4700::1001
PrivateKey = $private_key

[Peer]
Endpoint = $endpoint
AllowedIPs = 0.0.0.0/0,::/0
PublicKey = $peer_pubkey
PersistentKeepalive = 25
EOF

  chmod 600 "$config_file"
  success "Created WireGuard configuration"
}

# Save device information
save_device_info() {
  local device_name="$1"
  local info_file="$user_home/.warp/$device_name.info"

  mkdir -p "$user_home/.warp"
  cat >"$info_file" <<EOF
Device Name: $device_name
License: $license
Client ID: $client_id
Created: $(date)
EOF

  chmod 600 "$info_file"
  # Ensure the info file is owned by the real user
  if [ -n "$SUDO_USER" ]; then
    chown "$SUDO_USER:$(id -gn "$SUDO_USER")" "$info_file"
  fi
  success "Saved device information to $info_file"
}

# Check WireGuard connection status
check_connection() {
  log "Checking WireGuard connection status..."
  if ! wg show warp &>/dev/null; then
    warn "WireGuard interface is not active"
    return 1
  fi

  if ! ping -c 1 1.1.1.1 &>/dev/null; then
    warn "Cannot reach Cloudflare DNS"
    return 1
  fi

  success "WireGuard connection is active and working"
  return 0
}

# Rotate keys
rotate_keys() {
  local config_file="$1"
  log "Rotating WireGuard keys..."

  # Backup current configuration
  backup_config "$config_file"

  # Generate new keys and register
  generate_keys
  local response=$(register_device "$(hostname)")
  parse_response "$response" "$config_file"
  create_config "$config_file"

  # Restart interface
  wg-quick down warp || true
  wg-quick up warp

  success "Rotated WireGuard keys and updated configuration"
}

# Show script usage
show_usage() {
  cat <<EOF
Usage: $0 [OPTIONS]

Options:
    -h, --help              Show this help message
    -v, --version           Show version information
    -d, --device NAME       Set device name (default: hostname)
    -c, --config DIR        Set WireGuard config directory (default: $default_config_dir)
    -r, --rotate           Rotate existing keys
    -s, --status           Check connection status
    --backup               Create backup of existing configuration
    --no-connect          Create configuration without connecting

Examples:
    $0 --device laptop1           # Setup new device named laptop1
    $0 --rotate                   # Rotate keys for existing configuration
    $0 --status                   # Check connection status
EOF
}

# Parse command line arguments
parse_args() {
  device_name=$(hostname)
  config_dir="$default_config_dir"
  rotate_keys=0
  check_status=0
  no_connect=0

  while [[ $# -gt 0 ]]; do
    case $1 in
    -h | --help)
      show_usage
      exit 0
      ;;
    -v | --version)
      echo "warp-setup version $version"
      exit 0
      ;;
    -d | --device)
      device_name="$2"
      shift 2
      ;;
    -c | --config)
      config_dir="$2"
      shift 2
      ;;
    -r | --rotate)
      rotate_keys=1
      shift
      ;;
    -s | --status)
      check_status=1
      shift
      ;;
    --backup)
      backup_only=1
      shift
      ;;
    --no-connect)
      no_connect=1
      shift
      ;;
    *)
      error "Unknown option: $1"
      ;;
    esac
  done
}

# Main function
main() {
  check_root
  check_dependencies
  setup_directories
  parse_args "$@"

  config_file="$config_dir/warp.conf"

  if [ "$check_status" -eq 1 ]; then
    check_connection
    exit $?
  fi

  if [ "$rotate_keys" -eq 1 ]; then
    rotate_keys "$config_file"
    exit 0
  fi

  if [ "$backup_only" -eq 1 ]; then
    backup_config "$config_file"
    exit 0
  fi

  # Normal setup process
  backup_config "$config_file"
  generate_keys

  response=$(register_device "$device_name")
  parse_response "$response" "$config_file"
  create_config "$config_file"
  save_device_info "$device_name"

  if [ "$no_connect" -eq 0 ]; then
    log "Starting WireGuard interface..."
    wg-quick up warp
    check_connection
  fi

  success "Setup complete!"
  echo -e "\nTo manage the connection:"
  echo "  Start: sudo wg-quick up warp"
  echo "  Stop:  sudo wg-quick down warp"
  echo "  Status: sudo wg show warp"
  echo -e "\nConfiguration saved to: $config_file"
  echo "Device info saved to: $user_home/.warp/$device_name.info"
}

# Start script
main "$@"
