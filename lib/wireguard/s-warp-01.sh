#!/usr/bin/env bash

# Exit on error
set -e

# Check for required commands
for cmd in wg curl jq; do
  if ! command -v $cmd &>/dev/null; then
    echo "Error: $cmd is required but not installed."
    exit 1
  fi
done

# Create working directory
workdir="/tmp/wg-setup"
mkdir -p "$workdir"
cd "$workdir"

echo "Generating WireGuard keypair..."
private_key=$(wg genkey)
pubkey=$(echo "$private_key" | wg pubkey)

echo "Registering with Cloudflare..."
# Format current date for ToS
today=$(date +"%Y-%m-%dT%H:%M:00+01:00")

# Register with Cloudflare
response=$(curl -s -d "{\"key\":\"$pubkey\",\"install_id\":\"\",\"warp_enabled\":true,\"tos\":\"$today\",\"type\":\"Linux\",\"locale\":\"en-US\"}" https://api.cloudflareclient.com/v0a737/reg)
echo "$response" >warp.json

# Extract required information
endpoint=$(echo "$response" | jq -r '.config.peers[0].endpoint.host')
peer_pubkey=$(echo "$response" | jq -r '.config.peers[0].public_key')
ipv4=$(echo "$response" | jq -r '.config.interface.addresses.v4')
ipv6=$(echo "$response" | jq -r '.config.interface.addresses.v6')

# Create WireGuard configuration
config_file="/etc/wireguard/warp.conf"
cat >"$config_file" <<EOF
[Interface]
Address = $ipv4/32
Address = $ipv6/128
DNS = 1.1.1.1,8.8.8.8,1.0.0.1,8.8.4.4,2606:4700:4700::1111,2606:4700:4700::1001
PrivateKey = $private_key

[Peer]
Endpoint = $endpoint
AllowedIPs = 0.0.0.0/0,::/0
PublicKey = $peer_pubkey
PersistentKeepalive = 25
EOF

# Set proper permissions
chmod 600 "$config_file"

echo "Configuration complete! Starting WireGuard interface..."
wg-quick up warp

echo "Setup complete. To stop the connection, run: wg-quick down warp"
echo "Configuration saved to: $config_file"

# Save license and client info for reference
LICENSE=$(echo "$response" | jq -r '.account.license')
CLIENT_ID=$(echo "$response" | jq -r '.config.client_id')
echo "License: $LICENSE" >"$HOME/.warp-license"
echo "Client ID: $CLIENT_ID" >>"$HOME/.warp-license"
echo "License and Client ID saved to: $HOME/.warp-license"

# Cleanup
rm -rf "$workdir"
