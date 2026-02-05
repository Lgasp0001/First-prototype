'use client'

import {
  Heart,
  Microscope,
  Droplet,
  Baby,
  Users,
  CheckCircle,
} from 'lucide-react'

const services = [
  {
    icon: Heart,
    title: 'IVF Treatment',
    description:
      'Advanced in vitro fertilization with state-of-the-art laboratory technology and proven success protocols.',
    features: ['Ovarian Stimulation', 'Egg Retrieval', 'Embryo Transfer'],
  },
  {
    icon: Droplet,
    title: 'IUI Procedure',
    description:
      'Intrauterine insemination for optimal sperm placement and increased pregnancy potential.',
    features: ['Fertility Monitoring', 'Sperm Preparation', 'Timed Placement'],
  },
  {
    icon: Microscope,
    title: 'Genetic Testing',
    description:
      'PGT-A chromosomal testing to select the healthiest embryos for transfer.',
    features: ['Embryo Screening', 'Genetic Analysis', 'Health Assessment'],
  },
  {
    icon: Baby,
    title: 'Egg Freezing',
    description:
      'Preserve your fertility potential for the future with our proven freezing protocols.',
    features: ['Egg Preservation', 'Long-term Storage', 'Future Planning'],
  },
  {
    icon: Users,
    title: 'Donor Programs',
    description:
      'Carefully vetted egg and sperm donors to help build your family.',
    features: ['Donor Matching', 'Screening', 'Legal Support'],
  },
  {
    icon: CheckCircle,
    title: 'Fertility Assessment',
    description:
      'Comprehensive evaluation to understand your fertility and create a personalized treatment plan.',
    features: ['Diagnostic Testing', 'Consultation', 'Treatment Planning'],
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="relative py-20 md:py-32 bg-gradient-to-b from-background via-background to-background/80 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 animate-slide-up">
          <span className="inline-block text-accent font-semibold text-sm md:text-base tracking-widest uppercase mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-balance mb-6">
            Comprehensive Fertility Solutions
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted leading-relaxed">
            From initial assessment to successful conception, we offer a complete range of evidence-based
            treatments tailored to your unique needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="glass-card p-6 md:p-8 hover:scale-105 group animate-fade-in"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <button className="mt-6 text-accent hover:text-accent/80 font-semibold text-sm flex items-center space-x-2 transition-all duration-300 group-hover:translate-x-1">
                  <span>Learn More</span>
                  <span>→</span>
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
