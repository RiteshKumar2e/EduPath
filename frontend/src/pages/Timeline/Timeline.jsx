import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, CheckCircle2, Clock, GraduationCap, Banknote, ShieldCheck, ArrowRight } from 'lucide-react'
import '../../styles/Timeline.css'

const timelineSteps = [
  { month: 'Sept 2024', title: 'Discovery & Shortlisting', desc: 'Research universities and finalize choices.', status: 'completed' },
  { month: 'Oct 2024', title: 'Standardized Tests', desc: 'Take GRE/GMAT and IELTS.', status: 'current' },
  { month: 'Nov 2024', title: 'Loan Pre-approval', desc: 'Get conditional loan offers.', status: 'pending' },
]

const Timeline = () => {
  return (
    <div className="timeline-container">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-slate-900 mb-12 text-center">Your Journey Roadmap</h1>
        <div className="relative">
          <div className="timeline-line"></div>
          <div className="space-y-12">
            {timelineSteps.map((step, i) => (
              <motion.div key={i} className="relative flex flex-col md:flex-row gap-8 items-start">
                <div className={`timeline-icon-hub ${step.status === 'completed' ? 'bg-green-100 text-green-600' : step.status === 'current' ? 'bg-primary-600 text-white animate-pulse' : 'bg-white text-slate-300 border border-slate-200'}`}>
                  {step.status === 'completed' ? <CheckCircle2 size={24} /> : <Clock size={24} />}
                </div>
                <div className="timeline-step-card flex-1">
                  <span className="text-xs font-black uppercase text-primary-600 mb-2 block">{step.month}</span>
                  <h3 className="text-2xl font-black text-slate-800 mb-3">{step.title}</h3>
                  <p className="text-slate-500 font-medium mb-6">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline
