import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luxury Diwali Hamper - Premium Chocolates & Silver Diyas | CuratoGift',
  description: 'Experience opulence with our Luxury Diwali Hamper. Premium imported chocolates, exotic dry fruits, silver-plated diyas, and gourmet treats. ₹4,999',
  keywords: 'luxury diwali hamper, premium diwali gifts, imported chocolates, silver diyas, exotic dry fruits',
  openGraph: {
    title: 'Luxury Diwali Hamper - Premium Chocolates & Silver Diyas',
    description: 'Experience opulence this Diwali with premium imported chocolates, exotic dry fruits, and silver-plated diyas.',
    images: ['/images/luxury-diwali-hamper.jpg'],
  },
};

export default function LuxuryDiwaliHamperPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Luxury Diwali Hamper",
    "description": "Experience opulence this Diwali with premium imported chocolates, exotic dry fruits, silver-plated diyas, and gourmet treats.",
    "image": "https://www.curatogift.com/images/luxury-diwali-hamper.jpg",
    "offers": {
      "@type": "Offer",
      "price": "4999",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "url": "https://www.curatogift.com/products/luxury-diwali-hamper"
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
          <span className="text-[#3B2E2A]">Luxury Diwali Hamper</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="relative aspect-square bg-[#F5F1ED] rounded-lg overflow-hidden">
            <Image
              src="/images/luxury-diwali-hamper.jpg"
              alt="Luxury Diwali Hamper"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#3B2E2A] mb-4">
              Luxury Diwali Hamper
            </h1>
            <p className="text-2xl text-[#8B7355] mb-6">₹4,999</p>
            
            <p className="text-lg text-[#5C4A42] mb-8 leading-relaxed">
              Experience opulence this Diwali with our Luxury Hamper. Featuring premium imported chocolates, exotic dry fruits, silver-plated diyas, and gourmet treats, this hamper is perfect for making a grand impression.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#3B2E2A] mb-4">What's Inside:</h3>
              <ul className="space-y-2 text-[#5C4A42]">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Premium imported chocolates (400g)
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Exotic dry fruits collection (500g)
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Silver-plated diyas (set of 6)
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Gourmet sweets selection
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Premium gift box with personalized card
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
