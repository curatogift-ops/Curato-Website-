const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

/**
 * HTML to MDX Conversion Script
 * Converts static HTML pages to MDX format with frontmatter
 */

// Configuration
const HTML_DIR = path.join(__dirname, '../../');
const OUTPUT_DIR = path.join(__dirname, '../content');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Page mapping configuration
const pageMapping = [
  {
    htmlFile: 'index.html',
    slug: '/',
    title: 'Curato Gift - Luxury Gift Hampers & Baskets',
    description: 'Curated premium hampers filled with the finest selections. Perfect gifts for every occasion.',
    sections: ['hero', 'gifts', 'occasions', 'christmas', 'testimonials']
  }
];

function extractMetaContent(doc, name) {
  const meta = doc.querySelector(`meta[name="${name}"]`);
  return meta ? meta.getAttribute('content') : '';
}

function extractTitle(doc) {
  const title = doc.querySelector('title');
  return title ? title.textContent : '';
}

function convertHtmlToMdx(htmlPath, config) {
  console.log(`Processing: ${htmlPath}`);
  
  const htmlContent = fs.readFileSync(htmlPath, 'utf-8');
  const dom = new JSDOM(htmlContent);
  const doc = dom.window.document;
  
  // Extract metadata
  const title = config.title || extractTitle(doc);
  const description = config.description || extractMetaContent(doc, 'description');
  
  // Generate frontmatter
  const frontmatter = `---
title: "${title}"
description: "${description}"
slug: "${config.slug}"
date: "${new Date().toISOString().split('T')[0]}"
image: "/images/hero-hamper.jpg"
sections: ${JSON.stringify(config.sections)}
---

`;
  
  // Extract main content sections
  let mdxContent = '';
  
  // Hero Section
  const heroSection = doc.querySelector('.hero');
  if (heroSection) {
    mdxContent += `## Hero Section\n\n`;
    mdxContent += `<HeroSection />\n\n`;
  }
  
  // Gifts Section
  const giftsSection = doc.querySelector('.gifts-for-everyone');
  if (giftsSection) {
    mdxContent += `## Gifts for Everyone\n\n`;
    mdxContent += `<GiftsSection />\n\n`;
  }
  
  // Occasions Section
  const occasionsSection = doc.querySelector('.occasions-section');
  if (occasionsSection) {
    mdxContent += `## Shop by Occasions\n\n`;
    mdxContent += `<OccasionsSection />\n\n`;
  }
  
  // Christmas Section
  const christmasSection = doc.querySelector('.christmas-hampers-section');
  if (christmasSection) {
    mdxContent += `## Christmas Hampers\n\n`;
    mdxContent += `<ChristmasSection />\n\n`;
  }
  
  // Testimonials Section
  const testimonialsSection = doc.querySelector('.testimonials-section');
  if (testimonialsSection) {
    mdxContent += `## Customer Testimonials\n\n`;
    mdxContent += `<TestimonialsSection />\n\n`;
  }
  
  return frontmatter + mdxContent;
}

// Process all pages
pageMapping.forEach(config => {
  const htmlPath = path.join(HTML_DIR, config.htmlFile);
  
  if (fs.existsSync(htmlPath)) {
    const mdxContent = convertHtmlToMdx(htmlPath, config);
    const outputFileName = config.slug === '/' ? 'home.mdx' : `${config.slug.replace(/\//g, '-')}.mdx`;
    const outputPath = path.join(OUTPUT_DIR, outputFileName);
    
    fs.writeFileSync(outputPath, mdxContent);
    console.log(`✓ Created: ${outputPath}`);
  } else {
    console.log(`✗ File not found: ${htmlPath}`);
  }
});

// Generate mapping document
const mappingDoc = `# Page Migration Mapping

## Overview
This document maps the original HTML structure to the new Next.js components.

## Page Mappings

${pageMapping.map(page => `
### ${page.title}
- **Original**: ${page.htmlFile}
- **New Route**: ${page.slug === '/' ? '/app/page.tsx' : `/app${page.slug}/page.tsx`}
- **MDX Content**: /content/${page.slug === '/' ? 'home.mdx' : page.slug.replace(/\//g, '-') + '.mdx'}
- **Sections**: ${page.sections.join(', ')}
`).join('\n')}

## Component Mapping

| HTML Section | React Component | Location |
|-------------|-----------------|----------|
| .hero | HeroSection | components/sections/HeroSection.tsx |
| .gifts-for-everyone | GiftsSection | components/sections/GiftsSection.tsx |
| .occasions-section | OccasionsSection | components/sections/OccasionsSection.tsx |
| .christmas-hampers-section | ChristmasSection | components/sections/ChristmasSection.tsx |
| .testimonials-section | TestimonialsSection | components/sections/TestimonialsSection.tsx |
| .main-header | Header | components/layout/Header.tsx |
| .main-footer | Footer | components/layout/Footer.tsx |

## Asset Migration

| Original | New Location |
|----------|-------------|
| Christmas.png | public/images/christmas.png |
| Gemini_Generated_Image_*.png | public/images/categories/ |
| From KlickPin CF Amazon Prime Hampers by The Good Road!.mp4 | public/videos/hero-video.mp4 |

## Notes
- All inline styles converted to Tailwind CSS classes
- Images optimized using next/image
- Videos use HTML5 video with proper optimization
- SEO metadata extracted and centralized
`;

fs.writeFileSync(path.join(__dirname, '../MIGRATION_MAPPING.md'), mappingDoc);
console.log('\n✓ Migration mapping document created');

console.log('\n✅ Conversion complete!');
