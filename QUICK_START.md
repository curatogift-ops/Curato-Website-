# Quick Start Guide

Get the Curato Gift Next.js website running in 5 minutes.

## Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm
- Git (optional)

## Installation

```bash
# Navigate to project directory
cd site-next

# Install dependencies
npm install
```

## Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint

# Type checking
npx tsc --noEmit     # Check TypeScript errors
```

## File Structure Overview

```
site-next/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── sitemap.ts         # Sitemap generation
│   └── robots.ts          # Robots.txt
├── components/            # React components
│   ├── layout/           # Header, Footer
│   └── sections/         # Page sections
├── public/               # Static assets
│   ├── images/          # Images
│   └── videos/          # Videos
└── Configuration files
```

## Making Changes

### Update Content

**Hero Section**
- Edit: `components/sections/HeroSection.tsx`
- Change text, video, or styling

**Gifts Section**
- Edit: `components/sections/GiftsSection.tsx`
- Update categories array

**Footer**
- Edit: `components/layout/Footer.tsx`
- Update links, contact info

### Add New Page

1. Create file in `app/` directory:
   ```typescript
   // app/about/page.tsx
   export default function About() {
     return <div>About Page</div>
   }
   ```

2. Add to navigation in `components/layout/Header.tsx`

3. Update `app/sitemap.ts`

### Styling

Using Tailwind CSS utility classes:

```tsx
<div className="bg-blue-500 text-white p-4 rounded-lg">
  Content
</div>
```

Common patterns:
- Spacing: `p-4`, `m-4`, `gap-4`
- Colors: `bg-[#d4af37]`, `text-white`
- Responsive: `md:text-lg`, `lg:grid-cols-4`

## Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Common Tasks

### Add New Image

1. Place image in `public/images/`
2. Use in component:
   ```tsx
   import Image from 'next/image'
   
   <Image
     src="/images/my-image.jpg"
     alt="Description"
     width={500}
     height={300}
   />
   ```

### Update SEO

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "New Title",
  description: "New description",
  // ...
}
```

### Add New Section

1. Create component:
   ```tsx
   // components/sections/NewSection.tsx
   export default function NewSection() {
     return <section>Content</section>
   }
   ```

2. Import in `app/page.tsx`:
   ```tsx
   import NewSection from '@/components/sections/NewSection'
   
   export default function Home() {
     return (
       <>
         <HeroSection />
         <NewSection />
         {/* ... */}
       </>
     )
   }
   ```

## Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### Module Not Found

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

### Images Not Loading

- Check file path: `/images/filename.jpg`
- Verify file exists in `public/images/`
- Check browser console for errors

### Build Errors

```bash
# Check TypeScript errors
npx tsc --noEmit

# Check linting
npm run lint

# Clear and rebuild
rm -rf .next
npm run build
```

## Testing

### Manual Testing

1. Start dev server: `npm run dev`
2. Open browser: `http://localhost:3000`
3. Test all sections
4. Check mobile responsive (DevTools)
5. Verify all links work

### Build Testing

```bash
# Build and test production
npm run build
npm start
```

## Deployment

### Quick Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or push to GitHub and import in Vercel dashboard.

## Resources

- **Full Documentation**: See `README.md`
- **Deployment Guide**: See `DEPLOYMENT_GUIDE.md`
- **Testing Checklist**: See `TESTING_CHECKLIST.md`
- **Migration Details**: See `MIGRATION_MAPPING.md`

## Getting Help

- Check documentation files
- Review Next.js docs: https://nextjs.org/docs
- Check Tailwind docs: https://tailwindcss.com/docs
- Contact: info@curatogift.com

---

**Ready to start?** Run `npm run dev` and open http://localhost:3000
