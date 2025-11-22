# 🚀 DEPLOYMENT GUIDE - CompressConverter.com

## Step 1: Local Testing

```bash
# Navigate to project
cd /Users/miguelcoelho/CascadeProjects/compressconverter-clean

# Copy environment file
cp .env.example .env

# Install dependencies
npm install

# Start development server
npm run dev
```

**Test these URLs:**
- http://localhost:3000 (Homepage)
- http://localhost:3000/tools (All tools)
- http://localhost:3000/tools/pdf/compress-pdf (PDF tool)
- http://localhost:3000/pricing (Pricing page)
- http://localhost:3000/dashboard (Dashboard)

## Step 2: Vercel Deployment

### 2.1 Connect GitHub
1. Go to https://vercel.com
2. Sign up/login with GitHub
3. Click "New Project"
4. Import your GitHub repository

### 2.2 Configure Environment Variables
Add these in Vercel dashboard:

```env
# Stripe
STRIPE_SECRET_KEY=sk_test_51SVlOnISO0Uy1NWKJP3jk99V0fz8AXzSm5LRHSxE3ykSWWnzufWtElwhDf9H5HeD9PF9hHPA4SMJXbh5RGE77kxo00654G9907
STRIPE_WEBHOOK_SECRET=whsec_9LRZX1aswrWos6Wlvbzu7dmxwdEgzMTz
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_51SVlOnISO0Uy1NWKWOT0u76rrzJrBFEX0C3FyD7rCCmC7jYewkB9HeyIek8xZOH0IuRVmMFKm3xi36mh1fxtCSiB004r9hkTIK
STRIPE_PRICE_ID_UNLIMITED=prod_TSgxkZDq0iEuGa

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://pkwwomoujppjzqnhcvuf.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrd3dvbW91anBwanpxbmhjdnVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2NjgzOTgsImV4cCI6MjA3OTI0NDM5OH0.vuvTcgIHO3pjjHbcCwcVWAKK3KlDQyXMLo33FKhPnQU

# Site
NEXT_PUBLIC_SITE_URL=https://compressconverter.com

# Analytics (add when you get it)
GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 2.3 Deploy
1. Click "Deploy"
2. Wait for build to complete
3. Test the live URL

## Step 3: Domain Setup

### 3.1 Buy Domain (if needed)
- Go to Namecheap, GoDaddy, or Cloudflare
- Buy: compressconverter.com

### 3.2 Configure DNS
In your domain provider:
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
```

### 3.3 Add Domain to Vercel
1. Vercel Dashboard → Project → Settings → Domains
2. Add: compressconverter.com
3. Wait for SSL certificate (5-10 minutes)

## Step 4: SEO Setup

### 4.1 Google Search Console
1. Go to https://search.google.com/search-console
2. Add property: compressconverter.com
3. Verify ownership (HTML tag method)
4. Submit sitemap: https://compressconverter.com/sitemap.xml

### 4.2 Bing Webmaster Tools
1. Go to https://www.bing.com/webmasters
2. Add site: compressconverter.com
3. Verify ownership
4. Submit sitemap

### 4.3 Analytics
1. Add Google Analytics ID to environment variables
2. Redeploy on Vercel

## Step 5: Marketing Launch

### 5.1 Directory Submissions
- Product Hunt: https://www.producthunt.com/posts/new
- AlternativeTo: https://alternativeto.net/software/new/
- Capterra: https://www.capterra.com/vendors/sign-up

### 5.2 Social Media
- Create Twitter: @CompressConverter
- Create LinkedIn page
- Create Facebook page

## Step 6: Monitoring

### 6.1 Set up Alerts
- Vercel: Enable deployment notifications
- Google Analytics: Set up conversion goals
- Stripe: Enable webhook notifications

### 6.2 Performance Monitoring
- Check Core Web Vitals in Search Console
- Monitor uptime with UptimeRobot
- Track user feedback

## 🚨 Troubleshooting

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Environment Variables Not Working
- Check spelling and formatting
- Restart Vercel deployment
- Check browser console for errors

### Stripe Issues
- Verify webhook endpoint in Stripe dashboard
- Check webhook secret matches
- Test with Stripe CLI

---

**Need Help?** 
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Stripe Docs: https://stripe.com/docs
