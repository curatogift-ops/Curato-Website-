import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Diwali Box - Customizable Business Gifts | CuratoGift',
  description: 'Strengthen business relationships with customizable Corporate Diwali Boxes. Add your logo, choose products, bulk discounts available. ₹1,999 - ₹5,999',
  keywords: 'corporate diwali gifts, customizable hampers, business gifts, branded diwali boxes, bulk corporate gifts',
  openGraph: {
    title: 'Corporate Diwali Box - Customizable Business Gifts',
    description: 'Customizable Corporate Diwali Boxes with your company logo. Perfect for clients, employees, and partners.',
    images: ['/images/corporate-diwali-box.jpg'],
  },
};

export default function CorporateDiwaliBoxPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Corporate Diwali Box",
    "description": "Customizable Corporate Diwali Box with company logo branding. Perfect for clients, employees, and partners.",
    "image": "https://www.curatogift.com/images/corporate-diwali-box.jpg",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "1999",
      "highPrice": "5999",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "url": "https://www.curatogift.com/products/corporate-diwali-box"
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
          <span className="text-[#3B2E2A]">Corporate Diwali Box</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="relative aspect-square bg-[#F5F1ED] rounded-lg overflow-hidden">
            <Image
              src="/images/corporate-diwali-box.jpg"
              alt="Corporate Diwali Box"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#3B2E2A] mb-4">
              Corporate Diwali Box
            </h1>
            <p className="text-2xl text-[#8B7355] mb-6">₹1,999 - ₹5,999</p>
            <span className="inline-block bg-[#D4AF37] text-white px-4 py-1 rounded-full text-sm mb-6">Customizable</span>
            
            <p className="text-lg text-[#5C4A42] mb-8 leading-relaxed">
              Strengthen business relationships with our customizable Corporate Diwali Box. Add your company logo, choose from various product combinations, and create a memorable gift for clients, employees, and partners.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#3B2E2A] mb-4">Customization Options:</h3>
              <ul className="space-y-2 text-[#5C4A42]">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Company logo branding on box
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Choice of sweets, dry fruits, or chocolates
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Personalized greeting cards
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Bulk order discounts available
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✦</span>
                  Professional packaging with your brand colors
                </li>
              </ul>
            </div>

            <button className="w-full md:w-auto bg-[#3B2E2A] text-white px-12 py-4 rounded-full hover:bg-[#2A1F1C] transition-colors text-lg font-medium">
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
