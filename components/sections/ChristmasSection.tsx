'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const christmasHampers = [
  { name: 'Evergreen Magic', image: '/images/christmas/christmas-hamper.png' },
  { name: "Santa's Stocking", image: '/images/christmas/christmas-hamper.png' },
  { name: 'Golden Noel', image: '/images/christmas/christmas-hamper.png' },
  { name: "Santa's Secret", image: '/images/christmas/christmas-hamper.png' },
];

export default function ChristmasSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isInView || isPaused) return;

    const maxIndex = isMobile ? christmasHampers.length - 1 : christmasHampers.length - 4;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) {
          return 0; // Loop back to start
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isInView, isPaused, isMobile]);

  const handlePrev = () => {
    setIsPaused(true);
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
    setTimeout(() => setIsPaused(false), 5000); // Resume after 5 seconds
  };

  const handleNext = () => {
    setIsPaused(true);
    const maxIndex = isMobile ? christmasHampers.length - 1 : christmasHampers.length - 4;
    setCurrentIndex((prev) => (prev >= maxIndex ? prev : prev + 1));
    setTimeout(() => setIsPaused(false), 5000); // Resume after 5 seconds
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      handlePrev();
    }
    setTimeout(() => setIsPaused(false), 5000); // Resume after 5 seconds
  };

  const maxIndex = isMobile ? christmasHampers.length - 1 : christmasHampers.length - 4;

  return (
    <section ref={sectionRef} className="py-20 bg-black">
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
              disabled={currentIndex >= maxIndex}
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {christmasHampers.map((hamper, index) => (
            <div
              key={index}
              className="cursor-pointer hover:-translate-y-1 transition-transform group"
            >
              <div className="relative w-full h-[250px] rounded-lg overflow-hidden bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
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

        {/* Mobile Carousel View */}
        <div 
          className="md:hidden relative overflow-hidden"
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {christmasHampers.map((hamper, index) => (
              <div
                key={index}
                className="min-w-full px-2"
              >
                <div className="relative w-full h-[300px] rounded-lg overflow-hidden bg-black">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={hamper.image}
                    alt={hamper.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <h3 className="text-white text-lg font-medium text-center mt-4">
                  {hamper.name}
                </h3>
              </div>
            ))}
          </div>
          
          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {christmasHampers.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsPaused(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsPaused(false), 5000);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-[#d4af37] w-8' 
                    : 'bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
