import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Year Celebration Hamper - Champagne & Gourmet Treats | CuratoGift',
  description: 'Ring in the new year with style! Premium sparkling wine, gourmet cheese, artisan chocolates, and party essentials. ₹3,299',
  keywords: 'new year hamper, celebration gifts, champagne hamper, gourmet gifts, party hamper',
  openGraph: {
    title: 'New Year Celebration Hamper - Champagne & Gourmet Treats',
    description: 'Ring in the new year with premium sparkling wine, gourmet snacks, and festive treats.',
    images: ['/images/new-year-celebration-hamper.jpg'],
  },
};

export default function NewYearCelebrationHamperPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "New Year Celebration Hamper",
    "description": "Ring in the new year with premium sparkling wine, gourmet cheese, artisan chocolates, and party essentials.",
    "image": "https://www.curatogift.com/images/new-year-celebration-hamper.jpg",
    "offers": {
      "@type": "Offer",
      "price": "3299",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "url": "https://www.curatogift.com/products/new-year-celebration-hamper"
    },
    "brand": {
      "@type": "Brand",
      "name": "CuratoGift"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <div className="min-h-screen bg-white py-20">
      <div className="max-w-[1400px] mx-auto px-5">
        <nav className="text-sm mb-8">
          <Link href="/" className="text-[#8B7355] hover:text-[#3B2E2A]">Home</Link>
          <span className="mx-2 text-[#8B7355]">/</span>
          <Link href="/products" className="text-[#8B7355] hover:text-[#3B2E2A]">Products</Link>
          <span className="mx-2 text-[#8B7355]">/</span>
          <span className="text-[#3B2E2A]">New Year Celebration Hamper</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="relative aspect-square bg-[#F5F1ED] rounded-lg overflow-hidden">
            <Image
              src="/images/new-year-celebration-hamper.jpg"
              alt="New Year Celebration Hamper"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#3B2E2A] mb-4">
              New Year Celebration Hamper
            </h1>
            <p className="text-2xl text-[#8B7355] mb-6">₹3,299</p>
            
            <p className="text-lg text-[#5C4A42] mb-8 leading-relaxed">
              Ring in the new year with style! Our celebration hamper includes premium champagne, gourmet snacks, party essentials, and festive treats to make your New Year's Eve unforgettable.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#3B2E2A] mb-4">What's Inside:</h3>
              <ul className="space-y-2 text-[#5C4A42]">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Premium sparkling wine (750ml)
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Gourmet cheese and crackers
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Artisan chocolates (200g)
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Party poppers and confetti
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Elegant gift basket with New Year card
                </li>
              </ul>
            </div>

            <button className="w-full md:w-auto bg-[#3B2E2A] text-white px-12 py-4 rounded-full hover:bg-[#2A1F1C] transition-colors text-lg font-medium">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
