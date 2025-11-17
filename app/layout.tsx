import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ScrollToTop from "@/components/ui/ScrollToTop";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import HydrationFix from "@/components/HydrationFix";

export const metadata: Metadata = {
  title: "Curato Gift - Luxury Gift Hampers & Baskets",
  description: "Curated premium hampers filled with the finest selections. Perfect gifts for every occasion including birthdays, anniversaries, Christmas, and corporate events.",
  keywords: ["gift hampers", "luxury gifts", "premium hampers", "corporate gifts", "christmas hampers", "birthday gifts"],
  authors: [{ name: "Curato Gift" }],
  openGraph: {
    title: "Curato Gift - Luxury Gift Hampers & Baskets",
    description: "Curated premium hampers filled with the finest selections.",
    type: "website",
    locale: "en_US",
    siteName: "Curato Gift",
  },
  twitter: {
    card: "summary_large_image",
    title: "Curato Gift - Luxury Gift Hampers & Baskets",
    description: "Curated premium hampers filled with the finest selections.",
  },
  verification: {
    google: "FHHei7R2K0RMHiMQo_2quPyFwZjhYwq7GStvwwCwbn4",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager - Must be as high as possible in <head> */}
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M4L9QDWH');
            `,
          }}
        />
        {/* Prevent iOS auto-detection of phone numbers, emails, etc. which can cause hydration issues */}
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
        {/* Remove browser extension attributes before React hydrates */}
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Remove extension attributes immediately to prevent hydration mismatches
                function removeExtensionAttributes() {
                  if (typeof document === 'undefined') return;
                  var allElements = document.querySelectorAll('*');
                  for (var i = 0; i < allElements.length; i++) {
                    var el = allElements[i];
                    el.removeAttribute('bis_skin_checked');
                    el.removeAttribute('bis_size');
                    el.removeAttribute('bis_id');
                    el.removeAttribute('bis_use');
                    el.removeAttribute('data-bis-config');
                  }
                }
                
                // Run immediately if DOM is ready, otherwise wait
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', removeExtensionAttributes);
                } else {
                  removeExtensionAttributes();
                }
                
                // Use MutationObserver to catch attributes added after initial cleanup
                if (typeof MutationObserver !== 'undefined') {
                  var observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                      if (mutation.type === 'attributes') {
                        var target = mutation.target;
                        if (target.removeAttribute) {
                          target.removeAttribute('bis_skin_checked');
                          target.removeAttribute('bis_size');
                          target.removeAttribute('bis_id');
                          target.removeAttribute('bis_use');
                          target.removeAttribute('data-bis-config');
                        }
                      } else if (mutation.type === 'childList') {
                        // New nodes added, clean them
                        mutation.addedNodes.forEach(function(node) {
                          if (node.nodeType === 1) { // Element node
                            if (node.removeAttribute) {
                              node.removeAttribute('bis_skin_checked');
                              node.removeAttribute('bis_size');
                              node.removeAttribute('bis_id');
                              node.removeAttribute('bis_use');
                              node.removeAttribute('data-bis-config');
                            }
                            // Also clean children
                            var children = node.querySelectorAll ? node.querySelectorAll('*') : [];
                            for (var j = 0; j < children.length; j++) {
                              children[j].removeAttribute('bis_skin_checked');
                              children[j].removeAttribute('bis_size');
                              children[j].removeAttribute('bis_id');
                              children[j].removeAttribute('bis_use');
                              children[j].removeAttribute('data-bis-config');
                            }
                          }
                        });
                      }
                    });
                  });
                  
                  // Start observing when DOM is ready
                  var startObserving = function() {
                    observer.observe(document.documentElement, {
                      attributes: true,
                      attributeFilter: ['bis_skin_checked', 'bis_size', 'bis_id', 'bis_use', 'data-bis-config'],
                      childList: true,
                      subtree: true
                    });
                  };
                  
                  if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', startObserving);
                  } else {
                    startObserving();
                  }
                }
                
                // Also run after a short delay to catch late additions
                setTimeout(removeExtensionAttributes, 0);
                setTimeout(removeExtensionAttributes, 50);
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {/* Google Tag Manager (noscript) - Must be immediately after opening <body> tag */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M4L9QDWH"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LMV7TQ1VZ9"
          strategy="afterInteractive"
        />
        <Script
          id="ga-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LMV7TQ1VZ9');
            `,
          }}
        />

        <HydrationFix />
        <Header />
        <Breadcrumbs />
        <main suppressHydrationWarning>{children}</main>
        <Footer />
        <ScrollToTop />
        <WhatsAppButton />
      </body>
    </html>
  );
}
