# Vercel Environment Variables Setup

## 📋 Steps to Configure Environment Variables in Vercel:

### 1. Go to Your Vercel Dashboard
- Visit [vercel.com](https://vercel.com)
- Navigate to your portfolio project

### 2. Access Environment Variables
- Click on your project
- Go to "Settings" tab
- Click "Environment Variables" in the sidebar

### 3. Add These Variables
Add each of these as separate environment variables:

**Variable Name:** `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
**Value:** `service_42itoyy`
**Environment:** Production, Preview, Development

**Variable Name:** `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
**Value:** `template_mvf2qsf`
**Environment:** Production, Preview, Development

**Variable Name:** `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
**Value:** `gNiW1JcyaOTHGxbQF`
**Environment:** Production, Preview, Development

### 4. Redeploy Your Application
After adding the environment variables:
- Go to "Deployments" tab
- Click the three dots (...) on your latest deployment
- Select "Redeploy"
- Or just push a new commit to trigger automatic deployment

## 🔒 Security Benefits:
- ✅ Keys are not exposed in your source code
- ✅ Keys are not visible in client-side bundle inspection
- ✅ You can rotate keys without code changes
- ✅ Different environments can use different keys

## 🚀 Local Development:
Your `.env.local` file will handle local development, and Vercel will use the dashboard variables for production.

## ⚠️ Important Notes:
- `NEXT_PUBLIC_` prefix makes these available in the browser
- EmailJS public key is meant to be public, so this is fine
- Never put private/secret keys with `NEXT_PUBLIC_` prefix
- Your `.env.local` is already gitignored, so it won't be committed

## 🧪 Testing:
1. Deploy to Vercel with the env vars set
2. Test the contact form on your live site
3. Check your email for the test message
