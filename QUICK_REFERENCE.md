# Fertility Clinic Website - Quick Reference Guide

A fast-access guide for testing, customizing, and deploying the prototype.

---

## 🚀 Quick Start (60 seconds)

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open browser
# http://localhost:3000

# 4. Start making changes - they reload automatically
```

---

## 📱 Testing Quick Checklist

### Desktop Testing
- [ ] Visit http://localhost:3000
- [ ] Scroll through all sections
- [ ] Click "Schedule Consultation" button (opens modal)
- [ ] Fill and submit contact form
- [ ] Navigate using top menu
- [ ] Click testimonial carousel arrows
- [ ] Expand FAQ items by clicking

### Mobile Testing
- [ ] Open DevTools (F12) → Toggle Device Toolbar
- [ ] Test at 375px width (iPhone SE)
- [ ] Click hamburger menu (top right)
- [ ] Verify all text is readable
- [ ] Scroll works smoothly
- [ ] Modal works on mobile
- [ ] No horizontal scroll

### Tablet Testing
- [ ] Test at 768px width
- [ ] Verify 2-column layouts appear
- [ ] Menu still shows hamburger at this size
- [ ] Pricing cards align correctly
- [ ] Images display properly

---

## 🎨 Quick Customization

### Change Brand Colors

**File:** `app/globals.css` (lines 5-25)

```css
/* Change accent color */
--accent: 162 72% 51;  /* ← Change these numbers */
--accent-foreground: 222 84% 5;

