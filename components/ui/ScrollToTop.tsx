'use client';

import { useState, useEffect } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Check initial scroll position
    toggleVisibility();

    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility, { passive: true });

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Position WhatsApp widget above scroll-to-top button
  useEffect(() => {
    const positionWhatsAppWidget = () => {
      // Find WhatsApp widget elements
      const selectors = [
        '[id*="aisensy"]',
        '[class*="aisensy"]',
        '[id*="widget"]',
        '[class*="widget"]',
        '[id*="chat"]',
        '[class*="chat"]',
      ];

      selectors.forEach((selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el) => {
          const htmlEl = el as HTMLElement;
          // Check if it's a fixed positioned element (likely the widget)
          const computedStyle = window.getComputedStyle(htmlEl);
          if (computedStyle.position === 'fixed' && 
              (computedStyle.bottom !== 'auto' || htmlEl.style.bottom)) {
            // Position it above scroll-to-top button (bottom-24 = 96px, add some space)
            htmlEl.style.bottom = '100px';
            htmlEl.style.zIndex = '40';
          }
        });
      });
    };

    // Run immediately and after a delay to catch dynamically loaded widgets
    positionWhatsAppWidget();
    const interval = setInterval(positionWhatsAppWidget, 1000);
    
    // Also watch for DOM changes
    const observer = new MutationObserver(positionWhatsAppWidget);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 bg-[#d4af37] text-[#3d2817] p-3 rounded-full shadow-lg hover:bg-[#c5a028] hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <ArrowUpIcon className="w-6 h-6" />
    </button>
  );
}

