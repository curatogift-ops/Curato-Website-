import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Classic Diwali Hamper - Traditional Sweets & Dry Fruits | CuratoGift',
  description: 'Celebrate Diwali with our Classic Hamper featuring traditional sweets, premium dry fruits, decorative diyas, and festive treats. Perfect for gifting. ₹2,499',
  keywords: 'diwali hamper, diwali gifts, traditional sweets, dry fruits, diwali diyas, festival gifts',
  openGraph: {
    title: 'Classic Diwali Hamper - Traditional Sweets & Dry Fruits',
    description: 'Celebrate the festival of lights with our Classic Diwali Hamper. Traditional sweets, premium dry fruits, and decorative diyas.',
    images: ['/images/classic-diwali-hamper.jpg'],
  },
};

export default function ClassicDiwaliHamperPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Classic Diwali Hamper",
    "description": "Celebrate the festival of lights with our Classic Diwali Hamper. Traditional sweets, premium dry fruits, decorative diyas, and festive treats.",
    "image": "https://www.curatogift.com/images/classic-diwali-hamper.jpg",
    "offers": {
      "@type": "Offer",
      "price": "2499",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "url": "https://www.curatogift.com/products/classic-diwali-hamper"
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
          <span className="text-[#3B2E2A]">Classic Diwali Hamper</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="relative aspect-square bg-[#F5F1ED] rounded-lg overflow-hidden">
            <Image
              src="/images/classic-diwali-hamper.jpg"
              alt="Classic Diwali Hamper"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#3B2E2A] mb-4">
              Classic Diwali Hamper
            </h1>
            <p className="text-2xl text-[#8B7355] mb-6">₹2,499</p>
            
            <p className="text-lg text-[#5C4A42] mb-8 leading-relaxed">
              Celebrate the festival of lights with our Classic Diwali Hamper. This thoughtfully curated collection includes traditional sweets, premium dry fruits, decorative diyas, and festive treats that capture the essence of Diwali celebrations.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#3B2E2A] mb-4">What's Inside:</h3>
              <ul className="space-y-2 text-[#5C4A42]">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Assorted traditional sweets (500g)
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Premium dry fruits mix (250g)
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Decorative diyas (set of 4)
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Festive greeting card
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Elegant gift packaging
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
