import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, Menu, X, ArrowRight, Sparkles } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Hide Navbar in Dashboard or full-screen routes if needed
  const isDashboard = location.pathname.startsWith('/dashboard')
  if (isDashboard) return null

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled ? 'bg-white/70 backdrop-blur-xl py-3 shadow-glass border-b border-slate-200/50' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform">
            <GraduationCap size={22} />
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-900">EduPath</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1 bg-slate-100/50 p-1 rounded-2xl border border-slate-200/50">
          <a href="/#features" className="px-5 py-2 text-sm font-bold text-slate-600 hover:text-slate-900 hover:bg-white rounded-xl transition-all">Features</a>
          <a href="/#tools" className="px-5 py-2 text-sm font-bold text-slate-600 hover:text-slate-900 hover:bg-white rounded-xl transition-all">Tools</a>
          <a href="/#stats" className="px-5 py-2 text-sm font-bold text-slate-600 hover:text-slate-900 hover:bg-white rounded-xl transition-all">Impact</a>
          <Link to="/loans" className="px-5 py-2 text-sm font-bold text-slate-600 hover:text-slate-900 hover:bg-white rounded-xl transition-all">Financing</Link>
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <Link to="/login" className="text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors">
            Sign In
          </Link>
          <Link to="/register">
            <button className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:shadow-2xl hover:-translate-y-1 active:scale-95 transition-all flex items-center gap-2">
              Start Journey <ArrowRight size={16} />
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden w-10 h-10 flex items-center justify-center bg-slate-100 rounded-xl text-slate-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6">
              <a href="#features" className="block text-lg font-bold text-slate-900" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="#tools" className="block text-lg font-bold text-slate-900" onClick={() => setMobileMenuOpen(false)}>Tools</a>
              <Link to="/loans" className="block text-lg font-bold text-slate-900" onClick={() => setMobileMenuOpen(false)}>Financing</Link>
              <div className="pt-6 border-t border-slate-100 flex flex-col gap-4">
                <Link to="/login" className="w-full text-center py-4 text-lg font-bold text-slate-900 border border-slate-200 rounded-2xl">Sign In</Link>
                <Link to="/register" className="w-full text-center py-4 text-lg font-bold text-white bg-slate-900 rounded-2xl">Get Started</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
