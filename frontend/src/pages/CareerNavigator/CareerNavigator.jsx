import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BrainCircuit, ArrowRight, ArrowLeft, GraduationCap, MapPin, Sparkles, CheckCircle2 } from 'lucide-react'
import '../../styles/CareerNavigator.css'

const steps = [
  { id: 1, title: 'Academics', icon: <GraduationCap size={20} /> },
  { id: 2, title: 'Interests', icon: <BrainCircuit size={20} /> },
  { id: 3, title: 'Preferences', icon: <MapPin size={20} /> },
  { id: 4, title: 'Result', icon: <Sparkles size={20} /> },
]

const CareerNavigator = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState(null)

  const nextStep = () => {
    if (currentStep === 3) {
      handleFinalize()
    } else {
      setCurrentStep(prev => prev + 1)
    }
  }
  
  const prevStep = () => setCurrentStep(prev => prev - 1)

  const handleFinalize = () => {
    setLoading(true)
    setCurrentStep(4)
    setTimeout(() => {
      setResults([
        { 
          uni: "TU Munich", 
          program: "MS in Robotics & AI", 
          match: 94, 
          reason: "Matches your 9.2 CGPA and interest in automation perfectly."
        },
        { 
          uni: "ETH Zurich", 
          program: "Master in CS", 
          match: 88, 
          reason: "World-class faculty for distributed systems matches your profile."
        }
      ])
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="navigator-container">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h1 className="text-4xl font-black text-slate-900 leading-tight">AI Career Navigator</h1>
            <p className="text-slate-500 font-bold mt-1">Personalized global education paths discoverer.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {steps.map(step => (
              <div 
                key={step.id} 
                className={`step-indicator ${currentStep === step.id ? 'step-active' : 'step-inactive'}`}
              >
                {step.icon}
                <span className="hidden sm:inline">{step.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="wizard-card">
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1"
              >
                <h2 className="text-3xl font-black text-slate-800 mb-10">Foundation & Logistics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <InputGroup label="Highest Degree" placeholder="e.g. B.Tech CS" />
                  <InputGroup label="Current CGPA" placeholder="e.g. 9.1" />
                  <InputGroup label="Target Intake" placeholder="Fall 2025" />
                  <InputGroup label="Test Scores (GRE/GMAT)" placeholder="e.g. 320" />
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1"
              >
                <h2 className="text-3xl font-black text-slate-800 mb-10">Domain Passion</h2>
                <div className="space-y-4">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-4">Interests & Future Goals</label>
                  <textarea 
                    className="input-main h-48 resize-none"
                    placeholder="Describe what you want to build or lead in the future..."
                  ></textarea>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1"
              >
                <h2 className="text-3xl font-black text-slate-800 mb-10">Market Preferences</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-4">Preferred Markets</label>
                    <select className="input-main appearance-none cursor-pointer">
                      <option>European Union (Germany/FR)</option>
                      <option>North America (USA/CA)</option>
                      <option>Asia Pacific (SG/AU)</option>
                    </select>
                  </div>
                  <InputGroup label="Max Budget (INR)" placeholder="e.g. 50,00,000" />
                </div>
              </motion.div>
            )}

            {currentStep === 4 && (
              <motion.div 
                key="step4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex-1"
              >
                {loading ? (
                  <div className="text-center py-24">
                    <div className="w-24 h-24 border-8 border-primary-100 border-t-primary-600 rounded-full animate-spin mx-auto mb-8"></div>
                    <h3 className="text-2xl font-black text-slate-800 mb-2">Analyzing 2,000+ Programs...</h3>
                    <p className="text-slate-500 font-bold italic">Simulating ROI and Admission Probabilities</p>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center gap-4 mb-10">
                      <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center">
                        <CheckCircle2 size={32} />
                      </div>
                      <h2 className="text-3xl font-black text-slate-800">Top Matches Revealed</h2>
                    </div>
                    
                    <div className="space-y-6">
                      {results?.map((res, i) => (
                        <div key={i} className="p-8 bg-slate-50 rounded-[40px] border border-slate-100 flex flex-col md:flex-row gap-8 relative group hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                          <div className="absolute right-8 top-8 bg-primary-600 text-white px-5 py-2 rounded-2xl font-black text-sm shadow-xl shadow-primary-200">
                            {res.match}% FIT
                          </div>
                          <div className="w-20 h-20 bg-white rounded-3xl shadow-lg border border-slate-50 flex items-center justify-center text-primary-600 font-black text-3xl">
                            {res.uni[0]}
                          </div>
                          <div className="flex-1 pr-16">
                            <h4 className="text-2xl font-black text-slate-900 mb-2">{res.uni}</h4>
                            <p className="text-slate-500 font-bold mb-6 text-lg">{res.program}</p>
                            <div className="p-5 bg-white rounded-3xl border border-slate-50 italic text-slate-600 font-medium leading-relaxed">
                              "AI Insight: {res.reason}"
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-12 flex gap-4">
                      <button className="flex-1 py-5 bg-primary-600 text-white rounded-[24px] font-black text-lg shadow-2xl shadow-primary-200 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 underline-offset-4 decoration-white/30">
                        View Detailed Roadmap <ArrowRight size={24} />
                      </button>
                      <button className="px-10 py-5 bg-white border-2 border-slate-100 text-slate-600 rounded-[24px] font-black hover:bg-slate-50 transition-all" onClick={() => setCurrentStep(1)}>Reset</button>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {currentStep < 4 && (
            <div className="mt-12 flex items-center justify-between pt-10 border-t border-slate-100">
              <button 
                onClick={prevStep} 
                className={`flex items-center gap-2 font-black text-lg transition-all ${currentStep === 1 ? 'text-slate-200 pointer-events-none' : 'text-slate-400 hover:text-primary-600'}`}
              >
                <ArrowLeft size={24} /> Back
              </button>
              <button 
                onClick={nextStep}
                className="px-12 py-5 bg-primary-600 text-white rounded-[28px] font-black text-lg shadow-2xl shadow-primary-100 hover:bg-primary-700 hover:-translate-y-1 active:scale-95 transition-all flex items-center gap-3"
              >
                {currentStep === 3 ? 'Generate Profile' : 'Continue'} <ArrowRight size={24} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const InputGroup = ({ label, placeholder }) => (
  <div className="space-y-3">
    <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-4">{label}</label>
    <input 
      type="text" 
      placeholder={placeholder}
      className="input-main"
    />
  </div>
)

export default CareerNavigator
