#!/bin/bash
set -e

echo "Building for production..."
npm run build

echo "Copying 404.html for GitHub Pages SPA support..."
cp public/404.html dist/404.html

echo "Deploying to GitHub Pages..."
# Remove existing gh-pages branch if it exists locally
git branch -D gh-pages 2>/dev/null || true

# Deploy to gh-pages
gh-pages -d dist --dotfiles

echo "Deployment complete! Your site should be available at:"
echo "https://madhavkabra.github.io/global-nexus/"

