import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  TrendingUp,
  Calendar,
  CheckCircle2,
  ArrowUpRight,
  User,
  Mail,
  Lock,
  ArrowRight,
  Eye,
  EyeOff,
  CheckIcon,
  AlertCircle,
} from 'lucide-react'
import Button from '../../components/ui/premium/Button'
import { Card,Badge, InputField, Alert, ProgressBar } from '../../components/ui/premium/index'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    if (name === 'password') {
      // Calculate password strength
      let strength = 0
      if (value.length >= 8) strength++
      if (/[A-Z]/.test(value)) strength++
      if (/[0-9]/.test(value)) strength++
      if (/[^A-Za-z0-9]/.test(value)) strength++
      setPasswordStrength(strength)
    }

    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Valid email is required'
    if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters'
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      // Submit form
      console.log('Form submitted:', formData)
    }
  }

  const strengthLabels = ['', 'Weak', 'Fair', 'Good', 'Strong']
  const strengthColors = ['', 'error', 'warning', 'warning', 'success']

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white px-4 py-8">
      {/* Background Elements */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <div className="w-96 h-96 bg-primary-600 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md relative z-10"
      >
        {/* Logo & Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              E
            </div>
            <span className="text-2xl font-bold text-slate-900">EduPath</span>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Create Account</h1>
          <p className="text-slate-600">Join 50,000+ students succeeding with EduPath</p>
        </div>

        {/* Form Card */}
        <Card className="p-6 mb-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <InputField
              label="Full Name"
              type="text"
              name="name"
              placeholder="Your full name"
              icon={User}
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              helper="What should we call you?"
            />

            {/* Email */}
            <InputField
              label="Email Address"
              type="email"
              name="email"
              placeholder="name@example.com"
              icon={Mail}
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              helper="We'll use this for your account"
            />

            {/* Password */}
            <div>
              <label className="label mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Create a strong password"
                  className={`
                    w-full px-4 py-3 pl-10 rounded-lg border-2 transition-all duration-200
                    ${errors.password ? 'border-error focus:border-error' : 'border-slate-200 focus:border-primary-500'}
                    bg-white font-medium text-slate-900 placeholder-slate-400
                    focus:outline-none focus:ring-2 focus:ring-primary-100
                  `}
                  value={formData.password}
                  onChange={handleChange}
                />
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {formData.password && (
                <div className="mt-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-slate-600">Strength:</span>
                    <span className={`text-xs font-semibold text-${strengthColors[passwordStrength] || 'slate-400'}-600`}>
                      {strengthLabels[passwordStrength] || 'Enter password'}
                    </span>
                  </div>
                  <ProgressBar value={passwordStrength} max={4} size="sm" color={strengthColors[passwordStrength] || 'slate'} showLabel={false} />
                  <ul className="text-xs text-slate-500 mt-2 space-y-1">
                    <li className="flex items-center gap-1">
                      <span className={formData.password.length >= 8 ? 'text-emerald-600' : 'opacity-50'}>
                        ✓
                      </span>
                      At least 8 characters
                    </li>
                    <li className="flex items-center gap-1">
                      <span className={/[A-Z]/.test(formData.password) ? 'text-emerald-600' : 'opacity-50'}>
                        ✓
                      </span>
                      One uppercase letter
                    </li>
                    <li className="flex items-center gap-1">
                      <span className={/[0-9]/.test(formData.password) ? 'text-emerald-600' : 'opacity-50'}>
                        ✓
                      </span>
                      One number
                    </li>
                  </ul>
                </div>
              )}
              {errors.password && <p className="helper-text text-error mt-1">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="label mb-2">Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirm ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Re-enter your password"
                  className={`
                    w-full px-4 py-3 pl-10 rounded-lg border-2 transition-all duration-200
                    ${errors.confirmPassword ? 'border-error focus:border-error' : 'border-slate-200 focus:border-primary-500'}
                    bg-white font-medium text-slate-900 placeholder-slate-400
                    focus:outline-none focus:ring-2 focus:ring-primary-100
                  `}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.confirmPassword && <p className="helper-text text-error mt-1">{errors.confirmPassword}</p>}
            </div>

            {/* Terms */}
            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-primary-600 mt-0.5" required />
              <span className="text-xs text-slate-600">
                I agree to EduPath's{' '}
                <a href="#" className="text-primary-600 font-semibold hover:underline">
                  Terms of Service
                </a>
                {' '}and{' '}
                <a href="#" className="text-primary-600 font-semibold hover:underline">
                  Privacy Policy
                </a>
              </span>
            </label>

            {/* Submit */}
            <Button variant="primary" fullWidth size="lg" icon={ArrowRight} iconPosition="right">
              Create Account
            </Button>
          </form>
        </Card>

        {/* Divider */}
        <div className="relative mb-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-slate-500">or sign up with</span>
          </div>
        </div>

        {/* Social Signup */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <Button variant="secondary" fullWidth>
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </Button>
          <Button variant="secondary" fullWidth>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
            </svg>
          </Button>
        </div>

        {/* Sign In Link */}
        <p className="text-center text-slate-600">
          Already have an account?{' '}
          <a href="/login" className="text-primary-600 font-semibold hover:text-primary-700">
            Sign in
          </a>
        </p>
      </motion.div>
    </div>
  )
}

export default Register
