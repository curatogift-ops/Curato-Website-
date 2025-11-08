import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mini Thank You Hamper - Small Appreciation Gifts | CuratoGift',
  description: 'Express gratitude with our Mini Thank You Hamper. Artisan chocolates, premium tea, gourmet cookies, and personalized card. ₹799',
  keywords: 'thank you gifts, appreciation hamper, mini hamper, small gifts, gratitude gifts',
  openGraph: {
    title: 'Mini Thank You Hamper - Small Appreciation Gifts',
    description: 'Small in size but big on thoughtfulness. Perfect for showing appreciation.',
    images: ['/images/mini-thank-you-hamper.jpg'],
  },
};

export default function MiniThankYouHamperPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Mini Thank You Hamper",
    "description": "Express gratitude with our charming Mini Thank You Hamper. Small in size but big on thoughtfulness.",
    "image": "https://www.curatogift.com/images/mini-thank-you-hamper.jpg",
    "offers": {
      "@type": "Offer",
      "price": "799",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "url": "https://www.curatogift.com/products/mini-thank-you-hamper"
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
          <span className="text-[#3B2E2A]">Mini Thank You Hamper</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="relative aspect-square bg-[#F5F1ED] rounded-lg overflow-hidden">
            <Image
              src="/images/mini-thank-you-hamper.jpg"
              alt="Mini Thank You Hamper"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#3B2E2A] mb-4">
              Mini Thank You Hamper
            </h1>
            <p className="text-2xl text-[#8B7355] mb-6">₹799</p>
            
            <p className="text-lg text-[#5C4A42] mb-8 leading-relaxed">
              Express your gratitude with our charming Mini Thank You Hamper. Small in size but big on thoughtfulness, perfect for showing appreciation to colleagues, friends, or service providers.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#3B2E2A] mb-4">What's Inside:</h3>
              <ul className="space-y-2 text-[#5C4A42]">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Artisan chocolates (100g)
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Premium tea bags (5 pieces)
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Gourmet cookies
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Personalized thank you card
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Cute gift box with ribbon
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
