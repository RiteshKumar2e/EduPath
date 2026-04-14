import React from 'react'
import { motion } from 'framer-motion'
import {
  TrendingUp,
  Calendar,
  CheckCircle2,
  ArrowUpRight,
  BrainCircuit,
  Banknote,
  FileText,
  Clock,
  Target,
  Zap,
  Book,
  Gift,
  Flame,
  Bell,
  ChevronRight,
  Sparkles
} from 'lucide-react'
import { AreaChart,Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, BarChart, Bar, Legend } from 'recharts'
import Button from '../../components/ui/premium/Button'
import { Card, StatCard, Badge, ProgressBar, Divider, Section } from '../../components/ui/premium/index'
import { DashboardLayout } from '../../components/layout/PremiumLayout'

const Dashboard = () => {
  // Mock data
  const scoreTrend = [
    { name: 'Jan', score: 65 },
    { name: 'Feb', score: 70 },
    { name: 'Mar', score: 78 },
    { name: 'Apr', score: 82 },
    { name: 'May', score: 85 },
    { name: 'Jun', score: 87 },
  ]

  const user = {
    name: 'Anmol',
    email: 'anmol@example.com',
    avatar: 'https://ui-avatars.com/api/?name=Anmol&background=0b7ee5&color=fff',
    points: 1250,
    streak: 5,
    rank: 'Gold Scholar'
  }

  const upcomingEvents = [
    { title: 'IELTS Preparation Webinar', time: 'Today, 6:00 PM', type: 'Live' },
    { title: 'MIT Application Deadline', time: 'Jan 15, 2024', type: 'Deadline' },
  ]

  return (
    <DashboardLayout user={user}>
      <div className="bg-slate-50 min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Banner - Gamification & Engagement */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <Card className="p-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white border-0 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-500">
                  <Gift size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Scholar Points</p>
                  <p className="text-2xl font-black">{user.points}</p>
                </div>
              </div>
              <Badge variant="warning" className="bg-amber-500/10 text-amber-500 border-amber-500/20">Redeem</Badge>
            </Card>

            <Card className="p-4 bg-gradient-to-r from-orange-600 to-red-600 text-white border-0 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white">
                  <Flame size={24} className="animate-pulse" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-100/60 uppercase tracking-widest">Day Streak</p>
                  <p className="text-2xl font-black">{user.streak} Days</p>
                </div>
              </div>
              <p className="text-xs font-bold text-white/80">Burning Brighter!</p>
            </Card>

            <Card className="p-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white border-0 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white">
                  <Sparkles size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary-100/60 uppercase tracking-widest">Current Rank</p>
                  <p className="text-2xl font-black">{user.rank}</p>
                </div>
              </div>
              <ChevronRight size={24} className="text-white/40" />
            </Card>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Student Success Hub</h1>
                <p className="text-slate-600 mt-1 font-medium">Your personalized path to global education and financing.</p>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="sm" icon={Bell} className="relative">
                  <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </Button>
                <Badge variant="primary" className="py-2 px-4 shadow-sm border-primary-100">Profile Strength: 92%</Badge>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content - Left Column */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* AI Hub - The Engagement Core */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 border-slate-200 hover:border-primary-300 transition-all group cursor-pointer relative overflow-hidden">
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary-50 rounded-full blur-2xl group-hover:bg-primary-100 transition-colors"></div>
                  <div className="relative">
                    <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <BrainCircuit size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">AI Career Navigator</h3>
                    <p className="text-sm text-slate-500 mb-4 line-clamp-2">Suggested: Masters in Robotics at ETH Zurich. Matches your 9.2 CGPA and AI interest.</p>
                    <div className="flex items-center text-primary-600 text-sm font-bold gap-1 group-hover:gap-2 transition-all">
                      Continue Discovery <ChevronRight size={16} />
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-slate-200 hover:border-emerald-300 transition-all group cursor-pointer relative overflow-hidden">
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-emerald-50 rounded-full blur-2xl group-hover:bg-emerald-100 transition-colors"></div>
                  <div className="relative">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <TrendingUp size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">ROI Predictor</h3>
                    <p className="text-sm text-slate-500 mb-4 line-clamp-2">MIT Alums earn 40% more in their first year. View your projected salary roadmap.</p>
                    <div className="flex items-center text-emerald-600 text-sm font-bold gap-1 group-hover:gap-2 transition-all">
                      Calculate ROI <ChevronRight size={16} />
                    </div>
                  </div>
                </Card>
              </div>

              {/* Admission Score Trend */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Admission Probability Trend</h3>
                    <p className="text-sm text-slate-500 font-medium">AI analysis based on profile updates</p>
                  </div>
                  <Badge variant="slate" className="font-bold">Last 6 Months</Badge>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={scoreTrend}>
                    <defs>
                      <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0b7ee5" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#0b7ee5" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#ffffff',
                        border: 'none',
                        borderRadius: '12px',
                        boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                      }}
                    />
                    <Area type="monotone" dataKey="score" stroke="#0b7ee5" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" />
                  </AreaChart>
                </ResponsiveContainer>
              </Card>

              {/* Smart Timeline - Engagement Loop */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-lg font-bold text-slate-900">Your Journey Checklist</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-sm">3/8</div>
                    <span className="text-sm text-slate-500 font-bold uppercase tracking-wider">Milestones</span>
                  </div>
                </div>
                <div className="relative space-y-6">
                  {/* Timeline Line */}
                  <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-slate-100"></div>
                  
                  {[
                    { title: 'University Discovery', status: 'completed', desc: '14 universities shortlisted' },
                    { title: 'Document Vault', status: 'completed', desc: 'Transcript & SOP uploaded' },
                    { title: 'Loan Pre-Approval', status: 'active', desc: 'Estimated limit: ₹52L' },
                    { title: 'Application Submission', status: 'pending', desc: 'Next: MIT Deadline (Jan 15)' },
                  ].map((item, i) => (
                    <div key={i} className="relative flex items-start gap-4 pl-12">
                      <div className={`absolute left-[18px] top-1.5 w-3 h-3 rounded-full border-2 border-white shadow-sm z-10 ${
                        item.status === 'completed' ? 'bg-primary-600' : 
                        item.status === 'active' ? 'bg-amber-500 animate-pulse' : 'bg-slate-200'
                      }`}></div>
                      <div>
                        <h4 className={`font-bold ${item.status === 'pending' ? 'text-slate-400' : 'text-slate-900'}`}>{item.title}</h4>
                        <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                      </div>
                      {item.status === 'active' && (
                        <div className="ml-auto">
                          <Button variant="secondary" size="xs">Complete Now</Button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Sidebar - Right Column */}
            <div className="space-y-8">
              
              {/* Financing Section - The Conversion Funnel */}
              <Card className="p-6 bg-slate-900 text-white border-0 shadow-2xl relative overflow-hidden group">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary-600/20 rounded-full blur-3xl group-hover:bg-primary-600/30 transition-colors"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                      <Banknote size={20} className="text-primary-400" />
                    </div>
                    <h3 className="text-lg font-bold">Financing Suite</h3>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Pre-Approved Limit</p>
                      <p className="text-3xl font-black">₹52,00,000</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Est. EMI</p>
                        <p className="text-sm font-bold italic">₹45k / mo</p>
                      </div>
                      <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Save Pot</p>
                        <p className="text-sm font-bold italic">₹5.2L Saved</p>
                      </div>
                    </div>
                  </div>

                  <Button variant="primary" fullWidth className="bg-white text-slate-900 hover:bg-slate-100 shadow-xl shadow-white/5">
                    Apply for Instant Loan
                  </Button>
                  <p className="text-[10px] text-center mt-3 text-slate-400 font-bold uppercase tracking-widest">Powered by EduPath Finance AI</p>
                </div>
              </Card>

              {/* AI Mentor Quick Nudge */}
              <Card className="p-6 border-slate-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <img src={user.avatar} className="w-12 h-12 rounded-xl border-2 border-primary-500" alt="Mentor" />
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">AI Mentor Insight</h3>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Always Active</p>
                  </div>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl mb-6 relative italic text-sm font-medium text-slate-600 leading-relaxed">
                  "I see you're looking at MIT. Based on current trends, having your gre score above 325 increases your admission probability by 14%."
                </div>
                <Button variant="secondary" fullWidth icon={ArrowUpRight} iconPosition="right">
                  Ask AI Anything
                </Button>
              </Card>

              {/* Community & Events */}
              <Section title="Community Events">
                <div className="space-y-3">
                  {upcomingEvents.map((event, i) => (
                    <Card key={i} className="p-4 hover:border-primary-200 transition-colors cursor-pointer group">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant={event.type === 'Live' ? 'primary' : 'slate'} size="xs">{event.type}</Badge>
                        <p className="text-xs font-bold text-slate-400">{event.time}</p>
                      </div>
                      <p className="text-sm font-bold text-slate-900 group-hover:text-primary-600 transition-colors">{event.title}</p>
                    </Card>
                  ))}
                </div>
              </Section>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Dashboard
