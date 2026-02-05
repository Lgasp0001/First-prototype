'use client'

import { ArrowDown } from 'lucide-react'
import { AnimatedGradientBG } from '@/components/animated-gradient-bg'

interface HeroProps {
  onConsultationClick: () => void
  onExploreClick: () => void
}

export function Hero({ onConsultationClick, onExploreClick }: HeroProps) {
  return (
    <section className="relative w-full min-h-screen pt-20 overflow-hidden bg-background">
      {/* Animated Gradient Background */}
      <AnimatedGradientBG />

      {/* Content Overlay - Subtle gradient for readability */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background opacity-60" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center min-h-screen space-y-8 md:space-y-10">
          {/* Subheading */}
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <span className="inline-block text-accent font-semibold text-sm md:text-base tracking-widest uppercase mb-4">
              Welcome to Hope
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="animate-slide-up text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight"
            style={{ animationDelay: '300ms' }}
          >
            Your Path to{' '}
            <span className="text-gradient">Parenthood</span> Starts Here
          </h1>

          {/* Subtext */}
          <p
            className="animate-fade-in max-w-2xl text-lg md:text-xl text-muted leading-relaxed"
            style={{ animationDelay: '400ms' }}
          >
            Compassionate fertility treatment with proven results. Our board-certified specialists are
            dedicated to helping you build the family of your dreams.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 pt-4 animate-scale-in"
            style={{ animationDelay: '500ms' }}
          >
            <button
              onClick={onConsultationClick}
              className="btn-primary text-base md:text-lg w-full sm:w-auto"
            >
              Schedule Free Consultation
            </button>
            <button
              onClick={onExploreClick}
              className="btn-secondary text-base md:text-lg w-full sm:w-auto"
            >
              Explore Our Services
            </button>
          </div>

          {/* Trust Indicators */}
          <div
            className="flex flex-wrap gap-4 md:gap-8 pt-8 animate-fade-in"
            style={{ animationDelay: '600ms' }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-sm md:text-base text-muted-foreground">95%+ Success Rate</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-sm md:text-base text-muted-foreground">5000+ Live Births</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-sm md:text-base text-muted-foreground">Board Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center space-y-2">
          <p className="text-xs md:text-sm text-muted uppercase tracking-widest">Scroll to explore</p>
          <ArrowDown className="w-5 h-5 text-accent animate-pulse" />
        </div>
      </div>
    </section>
  )
}
