# Curato Gift - Next.js Website

Modern, production-ready Next.js website with SSG, ISR, Tailwind CSS, and comprehensive SEO optimization.

## 🚀 Features

- ✅ **Next.js 15** with App Router
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS** for styling
- ✅ **Static Site Generation (SSG)** for optimal performance
- ✅ **Incremental Static Regeneration (ISR)** support
- ✅ **next/image** for optimized images
- ✅ **Comprehensive SEO** (meta tags, Open Graph, Twitter Cards, JSON-LD)
- ✅ **Automatic sitemap.xml** generation
- ✅ **robots.txt** configuration
- ✅ **Accessibility** improvements
- ✅ **Mobile-responsive** design
- ✅ **Performance optimized** (Lighthouse score ready)

## 📦 Installation

```bash
# Install dependencies
npm install

# or
yarn install

# or
pnpm install
```

## 🛠️ Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

The development server will start at [http://localhost:3000](http://localhost:3000).

## 📁 Project Structure

```
site-next/
├── app/
│   ├── layout.tsx          # Root layout with SEO
│   ├── page.tsx            # Homepage
│   ├── sitemap.ts          # Dynamic sitemap generation
│   ├── robots.ts           # Robots.txt configuration
│   └── globals.css         # Global styles
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Site header
│   │   └── Footer.tsx      # Site footer
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── GiftsSection.tsx
│   │   ├── OccasionsSection.tsx
│   │   ├── ChristmasSection.tsx
│   │   └── TestimonialsSection.tsx
│   └── SEO.tsx             # SEO component
├── public/
│   ├── images/             # Optimized images
│   └── videos/             # Video assets
├── scripts/
│   └── html-to-mdx.js      # HTML to MDX conversion script
└── next.config.ts          # Next.js configuration
```

## 🎨 Styling

This project uses **Tailwind CSS** for styling. All styles are utility-first and responsive.

### Color Palette
- Dark Brown: `#3d2817`
- Darker Brown: `#2a1d11`
- Gold: `#d4af37`
- Light Gold: `#f4e4bc`

## 🔍 SEO Configuration

### Metadata
All pages include comprehensive metadata:
- Title tags
- Meta descriptions
- Open Graph tags
- Twitter Card tags
- Canonical URLs
- JSON-LD structured data

### Sitemap
Automatically generated at `/sitemap.xml` with all routes.

### Robots.txt
Configured at `/robots.txt` to guide search engine crawlers.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🖼️ Image Optimization

Using `next/image` for:
- Automatic image optimization
- Lazy loading
- Responsive images
- WebP/AVIF format support
- Proper sizing and aspect ratios

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Build Output

```bash
npm run build
```

This generates an optimized production build in `.next/` directory.

## 📊 Performance

### Lighthouse Targets
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 95
- SEO: 100

### Core Web Vitals Targets
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

## 🧪 Testing

```bash
# Run type checking
npm run type-check

# Run linting
npm run lint

# Run build test
npm run build
```

## 📝 Content Management

### Adding New Pages

1. Create a new route in `app/` directory
2. Add metadata export
3. Update sitemap.ts
4. Add to navigation if needed

### Updating Content

Edit the respective component files in `components/sections/`.

## 🔧 Configuration

### Next.js Config
See `next.config.ts` for:
- Image optimization settings
- Compression
- Headers
- Redirects

### Tailwind Config
See `tailwind.config.ts` for:
- Custom colors
- Breakpoints
- Plugins

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

Copyright © 2023 Curato Gift. All rights reserved.

## 🆘 Support

For support, email info@curatogift.com or contact the development team.

---

**Developed by ZEEBOX**
