# Setup Instructions

## Quick Start

1. **Install Dependencies**
   ```bash
   cd nextjs-website
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to `http://localhost:3000`

## What's Included

### ✅ Modern Tech Stack
- Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for animations

### ✅ Features Implemented
- **SEO Optimized**: Complete metadata, Open Graph, structured data
- **Multi-language**: FR/EN with auto-detection
- **Responsive**: Mobile-first design
- **Modern UI**: Professional, clean design
- **Performance**: Optimized for speed
- **Accessibility**: Semantic HTML, proper ARIA labels

### ✅ Components Created
- Header with navigation and language toggle
- Hero section with course buttons
- About section
- Courses/Live courses section
- Pricing section
- Testimonials section
- Contact/CTA section
- Footer
- Stats/Brands section

## Next Steps

1. **Add Images**: Replace placeholder images in components
2. **Connect Forms**: Add form submission handling
3. **Add More Pages**: Create individual course pages
4. **Add Blog**: If needed for content marketing
5. **Analytics**: Add Google Analytics or similar
6. **Deploy**: Deploy to Vercel, Netlify, or your preferred host

## Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme:
- Primary colors (blue)
- Accent colors (red)
- Custom colors

### Content
- Update translations in `contexts/LanguageContext.tsx`
- Modify component content in respective files
- Add more sections as needed

### Styling
- Global styles in `app/globals.css`
- Component-specific styles using Tailwind classes
- Custom animations in `tailwind.config.ts`

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Build Locally
```bash
npm run build
npm start
```

## Support

For issues or questions, refer to:
- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/


