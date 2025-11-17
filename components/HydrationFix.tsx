'use client';

import { useEffect } from 'react';

/**
 * HydrationFix component removes browser extension attributes
 * that are added before React hydrates, preventing hydration mismatches.
 * 
 * This is specifically for extensions like Bitwarden that add attributes
 * like bis_skin_checked, bis_size, bis_id to DOM elements.
 */
export default function HydrationFix() {
  useEffect(() => {
    // Remove extension attributes from all elements
    const removeExtensionAttributes = () => {
      const allElements = document.querySelectorAll('*');
      allElements.forEach((element) => {
        // Remove Bitwarden and similar extension attributes
        element.removeAttribute('bis_skin_checked');
        element.removeAttribute('bis_size');
        element.removeAttribute('bis_id');
      });
    };

    // Run immediately and also after a short delay to catch late additions
    removeExtensionAttributes();
    const timeout = setTimeout(removeExtensionAttributes, 100);
    
    return () => clearTimeout(timeout);
  }, []);

  return null;
}

