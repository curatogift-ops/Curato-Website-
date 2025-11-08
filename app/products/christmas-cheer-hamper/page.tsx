import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Christmas Cheer Hamper - Festive Cookies & Chocolates | CuratoGift',
  description: 'Spread holiday joy with our Christmas Cheer Hamper. Festive cookies, Belgian chocolates, mulled wine spices, and seasonal treats. ₹2,799',
  keywords: 'christmas hamper, festive gifts, christmas cookies, belgian chocolates, holiday hamper',
  openGraph: {
    title: 'Christmas Cheer Hamper - Festive Cookies & Chocolates',
    description: 'Spread holiday joy with festive cookies, gourmet chocolates, and seasonal treats.',
    images: ['/images/christmas-cheer-hamper.webp'],
  },
};

export default function ChristmasCheerHamperPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Christmas Cheer Hamper",
    "description": "Spread holiday joy with festive cookies, Belgian chocolates, mulled wine spices, and seasonal treats.",
    "image": "https://www.curatogift.com/images/christmas-cheer-hamper.webp",
    "offers": {
      "@type": "Offer",
      "price": "2799",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "url": "https://www.curatogift.com/products/christmas-cheer-hamper"
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
        

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="relative aspect-square bg-[#F5F1ED] rounded-lg overflow-hidden">
            <Image
              src="/images/christmas-cheer-hamper.webp"
              alt="Christmas Cheer Hamper"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#3B2E2A] mb-4">
              Christmas Cheer Hamper
            </h1>
            <p className="text-2xl text-[#8B7355] mb-6">₹2,799</p>
            
            <p className="text-lg text-[#5C4A42] mb-8 leading-relaxed">
              Spread holiday joy with our Christmas Cheer Hamper. Filled with festive cookies, gourmet chocolates, mulled wine spices, and seasonal treats, this hamper brings the warmth of Christmas to your loved ones.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#3B2E2A] mb-4">What's Inside:</h3>
              <ul className="space-y-2 text-[#5C4A42]">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Festive cookies assortment (300g)
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Premium Belgian chocolates (250g)
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Mulled wine spice mix
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Christmas ornament
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Festive gift wrapping with ribbon
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
