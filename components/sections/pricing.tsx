'use client'

import { Check } from 'lucide-react'

interface PricingProps {
  onQuoteClick: () => void
}

const pricingTiers = [
  {
    name: 'Assessment',
    price: '$500',
    description: 'Start your journey with a comprehensive evaluation',
    features: [
      'Initial consultation',
      'Medical history review',
      'Basic bloodwork & ultrasound',
      'Personalized treatment plan',
      ' 30-day consultation',
    ],
    highlighted: false,
  },
  {
    name: 'IVF Cycle',
    price: '$12,000',
    description: 'Complete in vitro fertilization treatment',
    features: [
      'Ovarian stimulation',
      'Egg retrieval procedure',
      'Lab fertilization & culture',
      'Embryo transfer',
      'Post-transfer monitoring',
      'Medication & supplies',
    ],
    highlighted: true,
  },
  {
    name: 'Premium Package',
    price: '$18,000',
    description: 'Enhanced IVF with advanced technology',
    features: [
      'Everything in IVF Cycle',
      'Genetic testing (PGT-A)',
      'Assisted hatching',
      'Time-lapse monitoring',
      'Frozen transfer included',
      'Priority scheduling',
      'Extended support program',
    ],
    highlighted: false,
  },
]

export function Pricing({ onQuoteClick }: PricingProps) {
  return (
    <section className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 animate-slide-up">
          <span className="inline-block text-accent font-semibold text-sm md:text-base tracking-widest uppercase mb-4">
            Transparent Pricing
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-balance mb-6">
            Investment in Your Future
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted leading-relaxed">
            Clear, upfront pricing with financing options available. No hidden costs, just transparent care.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative animate-fade-in transition-all duration-300 ${
                tier.highlighted ? 'md:scale-105 z-10' : ''
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Highlight badge */}
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold z-20">
                  Most Popular
                </div>
              )}

              {/* Card */}
              <div
                className={`glass-card p-8 h-full flex flex-col ${
                  tier.highlighted ? 'ring-2 ring-accent' : ''
                }`}
              >
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-muted text-sm">{tier.description}</p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-4xl md:text-5xl font-bold text-accent">
                    {tier.price}
                  </span>
                  {tier.price !== '$500' && (
                    <p className="text-muted text-sm mt-2">
                      Financing available starting at $300/month
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8 flex-grow">
                  {tier.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-3"
                    >
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={onQuoteClick}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                    tier.highlighted
                      ? 'btn-primary'
                      : 'btn-secondary'
                  }`}
                >
                  Get Your Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="max-w-4xl mx-auto glass-card p-8 md:p-10 animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Financing & Insurance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-accent mb-3">Payment Plans</h4>
              <ul className="space-y-2 text-muted">
                <li className="flex items-center space-x-2">
                  <span className="w-1 h-1 rounded-full bg-accent" />
                  <span>0% interest payment plans</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1 h-1 rounded-full bg-accent" />
                  <span>Flexible monthly installments</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1 h-1 rounded-full bg-accent" />
                  <span>Medical credit cards accepted</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-accent mb-3">Insurance Support</h4>
              <ul className="space-y-2 text-muted">
                <li className="flex items-center space-x-2">
                  <span className="w-1 h-1 rounded-full bg-accent" />
                  <span>Insurance verification assistance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1 h-1 rounded-full bg-accent" />
                  <span>Coverage estimate provided</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1 h-1 rounded-full bg-accent" />
                  <span>FSA/HSA compatible</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
