import { MetadataRoute } from 'next';
import { readdirSync, statSync, existsSync } from 'fs';
import { join } from 'path';

interface RouteConfig {
  priority: number;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
}

// Define priorities and change frequencies for different route types
const getRouteConfig = (path: string): RouteConfig => {
  // Homepage - highest priority
  if (path === '/') {
    return { priority: 1.0, changeFrequency: 'daily' };
  }
  
  // Product pages - high priority, frequently updated
  if (path.startsWith('/products/')) {
    return { priority: 0.9, changeFrequency: 'weekly' };
  }
  
  // Main category pages - high priority
  if (['/corporate-hampers', '/christmas-hampers', '/for-him-her', '/get-well-soon'].includes(path)) {
    return { priority: 0.9, changeFrequency: 'weekly' };
  }
  
  // About and Contact - medium priority, less frequently updated
  if (['/about', '/contact'].includes(path)) {
    return { priority: 0.8, changeFrequency: 'monthly' };
  }
  
  // Default for other pages
  return { priority: 0.7, changeFrequency: 'monthly' };
};

// Recursively find all page.tsx files in the app directory
function findPages(dir: string, basePath: string = ''): string[] {
  const pages: string[] = [];
  
  try {
    if (!existsSync(dir)) {
      return pages;
    }
    
    const entries = readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      // Skip special files and directories
      if (entry.name.startsWith('.') || 
          ['node_modules', '.next', 'api', 'favicon.ico', 'robots.ts', 'sitemap.ts', 'layout.tsx', 'globals.css'].includes(entry.name)) {
        continue;
      }
      
      const fullPath = join(dir, entry.name);
      
      if (entry.isDirectory()) {
        // Recursively search subdirectories
        const subPath = basePath ? `${basePath}/${entry.name}` : `/${entry.name}`;
        pages.push(...findPages(fullPath, subPath));
      } else if (entry.isFile() && (entry.name === 'page.tsx' || entry.name === 'page.ts')) {
        // Found a page file
        const route = basePath || '/';
        pages.push(route);
      }
    }
  } catch (error) {
    // Silently handle errors (e.g., permission issues)
    if (process.env.NODE_ENV === 'development') {
      console.warn(`Error reading directory ${dir}:`, error);
    }
  }
  
  return pages;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://curatogift.com';
  const appDir = join(process.cwd(), 'app');
  
  // Pages to exclude from sitemap (test pages, admin pages, etc.)
  const excludedRoutes = ['/dropdown-example'];
  
  // Find all pages automatically
  const routes = findPages(appDir);
  
  // Remove duplicates, exclude test pages, and sort
  const uniqueRoutes = Array.from(new Set(routes))
    .filter(route => !excludedRoutes.includes(route))
    .sort();
  
  // Generate sitemap entries
  const sitemapEntries: MetadataRoute.Sitemap = uniqueRoutes.map((route) => {
    const config = getRouteConfig(route);
    const lastModified = new Date();
    
    // Try to get actual file modification time for better accuracy
    try {
      let pagePath: string;
      if (route === '/') {
        pagePath = join(appDir, 'page.tsx');
      } else {
        // Handle nested routes correctly (e.g., /products/classic-diwali-hamper)
        const routePath = route.replace(/^\//, '').replace(/\//g, '/');
        pagePath = join(appDir, routePath, 'page.tsx');
      }
      
      if (existsSync(pagePath)) {
        const stats = statSync(pagePath);
        lastModified.setTime(stats.mtimeMs);
      }
    } catch (error) {
      // Fallback to current date if file doesn't exist or can't be read
    }
    
    return {
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency: config.changeFrequency,
      priority: config.priority,
    };
  });
  
  // Add homepage explicitly if not found
  if (!uniqueRoutes.includes('/')) {
    sitemapEntries.unshift({
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    });
  }
  
  return sitemapEntries;
}
