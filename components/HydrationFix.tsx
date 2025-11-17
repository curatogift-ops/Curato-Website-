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
      if (typeof document === 'undefined') return;
      const allElements = document.querySelectorAll('*');
      allElements.forEach((element) => {
        // Remove Bitwarden and similar extension attributes
        element.removeAttribute('bis_skin_checked');
        element.removeAttribute('bis_size');
        element.removeAttribute('bis_id');
        element.removeAttribute('bis_use');
        element.removeAttribute('data-bis-config');
      });
    };

    // Run immediately and also after a short delay to catch late additions
    removeExtensionAttributes();
    const timeout = setTimeout(removeExtensionAttributes, 100);
    
    // Use MutationObserver to catch attributes added after initial cleanup
    if (typeof MutationObserver !== 'undefined') {
      const observer = new MutationObserver(() => {
        removeExtensionAttributes();
      });
      
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['bis_skin_checked', 'bis_size', 'bis_id', 'bis_use', 'data-bis-config'],
        childList: true,
        subtree: true
      });
      
      return () => {
        clearTimeout(timeout);
        observer.disconnect();
      };
    }
    
    return () => clearTimeout(timeout);
  }, []);

  return null;
}

