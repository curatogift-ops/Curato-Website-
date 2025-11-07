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
      <div className="relative z-20 max-w-[1400px] mx-auto w-full px-5">
        <div className="text-center text-white">
          {/* Christmas Banner */}
          <div className="mb-10">
            <p className="text-lg tracking-[3px] mb-2.5 uppercase">WE WISH YOU A</p>
            <h1 className="text-6xl md:text-7xl font-normal my-4 font-['Brush_Script_MT',cursive] drop-shadow-lg">
              Merry Christmas
            </h1>
            <p className="text-sm tracking-[2px] mt-2.5 uppercase font-medium">
              CHECKOUT OUR EXCLUSIVE HAMPERS
            </p>
          </div>

          {/* Main Hero Text */}
          <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            A Gift That Speaks Luxury
          </h2>
          <p className="text-xl mb-8 text-[#f4e4bc]">
            Curated premium hampers filled with the finest selections.
          </p>
        </div>
      </div>
    </section>
  );
}
