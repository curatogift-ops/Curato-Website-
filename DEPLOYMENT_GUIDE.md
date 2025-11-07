# Deployment Guide

## 🚀 Quick Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

3. **Configure Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add: `NEXT_PUBLIC_SITE_URL` = `https://your-domain.com`

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

## 🌐 Custom Domain Setup

### On Vercel

1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
4. Wait for DNS propagation (up to 48 hours)

## 📊 Environment Variables

### Required Variables

```env
# Production
NEXT_PUBLIC_SITE_URL=https://curatogift.com

# Optional - Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

### Setting Variables on Vercel

1. Project Settings → Environment Variables
2. Add each variable
3. Select environments (Production, Preview, Development)
4. Save and redeploy

## 🔧 Alternative Deployment Options

### Netlify

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build Configuration**
   Create `netlify.toml`:
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

### Cloudflare Pages

1. **Connect Repository**
   - Go to Cloudflare Pages
   - Connect your GitHub repo

2. **Build Settings**
   - Build command: `npm run build`
   - Build output: `.next`
   - Framework: Next.js

3. **Environment Variables**
   - Add `NEXT_PUBLIC_SITE_URL`

### Self-Hosted (VPS/Dedicated Server)

1. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. **Clone Repository**
   ```bash
   git clone <your-repo-url>
   cd site-next
   npm install
   ```

3. **Build Application**
   ```bash
   npm run build
   ```

4. **Start with PM2**
   ```bash
   npm install -g pm2
   pm2 start npm --name "curato-gift" -- start
   pm2 save
   pm2 startup
   ```

5. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name curatogift.com www.curatogift.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

6. **SSL with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d curatogift.com -d www.curatogift.com
   ```

## 🔍 Post-Deployment Verification

### Checklist

- [ ] Site accessible at production URL
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Videos play correctly
- [ ] Forms submit successfully
- [ ] Navigation works
- [ ] Mobile responsive
- [ ] SSL certificate active
- [ ] Sitemap accessible (/sitemap.xml)
- [ ] Robots.txt accessible (/robots.txt)

### Performance Testing

```bash
# Run Lighthouse
npx lighthouse https://curatogift.com --view

# Check Core Web Vitals
# Visit: https://pagespeed.web.dev/
```

### SEO Verification

1. **Submit Sitemap to Google**
   - Go to [Google Search Console](https://search.google.com/search-console)
   - Add property
   - Submit sitemap: `https://curatogift.com/sitemap.xml`

2. **Verify Structured Data**
   - Use [Rich Results Test](https://search.google.com/test/rich-results)
   - Enter your URL
   - Verify no errors

3. **Check Indexing**
   ```
   site:curatogift.com
   ```
   Search on Google to see indexed pages

## 📈 Monitoring & Analytics

### Google Analytics Setup

1. **Create GA4 Property**
   - Go to [Google Analytics](https://analytics.google.com)
   - Create new property
   - Get Measurement ID

2. **Add to Environment Variables**
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

3. **Add Tracking Code** (if not using built-in)
   Create `app/analytics.tsx`:
   ```typescript
   import Script from 'next/script'

   export function Analytics() {
     return (
       <>
         <Script
           src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
           strategy="afterInteractive"
         />
         <Script id="google-analytics" strategy="afterInteractive">
           {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
           `}
         </Script>
       </>
     )
   }
   ```

### Error Tracking (Sentry)

1. **Install Sentry**
   ```bash
   npm install @sentry/nextjs
   ```

2. **Initialize**
   ```bash
   npx @sentry/wizard@latest -i nextjs
   ```

3. **Configure**
   Follow wizard prompts to set up

## 🔄 CI/CD Pipeline

### GitHub Actions (Already Configured)

The project includes `.github/workflows/ci-cd.yml` which:
- Runs on push to main/develop
- Lints and type-checks code
- Builds the application
- Runs Lighthouse CI on PRs
- Deploys to Vercel

### Required Secrets

Add these to GitHub repository secrets:

```
VERCEL_TOKEN=<your-vercel-token>
VERCEL_ORG_ID=<your-org-id>
VERCEL_PROJECT_ID=<your-project-id>
LHCI_GITHUB_APP_TOKEN=<lighthouse-ci-token>
```

## 🛠️ Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading

- Check image paths in `public/` directory
- Verify `next.config.ts` image configuration
- Check browser console for errors

### Environment Variables Not Working

- Ensure variables start with `NEXT_PUBLIC_` for client-side
- Restart dev server after adding variables
- Verify variables are set in deployment platform

### Performance Issues

```bash
# Analyze bundle size
npm run build
npx @next/bundle-analyzer
```

## 📞 Support

For deployment issues:
- Check [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- Check [Vercel Docs](https://vercel.com/docs)
- Contact: info@curatogift.com

---

**Last Updated**: November 7, 2025
