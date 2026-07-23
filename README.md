# ⚡ ClientAI

AI-Powered Client Acquisition Platform — 10 tools, 24 languages, full auth system.

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run in development
```bash
npm run dev
```
Opens at http://localhost:3000

### 3. Build for production
```bash
npm run build
```
Output goes to `/dist` folder — ready to deploy.

---

## 📦 Deploy Options

### Option A — Vercel (Recommended, Free)
1. Push this folder to GitHub
2. Go to vercel.com → New Project → Import repo
3. Framework: Vite — click Deploy
4. Done! Live in 60 seconds.

### Option B — Netlify (Free)
1. Run `npm run build`
2. Go to netlify.com → Sites → Drag & drop the `/dist` folder
3. Done!

### Option C — Manual hosting
1. Run `npm run build`
2. Upload the `/dist` folder to any web server (cPanel, Apache, Nginx)

---

## 🔐 Demo Login
- Email: `demo@clientai.com`
- Password: `demo1234`

## 🔑 Payments (to accept real money)
Add these to a `.env` file:
```
VITE_STRIPE_KEY=pk_live_xxxx
VITE_PAYPAL_CLIENT_ID=xxxx
VITE_PROMPTPAY_NUMBER=0812345678
```

## 🛠 Tech Stack
- React 18
- Vite 5
- Claude AI API (claude-sonnet-4-6)
- Pure CSS-in-JS (no extra packages needed)

## ✨ Features
- 🏠 Landing page
- 🔐 Sign up / Log in / OTP / Google auth
- 📊 Dashboard with stats
- ⚡ Strategy Generator (real AI)
- 👥 Client Tracker
- 📱 Social Media Posts
- 💰 Pricing Calculator
- 🧾 Invoice Generator
- 📄 Proposal Builder
- 🔔 Follow-up Manager
- ✨ Business Name AI
- 🔍 Competitor Analysis
- 📂 Strategy History
- 🌍 24 languages
- 🌓 Dark / Light mode
- 📱 Mobile responsive

---
Built with ❤️ using Claude AI
