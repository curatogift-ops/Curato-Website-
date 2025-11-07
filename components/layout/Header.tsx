'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  MagnifyingGlassIcon, 
  UserCircleIcon, 
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#2a1d11] shadow-lg">
      <div className="max-w-[1400px] mx-auto px-5 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-[#d4af37] text-xl md:text-2xl font-semibold tracking-wider">
            Curato Gifting
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 items-center">
            <Link href="/" className="text-[#f4e4bc] text-sm font-medium hover:text-[#d4af37] transition-colors relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/#occasions" className="text-[#f4e4bc] text-sm font-medium hover:text-[#d4af37] transition-colors relative group">
              Occasions
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/custom" className="text-[#f4e4bc] text-sm font-medium hover:text-[#d4af37] transition-colors relative group">
              Custom
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="text-[#f4e4bc] text-sm font-medium hover:text-[#d4af37] transition-colors relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/contact" className="text-[#f4e4bc] text-sm font-medium hover:text-[#d4af37] transition-colors relative group">
              Contact
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
            <Link href="/#occasions" className="text-[#f4e4bc] text-base font-medium hover:text-[#d4af37] transition-colors py-2 border-b border-[#d4af37]/20">
              Occasions
            </Link>
            <Link href="/custom" className="text-[#f4e4bc] text-base font-medium hover:text-[#d4af37] transition-colors py-2 border-b border-[#d4af37]/20">
              Custom
            </Link>
            <Link href="/about" className="text-[#f4e4bc] text-base font-medium hover:text-[#d4af37] transition-colors py-2 border-b border-[#d4af37]/20">
              About
            </Link>
            <Link href="/contact" className="text-[#f4e4bc] text-base font-medium hover:text-[#d4af37] transition-colors py-2">
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
