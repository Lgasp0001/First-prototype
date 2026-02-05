'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      "The entire team was compassionate, professional, and helped us navigate our journey with hope. They turned our dreams into reality.",
    author: 'Sarah & Michael',
    treatment: 'IVF',
    rating: 5,
  },
  {
    quote:
      "After years of struggling, we finally have our beautiful daughter. The expertise and care we received exceeded all expectations.",
    author: 'Jessica L.',
    treatment: 'IVF with Genetic Testing',
    rating: 5,
  },
  {
    quote:
      "The staff made us feel heard and supported throughout the entire process. We felt like family, not just patients.",
    author: 'David & Emma',
    treatment: 'IUI',
    rating: 5,
  },
  {
    quote:
      "Freezing my eggs gave me peace of mind about my future. The process was painless and the team was incredibly supportive.",
    author: 'Rachel M.',
    treatment: 'Egg Freezing',
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section
      id="testimonials"
      className="relative py-20 md:py-32 bg-gradient-to-b from-background via-background to-background/80"
    >
      {/* Background accent */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 animate-slide-up">
          <span className="inline-block text-accent font-semibold text-sm md:text-base tracking-widest uppercase mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-balance mb-6">
            Stories of Hope & Joy
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted leading-relaxed">
            Hear from families who achieved their dreams with our compassionate care and expert treatment.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 animate-scale-in">
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-accent text-accent"
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-8 leading-relaxed">
              "{currentTestimonial.quote}"
            </blockquote>

            {/* Author */}
            <div className="border-t border-white/10 pt-6">
              <p className="font-bold text-lg text-foreground">
                {currentTestimonial.author}
              </p>
              <p className="text-accent font-semibold text-sm md:text-base">
                {currentTestimonial.treatment}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 md:mt-10 flex-col md:flex-row gap-4">
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-lg hover:bg-white/10 transition-all duration-200 text-accent hover:text-accent/80"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-lg hover:bg-white/10 transition-all duration-200 text-accent hover:text-accent/80"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Indicators */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? 'w-8 h-2 bg-accent'
                        : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 mt-12 md:gap-6">
            {[
              { value: '98%', label: 'Patient Satisfaction' },
              { value: '12k+', label: 'Happy Families' },
              { value: '4.9★', label: 'Avg. Rating' },
            ].map((stat, i) => (
              <div
                key={i}
                className="glass-card p-4 md:p-6 text-center animate-fade-in"
                style={{
                  animationDelay: `${i * 100}ms`,
                }}
              >
                <p className="text-2xl md:text-3xl font-bold text-accent mb-2">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
