const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Function to get all image files recursively
function getAllImageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllImageFiles(filePath, fileList);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        fileList.push(filePath);
      }
    }
  });
  
  return fileList;
}

// Get all image files
const imagesDir = path.join(__dirname, 'public', 'images');
const imageFiles = getAllImageFiles(imagesDir);

console.log(`Found ${imageFiles.length} image files to convert...\n`);

// Convert each image to WebP
async function convertImages() {
  for (let i = 0; i < imageFiles.length; i++) {
    const imageFile = imageFiles[i];
    const webpFile = imageFile.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    
    try {
      console.log(`[${i + 1}/${imageFiles.length}] Converting: ${path.basename(imageFile)}`);
      
      await sharp(imageFile)
        .webp({ quality: 85 })
        .toFile(webpFile);
      
      console.log(`✓ Created: ${path.basename(webpFile)}\n`);
    } catch (error) {
      console.error(`✗ Failed to convert: ${path.basename(imageFile)}`);
      console.error(`  Error: ${error.message}\n`);
    }
  }
  
  console.log('\nConversion complete!');
  console.log('All images have been converted to WebP format.');
}

convertImages();
