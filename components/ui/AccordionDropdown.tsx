"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface Item {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface Section {
  title: string;
  items?: Item[];
  defaultOpen?: boolean;
}

interface AccordionDropdownProps {
  sections: Section[];
  className?: string;
}

export default function AccordionDropdown({ sections, className = "" }: AccordionDropdownProps) {
  const [open, setOpen] = useState<Record<number, boolean>>(
    Object.fromEntries(sections.map((s, i) => [i, !!s.defaultOpen]))
  );

  const toggle = (i: number) => setOpen((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <aside
      className={`w-full max-w-xs bg-white rounded-xl border border-gray-200 p-4 ${className}`}
      aria-label="Accordion dropdown"
    >
      <div className="space-y-3">
        {sections.map((section, i) => (
          <div key={i} className="border-b border-gray-100">
            <button
              type="button"
              className="flex w-full items-center justify-between py-3 text-xs font-semibold uppercase tracking-wide text-gray-800"
              onClick={() => toggle(i)}
              aria-expanded={open[i]}
            >
              <span>{section.title}</span>
              <ChevronDownIcon
                className={`w-4 h-4 text-gray-600 transition-transform ${open[i] ? "rotate-180" : ""}`}
              />
            </button>
            {open[i] && section.items && section.items.length > 0 && (
              <div className="pb-3 space-y-2">
                {section.items.map((item, j) => (
                  item.href ? (
                    <a
                      key={j}
                      href={item.href}
                      className="block w-full rounded-md bg-gray-100 text-gray-800 text-xs font-semibold uppercase tracking-wide px-3 py-2 hover:bg-gray-200 transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <button
                      key={j}
                      onClick={item.onClick}
                      className="w-full text-left rounded-md bg-gray-100 text-gray-800 text-xs font-semibold uppercase tracking-wide px-3 py-2 hover:bg-gray-200 transition-colors"
                    >
                      {item.label}
                    </button>
                  )
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}

