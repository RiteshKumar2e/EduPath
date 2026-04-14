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
  Trophy
} from 'lucide-react'

const SidebarLink = ({ to, icon: Icon, label, active, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="flex items-center gap-3 px-4 py-3 rounded-2xl font-bold transition-all"
    style={{
      backgroundColor: active ? 'var(--primary-600)' : 'transparent',
      color: active ? 'white' : 'var(--slate-500)',
      boxShadow: active ? '0 8px 16px rgba(11, 126, 229, 0.2)' : 'none',
      transform: active ? 'scale(1.02)' : 'scale(1)'
    }}
  >
    <Icon size={20} />
    <span className="text-sm">{label}</span>
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
    <div className="flex bg-slate-50 min-h-screen">
      {/* Sidebar - Desktop */}
      <aside 
        className="hidden lg:flex flex-col w-72 bg-white fixed inset-y-0 h-full p-6 z-50 shadow-sm"
        style={{ borderRight: '1px solid var(--slate-200)', left: 0 }}
      >
        <Link to="/" className="flex items-center gap-3 mb-10 px-2">
          <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-lg">
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

        <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col gap-2">
          <SidebarLink to="/settings" icon={Settings} label="Settings" active={isActive('/settings')} />
          <button className="flex items-center gap-3 px-4 py-3 rounded-2xl font-bold text-red-500 hover:bg-red-50 transition-all text-left w-full">
            <LogOut size={20} />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 lg:pl-72 flex flex-col min-h-screen">
        {/* Top Header */}
        <header 
          className="h-20 bg-white sticky top-0 z-40 px-6 sm:px-10 flex items-center justify-between shadow-sm"
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid var(--slate-200)'
          }}
        >
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 bg-slate-50 text-slate-600 rounded-xl"
            >
              <Menu size={20} />
            </button>
            <div className="hidden sm:flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-widest">
              <span>Student</span>
              <ChevronRight size={14} />
              <span className="text-slate-900">{navLinks.find(l => isActive(l.path))?.label || 'Overview'}</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-3 px-4 py-2.5 bg-slate-100 rounded-xl text-slate-500 border-2 border-transparent focus-within:bg-white focus-within:border-primary-100 transition-all">
              <Search size={18} />
              <input type="text" placeholder="Search insights..." className="bg-transparent border-none outline-none text-sm font-bold w-40 text-slate-900" />
            </div>

            <div className="flex items-center gap-4">
              <button className="relative p-2.5 bg-slate-100 rounded-xl text-slate-500 transition-all hover:bg-slate-200">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              
              <div className="flex items-center gap-3 pl-4 border-l border-slate-100">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-black text-slate-900 leading-tight">{user?.name || 'Student'}</p>
                  <div className="flex items-center gap-1 justify-end">
                    <Trophy size={10} className="text-amber-500" />
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Scholar Rank</span>
                  </div>
                </div>
                <img 
                  src={user?.avatar || 'https://ui-avatars.com/api/?name=User'} 
                  className="w-10 h-10 rounded-xl shadow-md border-2 border-white"
                  alt="Avatar"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6 sm:p-10 flex-1">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
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
              className="fixed inset-0 z-100 lg:hidden"
              style={{ backgroundColor: 'rgba(15, 23, 42, 0.4)', backdropFilter: 'blur(4px)' }}
            />
            <motion.aside 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              className="fixed inset-y-0 left-0 w-72 bg-white z-100 lg:hidden p-6 shadow-2xl h-full flex flex-col"
            >
              <div className="flex items-center justify-between mb-10">
                <Link to="/" className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white">
                    <Sparkles size={20} />
                  </div>
                  <span className="text-2xl font-black tracking-tighter text-slate-900">EduPath</span>
                </Link>
                <button onClick={() => setSidebarOpen(false)} className="p-2 bg-slate-50 rounded-xl text-slate-900 border-none">
                  <X size={20} />
                </button>
              </div>
              <div className="flex-1 space-y-2">
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
