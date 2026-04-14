import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  LayoutDashboard, BrainCircuit, GraduationCap, 
  Banknote, Rocket, History, Settings, LogOut,
  FileText, PieChart
} from 'lucide-react'

const Sidebar = () => {
  const location = useLocation()
  
  const menuItems = [
    { label: 'Overview', icon: <LayoutDashboard size={20} />, path: '/dashboard' },
    { label: 'Career Navigator', icon: <BrainCircuit size={20} />, path: '/career-navigator' },
    { label: 'Admission Tool', icon: <GraduationCap size={20} />, path: '/admission-predictor' },
    { label: 'Financing', icon: <Banknote size={20} />, path: '/loan-eligibility' },
    { label: 'ROI Calculator', icon: <PieChart size={20} />, path: '/roi-calculator' },
    { label: 'AI Mentor', icon: <BrainCircuit size={20} />, path: '/chat-mentor' },
    { label: 'Timeline', icon: <History size={20} />, path: '/timeline' },
    { label: 'Documents', icon: <FileText size={20} />, path: '/documents' },
  ]

  return (
    <div className="w-64 h-screen fixed left-0 top-0 bg-white border-r border-slate-100 p-6 flex flex-col pt-24 z-40">
      <div className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <Link 
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${
                isActive 
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-100' 
                  : 'text-slate-400 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              {item.icon}
              <span className="text-sm">{item.label}</span>
            </Link>
          )
        })}
      </div>

      <div className="pt-6 border-t border-slate-100 space-y-2">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 font-bold hover:text-red-500 hover:bg-red-50 rounded-xl transition-all">
          <LogOut size={20} />
          <span className="text-sm">Log Out</span>
        </button>
      </div>
    </div>
  )
}

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex bg-[#FDFDFF]">
      <Sidebar />
      <main className="flex-1 ml-64 min-h-screen">
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout
