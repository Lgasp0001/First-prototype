'use client'

import React from 'react'
import { X, CheckCircle, Users, Award, Stethoscope, Heart, Shield, BookOpen } from 'lucide-react'

interface ReasonsModalProps {
  isOpen: boolean
  onClose: () => void
}

const reasons = [
  {
    icon: Award,
    title: 'Expert Team',
    description: 'Access board-certified fertility specialists with 25+ years of combined experience.',
  },
  {
    icon: Heart,
    title: 'Compassionate Care',
    description: 'We understand your journey and provide emotional support every step of the way.',
  },
  {
    icon: CheckCircle,
    title: 'Proven Success',
    description: '52% live birth rate for patients under 35, above national average.',
  },
  {
    icon: Stethoscope,
    title: 'Advanced Technology',
    description: 'State-of-the-art laboratory equipment and advanced treatment protocols.',
  },
  {
    icon: Users,
    title: 'Support Community',
    description: 'Connect with others on similar journeys through our support groups and events.',
  },
  {
    icon: Shield,
    title: 'Privacy & Trust',
    description: 'Your information is fully protected with HIPAA compliance and strict confidentiality.',
  },
  {
    icon: BookOpen,
    title: 'Education Resources',
    description: 'Access comprehensive guides, webinars, and personalized consultation materials.',
  },
  {
    icon: Heart,
    title: 'Affordable Options',
    description: 'Flexible financing plans and package pricing to fit your budget.',
  },
]

export function ReasonsModal({ isOpen, onClose }: ReasonsModalProps) {
  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-scale-in">
        <div className="relative w-full max-w-2xl glass-card rounded-2xl p-8 md:p-10 max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Why Join Our Program?
            </h2>
            <p className="text-muted">
              Discover the benefits of becoming part of our fertility clinic community.
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <div
                  key={index}
                  className="glass-card p-5 rounded-lg hover:bg-white/10 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-foreground mb-1">
                        {reason.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Call to Action */}
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 btn-secondary py-3 rounded-lg font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
