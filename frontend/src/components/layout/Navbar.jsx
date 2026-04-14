import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { GraduationCap, Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg border-b border-slate-100 py-3 shadow-sm' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
            <GraduationCap size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800">EduPath</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Features</a>
          <a href="#universities" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Universities</a>
          <a href="#financing" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Financing</a>
          <Link to="/login" className="text-sm font-semibold text-slate-800 hover:text-primary-600 px-4 py-2">Log in</Link>
          <Link to="/register" className="bg-primary-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-primary-200 hover:bg-primary-700 hover:shadow-xl transition-all active:scale-95">
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-600">
          <Menu size={24} />
        </button>
      </div>
    </motion.nav>
  )
}

export default Navbar
