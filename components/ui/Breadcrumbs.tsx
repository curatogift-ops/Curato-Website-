"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const LABEL_OVERRIDES: Record<string, string> = {
  "": "Home",
  "about": "About",
  "contact": "Contact",
  "corporate-hampers": "Corporate Hampers",
  "christmas-hampers": "Christmas Hampers",
  "for-him-her": "For Him & Her",
  "get-well-soon": "Get Well Soon",
  "products": "Products",
};

const LINKABLE_ROUTES = new Set<string>([
  "/",
  "/about",
  "/contact",
  "/corporate-hampers",
  "/christmas-hampers",
  "/for-him-her",
  "/get-well-soon",
  "/dropdown-example",
]);

function toTitleCase(segment: string) {
  const cleaned = decodeURIComponent(segment).replace(/-/g, " ");
  if (LABEL_OVERRIDES[segment]) return LABEL_OVERRIDES[segment];
  return cleaned
    .split(" ")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function Breadcrumbs() {
  const pathname = usePathname();

  if (!pathname || pathname === "/") return null; // No breadcrumb on home

  const parts = pathname.split("/").filter(Boolean);

  const items = useMemo(() => {
    const result: { href: string; label: string }[] = [
      { href: "/", label: "Home" },
    ];
    let acc = "";
    parts.forEach((segment) => {
      acc += `/${segment}`;
      result.push({ href: acc, label: toTitleCase(segment) });
    });
    return result;
  }, [parts]);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: it.label,
      item: index < items.length - 1 ? it.href : undefined,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="bg-[#3D2817]/90">
      <div className="max-w-[1400px] mx-auto px-5 py-2">
        <ol className="flex flex-wrap items-center gap-1 text-sm">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            const canLink = LINKABLE_ROUTES.has(item.href) && !isLast;
            return (
              <li key={item.href} className="flex items-center">
                {canLink ? (
                  <Link href={item.href} className="text-[#f4e4bc] hover:text-[#d4af37] font-medium">
                    {item.label}
                  </Link>
                ) : (
                  <span className={isLast ? "text-white font-semibold" : "text-[#f4e4bc]/80"}>{item.label}</span>
                )}
                {!isLast && <span className="mx-2 text-[#d4af37]">/</span>}
              </li>
            );
          })}
        </ol>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </nav>
  );
}

