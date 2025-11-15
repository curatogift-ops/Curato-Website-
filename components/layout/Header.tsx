'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  MagnifyingGlassIcon, 
  UserCircleIcon, 
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  SparklesIcon,
  GiftIcon,
  BriefcaseIcon,
  CakeIcon,
  FireIcon,
  HeartIcon,
  BeakerIcon,
  CubeIcon,
  BuildingOfficeIcon,
  HandThumbUpIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [occasionsDropdownOpen, setOccasionsDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    setOccasionsDropdownOpen(false);
    setCompanyDropdownOpen(false);
    setProfileDropdownOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-[#2A1D11] shadow-lg" suppressHydrationWarning>
      <div className="max-w-[1400px] mx-auto px-5 py-1 relative" suppressHydrationWarning>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/Group 3 (4).png"
              alt="Curato — The Art of Gifting"
              width={1000}
              height={400}
              priority
              className="h-16 md:h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 items-center">
            <Link href="/" className="text-white text-base font-medium hover:text-gray-300 transition-colors relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </Link>
            
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button className="text-white text-base font-medium hover:text-gray-300 transition-colors relative group flex items-center gap-1 py-2">
                Products
                <ChevronDownIcon className="w-4 h-4" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </button>
              
              {productsDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[320px] max-w-[90vw] z-50">
                  <div className="bg-white border-2 border-gray-100 rounded-2xl shadow-2xl py-2 animate-fadeIn max-h-[70vh] overflow-y-auto scrollbar-hide">
                  <Link href="/products/classic-diwali-hamper" className="flex items-center gap-3 px-4 py-2 text-xs text-gray-700 font-medium hover:bg-[#2A1D11] hover:text-white transition-all group">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg group-hover:bg-white transition-colors">
                      <SparklesIcon className="w-5 h-5 text-gray-600 group-hover:text-[#2A1D11] transition-colors" />
                    </div>
                    <span>Classic Diwali Hamper</span>
                  </Link>
                  <Link href="/products/luxury-diwali-hamper" className="flex items-center gap-3 px-4 py-2 text-xs text-gray-700 font-medium hover:bg-[#2A1D11] hover:text-white transition-all group">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg group-hover:bg-white transition-colors">
                      <GiftIcon className="w-5 h-5 text-gray-600 group-hover:text-[#2A1D11] transition-colors" />
                    </div>
                    <span>Luxury Diwali Hamper</span>
                  </Link>
                  <Link href="/products/corporate-diwali-box" className="flex items-center gap-3 px-4 py-2 text-xs text-gray-700 font-medium hover:bg-[#2A1D11] hover:text-white transition-all group">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg group-hover:bg-white transition-colors">
                      <BriefcaseIcon className="w-5 h-5 text-gray-600 group-hover:text-[#2A1D11] transition-colors" />
                    </div>
                    <span>Corporate Diwali Box</span>
                  </Link>
                  <Link href="/products/christmas-cheer-hamper" className="flex items-center gap-3 px-4 py-2 text-xs text-gray-700 font-medium hover:bg-[#2A1D11] hover:text-white transition-all group">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg group-hover:bg-white transition-colors">
                      <CakeIcon className="w-5 h-5 text-gray-600 group-hover:text-[#2A1D11] transition-colors" />
                    </div>
                    <span>Christmas Cheer Hamper</span>
                  </Link>
                  <Link href="/products/new-year-celebration-hamper" className="flex items-center gap-3 px-4 py-2 text-xs text-gray-700 font-medium hover:bg-[#2A1D11] hover:text-white transition-all group">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg group-hover:bg-white transition-colors">
                      <FireIcon className="w-5 h-5 text-gray-600 group-hover:text-[#2A1D11] transition-colors" />
                    </div>
                    <span>New Year Celebration</span>
                  </Link>
                  <Link href="/products/assorted-sweets-savories-hamper" className="flex items-center gap-3 px-4 py-2 text-xs text-gray-700 font-medium hover:bg-[#2A1D11] hover:text-white transition-all group">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg group-hover:bg-white transition-colors">
                      <HeartIcon className="w-5 h-5 text-gray-600 group-hover:text-[#2A1D11] transition-colors" />
                    </div>
                    <span>Sweets & Savories</span>
                  </Link>
                  <Link href="/products/healthy-organic-hamper" className="flex items-center gap-3 px-4 py-2 text-xs text-gray-700 font-medium hover:bg-[#2A1D11] hover:text-white transition-all group">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg group-hover:bg-white transition-colors">
                      <BeakerIcon className="w-5 h-5 text-gray-600 group-hover:text-[#2A1D11] transition-colors" />
                    </div>
                    <span>Healthy & Organic</span>
                  </Link>
                  <Link href="/products/tea-coffee-connoisseur-hamper" className="flex items-center gap-3 px-4 py-2 text-xs text-gray-700 font-medium hover:bg-[#2A1D11] hover:text-white transition-all group">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg group-hover:bg-white transition-colors">
                      <CubeIcon className="w-5 h-5 text-gray-600 group-hover:text-[#2A1D11] transition-colors" />
                    </div>
                    <span>Tea & Coffee Connoisseur</span>
                  </Link>
                  <Link href="/products/custom-corporate-hamper" className="flex items-center gap-3 px-4 py-2 text-xs text-gray-700 font-medium hover:bg-[#2A1D11] hover:text-white transition-all group">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg group-hover:bg-white transition-colors">
                      <BuildingOfficeIcon className="w-5 h-5 text-gray-600 group-hover:text-[#2A1D11] transition-colors" />
                    </div>
                    <span>Custom Corporate Hamper</span>
                  </Link>
                  <Link href="/products/mini-thank-you-hamper" className="flex items-center gap-3 px-4 py-2 text-xs text-gray-700 font-medium hover:bg-[#2A1D11] hover:text-white transition-all group">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg group-hover:bg-white transition-colors">
                      <HandThumbUpIcon className="w-5 h-5 text-gray-600 group-hover:text-[#2A1D11] transition-colors" />
                    </div>
                    <span>Mini Thank You Hamper</span>
                  </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link href="/#occasions" className="text-white text-base font-medium hover:text-gray-300 transition-colors relative group">
              Occasions
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="text-white text-base font-medium hover:text-gray-300 transition-colors relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/contact" className="text-white text-base font-medium hover:text-gray-300 transition-colors relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/corporate-hampers" className="text-white text-base font-medium hover:text-gray-300 transition-colors relative group">
              Corporate Hampers
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/christmas-hampers" className="text-white text-base font-medium hover:text-gray-300 transition-colors relative group">
              Christmas Hampers
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Hamburger Menu Toggle - Top Right (Mobile Only) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-1 z-[60] relative"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="w-8 h-8" />
            ) : (
              <Bars3Icon className="w-8 h-8" />
            )}
          </button>

          {/* Icons */}
          <div className="hidden md:flex gap-4 items-center">
            <button className="text-white hover:text-gray-300 transition-colors" aria-label="Search">
              <MagnifyingGlassIcon className="w-6 h-6" />
            </button>
            <Link href="/account" className="text-white hover:text-gray-300 transition-colors" aria-label="Account">
              <UserCircleIcon className="w-7 h-7" />
            </Link>
            <Link href="/cart" className="text-white hover:text-gray-300 transition-colors relative" aria-label="Shopping cart">
              <ShoppingCartIcon className="w-7 h-7" />
              <span className="absolute -top-2 -right-2 bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">
                0
              </span>
            </Link>
          </div>
        </div>

        {/* Hamburger Menu Dropdown - Opens from Header */}
        {mobileMenuOpen && (
          <>
            {/* Overlay/Backdrop */}
            <div 
              className="fixed inset-0 bg-black/30 z-[55] transition-opacity"
              onClick={closeMobileMenu}
            />
            
            {/* Dropdown Menu */}
            <nav className="absolute top-full left-5 right-5 bg-[#f5f5f5] z-[60] shadow-2xl max-h-[85vh] overflow-y-auto animate-fadeIn mt-2 rounded-lg">
              {/* Menu Items */}
              <div className="flex flex-col pt-2">
                {/* Products - Collapsible */}
                <div className="border-b border-gray-300">
                  <button 
                    onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                    className="text-gray-700 text-base font-medium hover:bg-gray-200 transition-colors px-5 py-3 w-full text-left flex items-center justify-between border-t border-blue-200 border-b border-blue-200"
                  >
                    PRODUCTS
                    {productsDropdownOpen ? (
                      <ChevronUpIcon className="w-4 h-4" />
                    ) : (
                      <ChevronDownIcon className="w-4 h-4" />
                    )}
                  </button>
                  {productsDropdownOpen && (
                    <div className="bg-[#f5f5f5] flex flex-col">
                      <Link href="/products/classic-diwali-hamper" onClick={closeMobileMenu} className="text-gray-700 text-sm hover:bg-gray-200 transition-colors px-8 py-2.5 border-b border-gray-200">
                        Classic Diwali Hamper
                      </Link>
                      <Link href="/products/luxury-diwali-hamper" onClick={closeMobileMenu} className="text-gray-700 text-sm hover:bg-gray-200 transition-colors px-8 py-2.5 border-b border-gray-200">
                        Luxury Diwali Hamper
                      </Link>
                      <Link href="/products/corporate-diwali-box" onClick={closeMobileMenu} className="text-gray-700 text-sm hover:bg-gray-200 transition-colors px-8 py-2.5 border-b border-gray-200">
                        Corporate Diwali Box
                      </Link>
                      <Link href="/products/christmas-cheer-hamper" onClick={closeMobileMenu} className="text-gray-700 text-sm hover:bg-gray-200 transition-colors px-8 py-2.5 border-b border-gray-200">
                        Christmas Cheer Hamper
                      </Link>
                      <Link href="/products/new-year-celebration-hamper" onClick={closeMobileMenu} className="text-gray-700 text-sm hover:bg-gray-200 transition-colors px-8 py-2.5 border-b border-gray-200">
                        New Year Celebration
                      </Link>
                      <Link href="/products/assorted-sweets-savories-hamper" onClick={closeMobileMenu} className="text-gray-700 text-sm hover:bg-gray-200 transition-colors px-8 py-2.5 border-b border-gray-200">
                        Sweets & Savories
                      </Link>
                      <Link href="/products/healthy-organic-hamper" onClick={closeMobileMenu} className="text-gray-700 text-sm hover:bg-gray-200 transition-colors px-8 py-2.5 border-b border-gray-200">
                        Healthy & Organic
                      </Link>
                      <Link href="/products/tea-coffee-connoisseur-hamper" onClick={closeMobileMenu} className="text-gray-700 text-sm hover:bg-gray-200 transition-colors px-8 py-2.5 border-b border-gray-200">
                        Tea & Coffee Connoisseur
                      </Link>
                      <Link href="/products/custom-corporate-hamper" onClick={closeMobileMenu} className="text-gray-700 text-sm hover:bg-gray-200 transition-colors px-8 py-2.5 border-b border-gray-200">
                        Custom Corporate
                      </Link>
                      <Link href="/products/mini-thank-you-hamper" onClick={closeMobileMenu} className="text-gray-700 text-sm hover:bg-gray-200 transition-colors px-8 py-2.5 border-b border-gray-200">
                        Mini Thank You
                      </Link>
                    </div>
                  )}
                </div>
                
                {/* Occasions - Collapsible */}
                <div className="border-b border-gray-300">
                  <button 
                    onClick={() => setOccasionsDropdownOpen(!occasionsDropdownOpen)}
                    className="text-gray-700 text-base font-medium hover:bg-gray-200 transition-colors px-5 py-3 w-full text-left flex items-center justify-between"
                  >
                    OCCASIONS
                    {occasionsDropdownOpen ? (
                      <ChevronUpIcon className="w-4 h-4" />
                    ) : (
                      <ChevronDownIcon className="w-4 h-4" />
                    )}
                  </button>
                  {occasionsDropdownOpen && (
                    <div className="bg-[#f5f5f5] flex flex-col">
                      <Link href="/#occasions" onClick={closeMobileMenu} className="text-gray-700 text-sm hover:bg-gray-200 transition-colors px-8 py-2.5 border-b border-gray-200">
                        All Occasions
                      </Link>
                      <Link href="/christmas-hampers" onClick={closeMobileMenu} className="text-gray-700 text-sm hover:bg-gray-200 transition-colors px-8 py-2.5 border-b border-gray-200">
                        Christmas
                      </Link>
                      <Link href="/for-him-her" onClick={closeMobileMenu} className="text-gray-700 text-sm hover:bg-gray-200 transition-colors px-8 py-2.5 border-b border-gray-200">
                        For Him & Her
                      </Link>
                      <Link href="/get-well-soon" onClick={closeMobileMenu} className="text-gray-700 text-sm hover:bg-gray-200 transition-colors px-8 py-2.5 border-b border-gray-200">
                        Get Well Soon
                      </Link>
                    </div>
                  )}
                </div>
                
                {/* Company - Collapsible */}
                <div className="border-b border-gray-300">
                  <button 
                    onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
                    className="text-gray-700 text-base font-medium hover:bg-gray-200 transition-colors px-5 py-3 w-full text-left flex items-center justify-between"
                  >
                    COMPANY
                    {companyDropdownOpen ? (
                      <ChevronUpIcon className="w-4 h-4" />
                    ) : (
                      <ChevronDownIcon className="w-4 h-4" />
                    )}
                  </button>
                  {companyDropdownOpen && (
                    <div className="bg-[#f5f5f5] flex flex-col">
                      <Link href="/about" onClick={closeMobileMenu} className="text-gray-700 text-sm hover:bg-gray-200 transition-colors px-8 py-2.5 border-b border-gray-200">
                        About Us
                      </Link>
                      <Link href="/corporate-hampers" onClick={closeMobileMenu} className="text-gray-700 text-sm hover:bg-gray-200 transition-colors px-8 py-2.5 border-b border-gray-200">
                        Corporate Hampers
                      </Link>
                    </div>
                  )}
                </div>
                
                {/* Contact */}
                <Link 
                  href="/contact" 
                  onClick={closeMobileMenu} 
                  className="text-gray-700 text-base font-medium hover:bg-gray-200 transition-colors px-5 py-3 border-b border-gray-300"
                >
                  CONTACT
                </Link>
              </div>

              {/* Call Us Button */}
              <div className="px-5 py-6">
                <a 
                  href="tel:+919876543210" 
                  className="w-full bg-black text-white font-semibold py-3 px-4 rounded flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
                >
                  <PhoneIcon className="w-5 h-5" />
                  CALL US - +91 98765 43210
                </a>
              </div>
            </nav>
          </>
        )}
      </div>
    </header>
  );
}
