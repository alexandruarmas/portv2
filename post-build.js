const fs = require('fs');
const path = require('path');

console.log('Running post-build processing for GitHub Pages deployment...');

// Function to copy files from one directory to another
function copyFileSync(source, target) {
  let targetFile = target;

  // If target is a directory, append the source filename
  if (fs.existsSync(target) && fs.statSync(target).isDirectory()) {
    targetFile = path.join(target, path.basename(source));
  }

  // Create directory if it doesn't exist
  const targetDir = path.dirname(targetFile);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  fs.copyFileSync(source, targetFile);
}

// Function to recursively copy directory contents
function copyDirRecursiveSync(source, target) {
  // Create target directory if it doesn't exist
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }

  // Read all files and subdirectories in source directory
  const files = fs.readdirSync(source);

  files.forEach(file => {
    const sourcePath = path.join(source, file);
    const targetPath = path.join(target, file);
    const stat = fs.statSync(sourcePath);

    if (stat.isDirectory()) {
      // Recursively copy directories
      copyDirRecursiveSync(sourcePath, targetPath);
    } else {
      // Copy files
      copyFileSync(sourcePath, targetPath);
    }
  });
}

// Copy public directory to out/portv2/
const publicDir = path.join(__dirname, 'public');
const outPublicDir = path.join(__dirname, 'out', 'portv2', 'public');

// Make sure the target directory exists
if (!fs.existsSync(outPublicDir)) {
  fs.mkdirSync(outPublicDir, { recursive: true });
}

// Copy the public directory
copyDirRecursiveSync(publicDir, outPublicDir);

console.log('Post-build processing complete!'); 