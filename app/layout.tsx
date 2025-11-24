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
  description:
    "Curated premium hampers filled with the finest selections. Perfect gifts for every occasion including birthdays, anniversaries, Christmas, and corporate events.",
  keywords: [
    "gift hampers",
    "luxury gifts",
    "premium hampers",
    "corporate gifts",
    "christmas hampers",
    "birthday gifts",
  ],
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

  // ✔ Use HTML TAG VERIFICATION (THIS is what will work)
  verification: {
    google: "FHHei7R2K0RMHiMQo_2quPyFwZjhYwq7GStvwwCwbn4",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Favicon and icon configuration
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M4L9QDWH');`,
          }}
        />
        {/* End Google Tag Manager */}

        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />

        {/* Favicon links for better browser support */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />

        {/* -------------------------------------------
           ✔ Your extension cleanup script (unchanged)
        ------------------------------------------- */}
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                function removeAttrs() {
                  var els = document.querySelectorAll('*');
                  els.forEach(el => {
                    el.removeAttribute('bis_skin_checked');
                    el.removeAttribute('bis_id');
                    el.removeAttribute('bis_use');
                    el.removeAttribute('bis_size');
                    el.removeAttribute('data-bis-config');
                  });
                }

                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', removeAttrs);
                } else {
                  removeAttrs();
                }

                setTimeout(removeAttrs, 0);
                setTimeout(removeAttrs, 50);
              })();
            `,
          }}
        />
      </head>

      <body className="antialiased" suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M4L9QDWH"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* End Google Tag Manager (noscript) */}

        {/* Layout Components */}
        <HydrationFix />
        <Header />
        <Breadcrumbs />
        <main suppressHydrationWarning>{children}</main>
        <Footer />
        <ScrollToTop />
        <WhatsAppButton />

        {/* Hotjar Clone Tracking Script */}
        <Script src="https://web-production-dd918.up.railway.app/api/heatmaps/tracking-script/1/" />
      </body>
    </html>
  );
}
