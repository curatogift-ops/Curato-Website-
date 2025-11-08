'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface DropdownItem {
  label: string;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  label: string;
  items: DropdownItem[];
  buttonClassName?: string;
  dropdownClassName?: string;
}

export default function Dropdown({ 
  label, 
  items, 
  buttonClassName = '',
  dropdownClassName = '' 
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center justify-between gap-3
          px-6 py-3 
          bg-white 
          border-2 border-gray-200 
          rounded-xl 
          shadow-md
          hover:border-gray-300
          hover:shadow-lg
          transition-all duration-200
          min-w-[200px]
          ${buttonClassName}
        `}
      >
        <span className="text-gray-800 font-semibold text-lg">{label}</span>
        <ChevronDownIcon 
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div 
          className={`
            absolute top-full left-0 mt-2
            w-full min-w-[280px]
            bg-white 
            border-2 border-gray-100
            rounded-2xl 
            shadow-2xl
            py-2
            z-50
            animate-fadeIn
            ${dropdownClassName}
          `}
        >
          {items.map((item, index) => (
            <div key={index}>
              {item.href ? (
                <a
                  href={item.href}
                  className="
                    block px-6 py-4
                    text-gray-700 text-base font-medium
                    hover:bg-gray-50
                    transition-colors duration-150
                  "
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <button
                  onClick={() => {
                    item.onClick?.();
                    setIsOpen(false);
                  }}
                  className="
                    w-full text-left px-6 py-4
                    text-gray-700 text-base font-medium
                    hover:bg-gray-50
                    transition-colors duration-150
                  "
                >
                  {item.label}
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
