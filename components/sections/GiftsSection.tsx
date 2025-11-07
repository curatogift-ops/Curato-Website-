'use client';

import { ArrowRightIcon } from '@heroicons/react/24/outline';

const giftCategories = [
  { name: 'For Him & Her', image: '/images/categories/gift-1.png' },
  { name: 'Tea & Coffee', image: '/images/categories/gift-2.png' },
  { name: 'Wine Hampers', image: '/images/categories/gift-3.png' },
  { name: 'Chocolate Hampers', image: '/images/categories/gift-4.png' },
  { name: 'Halal Hampers', image: '/images/categories/gift-1.png' },
  { name: 'Bath & Beauty', image: '/images/categories/gift-2.png' },
  { name: 'Fruit Hampers', image: '/images/categories/gift-3.png' },
];

export default function GiftsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-10">
          Gifts for Everyone
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {giftCategories.map((category, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-white shadow-md group"
            >
              <div className="relative w-full h-[350px] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 flex justify-between items-center z-10">
                <span className="text-white text-lg font-medium">{category.name}</span>
                <ArrowRightIcon className="w-5 h-5 text-white transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
