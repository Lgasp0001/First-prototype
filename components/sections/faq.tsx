'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    category: 'Treatment',
    questions: [
      {
        q: 'What is IVF and how does it work?',
        a: 'IVF (In Vitro Fertilization) is a process where eggs are retrieved and fertilized with sperm outside the body in a laboratory setting. After fertilization, embryos are cultured and then transferred into the uterus. Our advanced protocols optimize every step for the best possible outcomes.',
      },
      {
        q: 'What is the success rate of IVF at your clinic?',
        a: 'Our live birth rate is 95% for patients under 35, which exceeds the national average of 48%. Success rates vary based on age, egg quality, and other individual factors. We provide personalized success rate estimates during your consultation.',
      },
      {
        q: 'How long does a typical IVF cycle take?',
        a: 'A standard IVF cycle takes approximately 4-6 weeks from the start of stimulation to the embryo transfer. This includes ovarian stimulation (10-14 days), egg retrieval, laboratory fertilization and culture (3-5 days), and finally the transfer procedure.',
      },
    ],
  },
  {
    category: 'Financial',
    questions: [
      {
        q: 'How much does fertility treatment cost?',
        a: 'Costs vary based on the type of treatment. A fertility assessment starts at $500, IVF cycles range from $12,000-$18,000 depending on services. We offer transparent pricing with no hidden costs and provide detailed estimates before treatment begins.',
      },
      {
        q: 'Do you offer financing options?',
        a: 'Yes! We offer 0% interest payment plans with flexible monthly installments, medical credit cards (CareCredit), and compatibility with FSA/HSA accounts. Our financial coordinator can discuss options tailored to your situation.',
      },
      {
        q: 'Will insurance cover my treatment?',
        a: 'Insurance coverage varies by policy and state. Many plans cover diagnostic testing and some procedures. Our team provides insurance verification assistance and estimates so you know exactly what your coverage will be before proceeding.',
      },
    ],
  },
  {
    category: 'Your Journey',
    questions: [
      {
        q: 'What should I expect during my first visit?',
        a: 'Your first consultation is typically 60 minutes and includes a comprehensive review of your medical history, initial physical exam, bloodwork, ultrasound, and a detailed discussion of your fertility options. You\'ll leave with a personalized treatment plan.',
      },
      {
        q: 'Is treatment covered by privacy assurances?',
        a: 'Absolutely. We prioritize patient confidentiality and comply fully with HIPAA regulations. All medical records are securely maintained, and we offer discrete appointment scheduling to ensure your privacy throughout your treatment journey.',
      },
      {
        q: 'Do you provide emotional support during treatment?',
        a: 'Yes, fertility treatment can be emotionally challenging. We offer counseling services, support groups, and connections to mental health professionals who specialize in fertility issues. Your emotional well-being is as important as your physical health.',
      },
    ],
  },
]

export function FAQ() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const toggleQuestion = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section
      id="faq"
      className="relative py-20 md:py-32 bg-gradient-to-b from-background via-background to-background/80"
    >
      {/* Background accent */}
      <div className="absolute inset-0 -z-10 opacity-15">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 animate-slide-up">
          <span className="inline-block text-accent font-semibold text-sm md:text-base tracking-widest uppercase mb-4">
            Questions & Answers
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-balance mb-6">
            Everything You Need to Know
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted leading-relaxed">
            Get answers to common questions about fertility treatment, costs, and your journey with us.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqs.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="animate-fade-in"
              style={{
                animationDelay: `${categoryIndex * 100}ms`,
              }}
            >
              {/* Category Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-accent mb-6 flex items-center space-x-3">
                <div className="w-1 h-8 bg-accent rounded-full" />
                <span>{category.category}</span>
              </h3>

              {/* Questions */}
              <div className="space-y-4">
                {category.questions.map((item, questionIndex) => {
                  const uniqueId = `${categoryIndex}-${questionIndex}`
                  const isExpanded = expandedId === uniqueId

                  return (
                    <div
                      key={uniqueId}
                      className="glass-card overflow-hidden transition-all duration-300 hover:border-white/20"
                    >
                      {/* Question Button */}
                      <button
                        onClick={() => toggleQuestion(uniqueId)}
                        className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between gap-4 text-left hover:bg-white/5 transition-colors duration-200"
                      >
                        <span className="text-lg md:text-xl font-semibold text-foreground pr-4">
                          {item.q}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {/* Answer */}
                      {isExpanded && (
                        <div className="px-6 md:px-8 pb-6 border-t border-white/10 animate-slide-down">
                          <p className="text-muted leading-relaxed">
                            {item.a}
                          </p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-20 glass-card p-8 md:p-10 text-center animate-scale-in">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Didn't find your answer?
          </h3>
          <p className="text-muted mb-6">
            Our team is ready to answer any questions you have. Reach out for a free consultation.
          </p>
          <a
            href="/contact"
            className="inline-block btn-primary text-base md:text-lg"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  )
}
