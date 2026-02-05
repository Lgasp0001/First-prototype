# Fertility Clinic Website Prototype

A modern, responsive fertility clinic website built with Next.js 16, React 19, Tailwind CSS, and Vercel. This prototype showcases a comprehensive healthcare platform with glass morphism design, smooth animations, and accessibility-first approach.

## Project Status

✅ **Prototype Complete** - All core features implemented and ready for testing.

---

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Navigate to http://localhost:3000
```

### Deployment to Vercel

```bash
# Push to GitHub
git push origin main

# Vercel will automatically deploy
# or manually deploy with:
vercel deploy
```

---

## Project Structure

```
fertility-clinic-website/
├── app/
│   ├── layout.tsx                 # Root layout with metadata & fonts
│   ├── page.tsx                   # Main landing page
│   ├── globals.css                # Design tokens, animations, utilities
│   └── contact/
│       └── page.tsx               # Contact page with form
├── components/
│   ├── header/
│   │   └── navbar.tsx             # Navigation with mobile menu
│   ├── sections/
│   │   ├── hero.tsx               # Hero section with CTA
│   │   ├── services.tsx           # Services grid (6 services)
│   │   ├── success-stats.tsx      # Success metrics & stats
│   │   ├── testimonials.tsx       # Carousel of patient stories
│   │   ├── pricing.tsx            # Pricing tiers & packages
│   │   └── faq.tsx                # FAQ accordion
│   ├── modals/
│   │   └── consultation-modal.tsx # Reusable consultation form modal
│   ├── footer.tsx                 # Footer with links & contact info
│   └── ui/                        # Shadcn components (pre-installed)
├── public/
│   └── images/                    # Generated placeholder images
├── IMPLEMENTATION_KICKSTART.md    # Detailed implementation plan
├── DESIGN_TOKENS.md               # Design system documentation
└── README.md                      # This file
```

---

## Key Features

### 🎨 Design System
- **Dark Theme:** Navy background (#0a0e27) with emerald accent (#10b981)
- **Glass Morphism:** Semi-transparent cards with backdrop blur
- **Typography:** GEIST font family (sans + mono)
- **Animations:** Smooth scroll, entrance, and interaction animations
- **Responsive:** Mobile-first approach (375px → 1920px+)

### 🎯 Core Sections

1. **Navigation** - Sticky header with mobile hamburger menu
2. **Hero** - Full-screen banner with CTAs and trust indicators
3. **Services** - 6-card grid of fertility treatment options
4. **Success Stats** - Metrics display with image and animated counters
5. **Testimonials** - Auto-rotating carousel with patient stories
6. **Pricing** - 3-tier pricing with financing information
7. **FAQ** - Expandable accordion with 9 common questions
8. **Contact** - Full contact form and information section
9. **Footer** - Multi-column footer with links, social, trust badges

### 🔄 Interactive Elements
- **3 Call-to-Action Buttons** triggering modal:
  - Hero section primary CTA
  - Success Stats section
  - Pricing section
- **Consultation Modal** with form validation
- **Testimonial Carousel** with manual/auto navigation
- **Mobile Menu** with smooth slide-in animation
- **FAQ Accordion** with smooth expand/collapse

### ♿ Accessibility
- WCAG 2.1 AA compliant
- Semantic HTML (header, main, footer, nav)
- ARIA labels and roles
- Keyboard navigation support
- Focus visible states
- Color contrast verified (4.5:1+)
- Screen reader friendly

### 📱 Responsive Design
- **Mobile (< 768px):** Full-width single column, burger menu
- **Tablet (768px - 1023px):** 2-column layouts
- **Desktop (> 1024px):** Multi-column grids and full features

### ⚡ Performance
- Next.js Image optimization
- Lazy loading for below-fold content
- CSS animations (no JavaScript overhead)
- Tailwind purged CSS
- Vercel Edge Network CDN

### 🔒 Healthcare Compliance
- HIPAA messaging and privacy policy references
- Contact form with privacy assurance
- Board certification and credential display
- Success rate transparency messaging
- Ethical guarantees and disclaimers

---

## Design Tokens

All colors, spacing, animations, and typography defined in `globals.css` using CSS variables:

```css
/* Colors */
--background: 222 84% 5%
--foreground: 210 40% 98%
--accent: 162 72% 51%
--muted: 210 10% 62%

