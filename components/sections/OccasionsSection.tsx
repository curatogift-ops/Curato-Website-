'use client';

import { ArrowRightIcon } from '@heroicons/react/24/outline';

const occasions = [
  { name: 'Birthday', image: '/images/categories/gift-4.png' },
  { name: 'Anniversary', image: '/images/categories/gift-1.png' },
  { name: 'House Warming', image: '/images/categories/gift-3.png' },
  { name: 'Get Well Soon', image: '/images/categories/gift-2.png' },
];

export default function OccasionsSection() {
  return (
    <section id="occasions" className="py-20 bg-black">
      <div className="max-w-[1400px] mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-10">
          Shop by Occasions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {occasions.map((occasion, index) => (
            <div
              key={index}
              className="relative h-[400px] overflow-hidden cursor-pointer group"
            >
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={occasion.image}
                  alt={`${occasion.name} Hampers`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 flex justify-between items-center z-10 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-white text-lg font-medium">{occasion.name}</span>
                <ArrowRightIcon className="w-5 h-5 text-white transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
