'use client'

import React from 'react'
import { useState } from 'react'
import { X, CheckCircle } from 'lucide-react'

interface JoinProgramModalProps {
  isOpen: boolean
  onClose: () => void
}

export function JoinProgramModal({ isOpen, onClose }: JoinProgramModalProps) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interests: [] as string[],
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Join program form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      onClose()
      setSubmitted(false)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        interests: [],
      })
    }, 2000)
  }

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
        <div className="relative w-full max-w-md glass-card rounded-2xl p-8 md:p-10 max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <>
              {/* Header */}
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Join Our Program
                </h2>
                <p className="text-muted">
                  Become part of our community and access exclusive resources and support.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    placeholder="(555) 000-0000"
                  />
                </div>

                {/* Interests */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-4">
                    Areas of Interest
                  </label>
                  <div className="space-y-3">
                    {['IVF Treatment', 'Fertility Testing', 'Egg Freezing', 'Support Groups'].map(
                      (interest) => (
                        <label
                          key={interest}
                          className="flex items-center space-x-3 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            checked={formData.interests.includes(interest)}
                            onChange={() => handleCheckboxChange(interest)}
                            className="w-4 h-4 rounded border-white/20 bg-white/5 text-accent cursor-pointer"
                          />
                          <span className="text-sm text-muted group-hover:text-foreground transition-colors">
                            {interest}
                          </span>
                        </label>
                      )
                    )}
                  </div>
                </div>

                {/* Privacy Note */}
                <p className="text-xs text-muted">
                  We respect your privacy. Your information is secure and confidential.
                </p>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-primary py-3 rounded-lg font-semibold"
                >
                  Join Program
                </button>

                {/* Cancel Button */}
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full btn-secondary py-3 rounded-lg font-semibold"
                >
                  Cancel
                </button>
              </form>
            </>
          ) : (
            // Success State
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <CheckCircle className="w-16 h-16 text-accent mb-4 animate-scale-in" />
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Welcome!
              </h3>
              <p className="text-muted mb-2">
                You've successfully joined our program.
              </p>
              <p className="text-sm text-muted-foreground">
                Check your email for next steps and exclusive resources.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
