  # 🚀 Hotjar Clone Tracking Integration Guide

  **For Next.js 16.0.1 + React 19.2.0 + TypeScript 5**

  ---

  ## 📋 Quick Start

  Your website uses:
  - ✅ **Next.js**: 16.0.1 (App Router)
  - ✅ **React**: 19.2.0
  - ✅ **TypeScript**: 5.x
  - ✅ **Tailwind CSS**: 4.x

  ---

  ## 🎯 Method 1: Using Next.js Script Component (Recommended)

  This is the **best approach** for Next.js 16 as it optimizes script loading and supports SSR.

  ### **Step 1: Get Your Tracking Code**

  1. Go to **Sites** page in your Hotjar Clone dashboard
  2. Click **"Get Tracking Code"** button
  3. Copy the **Script Tag URL** from Option 1:
    ```
    http://localhost:8000/api/heatmaps/tracking-script/YOUR_SITE_ID/
    ```

  ### **Step 2: Add to Root Layout**

  **Edit `app/layout.tsx`:**

  ```tsx
  import type { Metadata } from 'next'
  import Script from 'next/script'
  import './globals.css'

  export const metadata: Metadata = {
    title: 'Your App',
    description: 'Your app description',
  }

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode
  }>) {
    return (
      <html lang="en">
        <body>
          {children}
          
          {/* Hotjar Clone Tracking Script */}
          <Script
            src="http://localhost:8000/api/heatmaps/tracking-script/YOUR_SITE_ID/"
            strategy="afterInteractive"
          />
        </body>
      </html>
    )
  }
  ```

  **Important:** Replace `YOUR_SITE_ID` with your actual site ID (e.g., `2` or `3`)

  ### **Script Loading Strategies:**

  - ✅ **`afterInteractive`** (Recommended): Loads after page becomes interactive
  - `lazyOnload`: Loads during browser idle time (for non-critical tracking)
  - `beforeInteractive`: Loads before page hydration (rarely needed)

  ---

  ## 🎯 Method 2: Environment Variables (Production Ready)

  For better flexibility across development and production environments.

  ### **Step 1: Create Environment Variables**

  **Create `.env.local` in your project root:**


  ```tsx
  import type { Metadata } from 'next'
  import Script from 'next/script'
  import './globals.css'

  export const metadata: Metadata = {
    title: 'Your App',
    description: 'Your app description',
  }

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode
  }>) {
    const trackingUrl = `${process.env.NEXT_PUBLIC_API_URL}/heatmaps/tracking-script/${process.env.NEXT_PUBLIC_TRACKING_SITE_ID}/`

    return (
      <html lang="en">
        <body>
          {children}
          
          {/* Hotjar Clone Tracking Script */}
          {process.env.NEXT_PUBLIC_API_URL && (
            <Script
              src={trackingUrl}
              strategy="afterInteractive"
            />
          )}
        </body>
      </html>
    )
  }
  ```

  ### **Step 3: Add to .gitignore**

  Make sure `.env.local` is in your `.gitignore`:

  ```gitignore
  # Environment variables
  .env*.local
  .env.local
  ```

  ---

  ## 🎯 Method 3: Custom Tracking Component (Advanced)

  For more control and TypeScript type safety.

  ### **Step 1: Create Tracking Component**

  **Create `components/TrackingScript.tsx`:**

  ```tsx
  'use client'

  import Script from 'next/script'

  interface TrackingScriptProps {
    siteId: string | number
    apiUrl?: string
  }

  export default function TrackingScript({ 
    siteId, 
    apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api' 
  }: TrackingScriptProps) {
    const trackingUrl = `${apiUrl}/heatmaps/tracking-script/${siteId}/`

    const handleLoad = () => {
      console.log('✅ Hotjar Clone tracking initialized')
    }

    const handleError = () => {
      console.error('❌ Failed to load Hotjar Clone tracking script')
    }

    return (
      <Script
        src={trackingUrl}
        strategy="afterInteractive"
        onLoad={handleLoad}
        onError={handleError}
      />
    )
  }
  ```

  ### **Step 2: Use in Layout**

  **Edit `app/layout.tsx`:**

  ```tsx
  import type { Metadata } from 'next'
  import TrackingScript from '@/components/TrackingScript'
  import './globals.css'

  export const metadata: Metadata = {
    title: 'Your App',
    description: 'Your app description',
  }

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode
  }>) {
    return (
      <html lang="en">
        <body>
          {children}
          
          {/* Hotjar Clone Tracking */}
          <TrackingScript siteId={3} />
        </body>
      </html>
    )
  }
  ```

  ---

  ## 🎯 Method 4: Conditional Loading (Dev vs Prod)

  Only load tracking in production to avoid tracking development activity.

  **Edit `app/layout.tsx`:**

  ```tsx
  import type { Metadata } from 'next'
  import Script from 'next/script'
  import './globals.css'

  export const metadata: Metadata = {
    title: 'Your App',
    description: 'Your app description',
  }

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode
  }>) {
    const isProduction = process.env.NODE_ENV === 'production'
    const trackingUrl = `${process.env.NEXT_PUBLIC_API_URL}/heatmaps/tracking-script/${process.env.NEXT_PUBLIC_TRACKING_SITE_ID}/`

    return (
      <html lang="en">
        <body>
          {children}
          
          {/* Only load tracking in production */}
          {isProduction && (
            <Script
              src={trackingUrl}
              strategy="afterInteractive"
            />
          )}
        </body>
      </html>
    )
  }
  ```

  ---

  ---

  ## 🎯 Method 5: Direct HTML Embed (Universal)

  Use this script tag for any HTML page or if you prefer a direct embed:

  ```html
  <script src="https://web-production-dd918.up.railway.app/api/heatmaps/tracking-script/1/"></script>
  ```

  ---

  ## ✅ Verification Steps

  ### **1. Check Browser Console**

  Open DevTools (F12) → Console tab:

  ```
  ✅ Should see: "Tracking initialized"
  ```

  ### **2. Check Network Tab**

  DevTools → Network tab:

  1. **Filter by**: `tracking-script`
  2. **Should see**:
    - `GET /api/heatmaps/tracking-script/3/` → Status: **200 OK**
    - `POST /api/track/sessions/` → Status: **200 OK** (creates session)
    - `POST /api/track/events/` → Status: **200 OK** (sends events every 5s)

  ### **3. Test Events**

  Perform these actions and check Network tab:

  - ✅ **Click** anywhere → Sends click event
  - ✅ **Move mouse** → Sends mouse move events (throttled to 100ms)
  - ✅ **Scroll page** → Sends scroll events

  ### **4. Check Dashboard**

  1. Go to your Hotjar Clone dashboard
  2. Navigate to **Heatmaps** section
  3. Select your site
  4. You should see session data and events

  ---

  ## 🔧 Troubleshooting

  ### **Issue: Script not loading**

  **Check:**
  ```tsx
  // Make sure the URL is correct
  console.log(process.env.NEXT_PUBLIC_API_URL)
  ```

  **Solution:**
  - Verify `.env.local` exists and has correct values
  - Restart dev server after adding environment variables
  - Check browser Network tab for 404 errors

  ### **Issue: CORS Error**

  **Error in console:**
  ```
  Access to fetch at 'http://localhost:8000/api/track/sessions/' 
  from origin 'http://localhost:3000' has been blocked by CORS policy
  ```

  **Solution:**

  Add your Next.js URL to backend CORS settings.

  **Edit `backend/config/settings.py`:**

  ```python
  CORS_ALLOWED_ORIGINS = [
      'http://localhost:3000',      # Next.js dev server
      'http://localhost:5173',      # Vite (if using)
      'https://your-domain.com',    # Production frontend
  ]
  ```

  Then restart Django server:
  ```bash
  py manage.py runserver
  ```

  ### **Issue: "Tracking init failed" in console**

  **Possible causes:**
  1. Backend not running
  2. Wrong tracking ID
  3. Network connectivity issue

  **Solution:**
  ```bash
  # Check if backend is running
  curl http://localhost:8000/api/heatmaps/tracking-script/3/

  # Should return JavaScript code
  ```

  ### **Issue: TypeScript errors**

  **Error:**
  ```
  Property 'NEXT_PUBLIC_API_URL' does not exist on type 'ProcessEnv'
  ```

  **Solution:**

  **Create `types/env.d.ts`:**

  ```typescript
  declare namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_URL: string
      NEXT_PUBLIC_TRACKING_SITE_ID: string
      NODE_ENV: 'development' | 'production' | 'test'
    }
  }
  ```

  ---

  ## 🌐 Production Deployment

  ### **Step 1: Update Environment Variables**

  **For Vercel:**

  1. Go to your project settings
  2. Navigate to **Environment Variables**
  3. Add:
    ```
    NEXT_PUBLIC_API_URL=https://web-production-dd918.up.railway.app/api
    NEXT_PUBLIC_TRACKING_SITE_ID=3
    ```

  **For other platforms:**

  Update `.env.production`:
  ```env
  NEXT_PUBLIC_API_URL=https://web-production-dd918.up.railway.app/api
  NEXT_PUBLIC_TRACKING_SITE_ID=3
  ```

  ### **Step 2: Update Backend CORS**

  **Edit `backend/config/settings.py`:**

  ```python
  CORS_ALLOWED_ORIGINS = [
      'https://hotjar-frontend.vercel.app',
      'https://web-production-dd918.up.railway.app',
  ]
  ```

  ### **Step 3: Deploy**

  ```bash
  # Build and test locally first
  npm run build
  npm run start

  # Then deploy to your platform
  vercel deploy --prod
  # or
  npm run deploy
  ```

  ---

  ## 📊 Advanced Configuration

  ### **Track Only Specific Pages**

  **Create `app/dashboard/layout.tsx`:**

  ```tsx
  import Script from 'next/script'

  export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        {children}
        
        {/* Only track dashboard pages */}
        <Script
          src={`${process.env.NEXT_PUBLIC_API_URL}/heatmaps/tracking-script/${process.env.NEXT_PUBLIC_TRACKING_SITE_ID}/`}
          strategy="afterInteractive"
        />
      </>
    )
  }
  ```

  ### **Custom Event Tracking**

  You can also manually trigger custom events:

  **Create `utils/tracking.ts`:**

  ```typescript
  export const trackCustomEvent = async (eventName: string, data: any) => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/track/events/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event_type: 'custom',
          timestamp: new Date().toISOString(),
          page_url: window.location.href,
          data: {
            event_name: eventName,
            ...data
          }
        })
      })
    } catch (error) {
      console.error('Failed to track custom event:', error)
    }
  }
  ```

  **Usage:**

  ```tsx
  'use client'

  import { trackCustomEvent } from '@/utils/tracking'

  export default function MyComponent() {
    const handleButtonClick = () => {
      trackCustomEvent('button_click', {
        button_name: 'Subscribe',
        location: 'hero_section'
      })
    }

    return <button onClick={handleButtonClick}>Subscribe</button>
  }
  ```

  ---

  ## 📝 Complete Example

  Here's a complete `app/layout.tsx` with all best practices:

  ```tsx
  import type { Metadata } from 'next'
  import Script from 'next/script'
  import './globals.css'

  export const metadata: Metadata = {
    title: 'My Next.js App',
    description: 'Built with Next.js 16 and React 19',
  }

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode
  }>) {
    // Only load tracking if environment variables are set
    const shouldLoadTracking = 
      process.env.NEXT_PUBLIC_API_URL && 
      process.env.NEXT_PUBLIC_TRACKING_SITE_ID

    const trackingUrl = shouldLoadTracking
      ? `${process.env.NEXT_PUBLIC_API_URL}/heatmaps/tracking-script/${process.env.NEXT_PUBLIC_TRACKING_SITE_ID}/`
      : null

    return (
      <html lang="en">
        <body className="antialiased">
          {children}
          
          {/* Hotjar Clone Tracking Script */}
          {trackingUrl && (
            <Script
              src={trackingUrl}
              strategy="afterInteractive"
              onLoad={() => {
                if (process.env.NODE_ENV === 'development') {
                  console.log('✅ Tracking initialized')
                }
              }}
              onError={() => {
                if (process.env.NODE_ENV === 'development') {
                  console.error('❌ Tracking failed to load')
                }
              }}
            />
          )}
        </body>
      </html>
    )
  }
  ```

  ---

  ## 🎉 Summary

  ### **Recommended Setup for Your Stack:**

  1. ✅ Use **Method 2** (Environment Variables) for flexibility
  2. ✅ Add tracking script to `app/layout.tsx`
  3. ✅ Use `strategy="afterInteractive"` for optimal performance
  4. ✅ Create `.env.local` for local development
  5. ✅ Add environment variables to your deployment platform

  ### **Quick Checklist:**

  - [ ] Create `.env.local` with API URL and Site ID
  - [ ] Add `<Script>` component to `app/layout.tsx`
  - [ ] Restart Next.js dev server
  - [ ] Check browser console for "Tracking initialized"
  - [ ] Verify Network tab shows successful requests
  - [ ] Update backend CORS settings if needed
  - [ ] Test click, scroll, and mouse move events
  - [ ] Check dashboard for session data

  ---

  ## 🆘 Need Help?

  If you encounter any issues:

  1. Check browser console for errors
  2. Verify backend is running (`http://localhost:8000`)
  3. Check Network tab for failed requests
  4. Ensure CORS is configured correctly
  5. Verify environment variables are set

  ---

  **You're all set!** 🚀 Your Next.js 16 app will now track user interactions with Hotjar Clone.
