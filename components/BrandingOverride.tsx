'use client';

import { useEffect } from "react";

function hideAiSensyAttributionSafely() {
  try {
    // Only target small badges/links that explicitly say "by AiSensy"
    const candidates = Array.from(document.querySelectorAll<HTMLElement>("a, small, span"));
    for (const el of candidates) {
      const text = (el.textContent || "").trim().toLowerCase();
      const looksLikeBadge = text === "by aisensy" || text.includes("by aisensy");
      const hrefMatches = (el as HTMLAnchorElement).href?.includes("aisensy") ?? false;
      if (looksLikeBadge || hrefMatches) {
        el.style.display = "none";
      }
    }
  } catch {
    // ignore
  }
}

function removeCuratoBadgeIfAny() {
  const existing = document.getElementById("curato-branding-badge");
  if (existing && existing.parentNode) {
    existing.parentNode.removeChild(existing);
  }
}

function setWhatsAppProfileImage() {
  try {
    const logoUrl = '/images/1 more bg remove new.png';
    
    // Find all widget containers
    const widgetContainers = document.querySelectorAll(
      '[id*="aisensy"], [class*="aisensy"], [id*="widget"], [class*="widget"], [class*="chat"], [id*="chat"]'
    );

    for (const container of widgetContainers) {
      // Strategy 1: Find all images in widget and check if they're profile-sized
      const allImages = container.querySelectorAll<HTMLImageElement>('img');
      for (const img of allImages) {
        const rect = img.getBoundingClientRect();
        const isSmall = rect.width > 0 && rect.width <= 80 && rect.height > 0 && rect.height <= 80;
        const isInHeader = container.querySelector('header, [class*="header"], [class*="Header"]')?.contains(img);
        const isCircular = window.getComputedStyle(img).borderRadius.includes('50%') || 
                          window.getComputedStyle(img).borderRadius.includes('9999px');
        
        // If it's a small image in the widget (especially in header or circular), replace it
        if ((isSmall || isInHeader || isCircular) && !img.src.includes('1 more bg remove new.png')) {
          img.src = logoUrl;
          img.alt = 'Curato Gift';
          img.style.objectFit = 'cover';
          img.style.borderRadius = '50%';
          img.style.width = img.style.width || '50px';
          img.style.height = img.style.height || '50px';
          return true;
        }
      }

      // Strategy 2: Find divs that might be profile containers
      const allDivs = container.querySelectorAll<HTMLDivElement>('div');
      for (const div of allDivs) {
        const rect = div.getBoundingClientRect();
        const style = window.getComputedStyle(div);
        const isSmall = rect.width > 0 && rect.width <= 80 && rect.height > 0 && rect.height <= 80;
        const isCircular = style.borderRadius.includes('50%') || style.borderRadius.includes('9999px');
        const hasBackground = style.backgroundImage && style.backgroundImage !== 'none';
        const hasPlaceholder = div.textContent?.trim().toLowerCase() === 'img' || 
                              div.innerHTML.includes('img') ||
                              div.querySelector('svg') !== null;
        
        // Check if it's in the header area
        const isInHeader = container.querySelector('header, [class*="header"], [class*="Header"]')?.contains(div);
        
        if ((isSmall || isCircular || isInHeader) && (hasBackground || hasPlaceholder || div.children.length === 0)) {
          // Replace with our logo
          div.innerHTML = '';
          div.style.backgroundImage = 'none';
          const img = document.createElement('img');
          img.src = logoUrl;
          img.alt = 'Curato Gift';
          img.style.width = '100%';
          img.style.height = '100%';
          img.style.objectFit = 'cover';
          img.style.borderRadius = '50%';
          img.style.display = 'block';
          div.appendChild(img);
          return true;
        }
      }

      // Strategy 3: Find SVG placeholders and replace them
      const svgs = container.querySelectorAll<SVGElement>('svg');
      for (const svg of svgs) {
        const rect = svg.getBoundingClientRect();
        const isSmall = rect.width > 0 && rect.width <= 80 && rect.height > 0 && rect.height <= 80;
        const parent = svg.parentElement;
        const isInHeader = container.querySelector('header, [class*="header"], [class*="Header"]')?.contains(svg);
        
        if ((isSmall || isInHeader) && parent) {
          // Replace SVG with image
          const img = document.createElement('img');
          img.src = logoUrl;
          img.alt = 'Curato Gift';
          img.style.width = rect.width ? `${rect.width}px` : '50px';
          img.style.height = rect.height ? `${rect.height}px` : '50px';
          img.style.objectFit = 'cover';
          img.style.borderRadius = '50%';
          parent.replaceChild(img, svg);
          return true;
        }
      }

      // Strategy 4: Look for any element in the header that could be a profile
      const headers = container.querySelectorAll('header, [class*="header"], [class*="Header"]');
      for (const header of headers) {
        // Find the first small image or div in the header (likely profile)
        const headerElements = header.querySelectorAll<HTMLElement>('img, div, span');
        for (const el of headerElements) {
          const rect = el.getBoundingClientRect();
          const isSmall = rect.width > 0 && rect.width <= 80 && rect.height > 0 && rect.height <= 80;
          
          if (isSmall && el.tagName === 'IMG') {
            (el as HTMLImageElement).src = logoUrl;
            (el as HTMLImageElement).alt = 'Curato Gift';
            el.style.objectFit = 'cover';
            el.style.borderRadius = '50%';
            return true;
          } else if (isSmall && (el.tagName === 'DIV' || el.tagName === 'SPAN')) {
            el.innerHTML = '';
            const img = document.createElement('img');
            img.src = logoUrl;
            img.alt = 'Curato Gift';
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            img.style.borderRadius = '50%';
            el.appendChild(img);
            return true;
          }
        }
      }
    }

    // Strategy 5: Global search for small images that might be profile pictures
    const allSmallImages = Array.from(document.querySelectorAll<HTMLImageElement>('img')).filter(img => {
      const rect = img.getBoundingClientRect();
      return rect.width > 0 && rect.width <= 80 && rect.height > 0 && rect.height <= 80;
    });

    for (const img of allSmallImages) {
      // Check if it's near widget elements
      const widgetNearby = img.closest('[id*="aisensy"], [class*="aisensy"], [id*="widget"], [class*="widget"]');
      if (widgetNearby && !img.src.includes('1 more bg remove new.png')) {
        img.src = logoUrl;
        img.alt = 'Curato Gift';
        img.style.objectFit = 'cover';
        img.style.borderRadius = '50%';
        return true;
      }
    }
  } catch (error) {
    console.warn('Could not set WhatsApp profile image:', error);
  }
  return false;
}

