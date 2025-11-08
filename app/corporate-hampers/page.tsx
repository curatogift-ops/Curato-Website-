import Image from 'next/image';
import { 
  SparklesIcon,
  ClipboardDocumentCheckIcon,
  TruckIcon,
  GiftIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline';

export default function CorporateHampersPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/categories/gift-1.png"
            alt="Corporate gifting hero"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2A1D11]/80 via-[#2A1D11]/50 to-transparent" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-5 pt-10 md:pt-14 pb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center -mt-4 md:-mt-6">
            <div>
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#f4e4bc] leading-tight">
                Corporate Gifting, Elevated — Trusted by India’s Leading Teams
              </h1>
              <p className="mt-5 text-white/90 text-base md:text-lg max-w-xl">
                Move from chaos to culture. We help you build a thoughtful gifting strategy with curated hampers, full branding, and real impact.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="#planner" className="px-6 py-3 rounded-full bg-[#d4af37] text-[#2A1D11] font-medium shadow-lg hover:bg-[#c4a037] transition-colors">
                  Start Your Gifting Strategy
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Badge text="GST Ready" />
                <Badge text="Multi-location Delivery" />
                <Badge text="On-time SLAs" />
                <Badge text="Same-day in BLR" />
              </div>
            </div>

            <div className="block">
              <div className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden ring-1 ring-white/10">
                <video
                  src="/videos/corporate%20hero%20section%20video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster="/images/categories/gift-3.png"
                  className="w-full h-full object-cover"
                  aria-label="Corporate gifting hero video"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gifting Playbook */}
      <section className="bg-[#F5F1ED] py-14">
        <div className="max-w-[1400px] mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3B2E2A] mb-8">The Gifting Playbook</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {playbookCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl shadow-sm p-3">
                <div className="relative h-40 rounded-xl overflow-hidden">
                  <Image src={card.image} alt={card.title} fill className="object-cover" />
                </div>
                <div className="p-3">
                  <p className="text-sm font-semibold text-[#3B2E2A]">{card.title}</p>
                  <p className="text-xs text-[#5C4A42] mt-2">
                    <span className="text-[#d4af37] font-semibold">Outcome:</span> {card.outcome}
                  </p>
                  <a href={card.ctaHref} className="inline-flex items-center gap-2 mt-3 text-sm text-white bg-[#d4af37] px-3 py-2 rounded-full hover:bg-[#c4a037]">
                    {card.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-14">
        <div className="max-w-[1400px] mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#3B2E2A]">From Brief to Delivery — In 3 Simple Steps</h3>
              <p className="text-[#5C4A42] mt-2">No spreadsheets. No back-and-forth. Just results.</p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Step icon={<ClipboardDocumentCheckIcon className="w-8 h-8 text-[#d4af37]" />} title="Plan" desc="Share goals & budget" />
              <Step icon={<SparklesIcon className="w-8 h-8 text-[#d4af37]" />} title="Curate" desc="We design your kits" />
              <Step icon={<TruckIcon className="w-8 h-8 text-[#d4af37]" />} title="Deliver" desc="Ship nationwide" />
            </div>
          </div>
        </div>
      </section>

      {/* Story & Testimonial */}
      <section className="bg-[#F5F1ED] py-14">
        <div className="max-w-[1400px] mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 rounded-2xl overflow-hidden">
              <Image src="/images/categories/gift-2.png" alt="Customer culture story" fill className="object-cover" />
            </div>
            <div>
              <blockquote className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="text-[#3B2E2A] text-lg">
                  “Clients started referring fall-surprise care boxes because teams loved the gift.”
                </p>
                <p className="mt-3 text-sm text-[#5C4A42]">— Culture Lead, Tech Company</p>
              </blockquote>
              <a href="#planner" className="mt-6 inline-block text-[#2A1D11] bg-[#d4af37] px-5 py-2 rounded-full font-medium hover:bg-[#c4a037]">
                See How We Build Your Culture Story
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Planner CTA */}
      <section id="planner" className="py-14">
        <div className="max-w-[1400px] mx-auto px-5">
          <div className="rounded-2xl bg-[#2A1D11] p-6 md:p-8 text-white">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h4 className="text-2xl font-bold text-[#f4e4bc]">Let’s Build Your Perfect Gifting Plan — In Under Minutes</h4>
                <p className="mt-2 text-white/80">Answer a few questions and get a curated plan instantly.</p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a href="#form" className="px-5 py-3 rounded-full bg-[#d4af37] text-[#2A1D11] font-medium hover:bg-[#c4a037]">Get Your Gifting Strategy</a>
                  <button className="px-5 py-3 rounded-full border border-white/20 hover:bg-white/10 transition">Save & Share Plan</button>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="flex items-center gap-3">
                  <CheckBadgeIcon className="w-8 h-8 text-[#d4af37]" />
                  <p className="text-sm">GST-ready invoices • Branded packaging • Pan-India delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Form */}
      <section id="form" className="py-14">
        <div className="max-w-[1400px] mx-auto px-5">
          <h5 className="text-xl md:text-2xl font-bold text-[#3B2E2A] mb-6">Your Gifting Strategy Starts Here</h5>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 rounded-2xl border border-[#d4af37]/20 p-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-[#5C4A42]">What’s the main goal?</label>
                  <select className="mt-2 w-full rounded-lg border border-[#d4af37]/30 p-2 focus:outline-none">
                    <option>Onboarding delight</option>
                    <option>Team appreciation</option>
                    <option>Festival gifting</option>
                    <option>Wellness & care</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-[#5C4A42]">Need custom branding?</label>
                  <select className="mt-2 w-full rounded-lg border border-[#d4af37]/30 p-2 focus:outline-none">
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-[#5C4A42]">Preferred budget per kit</label>
                  <select className="mt-2 w-full rounded-lg border border-[#d4af37]/30 p-2 focus:outline-none">
                    <option>₹800 – ₹1,200</option>
                    <option>₹1,200 – ₹2,000</option>
                    <option>₹2,000 – ₹3,500</option>
                    <option>₹3,500+</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-[#5C4A42]">Recommended within Bangalore?</label>
                  <select className="mt-2 w-full rounded-lg border border-[#d4af37]/30 p-2 focus:outline-none">
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#d4af37] text-[#2A1D11] font-medium hover:bg-[#c4a037]">
                  <GiftIcon className="w-5 h-5" />
                  Generate Strategy
                </button>
              </div>
            </div>
            <div>
              <div className="rounded-2xl bg-[#F5F1ED] p-6">
                <p className="text-sm text-[#5C4A42]">Instant Output</p>
                <p className="mt-2 text-2xl font-bold text-[#3B2E2A]">₹1,150 – ₹3,530 per unit</p>
                <p className="mt-1 text-xs text-[#5C4A42]">Example based on selected preferences</p>
                <div className="mt-4">
                  <a href="/products/custom-corporate-hamper" className="inline-flex items-center gap-2 text-sm text-white bg-[#d4af37] px-4 py-2 rounded-full hover:bg-[#c4a037]">
                    Explore Custom Corporate Kit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm px-4 py-1.5 rounded-full bg-[#f4e4bc] text-[#2A1D11] font-semibold shadow-md ring-1 ring-[#d4af37]/60">
      <CheckBadgeIcon className="w-5 h-5 text-[#b8860b]" />{text}
    </span>
  );
}

function Step({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-[#d4af37]/20 p-4 text-center">
      <div className="flex justify-center mb-2">{icon}</div>
      <p className="text-[#3B2E2A] font-semibold">{title}</p>
      <p className="text-xs text-[#5C4A42] mt-1">{desc}</p>
    </div>
  );
}

const playbookCards = [
  {
    title: 'Welcome New Hires Like Family',
    image: '/images/categories/gift-4.png',
    outcome: '57% faster ramp-up, 92% feel valued on Day 1',
    cta: 'Design Onboarding Experience',
    ctaHref: '/products/custom-corporate-hamper',
  },
  {
    title: "Thank Teams Without Saying 'Thanks'",
    image: '/images/categories/gift-1.png',
    outcome: '3× higher engagement in internal comms',
    cta: 'Create Recognition Kit',
    ctaHref: '/products/mini-thank-you-hamper',
  },
  {
    title: 'Celebrate Festivals With Meaning',
    image: '/images/categories/gift-3.png',
    outcome: 'Clients prefer it. Teams love gold-embossed kits',
    cta: 'Create Your Celebration Kit',
    ctaHref: '/products/luxury-diwali-hamper',
  },
  {
    title: 'Wellness That Works For WFH Teams',
    image: '/images/categories/gift-2.png',
    outcome: 'Boosts wellness KPIs in pilot teams',
    cta: 'Launch Wellness Delight',
    ctaHref: '/products/healthy-organic-hamper',
  },
];
