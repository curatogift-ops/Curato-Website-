'use client';

import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const giftCategories = [
  { name: 'For Him & Her', image: '/images/categories/gift-1.png', href: '/for-him-her' },
  { name: 'Tea & Coffee', image: '/images/categories/gift-2.png', href: '/products/tea-coffee-connoisseur-hamper' },
  { name: 'Wine Hampers', image: '/images/categories/gift-3.png', href: '/products' },
  { name: 'Chocolate Hampers', image: '/images/categories/gift-4.png', href: '/products' },
  { name: 'Halal Hampers', image: '/images/categories/gift-1.png', href: '/products' },
  { name: 'Bath & Beauty', image: '/images/categories/gift-2.png', href: '/products' },
  { name: 'Fruit Hampers', image: '/images/categories/gift-3.png', href: '/products' },
];

export default function GiftsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
          Gifts for Everyone
        </h2>

        {/* Responsive grid: smaller cards and denser layout on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {giftCategories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-white shadow-sm ring-1 ring-black/5 group focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              aria-label={`View ${category.name} products`}
            >
              {/* Smaller, responsive height */}
              <div className="relative w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] xl:h-[260px] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              {/* Softer gradient overlay and compact text for mobile */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-3 sm:p-4 flex justify-between items-center z-10">
                <span className="text-white text-sm sm:text-base font-medium">{category.name}</span>
                <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
