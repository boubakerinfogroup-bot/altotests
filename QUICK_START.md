# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
cd nextjs-website
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open Browser
Navigate to `http://localhost:3000`

## 📁 Project Structure

```
nextjs-website/
├── app/                    # Pages
│   ├── page.tsx           # Home
│   ├── about/
│   ├── courses/
│   └── register/
├── components/            # All components
├── contexts/              # Language context
└── public/                # Static assets
```

## 🎯 Key Files

- `app/page.tsx` - Home page
- `components/Hero.tsx` - Hero section
- `components/Header.tsx` - Navigation
- `contexts/LanguageContext.tsx` - Language system
- `app/globals.css` - Global styles

## 🎨 Customization

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: { ... },
  accent: { ... }
}
```

### Update Content
- Translations: `contexts/LanguageContext.tsx`
- Component content: Individual component files

### Add Images
Place images in `public/` folder and reference as `/image-name.jpg`

## 🐛 Troubleshooting

If you get errors:
1. Delete `.next` folder
2. Run `npm install` again
3. Run `npm run dev`

## 📝 Notes

- All components use TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- Fully responsive design
- SEO optimized

---

**Everything is ready to go!** 🎉


