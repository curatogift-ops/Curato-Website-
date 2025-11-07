'use client';

import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const christmasHampers = [
  { name: 'Evergreen Magic', image: '/images/christmas/christmas-hamper.png' },
  { name: "Santa's Stocking", image: '/images/christmas/christmas-hamper.png' },
  { name: 'Golden Noel', image: '/images/christmas/christmas-hamper.png' },
  { name: "Santa's Secret", image: '/images/christmas/christmas-hamper.png' },
];

export default function ChristmasSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= christmasHampers.length - 4 ? prev : prev + 1));
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-[1400px] mx-auto px-5">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Christmas Hampers
          </h2>
          <div className="flex gap-2.5">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-[#333] text-white flex items-center justify-center hover:bg-[#d4af37] hover:text-[#3d2817] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous hamper"
              disabled={currentIndex === 0}
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-[#333] text-white flex items-center justify-center hover:bg-[#d4af37] hover:text-[#3d2817] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next hamper"
              disabled={currentIndex >= christmasHampers.length - 4}
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {christmasHampers.map((hamper, index) => (
            <div
              key={index}
              className="cursor-pointer hover:-translate-y-1 transition-transform group"
            >
              <div className="relative w-full h-[250px] rounded-lg overflow-hidden bg-black">
                <img
                  src={hamper.image}
                  alt={hamper.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <h3 className="text-white text-base font-medium text-center mt-4">
                {hamper.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
