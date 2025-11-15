'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <footer className="bg-[#2A1D11] text-white relative overflow-hidden" suppressHydrationWarning>
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 pt-8 md:pt-12 pb-8 md:pb-12" suppressHydrationWarning>
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left Section - Contact Form & Social Media (Desktop) / Top (Mobile) */}
          <div className="order-1 lg:order-1">
            {/* Logo */}
            <div className="mb-6 md:mb-8">
              <Image
                src="/images/Group 3 (4).png"
                alt="Curato — The Art of Gifting"
                width={1000}
                height={400}
                className="h-48 md:h-64 lg:h-72 w-auto object-contain"
                priority
              />
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="mb-6 md:mb-8">
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:border-white transition-all"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:border-white transition-all"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:border-white transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="mt-4 w-full bg-white hover:bg-gray-200 text-black font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                SUBMIT
              </button>
            </form>

            {/* Follow Us Section */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-white">FOLLOW US</h3>
              <div className="flex gap-4">
                <Link 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6 text-[#3b5998]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </Link>
                <Link 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="url(#instagram-gradient)" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f09433" />
                        <stop offset="25%" stopColor="#e6683c" />
                        <stop offset="50%" stopColor="#dc2743" />
                        <stop offset="75%" stopColor="#cc2366" />
                        <stop offset="100%" stopColor="#bc1888" />
                      </linearGradient>
                    </defs>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </Link>
                <Link 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-6 h-6 text-[#ff0000]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section - Contact & Navigation (Desktop) / Bottom (Mobile) */}
          <div className="order-2 lg:order-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Contact Us Column */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-white">CONTACT US</h3>
              <div className="space-y-3 md:space-y-4">
                <p className="flex items-start gap-3 text-sm md:text-base">
                  <MapPinIcon className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span>No: 123, Curato Gift Store, Main Street, Mumbai, Maharashtra, India</span>
                </p>
                <p className="flex items-center gap-3 text-sm md:text-base">
                  <PhoneIcon className="w-5 h-5 text-white flex-shrink-0" />
                  <a href="tel:+919876543210" className="hover:text-gray-300 transition-colors">+91 98765 43210</a>
                </p>
                <p className="flex items-center gap-3 text-sm md:text-base">
                  <EnvelopeIcon className="w-5 h-5 text-white flex-shrink-0" />
                  <a href="mailto:info@curatogift.com" className="hover:text-gray-300 transition-colors">info@curatogift.com</a>
                </p>
              </div>
            </div>

            {/* Navigate Column */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-white">NAVIGATE</h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <Link href="/" className="text-sm md:text-base hover:text-gray-300 transition-colors block">Home</Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm md:text-base hover:text-gray-300 transition-colors block">About</Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm md:text-base hover:text-gray-300 transition-colors block">Contact</Link>
                </li>
                <li>
                  <Link href="/corporate-hampers" className="text-sm md:text-base hover:text-gray-300 transition-colors block">Corporate Hampers</Link>
                </li>
                <li>
                  <Link href="/christmas-hampers" className="text-sm md:text-base hover:text-gray-300 transition-colors block">Christmas Hampers</Link>
                </li>
                <li>
                  <Link href="/for-him-her" className="text-sm md:text-base hover:text-gray-300 transition-colors block">For Him & Her</Link>
                </li>
                <li>
                  <Link href="/get-well-soon" className="text-sm md:text-base hover:text-gray-300 transition-colors block">Get Well Soon</Link>
                </li>
              </ul>
            </div>
            
            {/* Products Column */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-white">PRODUCTS</h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <Link href="/products/classic-diwali-hamper" className="text-sm md:text-base hover:text-gray-300 transition-colors block">Classic Diwali Hamper</Link>
                </li>
                <li>
                  <Link href="/products/luxury-diwali-hamper" className="text-sm md:text-base hover:text-gray-300 transition-colors block">Luxury Diwali Hamper</Link>
                </li>
                <li>
                  <Link href="/products/christmas-cheer-hamper" className="text-sm md:text-base hover:text-gray-300 transition-colors block">Christmas Cheer Hamper</Link>
                </li>
                <li>
                  <Link href="/products/tea-coffee-connoisseur-hamper" className="text-sm md:text-base hover:text-gray-300 transition-colors block">Tea & Coffee Connoisseur</Link>
                </li>
                <li>
                  <Link href="/products/healthy-organic-hamper" className="text-sm md:text-base hover:text-gray-300 transition-colors block">Healthy & Organic</Link>
                </li>
                <li>
                  <Link href="/products/custom-corporate-hamper" className="text-sm md:text-base hover:text-gray-300 transition-colors block">Custom Corporate Hamper</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 mt-8 md:mt-12 border-t border-gray-700">
          <div className="flex justify-center items-center text-xs md:text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Curato Gift. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
