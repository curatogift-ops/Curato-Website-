import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Healthy & Organic Hamper - 100% Organic Wellness Gifts | CuratoGift',
  description: 'Gift wellness with our 100% organic hamper. Organic honey, mixed nuts, sugar-free dark chocolate, and green tea. ₹2,299',
  keywords: 'organic hamper, healthy gifts, organic honey, sugar-free chocolate, wellness hamper',
  openGraph: {
    title: 'Healthy & Organic Hamper - 100% Organic Wellness Gifts',
    description: 'Gift wellness with certified organic products, sugar-free treats, and natural snacks.',
    images: ['/images/healthy-organic-hamper.webp'],
  },
};

export default function HealthyOrganicHamperPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Healthy & Organic Hamper",
    "description": "Gift wellness with certified organic products, sugar-free treats, superfoods, and natural snacks.",
    "image": "https://www.curatogift.com/images/healthy-organic-hamper.webp",
    "offers": {
      "@type": "Offer",
      "price": "2299",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "url": "https://www.curatogift.com/products/healthy-organic-hamper"
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
              src="/images/healthy-organic-hamper.webp"
              alt="Healthy & Organic Hamper"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#3B2E2A] mb-4">
              Healthy & Organic Hamper
            </h1>
            <p className="text-2xl text-[#8B7355] mb-6">₹2,299</p>
            <span className="inline-block bg-green-600 text-white px-4 py-1 rounded-full text-sm mb-6">100% Organic</span>
            
            <p className="text-lg text-[#5C4A42] mb-8 leading-relaxed">
              Gift wellness with our Healthy & Organic Hamper. Featuring certified organic products, sugar-free treats, superfoods, and natural snacks, this hamper is perfect for health-conscious individuals.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#3B2E2A] mb-4">What's Inside:</h3>
              <ul className="space-y-2 text-[#5C4A42]">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Organic honey (250g)
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Mixed nuts and seeds (300g)
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Sugar-free dark chocolate
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Organic green tea
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Eco-friendly packaging
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
