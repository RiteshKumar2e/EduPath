import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Banknote, ShieldCheck, Info, ArrowRight, Wallet, PieChart } from 'lucide-react'
import '../../styles/LoanEligibility.css'

const LoanEligibility = () => {
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

  return (
    <div className="loan-container">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-black text-slate-800 leading-tight">Loan Eligibility</h1>
          <p className="text-slate-500 font-bold mt-1 uppercase tracking-widest text-xs">Fintech Analysis Engine</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <form onSubmit={handleCalculate} className="fintech-card space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <InputGroup label="Expected Fees" icon={<Wallet size={20} />} placeholder="e.g. 50,00,000" />
                <InputGroup label="Co-applicant Income" icon={<Banknote size={20} />} placeholder="e.g. 1,50,000" />
              </div>
              <button type="submit" className="w-full py-6 bg-primary-600 text-white rounded-[28px] font-black text-xl shadow-2xl transition-all flex items-center justify-center gap-3">
                {loading ? 'Analyzing...' : 'Check Eligibility'} <ArrowRight size={24} />
              </button>
            </form>
          </div>

          <div className="w-full lg:w-[480px]">
            {isCalculated && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="result-box-dark">
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Max Pre-approval</p>
                <h2 className="text-5xl font-black text-primary-400 mb-6">₹42,00,000</h2>
                <div className="approval-badge">High Approval Odds</div>
              </motion.div>
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
      <div className="icon-badge">{icon}</div>
      <input type="text" placeholder={placeholder} className="input-fintech" />
    </div>
  </div>
)

export default LoanEligibility
