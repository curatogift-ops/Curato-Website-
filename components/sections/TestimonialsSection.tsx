'use client';

import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Container from '@/components/ui/Container';

const testimonials = [
  {
    name: 'Vishal Shrivastava',
    rating: 5,
    text: 'Excellent services. Pilot was very polite, well dressed and smart. Handled vehicle very responsibly and was thorough in Mumbai routes. Charges are reasonable too!',
    verified: true,
    avatar: 'VS',
  },
  {
    name: 'Sarah Johnson',
    rating: 5,
    text: 'Amazing experience! The hampers are beautifully curated and the quality is exceptional. Highly recommend!',
    verified: true,
    avatar: 'SJ',
  },
  {
    name: 'Michael Chen',
    rating: 5,
    text: 'Perfect gift for any occasion. The presentation is stunning and the products are top quality. Will definitely order again!',
    verified: true,
    avatar: 'MC',
  },
  {
    name: 'Priya Sharma',
    rating: 5,
    text: 'Outstanding quality and service! The gift hamper exceeded all expectations. The packaging was elegant and the contents were premium. Highly satisfied!',
    verified: true,
    avatar: 'PS',
  },
];

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentSlide];

  return (
    <section className="py-12 md:py-16 bg-white">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12 md:mb-16">
          What our customers say
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Testimonial Card */}
          <div className="flex items-center justify-center px-8 md:px-12" suppressHydrationWarning>
            <div className="relative w-full max-w-[280px] md:max-w-[320px]" suppressHydrationWarning>
              {/* Navigation Arrows - Positioned relative to box */}
              <button
                onClick={handlePrev}
                className="absolute -left-8 md:-left-10 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-black flex items-center justify-center transition-all shadow-md z-10"
                aria-label="Previous testimonial"
              >
                <ChevronLeftIcon className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute -right-8 md:-right-10 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-black flex items-center justify-center transition-all shadow-md z-10"
                aria-label="Next testimonial"
              >
                <ChevronRightIcon className="w-4 h-4 md:w-5 md:h-5" />
              </button>

              {/* Testimonial Card - Exact Design Match */}
              <div className="bg-white rounded-lg p-4 md:p-5 shadow-lg border border-gray-200 w-full" suppressHydrationWarning>
                {/* Profile Section - Left Aligned */}
                <div className="flex items-start gap-3 mb-4" suppressHydrationWarning>
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-500 flex items-center justify-center text-white text-base md:text-lg font-bold flex-shrink-0" suppressHydrationWarning>
                    {currentTestimonial.avatar.charAt(0)}
                  </div>
                  <div className="flex-1" suppressHydrationWarning>
                    <h3 className="text-sm md:text-base font-semibold text-black mb-1" suppressHydrationWarning>
                      {currentTestimonial.name}
                    </h3>
                    {/* Stars */}
                    <div className="flex gap-0.5 mb-1" suppressHydrationWarning>
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-black text-sm md:text-base">
                          ★
                        </span>
                      ))}
                    </div>
                    {/* Verified Customer */}
                    <div className="flex items-center gap-1 text-xs text-gray-600" suppressHydrationWarning>
                      <CheckCircleIcon className="w-3 h-3 text-black" />
                      <span>Verified Customer</span>
                    </div>
                  </div>
                </div>

                {/* Review Text - Quoted and Italic */}
                <p className="text-gray-700 text-sm md:text-base leading-relaxed italic mb-3" suppressHydrationWarning>
                  &ldquo;{currentTestimonial.text}&rdquo;
                </p>

                {/* Image after review */}
                <div className="relative w-full h-16 md:h-20 flex-shrink-0" suppressHydrationWarning>
                  <Image
                    src="/images/image.png"
                    alt="Review decoration"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center items-center gap-2 mt-6" suppressHydrationWarning>
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`rounded-full transition-all ${
                      index === currentSlide
                        ? 'w-3 h-2 bg-black'
                        : 'w-2 h-2 bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Gift Boxes Illustration */}
          <div className="relative h-full min-h-[400px] md:min-h-[500px] flex items-center justify-center" suppressHydrationWarning>
            <Image
              src="/images/Tiny people with huge gift boxes flat vector illustration.jpg"
              alt="Happy customers with gift boxes"
              width={600}
              height={600}
              className="object-contain w-full h-full"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
