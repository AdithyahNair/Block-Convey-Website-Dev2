#!/bin/bash

# Next.js Deployment Script for Google App Engine
# This script builds the Next.js app and deploys it to GAE

set -e  # Exit on any error

echo "🚀 Starting Next.js deployment to Google App Engine..."

# Step 1: Install dependencies with legacy peer deps for React 19 compatibility
echo "📦 Installing dependencies (using --legacy-peer-deps for React 19 compatibility)..."
npm ci --legacy-peer-deps

# Step 2: Build the Next.js app
echo "🔨 Building Next.js application..."
npm run build

# Step 3: Check if build was successful
if [ ! -d "out" ]; then
    echo "❌ Build failed! 'out' directory not found."
    exit 1
fi

echo "✅ Build completed successfully!"

# Step 4: Deploy to Google App Engine
echo "🌍 Deploying to Google App Engine..."
gcloud app deploy app.yaml --quiet

# Step 5: Get the deployed URL
echo "🎉 Deployment completed!"
echo "🌐 Your app should be available at: https://blockconvey-main-website-nextjs.uc.r.appspot.com" 