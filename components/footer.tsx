'use client'

import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Calendar } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    services: [
      { label: 'IVF Treatment', href: '#services' },
      { label: 'IUI Procedure', href: '#services' },
      { label: 'Egg Freezing', href: '#services' },
      { label: 'Genetic Testing', href: '#services' },
    ],
    company: [
      { label: 'Success Stories', href: '#testimonials' },
      { label: 'Our Team', href: '#team' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '/contact' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'HIPAA Notice', href: '/hipaa' },
      { label: 'Accessibility', href: '/accessibility' },
    ],
  }

  const socials = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
  ]

  return (
    <footer className="relative bg-background/50 border-t border-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-8">
            {/* Brand & Contact */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-bold">FC</span>
                  </div>
                  <span className="font-semibold text-foreground">Fertility Clinic</span>
                </div>
                <p className="text-muted leading-relaxed">
                  Compassionate fertility care with proven results. Your journey to parenthood
                  starts here.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mt-8">
                <a
                  href="tel:555-123-4567"
                  className="flex items-center space-x-3 text-muted hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>(555) 123-4567</span>
                </a>
                <a
                  href="mailto:hello@fertilityclinic.com"
                  className="flex items-center space-x-3 text-muted hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>hello@fertilityclinic.com</span>
                </a>
                <a
                  href="#"
                  className="flex items-center space-x-3 text-muted hover:text-accent transition-colors"
                >
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>123 Medical Plaza, Suite 100, City, ST 12345</span>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-foreground mb-6">Services</h3>
              <ul className="space-y-3">
                {links.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-foreground mb-6">Company</h3>
              <ul className="space-y-3">
                {links.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold text-foreground mb-6">Legal</h3>
              <ul className="space-y-3">
                {links.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Bottom Section */}
        <div className="py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted">
              © {currentYear} Fertility Clinic. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Information provided is educational, not medical advice. Always consult with a physician.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-lg hover:bg-white/10 text-muted hover:text-accent transition-all duration-200"
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="/contact"
              className="flex items-center space-x-2 text-accent hover:text-accent/80 font-semibold transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Now</span>
            </a>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-white/10 py-6 md:py-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-semibold text-accent uppercase">SART</span>
              <span className="text-xs text-muted">Member Clinic</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-white/10" />
            <div className="flex items-center space-x-2">
              <span className="text-xs font-semibold text-accent uppercase">HIPAA</span>
              <span className="text-xs text-muted">Compliant</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-white/10" />
            <div className="flex items-center space-x-2">
              <span className="text-xs font-semibold text-accent uppercase">4.9★</span>
              <span className="text-xs text-muted">Patient Rated</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
