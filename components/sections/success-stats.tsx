'use client'

import Image from 'next/image'
import { TrendingUp } from 'lucide-react'

interface SuccessStatsProps {
  onConsultationClick: () => void
}

const stats = [
  {
    number: '95%+',
    label: 'Live Birth Rate',
    subtext: 'For patients under 35',
  },
  {
    number: '5000+',
    label: 'Successful Pregnancies',
    subtext: 'And counting',
  },
  {
    number: '12+',
    label: 'Years of Excellence',
    subtext: 'Proven track record',
  },
  {
    number: '500+',
    label: '5-Star Reviews',
    subtext: 'From our patients',
  },
]

export function SuccessStats({ onConsultationClick }: SuccessStatsProps) {
  return (
    <section className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen bg-gradient-radial from-accent/20 to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative animate-slide-in-left">
            <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden glass-card p-2">
              <Image
                src="/images/success-stats.jpg"
                alt="Success and happiness"
                fill
                className="object-cover rounded-xl"
                quality={80}
              />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 glass-card px-6 py-4 flex items-center space-x-3">
                <TrendingUp className="w-6 h-6 text-accent" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Growth & Success</p>
                  <p className="text-xs text-muted">Industry-leading results</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="space-y-12 animate-slide-in-right">
            {/* Header */}
            <div>
              <span className="inline-block text-accent font-semibold text-sm md:text-base tracking-widest uppercase mb-4">
                Our Impact
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
                Proven Success, Real Results
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Our commitment to excellence is reflected in our exceptional outcomes and the trust of thousands
                of families who have achieved their dreams with us.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass-card p-6 md:p-8 hover:scale-105 transition-transform duration-300 animate-scale-in"
                  style={{
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-2">
                    {stat.number}
                  </p>
                  <p className="text-lg md:text-xl font-semibold text-foreground mb-1">
                    {stat.label}
                  </p>
                  <p className="text-sm text-muted">{stat.subtext}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={onConsultationClick}
              className="btn-primary text-base md:text-lg w-full md:w-auto inline-block"
            >
              Discover Our Results
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
