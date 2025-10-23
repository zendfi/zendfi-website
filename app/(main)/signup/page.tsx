"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Image from "next/image"
import Link from "next/link"
import { Loader2 } from "lucide-react"

// Zod-like validation schema
const registrationSchema = {
  firstName: {
    required: true,
    minLength: 2,
    validate: (value: string) => {
      if (!value) return "First name is required"
      if (value.length < 2) return "First name must be at least 2 characters"
      return null
    }
  },
  lastName: {
    required: true,
    minLength: 2,
    validate: (value: string) => {
      if (!value) return "Last name is required"
      if (value.length < 2) return "Last name must be at least 2 characters"
      return null
    }
  },
  email: {
    required: true,
    validate: (value: string) => {
      if (!value) return "Email is required"
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value)) return "Please enter a valid email address"
      return null
    }
  },
  userType: {
    required: true,
    validate: (value: string) => {
      if (!value) return "Please select a user type"
      return null
    }
  },
  company: {
    required: false,
    validate: () => null
  },
  estimatedVolume: {
    required: false,
    validate: () => null
  }
}

export default function RegistrationPage() {
  const [step, setStep] = useState<'google' | 'details' | 'success'>('google')
  const [googleUser, setGoogleUser] = useState<{ email: string; name: string } | null>(null)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userType: "",
    company: "",
    estimatedVolume: ""
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Simulate Google Sign-In
  const handleGoogleSignIn = async () => {
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      // Mock Google user data
      const mockGoogleUser = {
        email: "user@example.com",
        name: "John Doe"
      }

      setGoogleUser(mockGoogleUser)

      // Pre-fill form with Google data
      const nameParts = mockGoogleUser.name.split(' ')
      setFormData(prev => ({
        ...prev,
        firstName: nameParts[0] || "",
        lastName: nameParts.slice(1).join(' ') || "",
        email: mockGoogleUser.email
      }))

      setStep('details')
      setIsSubmitting(false)
    }, 1000)
  }

  const validateField = (field: string, value: string) => {
    const fieldSchema = registrationSchema[field as keyof typeof registrationSchema]
    if (fieldSchema) {
      return fieldSchema.validate(value)
    }
    return null
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    Object.keys(registrationSchema).forEach(field => {
      const error = validateField(field, formData[field as keyof typeof formData])
      if (error) {
        newErrors[field] = error
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))

    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          googleEmail: googleUser?.email
        }),
      })

      if (response.ok) {
        setStep('success')
      } else {
        throw new Error('Failed to submit')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your information. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Google Sign-In Step
  if (step === 'google') {
    return (
      <main className="min-h-screen via-white to-accent/5">
         <header className="border-b border-accent/10 bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="Zendfi Logo"
                  width={120}
                  height={32}
                  className="h-8 w-auto filter hue-rotate-[19deg] brightness-110"
                  priority
                />
              </Link>
            </div>
          </div>
        </header>

        <div className="flex items-center justify-evenly min-h-[calc(100vh-64px)] py-12 px-4">
          <Image src={"/images/Sign-up.png"} alt="Sign-up" width={800} height={800} className="hidden lg:flex"/>
          <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8 text-center border border-purple-100">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Welcome Back
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Sign in to access your <span className="text-accent font-semibold">ZendFi</span> dashboard.
                    </p>

                    <button
                        onClick={handleGoogleSignIn}
                        disabled={isSubmitting}
                        className="flex items-center justify-center gap-3 w-full py-3 rounded-full border border-gray-300 bg-white text-gray-800 font-medium shadow-sm hover:bg-gray-50 transition-all"
                    >
                        {isSubmitting ? (
                            <Loader2 className="w-5 h-5 animate-spin text-accent/60" />
                        ) : (
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    fill="#4285F4"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                    fill="#34A853"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                    fill="#FBBC05"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                />
                                <path
                                    fill="#EA4335"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                />
                            </svg>
                        )}
                        {isSubmitting ? "Signing in..." : "Continue with Google"}
                    </button>

                    <div className="mt-8 text-sm text-gray-500">
                        By continuing, you agree to our{" "}
                        <a href="/terms" className="text-accent/60 hover:underline">
                            Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="/privacy" className="text-accent/60 hover:underline">
                            Privacy Policy
                        </a>
                        .
                    </div>
                </div>
        </div>
      </main>
    )
  }

  // Success Step
  if (step === 'success') {
    return (
      <main className="min-h-screen bg-gradient-to-br from-accent/5 via-white to-accent/5">
        <header className="border-b border-accent/10 bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="Zendfi Logo"
                  width={120}
                  height={32}
                  className="h-8 w-auto filter hue-rotate-[19deg] brightness-110"
                  priority
                />
              </Link>
            </div>
          </div>
        </header>

        <div className="flex items-center justify-evenly min-h-[calc(100vh-64px)] py-12 px-4">
          <Image src={"/images/Sign-up.png"} alt="Sign-up" width={800} height={800} className="hidden lg:flex" />
          <Card className="w-full max-w-md border-accent/10">
            <CardContent className="pt-6 text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                <svg className="h-8 w-8 text-accent/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Registration Complete!</h2>
              <p className="text-gray-600">
                Welcome to ZendFi! Your account has been created successfully. You can now start enjoying fast, reliable money transfers.
              </p>
              <div className="pt-4">
                <Button className="w-full bg-gradient-to-r from-accent/60 to-accent/50 hover:from-accent/70 hover:to-accent/60 text-white">
                  Get Started
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    )
  }

  // Details Form Step
  return (
    <main className="min-h-screen">
      <header className="border-b border-accent/10 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Zendfi Logo"
                width={120}
                height={32}
                className="h-8 w-auto filter hue-rotate-[19deg] brightness-110"
                priority
              />
            </Link>
          </div>
        </div>
      </header>

      <div className="flex items-center justify-between min-h-[calc(100vh-64px)] py-12 px-4">
        <Image src={"/images/Sign-up.png"} alt="Sign-up" width={800} height={800} className="hidden lg:flex" />
        <div className="w-full max-w-2xl flex flex-col justify-center items-center">
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Complete Your Profile
            </h1>
            <p className="text-sm text-gray-600 max-w-xl mx-auto">
              Tell us a bit more about yourself to personalize your <span className="text-accent font-semibold">ZendFi</span> experience
            </p>
          </div>

          <Card className="border-accent/10 max-w-lg">
            <CardHeader>
              <CardTitle className="text-center text-xl font-semibold text-gray-900">
                Account Details
              </CardTitle>
              {googleUser && (
                <p className="text-center text-sm text-gray-600">
                  Signed in as {googleUser.email}
                </p>
              )}
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className={`w-full ${errors.firstName ? 'border-red-500' : 'border-accent/20 focus:border-accent/40'}`}
                    />
                    {errors.firstName && (
                      <p className="text-sm text-red-600">{errors.firstName}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className={`w-full ${errors.lastName ? 'border-red-500' : 'border-accent/20 focus:border-accent/40'}`}
                    />
                    {errors.lastName && (
                      <p className="text-sm text-red-600">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    disabled={!!googleUser}
                    className={`w-full ${errors.email ? 'border-red-500' : 'border-accent/20 focus:border-accent/40'} ${googleUser ? 'bg-gray-50' : ''}`}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="userType" className="text-sm font-medium text-gray-700">
                    I am a... *
                  </label>
                  <select
                    id="userType"
                    value={formData.userType}
                    onChange={(e) => handleInputChange('userType', e.target.value)}
                    className={`w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 ${errors.userType ? 'border-red-500' : 'border-accent/20'
                      }`}
                  >
                    <option value="">Select one</option>
                    <option value="individual">Individual sending money to family/friends</option>
                    <option value="business">Business paying remote teams/suppliers</option>
                    <option value="nigerian-sme">Nigerian SME receiving payments</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.userType && (
                    <p className="text-sm text-red-600">{errors.userType}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-gray-700">
                    Company/Organization (Optional)
                  </label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="w-full border-accent/20 focus:border-accent/40"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="estimatedVolume" className="text-sm font-medium text-gray-700">
                    Estimated Monthly Transfer Volume
                  </label>
                  <select
                    id="estimatedVolume"
                    value={formData.estimatedVolume}
                    onChange={(e) => handleInputChange('estimatedVolume', e.target.value)}
                    className="w-full px-3 py-2 border border-accent/20 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent/40"
                  >
                    <option value="">Select range</option>
                    <option value="under-1k">Under $1,000</option>
                    <option value="1k-5k">$1,000 - $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-50k">$10,000 - $50,000</option>
                    <option value="50k-plus">$50,000+</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-accent/60 to-accent/50 hover:from-accent/70 hover:to-accent/60 text-white h-12"
                >
                  {isSubmitting ? 'Creating Account...' : 'Complete Registration'}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="text-center mt-6 text-xs text-gray-600">
            <p>
              Your information is secure and will be used in accordance with our{' '}
              <a href="#" className="text-accent/60 hover:text-accent/70 underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}