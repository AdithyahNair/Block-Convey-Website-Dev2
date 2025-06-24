#!/bin/bash

# Run the build script first
echo "Running build script..."
./build.sh

# Verify the build
if [ ! -d "dist/client" ]; then
  echo "Error: dist/client not found. Build may have failed."
  exit 1
fi

if [ ! -d "dist/server" ]; then
  echo "Error: dist/server not found. Build may have failed."
  exit 1
fi

# Stage all changes
git add .

# Commit changes
echo "Enter commit message:"
read commit_message
git commit -m "$commit_message"

# Push to GitHub
echo "Pushing to GitHub..."
git push origin main

echo "Deployment pushed to GitHub!" 