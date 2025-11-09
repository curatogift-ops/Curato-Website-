'use client';

import { useState, useEffect } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const testimonials = [
  {
    name: 'coen groenewegen',
    time: '5 hours ago',
    rating: 5,
    text: 'Simply stunning, We went there early grabs some pizza en snacks and just sat there, waited to be dark, B E A',
    initials: 'CG',
    color: 'bg-blue-500',
  },
  {
    name: 'Nathan Martin',
    time: '8 hours ago',
    rating: 5,
    text: 'Une vue sublime et un lieu intéressant à visiter. Cependant je vous conseille de vous stationner au parking gratuit',
    initials: 'NM',
    color: 'bg-green-500',
  },
  {
    name: 'Sarah Johnson',
    time: '12 hours ago',
    rating: 5,
    text: 'Amazing experience! The hampers are beautifully curated and the quality is exceptional. Highly recommend!',
    initials: 'SJ',
    color: 'bg-purple-500',
  },
  {
    name: 'Michael Chen',
    time: '1 day ago',
    rating: 5,
    text: 'Perfect gift for any occasion. The presentation is stunning and the products are top quality. Will definitely order again!',
    initials: 'MC',
    color: 'bg-orange-500',
  },
];

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-12 md:py-14 bg-white" suppressHydrationWarning>
      <div className="max-w-[1200px] mx-auto px-5" suppressHydrationWarning>
        <h2 className="text-2xl md:text-3xl font-bold text-[#3B2E2A] text-center mb-6 uppercase tracking-wider">
          What our customers say
        </h2>

        {/* Google Reviews Block */}
        <div className="bg-[#f5f5f5] rounded-lg p-4 md:p-5 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-1 text-xl md:text-2xl font-medium">
                <span className="text-[#4285f4]">G</span>
                <span className="text-[#ea4335]">o</span>
                <span className="text-[#fbbc05]">o</span>
                <span className="text-[#4285f4]">g</span>
                <span className="text-[#34a853]">l</span>
                <span className="text-[#ea4335]">e</span>
                <span className="text-[#3B2E2A] ml-2">Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl md:text-3xl font-semibold text-[#3B2E2A]">4.7</span>
                <div className="flex gap-0.5 text-[#fbbc05] text-base md:text-lg">
                  ★★★★<span className="opacity-50">★</span>
                </div>
                <span className="text-[#888] text-sm md:text-base">(13,839)</span>
              </div>
            </div>
            <button className="bg-[#4285f4] text-white px-5 py-2.5 rounded-md text-sm md:text-base font-medium hover:bg-[#357ae8] transition-colors">
              Review us on Google
            </button>
          </div>
        </div>

        {/* Testimonials Carousel - One at a time */}
        <div className="relative mb-6">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full px-2"
                >
                  <div className="bg-[#f5f5f5] rounded-lg p-4 md:p-5 shadow-sm max-w-2xl mx-auto">
                    <div className="flex gap-3 mb-2.5">
                      <div className={`w-10 h-10 md:w-11 md:h-11 rounded-full flex-shrink-0 ${testimonial.color} flex items-center justify-center text-white font-bold`}>
                        {testimonial.initials}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className="text-sm md:text-base font-semibold text-[#3B2E2A]">
                            {testimonial.name}
                          </span>
                          <span className="text-[#4285f4]">✓</span>
                        </div>
                        <span className="text-xs md:text-sm text-[#888]">{testimonial.time}</span>
                      </div>
                    </div>
                    <div className="flex gap-0.5 text-[#fbbc05] text-xs md:text-sm mb-2.5">
                      {'★'.repeat(testimonial.rating)}
                    </div>
                    <p className="text-[#3B2E2A] text-sm leading-relaxed mb-2">
                      {testimonial.text}
                    </p>
                    <a href="#" className="text-xs md:text-sm text-[#888] hover:text-[#3B2E2A] transition-colors">
                      Read more
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Button */}
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#333] text-white flex items-center justify-center hover:bg-[#555] transition-all shadow-md z-10"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-1.5 md:gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`rounded-full transition-all ${
                index === currentSlide
                  ? 'w-2 h-2 bg-[#333]'
                  : 'w-1.5 h-1.5 bg-[#ccc]'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
