'use client'

import { ArrowRight } from 'lucide-react'

interface CTAProps {
  onConsultationClick: () => void
}

export function CTA({ onConsultationClick }: CTAProps) {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-background via-background/80 to-background overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/2 -translate-y-1/2 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -translate-y-1/2 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="relative glass-card p-8 md:p-12 lg:p-16 animate-scale-in">
          {/* Content */}
          <div className="text-center">
            <span className="inline-block text-accent font-semibold text-sm md:text-base tracking-widest uppercase mb-4">
              Next Steps
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Take Control of Your <span className="text-gradient">Fertility Journey</span>
            </h2>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-8 max-w-2xl mx-auto">
              Our compassionate team is ready to help you explore your options and create a personalized treatment plan designed just for you.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10">
              <div className="flex items-center justify-center space-x-3 text-muted">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm md:text-base">Free Initial Consultation</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-muted">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm md:text-base">Expert Medical Team</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-muted">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm md:text-base">24/7 Support</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onConsultationClick}
                className="btn-primary text-base md:text-lg px-8 py-4 flex items-center space-x-2 group w-full sm:w-auto justify-center"
              >
                <span>Schedule Your Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="/contact"
                className="btn-secondary text-base md:text-lg px-8 py-4 w-full sm:w-auto"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        {/* Bottom trust indicators */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted mb-4">Trusted by thousands of families</p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent">98%</div>
              <p className="text-xs md:text-sm text-muted">Patient Satisfaction</p>
            </div>
            <div className="w-px h-10 bg-white/10 hidden sm:block" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent">2,500+</div>
              <p className="text-xs md:text-sm text-muted">Successful Pregnancies</p>
            </div>
            <div className="w-px h-10 bg-white/10 hidden sm:block" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent">25+</div>
              <p className="text-xs md:text-sm text-muted">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