/* Example: Change to purple */
--accent: 280 65% 50;  /* Purple */
```

### Update Content

**Page Content:**
- Hero heading: `components/sections/hero.tsx` line 36
- Services list: `components/sections/services.tsx` line 12
- Testimonials: `components/sections/testimonials.tsx` line 13
- Pricing tiers: `components/sections/pricing.tsx` line 10
- FAQ: `components/sections/faq.tsx` line 9

**Contact Information:**
- Phone/Email: `components/footer.tsx` line 37-44
- Full address: `components/footer.tsx` line 47-49

### Replace Images

Put new images in `public/images/`:

1. `hero-bg.jpg` - Hero background
2. `success-stats.jpg` - Stats section image
3. `clinic-interior.jpg` - Future use

Images auto-optimize via Next.js Image component.

---

## 🔗 Important Links in Code

### Add a New Link to Menu
**File:** `components/header/navbar.tsx` (line 24-28)

```tsx
const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'New Page', href: '/new-page' },  // ← Add here
]
```

### Add a New Section
1. Create file: `components/sections/new-section.tsx`
2. Import in `app/page.tsx`
3. Add to page layout

### Add FAQ Questions
**File:** `components/sections/faq.tsx` (line 9)

```tsx
const faqs = [
  {
    category: 'Category Name',
    questions: [
      {
        q: 'Your question here?',
        a: 'Your answer here.'
      }
    ]
  }
]
```

---

## 📧 Form Handling

### Consultation Modal
**File:** `components/modals/consultation-modal.tsx`
- Currently logs to console on submit
- Add backend integration at line 33

### Contact Form
**File:** `app/contact/page.tsx` (line 55)
- Submission handler at line 43
- Success state auto-clears after 3 seconds

---

## 🎯 CTA Buttons Location

Three main CTAs trigger the consultation modal:

1. **Hero Section** - `components/sections/hero.tsx` (line 51)
2. **Success Stats Section** - `components/sections/success-stats.tsx` (line 93)
3. **Pricing Section** - `components/sections/pricing.tsx` (line 207)
4. **Contact Page** - `app/contact/page.tsx` (line 363)
5. **Footer** - `components/footer.tsx` (line 186)

All call: `onConsultationClick()` → Opens modal

---

## 🔐 Environment Variables

Currently none needed for prototype. When connecting services:

```bash
# .env.local (create file for local testing)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
DATABASE_URL=your_database_url
STRIPE_PUBLIC_KEY=your_stripe_key
```

---

## 📊 Analytics Setup

### Add Google Analytics
**File:** `app/layout.tsx` (add to head)

```tsx
{/* Google Analytics */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

### Monitor with Vercel Analytics
1. Deploy to Vercel
2. Go to vercel.com/analytics
3. Monitor Core Web Vitals

---

## 🔄 Common Changes

### Change Phone Number
**Files:** 
- `components/footer.tsx` line 39
- `app/contact/page.tsx` line 166

```tsx
href="tel:555-123-4567"  // ← Update this
```

### Change Email Address
**Files:**
- `components/footer.tsx` line 43
- `app/contact/page.tsx` line 172

```tsx
href="mailto:hello@fertilityclinic.com"  // ← Update this
```

### Update Address
**File:** `app/contact/page.tsx` (lines 202-205)

```tsx
<p className="text-muted text-sm">
  Your New Address<br />
  Suite 100<br />
  City, ST 12345
</p>
```

### Change Success Rate
**File:** `components/sections/success-stats.tsx` (line 22)

```tsx
{
  number: '95%+',  // ← Update this
  label: 'Live Birth Rate',
  subtext: 'For patients under 35',
}
```

---

## 🚀 Deployment

### Deploy to Vercel

```bash
# 1. Push to GitHub
git add .
git commit -m "Fertility clinic prototype"
git push origin main

# 2. Vercel auto-deploys
# Or manually:
vercel deploy

# 3. View live
# https://your-project.vercel.app
```

### Custom Domain
1. Go to vercel.com/domains
2. Add custom domain
3. Update DNS settings
4. Point to Vercel nameservers

---

## 🐛 Troubleshooting

### Site Won't Load
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Images Not Showing
- Check `public/images/` folder exists
- Verify file names match in code
- Clear Next.js cache: `rm -rf .next`

### Mobile Menu Not Working
- Check `components/header/navbar.tsx`
- Verify z-index values (z-40, z-50)
- Test with DevTools device emulation

### Modal Not Opening
- Verify `isModalOpen` state in `app/page.tsx`
- Check modal import and usage
- Open browser console (F12) for errors

---

## 📈 Performance Tips

### Check Performance
1. Open DevTools (F12) → Lighthouse
2. Run audit (Desktop & Mobile)
3. Fix issues reported
4. Target: All green

### Optimize Images
```tsx
// Images auto-optimize with Next.js Image:
<Image
  src="/images/hero-bg.jpg"
  alt="Description"
  width={1200}
  height={600}
  quality={75}  // ← Lower for faster load
  priority     // ← Use for above-fold images
/>
```

### CSS Bundle Size
Tailwind automatically purges unused CSS. Keep it minimal by:
- Using standard Tailwind classes
- Avoiding arbitrary values where possible
- Grouping responsive classes

---

## 📚 File Organization

```
app/                   # Page routes
├── page.tsx          # Landing page
├── layout.tsx        # Root layout
├── globals.css       # Design tokens
└── contact/
    └── page.tsx      # Contact page

components/           # Reusable components
├── header/           # Navigation
├── sections/         # Page sections
├── modals/           # Modal dialogs
├── ui/               # Shadcn components
└── footer.tsx        # Footer

public/
└── images/           # Static images
```

---

## 🔑 Key Keyboard Shortcuts

### Development
- `Ctrl+K` (Cmd+K) - Quick command palette in VS Code
- `Ctrl+/` (Cmd+/) - Toggle comment
- `Alt+Up/Down` - Move line
- `Ctrl+H` - Find & replace

### Browser DevTools
- `F12` - Open DevTools
- `Ctrl+Shift+C` - Element inspector
- `Ctrl+Shift+J` - Console
- `Ctrl+Shift+M` - Toggle device emulation

---

## 🎓 Learning Resources

### Frameworks Used
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Shadcn UI](https://ui.shadcn.com)

### Helpful Tools
- [Vercel Analytics](https://vercel.com/analytics)
- [Lighthouse (Built-in Chrome DevTools)](https://developers.google.com/web/tools/lighthouse)
- [WAVE Accessibility Checker](https://wave.webaim.org)
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

## ✅ Pre-Launch Checklist

Before going live:

- [ ] All links working
- [ ] Contact form working
- [ ] Images optimized
- [ ] Mobile responsive tested
- [ ] Accessibility audit passed
- [ ] Lighthouse score 90+
- [ ] Meta tags updated
- [ ] Analytics configured
- [ ] HTTPS enabled (Vercel default)
- [ ] Error page created
- [ ] Sitemap generated
- [ ] Robots.txt configured

---

## 💡 Pro Tips

1. **Use Chrome DevTools** - Best for debugging
2. **Test on Real Devices** - Emulation isn't perfect
3. **Monitor Bundle Size** - Keep under 200KB JS
4. **Use Vercel Analytics** - Real user data
5. **Version Your Content** - Easy rollback
6. **Test Email Forms** - Verify deliverability
7. **Monitor Core Web Vitals** - Essential for SEO

---

## 🆘 Getting Help

### If Something Breaks
1. Check error in browser console (F12)
2. Look at terminal output
3. Compare with original files
4. Check documentation
5. Reset: `npm run dev` restart

### Common Error Solutions

**"Cannot find module"**
- Run `npm install`
- Check import paths

**"Tailwind classes not applying"**
- Rebuild: `npm run dev` restart
- Check globals.css is imported

**"Images not loading"**
- Verify `public/images/` exists
- Check file names match exactly
- Clear cache: `rm -rf .next`

---

## 📞 Quick Contact

**For Website Inquiries:**
- Phone: (555) 123-4567
- Email: hello@fertilityclinic.com
- Contact Form: /contact

**For Development:**
- Check documentation files
- Review component code comments
- Test in browser DevTools

---

## 🎉 You're All Set!

The prototype is ready to:
- ✅ Preview and test
- ✅ Customize with your content
- ✅ Deploy to Vercel
- ✅ Connect real services
- ✅ Scale to production

**Happy building!** 🚀

---

*Last Updated: 2026 | v0.app Generated*
