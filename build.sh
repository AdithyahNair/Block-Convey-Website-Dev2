#!/bin/bash

# Clean up previous builds
echo "Cleaning up..."
rm -rf dist/

# Build the client
echo "Building client..."
npm run build

# Create dist structure
echo "Creating dist structure..."
mkdir -p dist/client

# Move client build to dist/client
echo "Moving client build..."
mv dist/*.html dist/client/
mv dist/assets dist/client/
mv dist/images dist/client/ 2>/dev/null || true
mv dist/static dist/client/ 2>/dev/null || true

# Build the server
echo "Building server..."
npm run build:server

echo "Build complete. Ready for GitHub push." 