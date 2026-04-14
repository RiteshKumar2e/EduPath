import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Menu,
  X,
  Home,
  BrainCircuit,
  TrendingUp,
  Calculator,
  Clock,
  MessageSquare,
  Banknote,
  FileText,
  BarChart3,
  Settings,
  LogOut,
  Bell,
  Search,
} from 'lucide-react'

const Navbar = ({ user, onLogout }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/dashboard', label: 'Dashboard', icon: Home },
    { path: '/career-navigator', label: 'Career Path', icon: BrainCircuit },
    { path: '/admission-predictor', label: 'Admission', icon: TrendingUp },
    { path: '/roi-calculator', label: 'ROI', icon: Calculator },
    { path: '/timeline', label: 'Timeline', icon: Clock },
    { path: '/chat-mentor', label: 'AI Mentor', icon: MessageSquare },
    { path: '/loan-eligibility', label: 'Loans', icon: Banknote },
    { path: '/documents', label: 'Documents', icon: FileText },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold">
              E
            </div>
            <span className="text-lg font-bold text-slate-900 hidden sm:inline">EduPath</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`
                  px-3 py-2 text-sm font-semibold rounded-lg transition-colors
                  ${isActive(path)
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-slate-600 hover:text-slate-900'
                  }
                `}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-400">
              <Search size={20} />
            </button>
            <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors relative text-slate-400">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* User Avatar */}
            {user && (
              <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-slate-200">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full"
                />
                <div className="hidden sm:block">
                  <p className="text-sm font-semibold text-slate-900">{user.name}</p>
                  <p className="text-xs text-slate-500">{user.email}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden border-t border-slate-200 py-4 space-y-2"
          >
            {navLinks.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setMobileOpen(false)}
                className={`
                  flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-lg transition-colors block
                  ${isActive(path)
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-slate-600 hover:text-slate-900'
                  }
                `}
              >
                <Icon size={18} />
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

const DashboardLayout = ({ children, ...props }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar {...props} />
      <main className="pt-16">
        {children}
      </main>
    </div>
  )
}

export { Navbar, DashboardLayout }
export default DashboardLayout
