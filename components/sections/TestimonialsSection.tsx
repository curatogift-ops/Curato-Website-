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
  const cardsPerSlide = 2;
  const totalSlides = Math.ceil(testimonials.length / cardsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-[#333] text-center mb-10">
          What our customers say
        </h2>

        {/* Google Reviews Block */}
        <div className="bg-[#f5f5f5] rounded-lg p-6 mb-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-1 text-2xl font-medium">
                <span className="text-[#4285f4]">G</span>
                <span className="text-[#ea4335]">o</span>
                <span className="text-[#fbbc05]">o</span>
                <span className="text-[#4285f4]">g</span>
                <span className="text-[#34a853]">l</span>
                <span className="text-[#ea4335]">e</span>
                <span className="text-[#333] ml-2">Reviews</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-3xl font-semibold text-[#333]">4.7</span>
                <div className="flex gap-0.5 text-[#fbbc05] text-lg">
                  ★★★★<span className="opacity-50">★</span>
                </div>
                <span className="text-[#888] text-base">(13,839)</span>
              </div>
            </div>
            <button className="bg-[#4285f4] text-white px-6 py-3 rounded-md font-medium hover:bg-[#357ae8] transition-colors">
              Review us on Google
            </button>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative mb-8 pr-0 md:pr-16">
          <div className="overflow-hidden">
            <div
              className="flex gap-5 transition-transform duration-500"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="flex-shrink-0 w-full flex flex-col md:flex-row gap-5">
                  {testimonials
                    .slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide)
                    .map((testimonial, index) => (
                      <div
                        key={index}
                        className="flex-1 bg-[#f5f5f5] rounded-lg p-5 shadow-sm"
                      >
                        <div className="flex gap-3 mb-3">
                          <div className={`w-12 h-12 rounded-full flex-shrink-0 ${testimonial.color} flex items-center justify-center text-white font-bold`}>
                            {testimonial.initials}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-1.5 mb-1">
                              <span className="text-base font-semibold text-[#333]">
                                {testimonial.name}
                              </span>
                              <span className="text-[#4285f4]">✓</span>
                            </div>
                            <span className="text-sm text-[#888]">{testimonial.time}</span>
                          </div>
                        </div>
                        <div className="flex gap-0.5 text-[#fbbc05] text-sm mb-3">
                          {'★'.repeat(testimonial.rating)}
                        </div>
                        <p className="text-[#333] text-sm leading-relaxed mb-2.5">
                          {testimonial.text}
                        </p>
                        <a href="#" className="text-sm text-[#888] hover:text-[#333] transition-colors">
                          Read more
                        </a>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handleNext}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#333] text-white items-center justify-center hover:bg-[#555] transition-all shadow-md z-10"
            aria-label="Next testimonials"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`rounded-full transition-all ${
                index === currentSlide
                  ? 'w-2.5 h-2.5 bg-[#333]'
                  : 'w-2 h-2 bg-[#ccc]'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
