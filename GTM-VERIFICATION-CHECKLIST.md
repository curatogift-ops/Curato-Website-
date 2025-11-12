# GTM Implementation Verification Checklist

## ✅ Code Implementation Status

### 1. Import Statement
- ✅ `Script` component imported from `next/script`

### 2. GTM Head Script
- ✅ Using `<Script>` component with `strategy="beforeInteractive"`
- ✅ Container ID: `GTM-M4L9QDWH`
- ✅ Unique ID: `gtm-script`
- ✅ Proper GTM initialization code

### 3. GTM Noscript
- ✅ Placed immediately after `<body>` tag
- ✅ Contains iframe with correct URL: `https://www.googletagmanager.com/ns.html?id=GTM-M4L9QDWH`
- ✅ Proper styling: `display:none; visibility:hidden`

### 4. Google Analytics
- ✅ Using `<Script>` component with `strategy="afterInteractive"`
- ✅ GA ID: `G-LMV7TQ1VZ9`
- ✅ Loads after GTM (correct priority)

### 5. Google Site Verification
- ✅ Meta tag in metadata: `FHHei7R2K0RMHiMQo_2quPyFwZjhYwq7GStvwwCwbn4`

---

## 🔍 Testing Steps

### Step 1: Build Locally
```bash
npm run build
npm start
```

### Step 2: Test Local HTML Output
Open http://localhost:3000 in browser, then:
- Right-click → "View Page Source"
- Search for `GTM-M4L9QDWH` (should appear twice)
- Verify GTM script is in `<head>`
- Verify noscript iframe is first element after `<body>`

### Step 3: Deploy to Production
```bash
git add .
git commit -m "fix: GTM placement for Google Search Console verification"
git push
```
Wait for Vercel deployment to complete.

### Step 4: Verify Production HTML
Run this command:
```powershell
Invoke-WebRequest -Uri https://curatogift.com -UseBasicParsing | Select-Object -ExpandProperty Content | Select-String -Pattern "GTM-M4L9QDWH" -Context 3,3
```

Or in browser:
1. Go to https://curatogift.com
2. Right-click → "View Page Source"
3. Check that GTM appears in correct positions

### Step 5: Google Search Console Verification
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select your property: `curatogift.com`
3. Navigate to: **Settings** → **Verification**
4. Choose verification method: **Google Tag Manager**
5. Click **Verify** button

### Step 6: URL Inspection Tool
1. In Google Search Console, use **URL Inspection** tool
2. Enter: `https://curatogift.com`
3. Click **Test Live URL**
4. Check if Google can detect the GTM tag
5. View the rendered HTML to confirm placement

---

## 🎯 Expected Results

### In Production HTML:
```html
<head>
  <!-- GTM script should be here via beforeInteractive strategy -->
  <script>(function(w,d,s,l,i){...GTM-M4L9QDWH...})</script>
</head>
<body class="antialiased">
  <!-- GTM noscript should be FIRST element -->
  <noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M4L9QDWH"...></iframe>
  </noscript>
  
  <!-- Then other content -->
  <header>...</header>
</body>
```

### In Google Search Console:
- ✅ Verification Status: **Verified**
- ✅ Verification Method: **Google Tag Manager**
- ✅ No error messages

---

## 🚨 Troubleshooting

### If verification still fails:

1. **Clear CDN Cache** (if using Cloudflare/CDN)
   - Purge all cache
   - Wait 5-10 minutes

2. **Check for Multiple GTM Tags**
   - Search entire codebase for `GTM-M4L9QDWH`
   - Ensure no duplicate implementations

3. **Verify Container ID**
   - Confirm `GTM-M4L9QDWH` is the correct container
   - Check in Google Tag Manager dashboard

4. **Test with Google Tag Assistant**
   - Install [Tag Assistant Chrome Extension](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)
   - Visit your site
   - Check if GTM is detected

5. **Check Browser Console**
   - Open DevTools → Console
   - Look for GTM-related errors
   - Verify `dataLayer` is defined

---

## 📋 Key Changes Made

### Before (Issue):
- Used raw `<script>` tags in `<head>`
- Next.js was injecting hidden div before noscript
- GSC couldn't detect proper GTM placement

### After (Fixed):
- Using Next.js `Script` component with `beforeInteractive` strategy
- Proper loading order: GTM → GA
- Noscript positioned correctly for GSC detection

---

## 📞 Support

If issues persist after following all steps:
1. Check Google Tag Manager container is published
2. Verify domain ownership in GSC
3. Wait 24-48 hours for Google to re-crawl
4. Use "Request Indexing" in URL Inspection tool

---

**Last Updated:** November 13, 2025
**GTM Container:** GTM-M4L9QDWH
**GA Property:** G-LMV7TQ1VZ9
