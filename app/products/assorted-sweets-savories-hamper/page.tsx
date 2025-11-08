import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Assorted Sweets & Savories Hamper - Indian Treats | CuratoGift',
  description: 'Perfect for any occasion! Traditional Indian sweets, namkeen mix, roasted nuts, and savory snacks. ₹1,799',
  keywords: 'indian sweets hamper, namkeen, savories, traditional sweets, indian snacks hamper',
  openGraph: {
    title: 'Assorted Sweets & Savories Hamper - Indian Treats',
    description: 'Traditional Indian sweets combined with savory snacks for any occasion.',
    images: ['/images/assorted-sweets-savories-hamper.webp'],
  },
};

export default function AssortedSweetsSavoriesHamperPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Assorted Sweets & Savories Hamper",
    "description": "Traditional Indian sweets combined with savory snacks. Perfect for any occasion.",
    "image": "https://www.curatogift.com/images/assorted-sweets-savories-hamper.webp",
    "offers": {
      "@type": "Offer",
      "price": "1799",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "url": "https://www.curatogift.com/products/assorted-sweets-savories-hamper"
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
              src="/images/assorted-sweets-savories-hamper.webp"
              alt="Assorted Sweets & Savories Hamper"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#3B2E2A] mb-4">
              Assorted Sweets & Savories Hamper
            </h1>
            <p className="text-2xl text-[#8B7355] mb-6">₹1,799</p>
            
            <p className="text-lg text-[#5C4A42] mb-8 leading-relaxed">
              Perfect for any occasion! This versatile hamper combines traditional Indian sweets with savory snacks, offering a delightful mix of flavors that everyone will love.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#3B2E2A] mb-4">What's Inside:</h3>
              <ul className="space-y-2 text-[#5C4A42]">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Traditional Indian sweets (400g)
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Namkeen mix (300g)
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Roasted nuts selection (200g)
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Chakli and murukku
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Decorative gift box
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
