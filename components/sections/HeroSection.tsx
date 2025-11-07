'use client';

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#2d2817]/70 to-[#3d2817]/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-[1400px] mx-auto w-full px-5 py-10">
        <div className="flex items-center justify-end min-h-[500px]">
          {/* Category Boxes - Right Side in 2x2 Grid */}
          <div className="grid grid-cols-2 gap-5 max-w-2xl">
            {/* For Him & Her */}
            <a href="/for-him-her" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border-4 border-white">
                <div className="h-40 overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/images/categories/gift-1.png" 
                    alt="For Him & Her" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 relative bg-gradient-to-br from-white to-gray-50">
                  <h3 className="text-lg font-bold text-[#3B2E2A] text-center tracking-wide">FOR HIM & HER</h3>
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#d4af37] via-[#f4e4bc] to-[#d4af37] rounded-b-xl"></div>
                </div>
              </div>
            </a>

            {/* Christmas Hampers */}
            <a href="/christmas-hampers" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border-4 border-white">
                <div className="h-40 overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/images/christmas/christmas-hamper.png" 
                    alt="Christmas Hampers" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 relative bg-gradient-to-br from-white to-gray-50">
                  <h3 className="text-lg font-bold text-[#3B2E2A] text-center tracking-wide">CHRISTMAS HAMPERS</h3>
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#d4af37] via-[#f4e4bc] to-[#d4af37] rounded-b-xl"></div>
                </div>
              </div>
            </a>

            {/* Corporate Hampers */}
            <a href="/corporate-hampers" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border-4 border-white">
                <div className="h-40 overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/images/categories/gift-2.png" 
                    alt="Corporate Hampers" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 relative bg-gradient-to-br from-white to-gray-50">
                  <h3 className="text-lg font-bold text-[#3B2E2A] text-center tracking-wide">CORPORATE HAMPERS</h3>
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#d4af37] via-[#f4e4bc] to-[#d4af37] rounded-b-xl"></div>
                </div>
              </div>
            </a>

            {/* Get Well Soon */}
            <a href="/get-well-soon" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border-4 border-white">
                <div className="h-40 overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/images/categories/gift-3.png" 
                    alt="Get Well Soon" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 relative bg-gradient-to-br from-white to-gray-50">
                  <h3 className="text-lg font-bold text-[#3B2E2A] text-center tracking-wide">GET WELL SOON</h3>
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#d4af37] via-[#f4e4bc] to-[#d4af37] rounded-b-xl"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
