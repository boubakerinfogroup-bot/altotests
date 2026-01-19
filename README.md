# Alto Tests - Modern Next.js Website

A modern, professional, and SEO-optimized website for Alto Tests language test preparation center, built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🚀 **Next.js 14** with App Router
- 💎 **TypeScript** for type safety
- 🎨 **Tailwind CSS** for modern styling
- 🌐 **Multi-language Support** (FR/EN) with auto-detection
- 📱 **Fully Responsive** design
- ⚡ **Optimized Performance** with Next.js optimizations
- 🔍 **SEO Optimized** with metadata and structured data
- ✨ **Smooth Animations** with Framer Motion
- 🎯 **Modern UI/UX** with professional design

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd nextjs-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
nextjs-website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Courses.tsx          # Courses section
│   ├── Pricing.tsx          # Pricing section
│   ├── Testimonials.tsx     # Testimonials section
│   ├── CTA.tsx              # Contact/CTA section
│   ├── Footer.tsx           # Footer
│   └── Stats.tsx            # Statistics section
├── contexts/
│   └── LanguageContext.tsx  # Language management
└── public/                  # Static assets
```

## Key Features

### SEO Optimization
- Comprehensive metadata
- Open Graph tags
- Twitter cards
- Structured data (JSON-LD)
- Canonical URLs
- Sitemap ready

### Performance
- Image optimization
- Code splitting
- Lazy loading
- Optimized fonts
- Minimal bundle size

### Responsive Design
- Mobile-first approach
- Breakpoints for all devices
- Touch-friendly interactions
- Optimized layouts

## Build for Production

```bash
npm run build
npm start
```

## Deployment

The site is ready to deploy on:
- Vercel (recommended)
- Netlify
- Any Node.js hosting

## License

© 2024 Alto Tests. All rights reserved.


