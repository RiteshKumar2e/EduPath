import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Calendar, 
  CheckCircle2, 
  Clock, 
  GraduationCap, 
  Banknote, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Download,
  Share2,
  ChevronDown,
  ChevronUp,
  MapPin,
  Trophy
} from 'lucide-react'
import Button from '../../components/ui/premium/Button'
import { Card, Badge, ProgressBar, Divider, Section } from '../../components/ui/premium/index'
import { DashboardLayout } from '../../components/layout/PremiumLayout'

const Timeline = () => {
  const [isGenerated, setIsGenerated] = useState(false)
  const [loading, setLoading] = useState(false)
  const [activeStep, setActiveStep] = useState(0)

  const handleGenerate = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setIsGenerated(true)
    }, 2000)
  }

  const timelineSteps = [
    { 
      month: 'April 2024', 
      title: 'Discovery & Shortlisting', 
      desc: 'Finalize top 8 university choices based on profile strength and ROI targets.', 
      status: 'completed',
      tasks: ['Research GRE waivers', 'Check eligibility with EduPath AI', 'Attend virtual fairs']
    },
    { 
      month: 'May - June 2024', 
      title: 'Standardized Tests', 
      desc: 'Complete GRE/GMAT and IELTS/TOEFL requirements.', 
      status: 'current',
      tasks: ['Register for GRE', 'Book IELTS slot', 'Mock test series']
    },
    { 
      month: 'July 2024', 
      title: 'EduPath Loan Pre-approval', 
      desc: 'Get your financial roadmap ready before application fees start flowing.', 
      status: 'pending',
      tasks: ['Check instant eligibility', 'KYC documentation', 'Consult with loan advisor']
    },
    { 
      month: 'Aug - Sept 2024', 
      title: 'Application Preparation', 
      desc: 'Craft powerful SOPs and gather Letters of Recommendation.', 
      status: 'pending',
      tasks: ['SOP drafting', 'Contact professors for LOR', 'Portfolio review']
    },
    { 
      month: 'Oct 2024 - Jan 2025', 
      title: 'Final Submission', 
      desc: 'Submit applications for Early Action and Regular Decision rounds.', 
      status: 'pending',
      tasks: ['Submit portal apps', 'Pay application fees', 'Track portal status']
    }
  ]

  const user = {
    name: 'Anmol',
    email: 'anmol@example.com',
    avatar: 'https://ui-avatars.com/api/?name=Anmol&background=0b7ee5&color=fff',
  }

  return (
    <DashboardLayout user={user}>
      <div className="bg-slate-50 min-h-screen py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
            <div className="max-w-xl">
              <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-3">Goal Timeline Generator</h1>
              <p className="text-slate-500 font-medium leading-relaxed">
                Use our AI to map out every single milestone from today until your first lecture abroad. personalized to your target intake.
              </p>
            </div>
            {!isGenerated && (
              <Card className="p-6 border-primary-200 bg-primary-50 min-w-[280px]">
                <div className="flex items-center gap-3 mb-4 text-primary-600">
                  <Sparkles size={20} />
                  <span className="font-bold text-sm">Target Intake</span>
                </div>
                <select className="w-full p-3 bg-white border border-primary-200 rounded-xl text-sm font-bold appearance-none cursor-pointer mb-4">
                  <option>Fall 2024 (August)</option>
                  <option>Spring 2025 (January)</option>
                  <option>Fall 2025 (August)</option>
                </select>
                <Button variant="primary" fullWidth onClick={handleGenerate} disabled={loading}>
                  {loading ? 'Generating...' : 'Build Roadmap'}
                </Button>
              </Card>
            )}
          </div>

          <AnimatePresence mode="wait">
            {!isGenerated ? (
              <motion.div 
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-24 text-center border-4 border-dashed border-slate-200 rounded-[48px]"
              >
                <Calendar size={64} className="text-slate-200 mx-auto mb-6" />
                <h3 className="text-2xl font-black text-slate-300">No Timeline Active</h3>
                <p className="text-slate-300 font-bold mt-2">Select your target intake and build your success roadmap.</p>
              </motion.div>
            ) : (
              <motion.div 
                key="timeline"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="grid lg:grid-cols-3 gap-12"
              >
                {/* Timeline Visual - Left Column */}
                <div className="lg:col-span-2 relative">
                  {/* The Vertical Line */}
                  <div className="absolute left-8 top-12 bottom-12 w-1 bg-slate-200"></div>

                  <div className="space-y-12">
                     {timelineSteps.map((step, i) => (
                       <div key={i} className="relative pl-24 group">
                         {/* Circle Indicator */}
                         <div className={`absolute left-4 top-0 w-9 h-9 rounded-xl border-4 border-white shadow-lg flex items-center justify-center z-10 transition-all ${
                           step.status === 'completed' ? 'bg-green-500 text-white' : 
                           step.status === 'current' ? 'bg-primary-600 text-white animate-pulse' : 'bg-slate-200 text-slate-400'
                         }`}>
                           {step.status === 'completed' ? <CheckCircle2 size={18} /> : <div className="w-2 h-2 rounded-full bg-current" />}
                         </div>

                         {/* Content Card */}
                         <Card 
                          className={`p-6 transition-all border-none shadow-sm group-hover:shadow-xl group-hover:-translate-x-1 cursor-pointer ${
                            activeStep === i ? 'ring-2 ring-primary-500 shadow-xl' : 'hover:bg-white/80'
                          }`}
                          onClick={() => setActiveStep(i)}
                         >
                           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                             <div className="flex items-center gap-3">
                               <Badge variant={step.status === 'completed' ? 'success' : step.status === 'current' ? 'primary' : 'slate'} size="xs">
                                 {step.status.toUpperCase()}
                               </Badge>
                               <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{step.month}</span>
                             </div>
                             {activeStep !== i && <ChevronDown size={18} className="text-slate-300" />}
                             {activeStep === i && <ChevronUp size={18} className="text-primary-500" />}
                           </div>
                           
                           <h3 className="text-xl font-black text-slate-900 mb-2 leading-tight">{step.title}</h3>
                           <p className="text-sm font-medium text-slate-500 leading-relaxed mb-4">{step.desc}</p>

                           {activeStep === i && (
                             <motion.div 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              className="pt-6 border-t border-slate-100"
                             >
                               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Priority Tasks</p>
                               <div className="grid sm:grid-cols-2 gap-3">
                                 {step.tasks.map((task, ti) => (
                                   <div key={ti} className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100">
                                     <div className="w-5 h-5 rounded-full border-2 border-slate-200"></div>
                                     <span className="text-xs font-bold text-slate-700">{task}</span>
                                   </div>
                                 ))}
                               </div>
                               <Button variant="secondary" fullWidth className="mt-6" size="sm">
                                 Add to My Checklist
                               </Button>
                             </motion.div>
                           )}
                         </Card>
                       </div>
                     ))}
                  </div>
                </div>

                {/* Sidebar - Right Column */}
                <div className="space-y-8">
                  {/* Summary Card */}
                  <Card className="p-8 bg-slate-900 text-white border-0 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/20 rounded-full blur-3xl"></div>
                    <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">Timeline Summary</h3>
                    
                    <div className="space-y-8 mb-10">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                           <span className="text-xs font-bold text-slate-400">Preparation Index</span>
                           <span className="text-xs font-black text-primary-400">42%</span>
                        </div>
                        <ProgressBar value={42} color="primary" size="sm" />
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-primary-400">
                          <Trophy size={24} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase">Est. Completion</p>
                          <p className="text-lg font-black">March 2025</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-emerald-400">
                          <MapPin size={24} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase">Target Intake</p>
                          <p className="text-lg font-black">Fall 2024</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="ghost" className="text-white bg-white/10 hover:bg-white/20" icon={Download}>PDF</Button>
                      <Button variant="ghost" className="text-white bg-white/10 hover:bg-white/20" icon={Share2}>Share</Button>
                    </div>
                  </Card>

                  {/* AI Nudge */}
                  <Card className="p-6 border-slate-200">
                    <div className="flex items-center gap-3 mb-4">
                      <Sparkles size={20} className="text-primary-600" />
                      <h4 className="font-bold text-slate-900">AI Optimization</h4>
                    </div>
                    <p className="text-xs font-medium text-slate-500 leading-relaxed mb-6">
                      Based on your GRE score of 325, adding 2 more Tier-1 universities like CMU or Georgia Tech doesn't expand your timeline but increases your admit probability by 9%.
                    </p>
                    <Divider />
                    <Button variant="primary" fullWidth className="mt-4" size="md">Optimize My Timeline</Button>
                  </Card>

                  {/* Community Progress */}
                  <div className="text-center p-8 bg-white border border-slate-200 rounded-[40px]">
                    <div className="flex -space-x-3 justify-center mb-4">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-slate-100 overflow-hidden shadow-sm">
                          <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="User" />
                        </div>
                      ))}
                    </div>
                    <p className="text-xs font-bold text-slate-900">1,200+ students</p>
                    <p className="text-xs text-slate-400 font-medium">Following a similar Fall 2024 path.</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Timeline
