import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import BrandingOverride from "@/components/BrandingOverride";

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
      <body className="antialiased" suppressHydrationWarning>
        <Header />
        <Breadcrumbs />
        <main suppressHydrationWarning>{children}</main>
        <Footer />
        <BrandingOverride />
        <script
          type="text/javascript"
          src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
          id="aisensy-wa-widget"
          widget-id="aaa6ik"
        ></script>
      </body>
    </html>
  );
}
