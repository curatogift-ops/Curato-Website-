'use client';

import Link from 'next/link';
import { useState } from 'react';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#2a1d11] text-[#f4e4bc] pt-5 md:pt-8 pb-5 md:pb-8">
      <div className="max-w-[1200px] mx-auto px-3 md:px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mb-5 md:mb-7">
          {/* Brand & Contact */}
          <div className="flex flex-col items-center md:items-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Gemini_Generated_Image_dwx4vndwx4vndwx4-removebg-preview (1).webp"
              alt="Curato — The Art of Gifting"
              className="h-24 md:h-28 w-auto object-contain mb-3 md:mb-4"
            />
            <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
              <p className="flex items-center gap-2"><PhoneIcon className="w-4 h-4 text-[#d4af37]" /> +91-XXXXXXXXXX</p>
              <p className="flex items-center gap-2"><EnvelopeIcon className="w-4 h-4 text-[#d4af37]" /> info@curatogift.com</p>
            </div>
            <div className="flex gap-2.5 md:gap-3 mt-3 md:mt-4">
              <Link href="#" className="w-7 h-7 md:w-7 md:h-7 rounded-full bg-[#d4af37]/15 flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-[#2a1d11] transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </Link>
              <Link href="#" className="w-7 h-7 md:w-7 md:h-7 rounded-full bg-[#d4af37]/15 flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-[#2a1d11] transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </Link>
              <Link href="#" className="w-7 h-7 md:w-7 md:h-7 rounded-full bg-[#d4af37]/15 flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-[#2a1d11] transition-colors" aria-label="YouTube">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </Link>
            </div>
          </div>

          {/* Links Hub */}
          <div className="md:pl-2">
            <div className="grid grid-cols-2 gap-5 md:gap-7">
              <div>
                <h4 className="text-[#d4af37] mb-3 text-xs font-semibold tracking-wider uppercase">Categories</h4>
                <ul className="space-y-1.5 md:space-y-2">
                  <li><Link href="/for-him-her" className="text-xs md:text-sm hover:text-[#d4af37] transition-colors">For Him & Her</Link></li>
                  <li><Link href="/corporate-hampers" className="text-xs md:text-sm hover:text-[#d4af37] transition-colors">Corporate Hampers</Link></li>
                  <li><Link href="/christmas-hampers" className="text-xs md:text-sm hover:text-[#d4af37] transition-colors">Christmas Hampers</Link></li>
                  <li><Link href="/get-well-soon" className="text-xs md:text-sm hover:text-[#d4af37] transition-colors">Get Well Soon</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-[#d4af37] mb-3 text-xs font-semibold tracking-wider uppercase">Quick Links</h4>
                <ul className="space-y-1.5 md:space-y-2">
                  <li><Link href="/track-order" className="text-xs md:text-sm hover:text-[#d4af37] transition-colors">Track Order</Link></li>
                  <li><Link href="/account" className="text-xs md:text-sm hover:text-[#d4af37] transition-colors">Account</Link></li>
                  <li><Link href="/about" className="text-xs md:text-sm hover:text-[#d4af37] transition-colors">About Us</Link></li>
                  <li><Link href="/contact" className="text-xs md:text-sm hover:text-[#d4af37] transition-colors">Contact Us</Link></li>
                  <li><Link href="/store-locator" className="text-xs md:text-sm hover:text-[#d4af37] transition-colors">Store Locator</Link></li>
                  <li><Link href="/refund-policy" className="text-xs md:text-sm hover:text-[#d4af37] transition-colors">Refund Policy</Link></li>
                  <li><Link href="/terms" className="text-xs md:text-sm hover:text-[#d4af37] transition-colors">Terms of Service</Link></li>
                  <li><Link href="/privacy" className="text-xs md:text-sm hover:text-[#d4af37] transition-colors">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Products + Newsletter */}
          <div className="md:pl-4">
            <h4 className="text-[#d4af37] mb-3 text-xs font-semibold tracking-wider uppercase">Products</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 md:gap-y-2 gap-x-4 md:gap-x-6 mb-4 md:mb-5">
              <li><Link href="/products/classic-diwali-hamper" className="text-xs md:text-sm hover:text-[#d4af37] transition-colors">Classic Diwali Hamper</Link></li>
              <li><Link href="/products/luxury-diwali-hamper" className="text-xs md:text-sm hover:text-[#d4af37] transition-colors">Luxury Diwali Hamper</Link></li>
              <li><Link href="/products/corporate-diwali-box" className="text-xs md:text-sm hover:text-[#d4af37] transition-colors">Corporate Diwali Box</Link></li>
              <li><Link href="/products/christmas-cheer-hamper" className="text-xs md:text-sm hover:text-[#d4af37] transition-colors">Christmas Cheer Hamper</Link></li>
              <li><Link href="/products/new-year-celebration-hamper" className="text-xs md:text-sm hover:text-[#d4af37] transition-colors">New Year Hamper</Link></li>
              <li><Link href="/products/healthy-organic-hamper" className="text-xs md:text-sm hover:text-[#d4af37] transition-colors">Healthy & Organic</Link></li>
              <li><Link href="/products/tea-coffee-connoisseur-hamper" className="text-xs md:text-sm hover:text-[#d4af37] transition-colors">Tea & Coffee Hamper</Link></li>
              <li><Link href="/products/custom-corporate-hamper" className="text-xs md:text-sm hover:text-[#d4af37] transition-colors">Custom Corporate</Link></li>
              <li><Link href="/products/mini-thank-you-hamper" className="text-xs md:text-sm hover:text-[#d4af37] transition-colors">Mini Thank You</Link></li>
            </ul>
            <div className="mt-3">
              <h4 className="text-[#d4af37] mb-2 text-xs font-semibold tracking-wider uppercase">Newsletter</h4>
              <p className="mb-3 text-xs md:text-sm">Subscribe to get special offers and updates.</p>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="px-2 md:px-3 py-2 border border-[#d4af37] rounded bg-white/10 text-white text-xs md:text-sm placeholder:text-[#f4e4bc] w-full"
                />
                <button
                  type="submit"
                  className="bg-[#d4af37] text-[#2a1d11] px-3 md:px-4 py-2 rounded text-xs md:text-sm font-semibold hover:bg-[#f4e4bc] transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-3 md:pt-4 border-t border-[#d4af37]/20 flex flex-col md:flex-row justify-between items-center gap-1.5 md:gap-2 text-[10px] md:text-[11px]">
          <p>&copy; 2023 Curato Gift. All Right Reserved.</p>
          <p>Developed By ZEEBOX</p>
        </div>
      </div>
    </footer>
  );
}
