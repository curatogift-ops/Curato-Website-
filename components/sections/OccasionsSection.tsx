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
    <section id="occasions" className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-8">
          Shop by Occasions
        </h2>

        {/* Non-box design: circular avatars with label and arrow */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {occasions.map((occasion, index) => (
            <div key={index} className="group flex flex-col items-center">
              <div className="relative w-full aspect-square max-w-[170px] sm:max-w-[200px] lg:max-w-[220px] rounded-full overflow-hidden ring-1 ring-black/10 bg-[#f7f7f7] transition-transform duration-300 group-hover:scale-105 group-hover:ring-[#d4af37] mx-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={occasion.image}
                  alt={`${occasion.name} Hampers`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-sm sm:text-base font-medium text-[#2d2817]">
                  {occasion.name}
                </span>
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#2d2817] text-white transition-colors group-hover:bg-[#d4af37] group-hover:text-[#2d2817]">
                  <ArrowRightIcon className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
