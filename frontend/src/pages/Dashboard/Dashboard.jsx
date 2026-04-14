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

  const financeData = [
    { name: 'Saved', value: 250000 },
    { name: 'Available', value: 450000 },
  ]

  const timelineData = [
    { name: 'Applications', done: 3, total: 8 },
    { name: 'Documents', done: 18, total: 20 },
    { name: 'Essays', done: 2, total: 5 },
  ]

  const universities = [
    { name: 'MIT', match: 94, type: 'Reach' },
    { name: 'Stanford', match: 87, type: 'Target' },
    { name: 'UC Berkeley', match: 92, type: 'Target' },
  ]

  const user = {
    name: 'Anmol',
    email: 'anmol@example.com',
    avatar: 'https://ui-avatars.com/api/?name=Anmol&background=0b7ee5&color=fff',
  }

  return (
    <DashboardLayout user={user}>
      <div className="bg-slate-50 min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Welcome back, {user.name}! 👋</h1>
                <p className="text-slate-600 mt-1">Here's your education journey snapshot</p>
              </div>
              <Badge variant="primary">📊 Profile Strength: 92%</Badge>
            </div>
          </motion.div>

          {/* Key Metrics Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <StatCard
                icon={TrendingUp}
                label="Loan Readiness"
                value="84%"
                trend="+5%"
                color="primary"
                className="hover:shadow-lg transition-all"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <StatCard
                icon={Target}
                label="University Shortlist"
                value="12"
                color="success"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <StatCard
                icon={CheckCircle2}
                label="Profile Completion"
                value="92%"
                color="primary"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <StatCard
                icon={Clock}
                label="Deadlines"
                value="3"
                trend="This month"
                color="warning"
              />
            </motion.div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content - Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* AI Insights Widget */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="p-6 bg-gradient-to-br from-primary-600 to-primary-700 text-white border-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white/20 rounded-lg">
                          <BrainCircuit size={24} />
                        </div>
                        <h3 className="text-xl font-bold">AI Career Insight</h3>
                      </div>
                      <p className="text-primary-50 mb-6 max-w-lg">Your profile matches 94% with the new AI-specialized Masters in Zurich. Your skills in data science and ML are highly aligned.</p>
                      <Button variant="secondary" size="md" icon={ArrowUpRight} iconPosition="right">
                        View Recommendations
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Admission Score Trend */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-6">Admission Score Trend</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={scoreTrend}>
                      <defs>
                        <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0b7ee5" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#0b7ee5" stopOpacity={0.01}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="name" stroke="#9ca3af" />
                      <YAxis stroke="#9ca3af" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#ffffff',
                          border: '1px solid #e5e7eb',
                          borderRadius: '8px',
                          boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                        }}
                      />
                      <Area type="monotone" dataKey="score" stroke="#0b7ee5" strokeWidth={2} fillOpacity={1} fill="url(#colorScore)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </Card>
              </motion.div>

              {/* Application Progress */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-6">Application Checklist</h3>
                  <div className="space-y-4">
                    {timelineData.map((item, i) => (
                      <div key={i}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-slate-900">{item.name}</span>
                          <span className="text-xs font-semibold text-slate-500">{item.done}/{item.total}</span>
                        </div>
                        <ProgressBar value={item.done} max={item.total} color="primary" size="md" showLabel={false} />
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar - Right Column */}
            <div className="space-y-8">
              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <Section title="Quick Actions">
                  <div className="space-y-3">
                    <Button variant="primary" fullWidth icon={BrainCircuit} iconPosition="left">
                      Career Navigator
                    </Button>
                    <Button variant="secondary" fullWidth icon={TrendingUp} iconPosition="left">
                      Admission Score
                    </Button>
                    <Button variant="secondary" fullWidth icon={Banknote} iconPosition="left">
                      Loan Options
                    </Button>
                  </div>
                </Section>
              </motion.div>

              {/* Top Universities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Section title="Top Matches">
                  <div className="space-y-3">
                    {universities.map((uni, i) => (
                      <Card key={i} className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-slate-900">{uni.name}</p>
                            <Badge variant="slate" size="sm" className="mt-1">{uni.type}</Badge>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-primary-600">{uni.match}%</p>
                            <p className="text-xs text-slate-500">match</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </Section>
              </motion.div>

              {/* Upcomng Deadlines */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <Section title="Upcoming Deadlines">
                  <div className="space-y-2">
                    {[
                      { date: 'Jan 15', task: 'MIT Application' },
                      { date: 'Jan 22', task: 'Stanford Essays' },
                      { date: 'Feb 1', task: 'Final Documents' },
                    ].map((item, i) => (
                      <Card key={i} className="p-3 flex items-center gap-2">
                        <Calendar size={16} className="text-primary-600 flex-shrink-0" />
                        <div className="flex-grow min-w-0">
                          <p className="text-xs font-semibold text-slate-600">{item.date}</p>
                          <p className="text-sm font-semibold text-slate-900 truncate">{item.task}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </Section>
              </motion.div>

              {/* Financing Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Section title="Financing Overview">
                  <Card className="p-4 bg-gradient-to-br from-emerald-50 to-slate-50">
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-semibold text-slate-600 mb-1">Pre-Approved Limit</p>
                        <p className="text-2xl font-bold text-slate-900">₹52,00,000</p>
                      </div>
                      <Divider />
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <p className="text-xs text-slate-600">Interest Rate</p>
                          <p className="font-bold text-slate-900">6.5% - 8.9%</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-600">Tenure</p>
                          <p className="font-bold text-slate-900">7 - 15 Years</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Section>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Dashboard
