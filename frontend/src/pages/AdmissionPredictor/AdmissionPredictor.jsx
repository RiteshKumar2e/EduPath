import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Trophy, Milestone, UserCheck, 
  ArrowRight, Sparkles, BookOpen, 
  Target, GraduationCap 
} from 'lucide-react'
import '../../styles/AdmissionPredictor.css'

const AdmissionPredictor = () => {
  const [isAnalyzed, setIsAnalyzed] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleAnalyze = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setIsAnalyzed(true)
    }, 2000)
  }

  return (
    <div className="admission-container">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-black text-slate-800 leading-tight">University Probabilities</h1>
          <p className="text-slate-500 font-bold mt-1 uppercase tracking-widest text-xs">AI Profile Strength Assessment</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Input Panel */}
          <div className="flex-1 w-full">
            <form onSubmit={handleAnalyze} className="prediction-card space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <InputGroup label="Target University" placeholder="e.g. Stanford University" />
                <InputGroup label="Desired Program" placeholder="e.g. MS CS" />
                <InputGroup label="GRE / GMAT Score" placeholder="e.g. 325" />
                <InputGroup label="IELTS / TOEFL" placeholder="e.g. 7.5" />
                <InputGroup label="Current CGPA" placeholder="e.g. 9.1" />
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-4">Work Experience</label>
                  <select className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-3xl focus:ring-4 focus:ring-primary-50 appearance-none font-bold">
                    <option>No Work Experience</option>
                    <option>1-2 Years</option>
                    <option>3+ Years</option>
                  </select>
                </div>
              </div>

              <div className="p-6 bg-slate-50/50 rounded-3xl border border-slate-100 flex items-start gap-4">
                <Sparkles size={20} className="text-primary-500 shrink-0 mt-1" />
                <p className="text-sm text-slate-500 font-medium">Our AI analyzes your profile against historical admit data for your specific target university Tier.</p>
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full py-6 bg-primary-600 text-white rounded-[28px] font-black text-xl shadow-2xl shadow-primary-100 hover:bg-primary-700 hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {loading ? 'Analyzing Profile...' : 'Predict Admission Probability'} <Target size={24} />
              </button>
            </form>
          </div>

          {/* Result Panel */}
          <div className="w-full lg:w-[480px]">
            {isAnalyzed ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-8"
              >
                <div className="prediction-card text-center relative overflow-hidden">
                  <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-2 rounded-2xl text-xs font-black uppercase tracking-widest mb-10">Ambitious Choice</div>
                  
                  <div className="probability-circle">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle className="text-slate-100" strokeWidth="6" stroke="currentColor" fill="transparent" r="42" cx="50" cy="50" />
                      <circle 
                        className="text-primary-500" 
                        strokeWidth="6" 
                        strokeDasharray="263.8" 
                        strokeDashoffset={263.8 - (263.8 * 0.68)} 
                        strokeLinecap="round" 
                        stroke="currentColor" 
                        fill="transparent" 
                        r="42" cx="50" cy="50" 
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-6xl font-black text-slate-800 leading-none">68%</span>
                      <span className="text-[10px] font-bold text-slate-400 capitalize tracking-widest mt-2">Probability</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-slate-800">Stanford University</h3>
                  <p className="text-slate-400 font-bold mb-4 italic">MS Computer Science</p>
                </div>

                <div className="prediction-card">
                  <h4 className="text-lg font-black text-slate-800 mb-8 flex items-center gap-3">
                    <UserCheck size={22} className="text-primary-600" /> Factor Breakdown
                  </h4>
                  <div className="space-y-6">
                    <MeterStat label="Academic Index" value={92} color="bg-green-500" />
                    <MeterStat label="Standardized Test Impact" value={65} color="bg-orange-500" />
                    <MeterStat label="Research & Projects" value={78} color="bg-blue-600" />
                  </div>
                </div>

                <div className="ai-recommendation-box">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="text-blue-600" size={20} />
                    <h4 className="font-black text-slate-800">AI Enhancement Tips</h4>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-sm font-bold text-slate-500 leading-relaxed">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0 mt-2"></div>
                      Your GRE score is slightly below the 75th percentile for Stanford CS. Aim for a 5-point increase in Quantitative.
                    </li>
                    <li className="flex items-start gap-3 text-sm font-bold text-slate-500 leading-relaxed">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0 mt-2"></div>
                      Highlighting your Open Source contributions in the SOP will boost your Professional Impact score by 12%.
                    </li>
                  </ul>
                </div>
              </motion.div>
            ) : (
              <div className="h-full min-h-[500px] border-4 border-dashed border-slate-100 rounded-[64px] flex flex-col items-center justify-center p-12 text-center opacity-40">
                <Target size={64} className="text-slate-300 mb-6" />
                <p className="text-2xl font-black text-slate-300">Analysis Results</p>
                <p className="text-slate-300 font-bold mt-2">Fill the profile form to generate your AI-driven probability score.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const InputGroup = ({ label, placeholder }) => (
  <div className="space-y-3">
    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-4">{label}</label>
    <input 
      type="text" 
      placeholder={placeholder}
      className="w-full px-8 py-5 bg-slate-50 border border-slate-100 rounded-3xl focus:ring-4 focus:ring-primary-50 transition-all font-bold text-slate-800 placeholder:text-slate-300"
    />
  </div>
)

const MeterStat = ({ label, value, color }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center px-2">
      <span className="text-xs font-black text-slate-400 uppercase">{label}</span>
      <span className="text-xs font-black text-slate-800">{value}%</span>
    </div>
    <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
      <div className={`h-full ${color} rounded-full`} style={{ width: `${value}%` }}></div>
    </div>
  </div>
)

export default AdmissionPredictor
