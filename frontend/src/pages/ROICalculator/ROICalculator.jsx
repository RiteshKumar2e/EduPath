import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, IndianRupee, TrendingUp, ArrowUpRight, GraduationCap, Briefcase } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import '../../styles/ROICalculator.css'

const ROICalculator = () => {
  const [isCalculated, setIsCalculated] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleCalculate = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setIsCalculated(true)
    }, 1500)
  }

  const chartData = [
    { name: 'Total Cost', value: 4500000, color: '#94a3b8' },
    { name: 'Year 1 Salary', value: 3800000, color: '#0ea5e9' },
  ]

  return (
    <div className="roi-container">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-black text-slate-800 leading-tight mb-12">ROI Calculator</h1>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <form onSubmit={handleCalculate} className="calc-card space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <InputGroup label="Tuition Fees" icon={<GraduationCap size={20} />} placeholder="50,00,000" />
                <InputGroup label="Expected Salary" icon={<Briefcase size={20} />} placeholder="45,00,000" />
              </div>
              <button type="submit" className="w-full py-6 bg-primary-600 text-white rounded-[28px] font-black text-xl shadow-2xl transition-all">
                {loading ? 'Crunching...' : 'Calculate ROI'}
              </button>
            </form>
          </div>
          
          <div className="w-full lg:w-[480px]">
             {isCalculated && (
               <div className="roi-stats-box">
                 <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Payback Period</p>
                 <h2 className="text-5xl font-black text-primary-400">1.8 Years</h2>
               </div>
             )}
          </div>
        </div>
      </div>
    </div>
  )
}

const InputGroup = ({ label, icon, placeholder }) => (
  <div className="space-y-3">
    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-4">{label}</label>
    <div className="relative">
      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400">{icon}</div>
      <input type="text" placeholder={placeholder} className="w-full pl-16 pr-8 py-5 bg-slate-50 border border-slate-100 rounded-3xl font-bold text-slate-800" />
    </div>
  </div>
)

export default ROICalculator
