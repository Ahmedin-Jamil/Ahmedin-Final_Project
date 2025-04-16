#!/usr/bin/env bash

# Build the project
npm run build

# Create a temporary directory for the build
mkdir -p temp_deploy

# Copy the build files to the temporary directory
cp -r dist/* temp_deploy/

# Switch to gh-pages branch
git checkout gh-pages || git checkout -b gh-pages

# Remove the old files
rm -rf *.html *.js *.css *.svg assets

# Copy the new build files
cp -r temp_deploy/* .

# Remove the temporary directory
rm -rf temp_deploy

# Add all files
git add .

# Commit
git commit -m "Deploy to GitHub Pages"

# Push to GitHub
git push origin gh-pages

# Go back to the master branch
git checkout master
