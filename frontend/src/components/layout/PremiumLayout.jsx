import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home,
  BrainCircuit,
  TrendingUp,
  Calculator,
  Clock,
  MessageSquare,
  Banknote,
  FileText,
  Settings,
  LogOut,
  Bell,
  Search,
  Menu,
  X,
  ChevronRight,
  Sparkles,
  Trophy,
  Zap
} from 'lucide-react'

const SidebarLink = ({ to, icon: Icon, label, active, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-bold transition-all duration-300 ${
      active 
        ? 'bg-primary-600 text-white shadow-lg shadow-primary-100 scale-[1.02]' 
        : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
    }`}
  >
    <Icon size={20} />
    <span className="text-sm">{label}</span>
    {active && (
      <motion.div 
        layoutId="active-pill"
        className="ml-auto w-1.5 h-1.5 rounded-full bg-white" 
      />
    )}
  </Link>
)

const DashboardLayout = ({ children, user }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/dashboard', label: 'Home', icon: Home },
    { path: '/career-navigator', label: 'Navigator', icon: BrainCircuit },
    { path: '/admission-predictor', label: 'Predictor', icon: TrendingUp },
    { path: '/roi-calculator', label: 'ROI Calc', icon: Calculator },
    { path: '/timeline', label: 'Roadmap', icon: Clock },
    { path: '/chat-mentor', label: 'AI Mentor', icon: MessageSquare },
    { path: '/loan-eligibility', label: 'Financing', icon: Banknote },
    { path: '/documents', label: 'Vault', icon: FileText },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-72 bg-white border-r border-slate-200 p-6 fixed inset-y-0 z-50">
        <Link to="/" className="flex items-center gap-3 mb-10 px-2">
          <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-xl">
            <Sparkles size={20} />
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-900">EduPath</span>
        </Link>

        <div className="flex-1 space-y-2 overflow-y-auto pr-2 custom-scrollbar">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 px-4">Menu</p>
          {navLinks.map((link) => (
            <SidebarLink 
              key={link.path} 
              {...link} 
              active={isActive(link.path)} 
            />
          ))}
        </div>

        <div className="pt-6 mt-6 border-t border-slate-100 space-y-2">
          <SidebarLink to="/settings" icon={Settings} label="Settings" active={isActive('/settings')} />
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-bold text-red-500 hover:bg-red-50 transition-colors">
            <LogOut size={20} />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 lg:pl-72 flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40 px-6 sm:px-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 bg-slate-100 rounded-xl text-slate-600"
            >
              <Menu size={20} />
            </button>
            <div className="hidden sm:flex items-center gap-2 text-sm font-bold text-slate-400 uppercase tracking-widest">
              <span>Student</span>
              <ChevronRight size={14} />
              <span className="text-slate-900">{navLinks.find(l => isActive(l.path))?.label || 'Overview'}</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-xl text-slate-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-primary-100 transition-all">
              <Search size={18} />
              <input type="text" placeholder="Search tools..." className="bg-transparent border-none outline-none text-sm font-medium w-40" />
            </div>

            <div className="flex items-center gap-4">
              <button className="relative p-2.5 bg-slate-100 rounded-xl text-slate-600 hover:bg-slate-200 transition-colors">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              
              <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-bold text-slate-900">{user?.name || 'Student'}</p>
                  <div className="flex items-center gap-1 justify-end">
                    <Trophy size={12} className="text-amber-500" />
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Gold Rank</span>
                  </div>
                </div>
                <img 
                  src={user?.avatar || 'https://ui-avatars.com/api/?name=User'} 
                  className="w-10 h-10 rounded-xl border-2 border-primary-100"
                  alt="Avatar"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6 sm:p-10 flex-1">
          {children}
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] lg:hidden"
            />
            <motion.aside 
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              className="fixed inset-y-0 left-0 w-72 bg-white z-[70] lg:hidden p-6 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-10">
                <Link to="/" className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white">
                    <Sparkles size={20} />
                  </div>
                  <span className="text-2xl font-black tracking-tighter text-slate-900">EduPath</span>
                </Link>
                <button onClick={() => setSidebarOpen(false)} className="p-2 bg-slate-100 rounded-xl">
                  <X size={20} />
                </button>
              </div>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <SidebarLink 
                    key={link.path} 
                    {...link} 
                    active={isActive(link.path)} 
                    onClick={() => setSidebarOpen(false)}
                  />
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export { DashboardLayout }
export default DashboardLayout
