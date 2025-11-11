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

export default function BrandingOverride() {
  useEffect(() => {
    // Ensure we run after page load to avoid any hydration race conditions
    const kickOff = () => {
      // Wait a tick for the widget script to initialize, then run a few times
      const timeout = setTimeout(() => {
        hideAiSensyAttributionSafely();
        removeCuratoBadgeIfAny();
      }, 500);

      let attempts = 0;
      const interval = setInterval(() => {
        attempts += 1;
        hideAiSensyAttributionSafely();
        removeCuratoBadgeIfAny();
        if (attempts >= 15) clearInterval(interval);
      }, 1000);

      return () => {
        clearTimeout(timeout);
        clearInterval(interval);
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


