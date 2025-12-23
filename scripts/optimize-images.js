const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const { globSync } = require("glob");

const MAX_WIDTH = 2000;
const MAX_HEIGHT = 2000;
const QUALITY = 100; // don't change quality for now

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (![".jpg", ".jpeg"].includes(ext)) return;

  const directory = path.dirname(filePath);
  const fileName = path.basename(filePath, ext);
  const outputPath = path.join(directory, `${fileName}.webp`);

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    // Resize only if larger than 2000px on the longer side
    let transform = image;
    if (metadata.width > MAX_WIDTH || metadata.height > MAX_HEIGHT) {
      transform = transform.resize({
        width: metadata.width >= metadata.height ? MAX_WIDTH : null,
        height: metadata.height > metadata.width ? MAX_HEIGHT : null,
        fit: "inside",
        withoutEnlargement: true,
      });
    }

    // Convert to webp and optimize
    await transform
      .webp({ quality: QUALITY, effort: 6 }) // effort 6 provides better compression
      .toFile(outputPath);

    // Remove the original file
    fs.unlinkSync(filePath);

    console.log(`✅ Optimized: ${fileName}${ext} -> ${fileName}.webp`);
  } catch (err) {
    console.error(`❌ Error processing ${filePath}:`, err.message);
  }
}

// Logic to handle command line arguments
const args = process.argv.slice(2);
if (args.length > 0) {
  // If arguments are provided (like from lint-staged), process those specific files
  args.forEach((file) => {
    if (fs.existsSync(file)) optimizeImage(file);
  });
} else {
  // Default: Manual run on the entire gallery folder
  const galleryFolder = "public/Galerien";
  console.log(`Searching for images in ${galleryFolder}...`);

  const files = globSync(`${galleryFolder}/**/*.{jpg,jpeg}`);
  files.forEach((file) => optimizeImage(file));
}
