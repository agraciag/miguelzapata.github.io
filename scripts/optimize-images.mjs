#!/usr/bin/env node
import sharp from 'sharp';
import { readdir, mkdir, stat, copyFile } from 'fs/promises';
import { join, basename, extname } from 'path';
import { existsSync } from 'fs';

// Configuration
const CONFIG = {
	sourceDir: '/mnt/d/dev_projects/miguel_zapata/miguelzapata/en/wp-content/uploads/2015',
	outputDir: './public/images/gallery',
	thumbsDir: './public/images/thumbs',
	maxWidth: 1920,
	maxHeight: 1920,
	thumbWidth: 400,
	thumbHeight: 400,
	quality: 85,
	webpQuality: 80
};

// Check if file is a WordPress resized version
function isResizedVersion(filename) {
	// WordPress creates files like: image-150x150.jpg, image-300x200.jpg, etc.
	const resizePattern = /-\d+x\d+\.(jpg|jpeg|png)$/i;
	return resizePattern.test(filename);
}

// Check if file is an edited version (WordPress adds -e[timestamp])
function isEditedVersion(filename) {
	return /-e\d+/i.test(filename);
}

// Get all image files recursively
async function getImageFiles(dir, fileList = []) {
	const files = await readdir(dir);

	for (const file of files) {
		const filePath = join(dir, file);
		const fileStat = await stat(filePath);

		if (fileStat.isDirectory()) {
			await getImageFiles(filePath, fileList);
		} else if (/\.(jpg|jpeg|png)$/i.test(file)) {
			fileList.push(filePath);
		}
	}

	return fileList;
}

// Get only original images (filter out WordPress thumbnails)
function filterOriginalImages(imageFiles) {
	return imageFiles.filter(file => {
		const filename = basename(file);
		return !isResizedVersion(filename) && !isEditedVersion(filename);
	});
}

// Optimize and resize image
async function optimizeImage(inputPath, outputPath, thumbPath) {
	try {
		const image = sharp(inputPath);
		const metadata = await image.metadata();

		console.log(`Processing: ${basename(inputPath)} (${metadata.width}x${metadata.height})`);

		// Create output directories if they don't exist
		const outputDirPath = outputPath.substring(0, outputPath.lastIndexOf('/'));
		const thumbDirPath = thumbPath.substring(0, thumbPath.lastIndexOf('/'));

		if (!existsSync(outputDirPath)) {
			await mkdir(outputDirPath, { recursive: true });
		}
		if (!existsSync(thumbDirPath)) {
			await mkdir(thumbDirPath, { recursive: true });
		}

		// Optimize full image
		await image
			.resize(CONFIG.maxWidth, CONFIG.maxHeight, {
				fit: 'inside',
				withoutEnlargement: true
			})
			.jpeg({ quality: CONFIG.quality, progressive: true })
			.toFile(outputPath);

		// Create WebP version
		const webpPath = outputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
		await sharp(inputPath)
			.resize(CONFIG.maxWidth, CONFIG.maxHeight, {
				fit: 'inside',
				withoutEnlargement: true
			})
			.webp({ quality: CONFIG.webpQuality })
			.toFile(webpPath);

		// Create thumbnail
		await sharp(inputPath)
			.resize(CONFIG.thumbWidth, CONFIG.thumbHeight, {
				fit: 'cover',
				position: 'center'
			})
			.jpeg({ quality: CONFIG.quality })
			.toFile(thumbPath);

		// Get file sizes
		const originalSize = (await stat(inputPath)).size;
		const optimizedSize = (await stat(outputPath)).size;
		const thumbSize = (await stat(thumbPath)).size;
		const webpSize = (await stat(webpPath)).size;

		const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);

		return {
			original: basename(inputPath),
			originalSize,
			optimizedSize,
			thumbSize,
			webpSize,
			savings,
			dimensions: `${metadata.width}x${metadata.height}`
		};
	} catch (error) {
		console.error(`Error processing ${basename(inputPath)}:`, error.message);
		return null;
	}
}

// Main function
async function main() {
	console.log('🎨 Miguel Zapata Image Optimization Script\n');
	console.log(`Source: ${CONFIG.sourceDir}`);
	console.log(`Output: ${CONFIG.outputDir}`);
	console.log(`Thumbs: ${CONFIG.thumbsDir}\n`);

	// Create output directories
	await mkdir(CONFIG.outputDir, { recursive: true });
	await mkdir(CONFIG.thumbsDir, { recursive: true });

	// Get all images
	console.log('📁 Scanning for images...');
	const allImages = await getImageFiles(CONFIG.sourceDir);
	console.log(`Found ${allImages.length} total image files`);

	// Filter originals only
	const originalImages = filterOriginalImages(allImages);
	console.log(`Filtered to ${originalImages.length} original images\n`);

	// Process images
	console.log('⚙️  Processing images...\n');
	const results = [];
	let totalOriginalSize = 0;
	let totalOptimizedSize = 0;
	let totalWebpSize = 0;
	let totalThumbSize = 0;

	for (let i = 0; i < originalImages.length; i++) {
		const inputPath = originalImages[i];
		const filename = basename(inputPath);
		const name = filename.replace(/\.[^.]+$/, '');
		const ext = extname(filename);

		const outputPath = join(CONFIG.outputDir, filename);
		const thumbPath = join(CONFIG.thumbsDir, `${name}-thumb${ext}`);

		const result = await optimizeImage(inputPath, outputPath, thumbPath);

		if (result) {
			results.push(result);
			totalOriginalSize += result.originalSize;
			totalOptimizedSize += result.optimizedSize;
			totalWebpSize += result.webpSize;
			totalThumbSize += result.thumbSize;
		}

		// Progress
		if ((i + 1) % 10 === 0) {
			console.log(`Progress: ${i + 1}/${originalImages.length}`);
		}
	}

	// Summary
	console.log('\n✅ Optimization Complete!\n');
	console.log('=== Summary ===');
	console.log(`Total images processed: ${results.length}`);
	console.log(`Original size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
	console.log(`Optimized JPG: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)} MB`);
	console.log(`WebP versions: ${(totalWebpSize / 1024 / 1024).toFixed(2)} MB`);
	console.log(`Thumbnails: ${(totalThumbSize / 1024 / 1024).toFixed(2)} MB`);
	console.log(`Total saved: ${((totalOriginalSize - totalOptimizedSize) / 1024 / 1024).toFixed(2)} MB`);
	console.log(`Savings: ${((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1)}%`);

	// Check GitHub size limit
	const totalSize = totalOptimizedSize + totalWebpSize + totalThumbSize;
	const githubLimit = 500 * 1024 * 1024; // 500 MB
	console.log(`\nTotal repository size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
	if (totalSize < githubLimit) {
		console.log('✅ Within GitHub Pages recommended limit (500 MB)');
	} else {
		console.log('⚠️  Warning: Exceeds GitHub Pages recommended limit');
	}
}

main().catch(console.error);
