import React from 'react'
import { motion } from 'framer-motion'
import { 
  Search, Bell, User, GraduationCap, 
  TrendingUp, Calendar, CheckCircle2, 
  ArrowUpRight, BrainCircuit, Banknote, 
  FileText, Clock, Globe
} from 'lucide-react'
import { 
  AreaChart, Area, XAxis, YAxis, 
  CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts'
import '../../styles/Dashboard.css'

const data = [
  { name: 'Jan', score: 65 },
  { name: 'Feb', score: 70 },
  { name: 'Mar', score: 78 },
  { name: 'Apr', score: 85 },
]

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-black text-slate-900 leading-tight">Welcome, Anmol! 👋</h1>
            <p className="text-slate-500 font-bold mt-1">AI has updated 3 of your recommendations.</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Search..." 
                className="search-input"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            </div>
            <div className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 shadow-sm cursor-pointer hover:bg-slate-50 transition-all">
              <Bell size={24} />
            </div>
            <div className="w-14 h-14 bg-primary-100 rounded-3xl border-2 border-primary-200 flex items-center justify-center font-black text-primary-600 overflow-hidden shadow-lg shadow-primary-100">
              <img src="https://ui-avatars.com/api/?name=Anmol&background=0ea5e9&color=fff" alt="User" />
            </div>
          </div>
        </div>

        {/* Top Grid: Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <StatCard title="Loan Readiness" value="84%" trend="+5%" icon={<TrendingUp size={22} />} />
          <StatCard title="Uni Shortlist" value="12" icon={<GraduationCap size={22} />} />
          <StatCard title="Profile Prep" value="92%" icon={<CheckCircle2 size={22} />} />
          <StatCard title="Deadlines" value="3" color="text-red-500" icon={<Clock size={22} />} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-10">
            {/* AI Insights Widget */}
            <div className="main-widget bg-gradient-to-br from-primary-600 to-indigo-700 text-white border-none shadow-[0_30px_60px_-15px_rgba(14,165,233,0.3)]">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white/20 backdrop-blur-xl rounded-2xl">
                    <BrainCircuit size={28} />
                  </div>
                  <h2 className="text-2xl font-black">AI Career Discovery</h2>
                </div>
                <p className="text-primary-50 mb-8 max-w-lg text-lg font-medium opacity-90">Your profile matches 94% with the new AI specialized Masters in Zurich. Want to see the full breakdown?</p>
                <button className="px-8 py-4 bg-white text-primary-600 font-black rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                  Check Matches <ArrowUpRight size={22} />
                </button>
              </div>
              <Sparkles className="absolute right-[-40px] bottom-[-40px] text-white/10 w-80 h-80 -rotate-12" />
            </div>

            {/* Application Progress Chart */}
            <div className="main-widget">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h3 className="text-2xl font-black text-slate-800">Growth Analysis</h3>
                  <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">Profile strength trend</p>
                </div>
                <button className="bg-slate-50 text-slate-500 px-5 py-2 rounded-xl text-xs font-black">LAST 4 MONTHS</button>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.15}/>
                        <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 13, fontWeight: '700'}} dy={15} />
                    <YAxis hide />
                    <Tooltip 
                      contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)', padding: '15px' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="score" 
                      stroke="#0ea5e9" 
                      strokeWidth={4} 
                      fillOpacity={1} 
                      fill="url(#colorScore)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-10">
            {/* Quick Actions */}
            <div className="main-widget p-8">
              <h3 className="text-xl font-black text-slate-800 mb-8">Quick Intelligence</h3>
              <div className="grid grid-cols-2 gap-5">
                <QuickTool icon={<Banknote className="text-indigo-500" />} label="ROI Calc" />
                <QuickTool icon={<TrendingUp className="text-blue-500" />} label="Admit Tool" />
                <QuickTool icon={<FileText className="text-orange-500" />} label="Doc Boss" />
                <QuickTool icon={<Globe className="text-green-500" />} label="Visa Help" />
              </div>
            </div>

            {/* Upcoming Deadlines */}
            <div className="main-widget p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-black text-slate-800">Deadlines</h3>
                <Calendar size={20} className="text-slate-400" />
              </div>
              <div className="space-y-6">
                <DeadlineItem date="Apr 20" title="TU Munich SOP" category="Academics" />
                <DeadlineItem date="May 05" title="Bank Statement" category="Financing" color="bg-orange-100 text-orange-600" />
                <DeadlineItem i={3} date="May 12" title="IELTS Booking" category="Exams" color="bg-purple-100 text-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const StatCard = ({ title, value, trend, icon, color = "text-primary-600" }) => (
  <div className="stat-card">
    <div className="flex items-center gap-4 mb-4">
      <div className={`p-3 rounded-2xl bg-slate-50 ${color}`}>{icon}</div>
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{title}</p>
    </div>
    <div className="flex items-end justify-between">
      <p className="text-3xl font-black text-slate-800">{value}</p>
      {trend && <span className="text-xs font-black text-green-500 bg-green-50 px-3 py-1 rounded-full">{trend}</span>}
    </div>
  </div>
)

const QuickTool = ({ icon, label }) => (
  <button className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:border-primary-200 hover:shadow-xl hover:shadow-primary-50 transition-all gap-4 group">
    <div className="transition-transform group-hover:scale-110">{icon}</div>
    <span className="text-xs font-black text-slate-500 uppercase tracking-tighter">{label}</span>
  </button>
)

const DeadlineItem = ({ date, title, category, color = "bg-blue-100 text-blue-600" }) => (
  <div className="flex items-start gap-4 p-4 border border-transparent hover:border-slate-50 hover:bg-slate-50/50 rounded-2xl transition-all">
    <div className="text-center min-w-[50px]">
      <p className="text-[10px] font-extrabold text-slate-400 uppercase">{date.split(' ')[0]}</p>
      <p className="text-2xl font-black text-slate-800 leading-none">{date.split(' ')[1]}</p>
    </div>
    <div className="flex-1">
      <p className="text-base font-black text-slate-800 leading-none mb-2">{title}</p>
      <span className={`text-[10px] font-black px-3 py-1 rounded-full ${color} uppercase tracking-tight`}>{category}</span>
    </div>
  </div>
)

const Sparkles = ({ className }) => <Clock className={className} /> // Dummy replacement

export default Dashboard
