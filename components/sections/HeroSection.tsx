'use client';

export default function HeroSection() {
  return (
    <section className="relative min-h-[420px] md:min-h-[500px] flex items-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/From KlickPin CF Hamper for HIM ❤️ in 2025 _ Hampers for him Diy gifts Quick diy gifts.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#2d2817]/70 to-[#3d2817]/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-[1400px] mx-auto w-full px-5 py-12 sm:py-14">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-[2.1rem] md:text-[2.625rem] lg:text-[3.15rem] font-serif text-[#d4af37] mb-4 leading-snug">
            Thoughtfully Curated, Locally<br />Crafted. Unfrogibabely Given
          </h1>
          
          {/* Subheading */}
          <p className="text-[0.95rem] md:text-[1.05rem] text-white/95 mb-8 font-light">
            India's most thoughful hampers, crafted in for moments that matter.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a 
              href="/" 
              className="px-6 py-3 bg-[#d4af37] text-[#2d2817] rounded-full text-base font-medium hover:bg-[#c4a037] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Shop for Festivals & Occaions
            </a>
            <a 
              href="/corporate-hampers" 
              className="px-6 py-3 bg-[#3d4d3d] text-white rounded-full text-base font-medium hover:bg-[#4d5d4d] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Corporate Gifting Solutions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
