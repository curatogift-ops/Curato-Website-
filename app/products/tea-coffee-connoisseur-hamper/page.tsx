import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tea & Coffee Connoisseur Hamper - Premium Beverages | CuratoGift',
  description: 'For beverage enthusiasts! Premium teas, artisan coffee beans, gourmet cookies, and ceramic mug. ₹2,599',
  keywords: 'tea hamper, coffee hamper, premium tea, artisan coffee, beverage gifts',
  openGraph: {
    title: 'Tea & Coffee Connoisseur Hamper - Premium Beverages',
    description: 'Curated collection of premium teas, artisan coffees, and complementary treats.',
    images: ['/images/tea-coffee-connoisseur-hamper.jpg'],
  },
};

export default function TeaCoffeeConnoisseurHamperPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Tea & Coffee Connoisseur Hamper",
    "description": "Curated collection of premium teas, artisan coffees, and complementary treats for beverage enthusiasts.",
    "image": "https://www.curatogift.com/images/tea-coffee-connoisseur-hamper.jpg",
    "offers": {
      "@type": "Offer",
      "price": "2599",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "url": "https://www.curatogift.com/products/tea-coffee-connoisseur-hamper"
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
          <span className="text-[#3B2E2A]">Tea & Coffee Connoisseur Hamper</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="relative aspect-square bg-[#F5F1ED] rounded-lg overflow-hidden">
            <Image
              src="/images/tea-coffee-connoisseur-hamper.jpg"
              alt="Tea & Coffee Connoisseur Hamper"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#3B2E2A] mb-4">
              Tea & Coffee Connoisseur Hamper
            </h1>
            <p className="text-2xl text-[#8B7355] mb-6">₹2,599</p>
            
            <p className="text-lg text-[#5C4A42] mb-8 leading-relaxed">
              For the beverage enthusiast! This curated collection features premium teas, artisan coffees, and complementary treats that will delight any tea or coffee lover.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#3B2E2A] mb-4">What's Inside:</h3>
              <ul className="space-y-2 text-[#5C4A42]">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Assorted premium teas (5 varieties)
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Artisan coffee beans (250g)
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Gourmet cookies (200g)
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Honey sticks and sugar cubes
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Elegant ceramic mug
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
