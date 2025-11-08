'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  MagnifyingGlassIcon, 
  UserCircleIcon, 
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#2a1d11] shadow-lg">
      <div className="max-w-[1400px] mx-auto px-5 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/Gemini_Generated_Image_dwx4vndwx4vndwx4-removebg-preview (1).png" 
              alt="Curato Gift Logo" 
              className="h-24 md:h-28 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 items-center">
            <Link href="/" className="text-[#f4e4bc] text-base font-medium hover:text-[#d4af37] transition-colors relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] transition-all group-hover:w-full"></span>
            </Link>
            
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button className="text-[#f4e4bc] text-base font-medium hover:text-[#d4af37] transition-colors relative group flex items-center gap-1">
                Products
                <ChevronDownIcon className="w-4 h-4" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] transition-all group-hover:w-full"></span>
              </button>
              
              {productsDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-[#2a1d11] border border-[#d4af37]/30 rounded-lg shadow-xl py-2 z-50">
                  <Link href="/products/classic-diwali-hamper" className="block px-4 py-2 text-sm text-[#f4e4bc] hover:bg-[#d4af37]/20 hover:text-[#d4af37] transition-colors">
                    Classic Diwali Hamper
                  </Link>
                  <Link href="/products/luxury-diwali-hamper" className="block px-4 py-2 text-sm text-[#f4e4bc] hover:bg-[#d4af37]/20 hover:text-[#d4af37] transition-colors">
                    Luxury Diwali Hamper
                  </Link>
                  <Link href="/products/corporate-diwali-box" className="block px-4 py-2 text-sm text-[#f4e4bc] hover:bg-[#d4af37]/20 hover:text-[#d4af37] transition-colors">
                    Corporate Diwali Box
                  </Link>
                  <Link href="/products/christmas-cheer-hamper" className="block px-4 py-2 text-sm text-[#f4e4bc] hover:bg-[#d4af37]/20 hover:text-[#d4af37] transition-colors">
                    Christmas Cheer Hamper
                  </Link>
                  <Link href="/products/new-year-celebration-hamper" className="block px-4 py-2 text-sm text-[#f4e4bc] hover:bg-[#d4af37]/20 hover:text-[#d4af37] transition-colors">
                    New Year Celebration
                  </Link>
                  <Link href="/products/assorted-sweets-savories-hamper" className="block px-4 py-2 text-sm text-[#f4e4bc] hover:bg-[#d4af37]/20 hover:text-[#d4af37] transition-colors">
                    Sweets & Savories
                  </Link>
                  <Link href="/products/healthy-organic-hamper" className="block px-4 py-2 text-sm text-[#f4e4bc] hover:bg-[#d4af37]/20 hover:text-[#d4af37] transition-colors">
                    Healthy & Organic
                  </Link>
                  <Link href="/products/tea-coffee-connoisseur-hamper" className="block px-4 py-2 text-sm text-[#f4e4bc] hover:bg-[#d4af37]/20 hover:text-[#d4af37] transition-colors">
                    Tea & Coffee Connoisseur
                  </Link>
                  <Link href="/products/custom-corporate-hamper" className="block px-4 py-2 text-sm text-[#f4e4bc] hover:bg-[#d4af37]/20 hover:text-[#d4af37] transition-colors">
                    Custom Corporate Hamper
                  </Link>
                  <Link href="/products/mini-thank-you-hamper" className="block px-4 py-2 text-sm text-[#f4e4bc] hover:bg-[#d4af37]/20 hover:text-[#d4af37] transition-colors">
                    Mini Thank You Hamper
                  </Link>
                </div>
              )}
            </div>
            
            <Link href="/#occasions" className="text-[#f4e4bc] text-base font-medium hover:text-[#d4af37] transition-colors relative group">
              Occasions
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="text-[#f4e4bc] text-base font-medium hover:text-[#d4af37] transition-colors relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/contact" className="text-[#f4e4bc] text-base font-medium hover:text-[#d4af37] transition-colors relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/corporate-hampers" className="text-[#f4e4bc] text-base font-medium hover:text-[#d4af37] transition-colors relative group">
              Corporate Hampers
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/christmas-hampers" className="text-[#f4e4bc] text-base font-medium hover:text-[#d4af37] transition-colors relative group">
              Christmas Hampers
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] transition-all group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#d4af37] p-1"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="w-7 h-7" />
            ) : (
              <Bars3Icon className="w-7 h-7" />
            )}
          </button>

          {/* Icons */}
          <div className="hidden md:flex gap-4 items-center">
            <button className="text-[#f4e4bc] hover:text-[#d4af37] transition-colors" aria-label="Search">
              <MagnifyingGlassIcon className="w-6 h-6" />
            </button>
            <Link href="/account" className="text-[#f4e4bc] hover:text-[#d4af37] transition-colors" aria-label="Account">
              <UserCircleIcon className="w-8 h-8" />
            </Link>
            <Link href="/cart" className="text-[#f4e4bc] hover:text-[#d4af37] transition-colors relative" aria-label="Shopping cart">
              <ShoppingCartIcon className="w-7 h-7" />
              <span className="absolute -top-2 -right-2 bg-[#d4af37] text-[#3d2817] rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">
                0
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link href="/" className="text-[#f4e4bc] text-base font-medium hover:text-[#d4af37] transition-colors py-2 border-b border-[#d4af37]/20">
              Home
            </Link>
            
            {/* Mobile Products Section */}
            <div className="border-b border-[#d4af37]/20">
              <button 
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                className="text-[#f4e4bc] text-base font-medium hover:text-[#d4af37] transition-colors py-2 w-full text-left flex items-center justify-between"
              >
                Products
                <ChevronDownIcon className={`w-4 h-4 transition-transform ${productsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {productsDropdownOpen && (
                <div className="pl-4 pb-2 flex flex-col gap-2">
                  <Link href="/products/classic-diwali-hamper" className="text-[#f4e4bc] text-sm hover:text-[#d4af37] transition-colors py-1">
                    Classic Diwali Hamper
                  </Link>
                  <Link href="/products/luxury-diwali-hamper" className="text-[#f4e4bc] text-sm hover:text-[#d4af37] transition-colors py-1">
                    Luxury Diwali Hamper
                  </Link>
                  <Link href="/products/corporate-diwali-box" className="text-[#f4e4bc] text-sm hover:text-[#d4af37] transition-colors py-1">
                    Corporate Diwali Box
                  </Link>
                  <Link href="/products/christmas-cheer-hamper" className="text-[#f4e4bc] text-sm hover:text-[#d4af37] transition-colors py-1">
                    Christmas Cheer Hamper
                  </Link>
                  <Link href="/products/new-year-celebration-hamper" className="text-[#f4e4bc] text-sm hover:text-[#d4af37] transition-colors py-1">
                    New Year Celebration
                  </Link>
                  <Link href="/products/assorted-sweets-savories-hamper" className="text-[#f4e4bc] text-sm hover:text-[#d4af37] transition-colors py-1">
                    Sweets & Savories
                  </Link>
                  <Link href="/products/healthy-organic-hamper" className="text-[#f4e4bc] text-sm hover:text-[#d4af37] transition-colors py-1">
                    Healthy & Organic
                  </Link>
                  <Link href="/products/tea-coffee-connoisseur-hamper" className="text-[#f4e4bc] text-sm hover:text-[#d4af37] transition-colors py-1">
                    Tea & Coffee Connoisseur
                  </Link>
                  <Link href="/products/custom-corporate-hamper" className="text-[#f4e4bc] text-sm hover:text-[#d4af37] transition-colors py-1">
                    Custom Corporate
                  </Link>
                  <Link href="/products/mini-thank-you-hamper" className="text-[#f4e4bc] text-sm hover:text-[#d4af37] transition-colors py-1">
                    Mini Thank You
                  </Link>
                </div>
              )}
            </div>
            
            <Link href="/#occasions" className="text-[#f4e4bc] text-base font-medium hover:text-[#d4af37] transition-colors py-2 border-b border-[#d4af37]/20">
              Occasions
            </Link>
            <Link href="/about" className="text-[#f4e4bc] text-base font-medium hover:text-[#d4af37] transition-colors py-2 border-b border-[#d4af37]/20">
              About
            </Link>
            <Link href="/contact" className="text-[#f4e4bc] text-base font-medium hover:text-[#d4af37] transition-colors py-2 border-b border-[#d4af37]/20">
              Contact
            </Link>
            <Link href="/corporate-hampers" className="text-[#f4e4bc] text-base font-medium hover:text-[#d4af37] transition-colors py-2 border-b border-[#d4af37]/20">
              Corporate Hampers
            </Link>
            <Link href="/christmas-hampers" className="text-[#f4e4bc] text-base font-medium hover:text-[#d4af37] transition-colors py-2">
              Christmas Hampers
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
