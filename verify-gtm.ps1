# GTM Verification Script for Windows PowerShell
# Run this after deploying to production

Write-Host "`n=== GTM VERIFICATION SCRIPT ===" -ForegroundColor Cyan
Write-Host "Checking GTM implementation on curatogift.com`n" -ForegroundColor Cyan

# Fetch the production HTML
Write-Host "Fetching production HTML..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri "https://curatogift.com" -UseBasicParsing -ErrorAction Stop
    $html = $response.Content
    
    Write-Host "✓ Successfully fetched HTML`n" -ForegroundColor Green
    
    # Check 1: GTM Head Script
    Write-Host "CHECK 1: GTM Head Script" -ForegroundColor Cyan
    if ($html -match "GTM-M4L9QDWH.*gtm\.js") {
        Write-Host "  ✓ GTM head script found" -ForegroundColor Green
        
        # Find position in head
        $headStart = $html.IndexOf("<head")
        $scriptPos = $html.IndexOf("GTM-M4L9QDWH")
        $headEnd = $html.IndexOf("</head>")
        
        if ($scriptPos -gt $headStart -and $scriptPos -lt $headEnd) {
            Write-Host "  ✓ GTM script is inside <head>" -ForegroundColor Green
        } else {
            Write-Host "  ✗ GTM script is NOT inside <head>" -ForegroundColor Red
        }
    } else {
        Write-Host "  ✗ GTM head script NOT found" -ForegroundColor Red
    }
    
    # Check 2: GTM Noscript
    Write-Host "`nCHECK 2: GTM Noscript Iframe" -ForegroundColor Cyan
    if ($html -match "ns\.html\?id=GTM-M4L9QDWH") {
        Write-Host "  ✓ GTM noscript iframe found" -ForegroundColor Green
        
        # Check if it's near the body tag
        $bodyStart = $html.IndexOf("<body")
        $bodyTagEnd = $html.IndexOf(">", $bodyStart) + 1
        $noscriptPos = $html.IndexOf("ns.html?id=GTM-M4L9QDWH")
        
        $distance = $noscriptPos - $bodyTagEnd
        Write-Host "  → Distance from <body> tag: $distance characters" -ForegroundColor Gray
        
        if ($distance -lt 200) {
            Write-Host "  ✓ Noscript is close to <body> tag (good)" -ForegroundColor Green
        } else {
            Write-Host "  ⚠ Noscript is far from <body> tag (check placement)" -ForegroundColor Yellow
        }
    } else {
        Write-Host "  ✗ GTM noscript iframe NOT found" -ForegroundColor Red
    }
    
    # Check 3: Google Analytics
    Write-Host "`nCHECK 3: Google Analytics" -ForegroundColor Cyan
    if ($html -match "G-LMV7TQ1VZ9") {
        Write-Host "  ✓ Google Analytics found (G-LMV7TQ1VZ9)" -ForegroundColor Green
    } else {
        Write-Host "  ✗ Google Analytics NOT found" -ForegroundColor Red
    }
    
    # Check 4: Count GTM occurrences
    Write-Host "`nCHECK 4: GTM Container Count" -ForegroundColor Cyan
    $gtmMatches = ([regex]::Matches($html, "GTM-M4L9QDWH")).Count
    Write-Host "  → Found $gtmMatches occurrences of GTM-M4L9QDWH" -ForegroundColor Gray
    
    if ($gtmMatches -eq 2) {
        Write-Host "  ✓ Correct count (1 in head script + 1 in noscript)" -ForegroundColor Green
    } elseif ($gtmMatches -gt 2) {
        Write-Host "  ⚠ Warning: Multiple GTM tags detected (may cause issues)" -ForegroundColor Yellow
    } else {
        Write-Host "  ✗ Missing GTM implementation" -ForegroundColor Red
    }
    
    # Check 5: Extract snippet around body tag
    Write-Host "`nCHECK 5: Body Tag Context" -ForegroundColor Cyan
    $bodyStart = $html.IndexOf("<body")
    if ($bodyStart -gt 0) {
        $snippet = $html.Substring($bodyStart, [Math]::Min(500, $html.Length - $bodyStart))
        $snippet = $snippet -replace '\s+', ' '
        
        Write-Host "  First 500 chars after <body>:" -ForegroundColor Gray
        Write-Host "  $($snippet.Substring(0, [Math]::Min(300, $snippet.Length)))..." -ForegroundColor DarkGray
        
        if ($snippet -match "<body[^>]*>.*?<noscript>.*?GTM-M4L9QDWH") {
            Write-Host "`n  ✓ Noscript appears early in body" -ForegroundColor Green
        } else {
            Write-Host "`n  ⚠ Noscript may not be first element in body" -ForegroundColor Yellow
        }
    }
    
    # Summary
    Write-Host "`n=== SUMMARY ===" -ForegroundColor Cyan
    Write-Host "1. Deploy your changes to production" -ForegroundColor White
    Write-Host "2. Wait 5-10 minutes for deployment to complete" -ForegroundColor White
    Write-Host "3. Run this script again to verify" -ForegroundColor White
    Write-Host "4. Go to Google Search Console → Settings → Verification" -ForegroundColor White
    Write-Host "5. Choose 'Google Tag Manager' method and click 'Verify'" -ForegroundColor White
    Write-Host "`nGood luck! 🚀`n" -ForegroundColor Green
    
} catch {
    Write-Host "✗ Error fetching website: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "`nMake sure the website is accessible and try again.`n" -ForegroundColor Yellow
}