export default function BrandingOverride() {
  useEffect(() => {
    // Ensure we run after page load to avoid any hydration race conditions
    const kickOff = () => {
      // Wait a tick for the widget script to initialize, then run a few times
      const timeout = setTimeout(() => {
        hideAiSensyAttributionSafely();
        removeCuratoBadgeIfAny();
        setWhatsAppProfileImage();
      }, 500);

      let attempts = 0;
      const interval = setInterval(() => {
        attempts += 1;
        hideAiSensyAttributionSafely();
        removeCuratoBadgeIfAny();
        setWhatsAppProfileImage();
        if (attempts >= 30) clearInterval(interval);
      }, 1000);

      // Use MutationObserver to watch for dynamically added widget elements
      const observer = new MutationObserver(() => {
        hideAiSensyAttributionSafely();
        removeCuratoBadgeIfAny();
        setWhatsAppProfileImage();
      });

      // Observe the entire document for changes
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['src', 'style', 'class'],
      });

      return () => {
        clearTimeout(timeout);
        clearInterval(interval);
        observer.disconnect();
      };
    };

    if (document.readyState === "complete") {
      return kickOff();
    } else {
      const onLoad = () => {
        cleanup = kickOff();
      };
      window.addEventListener("load", onLoad);
      var cleanup: (() => void) | undefined;
      return () => {
        window.removeEventListener("load", onLoad);
        if (cleanup) cleanup();
      };
    }
  }, []);

  return null;
}


