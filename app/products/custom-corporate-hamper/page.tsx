import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Corporate Hamper - Fully Customizable Business Gifts | CuratoGift',
  description: 'Build your perfect corporate gift! Choose products, add branding, personalize messages. Bulk pricing available. Starting at ₹1,499',
  keywords: 'custom corporate hamper, personalized business gifts, branded hampers, bulk corporate gifts',
  openGraph: {
    title: 'Custom Corporate Hamper - Fully Customizable Business Gifts',
    description: 'Build your perfect corporate gift with complete customization options and branding.',
    images: ['/images/custom-corporate-hamper.jpg'],
  },
};

export default function CustomCorporateHamperPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Custom Corporate Hamper",
    "description": "Build your perfect corporate gift with complete customization options, branding, and personalized messages.",
    "image": "https://www.curatogift.com/images/custom-corporate-hamper.jpg",
    "offers": {
      "@type": "Offer",
      "price": "1499",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "url": "https://www.curatogift.com/products/custom-corporate-hamper"
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
          <span className="text-[#3B2E2A]">Custom Corporate Hamper</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="relative aspect-square bg-[#F5F1ED] rounded-lg overflow-hidden">
            <Image
              src="/images/custom-corporate-hamper.jpg"
              alt="Custom Corporate Hamper"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#3B2E2A] mb-4">
              Custom Corporate Hamper
            </h1>
            <p className="text-2xl text-[#8B7355] mb-6">Starting at ₹1,499</p>
            <span className="inline-block bg-[#D4AF37] text-white px-4 py-1 rounded-full text-sm mb-6">Fully Customizable</span>
            
            <p className="text-lg text-[#5C4A42] mb-8 leading-relaxed">
              Build your perfect corporate gift! Choose every element from products to packaging, add your branding, and create a unique hamper that perfectly represents your company values.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#3B2E2A] mb-4">Customization Options:</h3>
              <ul className="space-y-2 text-[#5C4A42]">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Choose your products (sweets, snacks, beverages, etc.)
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Custom branding and logo placement
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Personalized messages for each recipient
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Select packaging style and colors
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Bulk pricing for large orders (50+ units)
                </li>
              </ul>
            </div>

            <button className="w-full md:w-auto bg-[#3B2E2A] text-white px-12 py-4 rounded-full hover:bg-[#2A1F1C] transition-colors text-lg font-medium">
              Start Customizing
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
