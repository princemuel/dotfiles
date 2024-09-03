#!/bin/bash

# Define the script content
SCRIPT_CONTENT='#!/bin/bash

# Check if a folder name was provided
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <folder-name>"
    exit 1
fi

FOLDER_NAME="$1"

# Check if the folder exists
if [ ! -d "$FOLDER_NAME" ]; then
    echo "Error: Directory '$FOLDER_NAME' does not exist."
    exit 1
fi

# Change ownership to the current user
echo "Changing ownership of '$FOLDER_NAME' to $USER:$USER..."
sudo chown -R $USER:$USER "$FOLDER_NAME"

# Set permissions to 777
echo "Setting permissions of '$FOLDER_NAME' to 777..."
sudo chmod -R 777 "$FOLDER_NAME"

echo "Permissions updated successfully."
'

# Define the path for the new script
SCRIPT_PATH="/usr/local/bin/set_permissions"

# Create the script file with the defined content
echo "$SCRIPT_CONTENT" | sudo tee "$SCRIPT_PATH" > /dev/null

# Make the script executable
sudo chmod +x "$SCRIPT_PATH"

# Define the alias line
ALIAS_LINE="alias setperm='set_permissions'"
ZSHRC_FILE="$HOME/.zshrc"

# Function to append alias after the last alias
append_alias_after_last() {
    local file="$1"
    local alias_line="$2"
    local temp_file=$(mktemp)

    # Check if alias section exists
    if grep -q '^alias ' "$file"; then
        # Extract content up to and including the last alias definition
        sed -n '/^alias /{h;}; ${x; x; p;}' "$file" > "$temp_file"
        echo "$alias_line" >> "$temp_file"
        # Append the rest of the file
        tail -n +$(($(grep -n '^alias ' "$file" | tail -n 1 | cut -d: -f1) + 1)) "$file" >> "$temp_file"
    else
        # If no alias section, append alias at the end
        cat "$file" > "$temp_file"
        echo "$alias_line" >> "$temp_file"
    fi

    # Move temp file to original file
    mv "$temp_file" "$file"
}

# Append alias to .zshrc
if grep -q "$ALIAS_LINE" "$ZSHRC_FILE"; then
    echo "Alias already present in $ZSHRC_FILE."
else
    echo "Appending alias to $ZSHRC_FILE..."
    append_alias_after_last "$ZSHRC_FILE" "$ALIAS_LINE"
    echo "Alias added. Please run 'source $ZSHRC_FILE' or restart your terminal to apply."
fi

# Output the result
echo "The 'set_permissions' script has been installed globally at $SCRIPT_PATH."
