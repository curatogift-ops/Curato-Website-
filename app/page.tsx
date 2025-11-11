import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import GiftsSection from '@/components/sections/GiftsSection';
import OccasionsSection from '@/components/sections/OccasionsSection';
import ChristmasSection from '@/components/sections/ChristmasSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

export const metadata: Metadata = {
  title: 'Luxury Gift Hampers & Baskets | Curato Gift',
  description: 'Premium curated hampers and gift baskets for all occasions: birthdays, anniversaries, Christmas, and corporate gifting.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Luxury Gift Hampers & Baskets | Curato Gift',
    description: 'Premium curated hampers and gift baskets for all occasions.',
    type: 'website',
    url: 'https://www.curatogift.com/',
    siteName: 'Curato Gift',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Gift Hampers & Baskets | Curato Gift',
    description: 'Premium curated hampers and gift baskets for all occasions.',
  },
};

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Curato Gift',
    description: 'Luxury gift hampers and premium gift baskets for all occasions',
    url: 'https://curatogift.com',
    logo: 'https://curatogift.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-XXXXXXXXXX',
      contactType: 'Customer Service',
      email: 'info@curatogift.com',
    },
    sameAs: [
      'https://www.facebook.com/curatogift',
      'https://www.instagram.com/curatogift',
      'https://www.youtube.com/curatogift',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroSection />
      <GiftsSection />
      <OccasionsSection />
      <ChristmasSection />
      <TestimonialsSection />
    </>
  );
}
