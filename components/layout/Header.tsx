'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  MagnifyingGlassIcon, 
  UserCircleIcon, 
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  SparklesIcon,
  GiftIcon,
  BriefcaseIcon,
  CakeIcon,
  FireIcon,
  HeartIcon,
  BeakerIcon,
  CubeIcon,
  BuildingOfficeIcon,
  HandThumbUpIcon
} from '@heroicons/react/24/outline';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#3D2817] shadow-lg">
      <div className="max-w-[1400px] mx-auto px-5 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Gemini_Generated_Image_dwx4vndwx4vndwx4-removebg-preview (1).webp"
              alt="Curato — The Art of Gifting"
              className="h-20 md:h-24 w-auto object-contain"
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
              <button className="text-[#f4e4bc] text-base font-medium hover:text-[#d4af37] transition-colors relative group flex items-center gap-1 py-2">
                Products
                <ChevronDownIcon className="w-4 h-4" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] transition-all group-hover:w-full"></span>
              </button>
              
              {productsDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[320px] max-w-[90vw] z-50">
                  <div className="bg-white border-2 border-gray-100 rounded-2xl shadow-2xl py-2 animate-fadeIn max-h-[70vh] overflow-y-auto">
                  <Link href="/products/classic-diwali-hamper" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 font-medium hover:bg-[#2A1D11] hover:text-white transition-all group">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg group-hover:bg-[#d4af37] transition-colors">
                      <SparklesIcon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                    </div>
                    <span>Classic Diwali Hamper</span>
                  </Link>
                  <Link href="/products/luxury-diwali-hamper" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 font-medium hover:bg-[#2A1D11] hover:text-white transition-all group">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg group-hover:bg-[#d4af37] transition-colors">
                      <GiftIcon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                    </div>
                    <span>Luxury Diwali Hamper</span>
                  </Link>
                  <Link href="/products/corporate-diwali-box" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 font-medium hover:bg-[#2A1D11] hover:text-white transition-all group">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg group-hover:bg-[#d4af37] transition-colors">
                      <BriefcaseIcon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                    </div>
                    <span>Corporate Diwali Box</span>
                  </Link>
                  <Link href="/products/christmas-cheer-hamper" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 font-medium hover:bg-[#2A1D11] hover:text-white transition-all group">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg group-hover:bg-[#d4af37] transition-colors">
                      <CakeIcon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                    </div>
                    <span>Christmas Cheer Hamper</span>
                  </Link>
                  <Link href="/products/new-year-celebration-hamper" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 font-medium hover:bg-[#2A1D11] hover:text-white transition-all group">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg group-hover:bg-[#d4af37] transition-colors">
                      <FireIcon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                    </div>
                    <span>New Year Celebration</span>
                  </Link>
                  <Link href="/products/assorted-sweets-savories-hamper" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 font-medium hover:bg-[#2A1D11] hover:text-white transition-all group">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg group-hover:bg-[#d4af37] transition-colors">
                      <HeartIcon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                    </div>
                    <span>Sweets & Savories</span>
                  </Link>
                  <Link href="/products/healthy-organic-hamper" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 font-medium hover:bg-[#2A1D11] hover:text-white transition-all group">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg group-hover:bg-[#d4af37] transition-colors">
                      <BeakerIcon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                    </div>
                    <span>Healthy & Organic</span>
                  </Link>
                  <Link href="/products/tea-coffee-connoisseur-hamper" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 font-medium hover:bg-[#2A1D11] hover:text-white transition-all group">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg group-hover:bg-[#d4af37] transition-colors">
                      <CubeIcon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                    </div>
                    <span>Tea & Coffee Connoisseur</span>
                  </Link>
                  <Link href="/products/custom-corporate-hamper" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 font-medium hover:bg-[#2A1D11] hover:text-white transition-all group">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg group-hover:bg-[#d4af37] transition-colors">
                      <BuildingOfficeIcon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                    </div>
                    <span>Custom Corporate Hamper</span>
                  </Link>
                  <Link href="/products/mini-thank-you-hamper" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 font-medium hover:bg-[#2A1D11] hover:text-white transition-all group">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg group-hover:bg-[#d4af37] transition-colors">
                      <HandThumbUpIcon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                    </div>
                    <span>Mini Thank You Hamper</span>
                  </Link>
                  </div>
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
          <nav className="md:hidden mt-2 pb-3 flex flex-col gap-2 max-h-[70vh] overflow-y-auto">
            <Link href="/" onClick={closeMobileMenu} className="text-[#f4e4bc] text-sm font-medium hover:text-[#d4af37] transition-colors py-1.5 border-b border-[#d4af37]/20">
              Home
            </Link>
            
            {/* Mobile Products Section */}
            <div className="border-b border-[#d4af37]/20">
              <button 
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                className="text-[#f4e4bc] text-sm font-medium hover:text-[#d4af37] transition-colors py-1.5 w-full text-left flex items-center justify-between"
              >
                Products
                <ChevronDownIcon className={`w-3.5 h-3.5 transition-transform ${productsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {productsDropdownOpen && (
                <div className="pl-3 pb-1.5 flex flex-col gap-1">
                  <Link href="/products/classic-diwali-hamper" onClick={closeMobileMenu} className="text-[#f4e4bc] text-xs hover:text-[#d4af37] transition-colors py-1">
                    Classic Diwali Hamper
                  </Link>
                  <Link href="/products/luxury-diwali-hamper" onClick={closeMobileMenu} className="text-[#f4e4bc] text-xs hover:text-[#d4af37] transition-colors py-1">
                    Luxury Diwali Hamper
                  </Link>
                  <Link href="/products/corporate-diwali-box" onClick={closeMobileMenu} className="text-[#f4e4bc] text-xs hover:text-[#d4af37] transition-colors py-1">
                    Corporate Diwali Box
                  </Link>
                  <Link href="/products/christmas-cheer-hamper" onClick={closeMobileMenu} className="text-[#f4e4bc] text-xs hover:text-[#d4af37] transition-colors py-1">
                    Christmas Cheer Hamper
                  </Link>
                  <Link href="/products/new-year-celebration-hamper" onClick={closeMobileMenu} className="text-[#f4e4bc] text-xs hover:text-[#d4af37] transition-colors py-1">
                    New Year Celebration
                  </Link>
                  <Link href="/products/assorted-sweets-savories-hamper" onClick={closeMobileMenu} className="text-[#f4e4bc] text-xs hover:text-[#d4af37] transition-colors py-1">
                    Sweets & Savories
                  </Link>
                  <Link href="/products/healthy-organic-hamper" onClick={closeMobileMenu} className="text-[#f4e4bc] text-xs hover:text-[#d4af37] transition-colors py-1">
                    Healthy & Organic
                  </Link>
                  <Link href="/products/tea-coffee-connoisseur-hamper" onClick={closeMobileMenu} className="text-[#f4e4bc] text-xs hover:text-[#d4af37] transition-colors py-1">
                    Tea & Coffee Connoisseur
                  </Link>
                  <Link href="/products/custom-corporate-hamper" onClick={closeMobileMenu} className="text-[#f4e4bc] text-xs hover:text-[#d4af37] transition-colors py-1">
                    Custom Corporate
                  </Link>
                  <Link href="/products/mini-thank-you-hamper" onClick={closeMobileMenu} className="text-[#f4e4bc] text-xs hover:text-[#d4af37] transition-colors py-1">
                    Mini Thank You
                  </Link>
                </div>
              )}
            </div>
            
            <Link href="/#occasions" onClick={closeMobileMenu} className="text-[#f4e4bc] text-sm font-medium hover:text-[#d4af37] transition-colors py-1.5 border-b border-[#d4af37]/20">
              Occasions
            </Link>
            <Link href="/about" onClick={closeMobileMenu} className="text-[#f4e4bc] text-sm font-medium hover:text-[#d4af37] transition-colors py-1.5 border-b border-[#d4af37]/20">
              About
            </Link>
            <Link href="/contact" onClick={closeMobileMenu} className="text-[#f4e4bc] text-sm font-medium hover:text-[#d4af37] transition-colors py-1.5 border-b border-[#d4af37]/20">
              Contact
            </Link>
            <Link href="/corporate-hampers" onClick={closeMobileMenu} className="text-[#f4e4bc] text-sm font-medium hover:text-[#d4af37] transition-colors py-1.5 border-b border-[#d4af37]/20">
              Corporate Hampers
            </Link>
            <Link href="/christmas-hampers" onClick={closeMobileMenu} className="text-[#f4e4bc] text-sm font-medium hover:text-[#d4af37] transition-colors py-1.5">
              Christmas Hampers
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