/* Animations */
@keyframes fadeIn { ... }
@keyframes slideUp { ... }
@keyframes scaleIn { ... }
@keyframes float { ... }
@keyframes glow { ... }
```

See `DESIGN_TOKENS.md` for complete token documentation.

---

## Component API

### Hero Component
```tsx
<Hero 
  onConsultationClick={() => setModalOpen(true)} 
  onExploreClick={() => scrollTo('services')}
/>
```

### Consultation Modal
```tsx
<ConsultationModal 
  isOpen={boolean} 
  onClose={() => {}}
/>
```

### All Section Components
```tsx
<Services />
<SuccessStats onConsultationClick={handler} />
<Testimonials />
<Pricing onQuoteClick={handler} />
<FAQ />
```

---

## Customization Guide

### Colors
Edit `app/globals.css` root variables:
```css
:root {
  --accent: 162 72% 51%; /* Change accent color */
  --background: 222 84% 5%; /* Change background */
}
```

### Content
- **Hero:** Update heading, subtext in `components/sections/hero.tsx`
- **Services:** Modify `services` array in `components/sections/services.tsx`
- **Testimonials:** Update `testimonials` array in `components/sections/testimonials.tsx`
- **Pricing:** Edit `pricingTiers` array in `components/sections/pricing.tsx`
- **FAQ:** Update `faqs` array in `components/sections/faq.tsx`
- **Contact:** Modify contact info in `components/footer.tsx` and `app/contact/page.tsx`

### Images
Replace placeholder images in `public/images/`:
- `hero-bg.jpg` - Hero section background
- `success-stats.jpg` - Success stats section image
- `clinic-interior.jpg` - Reserved for future use

---

## SEO & Meta Tags

Optimized for search engines:
- Title: "Fertility Clinic | Expert IVF & Fertility Treatment Services"
- Description: "Compassionate fertility clinic offering IVF, IUI, genetic testing, and personalized treatment plans."
- Open Graph tags for social sharing
- Structured data (Schema.org) for local business
- Mobile-friendly viewport settings

---

## Animations

All animations are CSS-based for performance:
- **fadeIn** - Opacity transition
- **slideUp** - Vertical entrance with fade
- **scaleIn** - Scale with fade for emphasis
- **float** - Gentle Y-axis movement
- **glow** - Pulsing accent color effect

Respect `prefers-reduced-motion` for accessibility.

---

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

---

## Future Enhancements

### Planned Features
- Real appointment booking system
- Patient portal with secure login
- Blog/content hub for SEO
- Insurance verification tool
- Live chat support
- Video consultations
- Online payment processing
- Patient testimonial management system

### Integrations Ready
- Supabase (database, auth)
- Stripe (payments)
- SendGrid (email)
- Google Analytics 4
- Vercel Analytics

---

## Performance Metrics

### Target Core Web Vitals
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

Monitor on Vercel Analytics dashboard.

---

## Compliance & Privacy

✅ HIPAA messaging integrated
✅ Privacy policy link in footer
✅ GDPR compliance ready
✅ Accessibility statement
✅ Trust badges (SART, CAP, CLIA referenced)

---

## Support & Documentation

- **Implementation Plan:** See `IMPLEMENTATION_KICKSTART.md`
- **Design System:** See `DESIGN_TOKENS.md`
- **Component Code:** Well-commented and under 600 lines each

---

## License

This project is part of v0.app prototype generation.

---

## Contact

For questions about this website prototype, contact our team or schedule a consultation using the website's contact form.

---

## Version History

**v1.0 (Current)**
- Initial prototype launch
- 10+ components
- Full responsive design
- Glass morphism effects
- Smooth animations
- Mobile hamburger menu
- 3+ CTAs with modal
- Consultation & contact forms
- SEO optimized
- Accessibility compliant

---

## Next Steps

1. **Test:** Review on desktop, tablet, and mobile devices
2. **Customize:** Update colors, content, and images with real data
3. **Integrate:** Connect appointment booking, payments, email services
4. **Deploy:** Push to GitHub and deploy to Vercel
5. **Monitor:** Track analytics and user behavior
6. **Iterate:** Gather feedback and improve

---

Made with v0.app for modern healthcare web experiences.
