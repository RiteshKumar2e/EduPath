import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Banknote, 
  ShieldCheck, 
  Info, 
  ArrowRight, 
  Wallet, 
  PieChart, 
  TrendingUp,
  FileText,
  Clock,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  Calculator,
  Plus
} from 'lucide-react'
import Button from '../../components/ui/premium/Button'
import { Card, Badge, ProgressBar, Divider, Section } from '../../components/ui/premium/index'
import { DashboardLayout } from '../../components/layout/PremiumLayout'

const LoanEligibility = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [isCalculated, setIsCalculated] = useState(false)
  const [loanOffer, setLoanOffer] = useState(null)

  const steps = [
    { id: 1, title: 'Identity & Income' },
    { id: 2, title: 'Education Plan' },
    { id: 3, title: 'Co-applicant' },
  ]

  const handleCalculate = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setIsCalculated(true)
      setLoanOffer({
        maxAmount: 5200000,
        interestRate: "8.4%",
        tenure: "10 Years",
        emi: 64500,
        approvalOdds: 92
      })
    }, 2000)
  }

  const user = {
    name: 'Anmol',
    email: 'anmol@example.com',
    avatar: 'https://ui-avatars.com/api/?name=Anmol&background=0b7ee5&color=fff',
  }

  return (
    <DashboardLayout user={user}>
      <div className="bg-slate-50 min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
            <div>
              <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">AI Financing Hub</h1>
              <p className="text-slate-500 font-medium">Smart loan discovery & instant eligibility assessment.</p>
            </div>
            <div className="flex gap-4">
              <div className="bg-white p-4 rounded-3xl border border-slate-200 flex items-center gap-4">
                <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center">
                  <Calculator size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Est. Interest</p>
                  <p className="text-lg font-black text-slate-900">8.4% - 11.2%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Application Form */}
            <div className="lg:col-span-2 space-y-8">
              {!isCalculated ? (
                <Card className="p-8 border-slate-200">
                  <div className="flex items-center gap-6 mb-12">
                    {steps.map(step => (
                      <div key={step.id} className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${
                          currentStep === step.id ? 'bg-primary-600 text-white' : 
                          currentStep > step.id ? 'bg-primary-100 text-primary-600' : 'bg-slate-100 text-slate-400'
                        }`}>
                          {currentStep > step.id ? <CheckCircle2 size={20} /> : step.id}
                        </div>
                        <span className={`text-sm font-bold truncate hidden sm:inline ${
                          currentStep === step.id ? 'text-slate-900' : 'text-slate-400'
                        }`}>{step.title}</span>
                      </div>
                    ))}
                  </div>

                  <AnimatePresence mode="wait">
                    {currentStep === 1 && (
                      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-8">Personal & Financial Detail</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <InputGroup label="Monthly Income (INR)" placeholder="e.g. 1,50,000" icon={<Banknote size={18} />} />
                          <InputGroup label="Existing Monthly EMIs" placeholder="e.g. 12,000" icon={<Wallet size={18} />} />
                          <InputGroup label="Current Employment" placeholder="Job Title" icon={<FileText size={18} />} />
                          <InputGroup label="Work Exp (Years)" placeholder="e.g. 4" icon={<Clock size={18} />} />
                        </div>
                      </motion.div>
                    )}

                    {currentStep === 2 && (
                      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-8">Education Plan</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <InputGroup label="Target Country" placeholder="e.g. USA" icon={<Sparkles size={18} />} />
                          <InputGroup label="Total Budget (Lakhs)" placeholder="e.g. 50" icon={<TrendingUp size={18} />} />
                          <InputGroup label="Admission Status" placeholder="e.g. Applied / Admitted" icon={<CheckCircle2 size={18} />} />
                          <InputGroup label="Program Start" placeholder="e.g. Fall 2024" icon={<Calendar size={18} />} />
                        </div>
                      </motion.div>
                    )}

                    {currentStep === 3 && (
                      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-8">Co-applicant Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <InputGroup label="Relationship" placeholder="e.g. Father" icon={<ArrowUpRight size={18} />} />
                          <InputGroup label="Co-applicant Income" placeholder="e.g. 2,00,000" icon={<Banknote size={18} />} />
                          <div className="col-span-1 md:col-span-2 p-6 bg-primary-50 rounded-3xl border border-primary-100 flex items-start gap-4">
                            <Info size={20} className="text-primary-600 shrink-0 mt-1" />
                            <p className="text-sm text-primary-700 font-medium">Adding a co-applicant with stable income significantly increases your loan eligibility and might lower your interest rate.</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
                    <Button 
                      variant="ghost" 
                      onClick={() => currentStep > 1 && setCurrentStep(currentStep - 1)}
                      disabled={currentStep === 1}
                      className={currentStep === 1 ? 'opacity-0' : ''}
                    >
                      Back
                    </Button>
                    {currentStep < 3 ? (
                      <Button variant="primary" size="lg" onClick={() => setCurrentStep(currentStep + 1)} icon={ChevronRight} iconPosition="right">
                        Next Step
                      </Button>
                    ) : (
                      <Button variant="primary" size="lg" onClick={handleCalculate} icon={Sparkles} iconPosition="right" disabled={loading}>
                        {loading ? 'Analyzing Profile...' : 'Get Instant Offer'}
                      </Button>
                    )}
                  </div>
                </Card>
              ) : (
                <div className="space-y-8">
                  {/* Results Section */}
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <Card className="p-8 bg-slate-900 text-white border-0 shadow-2xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/20 rounded-full blur-[100px]"></div>
                      <div className="relative flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                          <Badge variant="primary" className="bg-primary-500/20 text-primary-400 border-primary-500/30 mb-6">PRE-APPROVED OFFER</Badge>
                          <h3 className="text-3xl font-black mb-2">Congratulations, {user.name}!</h3>
                          <p className="text-slate-400 font-medium mb-10">Your profile depth has unlocked a premium educational loan tier.</p>
                          
                          <div className="grid grid-cols-2 gap-8 mb-10">
                            <div>
                              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Max Loan Amount</p>
                              <p className="text-4xl font-black text-white">₹{loanOffer.maxAmount.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Interest Rate</p>
                              <p className="text-4xl font-black text-primary-400">{loanOffer.interestRate}</p>
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-4">
                            <Button variant="primary" size="lg" className="bg-white text-slate-900 hover:bg-slate-100" icon={ArrowRight} iconPosition="right">
                              Proceed to Application
                            </Button>
                            <Button variant="ghost" className="text-white hover:bg-white/10" onClick={() => setIsCalculated(false)}>
                              Recalculate
                            </Button>
                          </div>
                        </div>

                        <div className="w-full md:w-[240px] text-center">
                          <div className="relative w-40 h-40 mx-auto mb-6">
                            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                              <circle className="text-white/10" strokeWidth="8" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" />
                              <circle 
                                className="text-primary-500" 
                                strokeWidth="8" 
                                strokeDasharray="251.2" 
                                strokeDashoffset={251.2 - (251.2 * loanOffer.approvalOdds / 100)} 
                                strokeLinecap="round" 
                                stroke="currentColor" 
                                fill="transparent" 
                                r="40" cx="50" cy="50" 
                              />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                              <span className="text-3xl font-black text-white leading-none">{loanOffer.approvalOdds}%</span>
                            </div>
                          </div>
                          <p className="text-sm font-bold text-slate-400 capitalize">Approval Probability</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>

                  {/* Comparison & Details */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <Card className="p-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <PieChart size={20} className="text-primary-600" /> Repayment Scenario
                      </h3>
                      <div className="space-y-6">
                        <div className="flex justify-between items-end">
                          <div>
                            <p className="text-xs font-bold text-slate-400 uppercase mb-1">Monthly EMI</p>
                            <p className="text-2xl font-black text-slate-900">₹{loanOffer.emi.toLocaleString()}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs font-bold text-slate-400 uppercase mb-1">Tenure</p>
                            <p className="text-xl font-bold text-slate-800">{loanOffer.tenure}</p>
                          </div>
                        </div>
                        <ProgressBar value={100} color="primary" size="md" />
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 bg-slate-50 rounded-2xl">
                            <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Principal</p>
                            <p className="font-bold text-slate-900">₹52.0L</p>
                          </div>
                          <div className="p-4 bg-slate-50 rounded-2xl">
                            <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Interest</p>
                            <p className="font-bold text-slate-900">₹14.2L</p>
                          </div>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <ShieldCheck size={20} className="text-green-600" /> Loan Features
                      </h3>
                      <div className="space-y-4">
                        {[
                          'No collateral required for up to ₹40L',
                          'Tax benefits under Section 80E',
                          'Flexible repayment holiday during study',
                          'Co-signer can be any family member',
                          'Instant digital document verification'
                        ].map((feature, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                            <span className="text-sm font-medium text-slate-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Sidebar */}
            <div className="space-y-8">
              {/* Document Checklist */}
              <Card className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Document Required</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Admit Letter / Offer Letter', status: 'ready' },
                    { name: 'Academic Records (10, 12, Grad)', status: 'ready' },
                    { name: 'KYC (Aadhar, PAN)', status: 'ready' },
                    { name: 'Income Proof (Co-applicant)', status: 'missing' },
                    { name: 'Bank Statements (6 Mo)', status: 'missing' },
                  ].map((doc, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-2xl border border-slate-100 bg-slate-50/50">
                      <div className="flex items-center gap-3 min-w-0">
                        {doc.status === 'ready' ? <CheckCircle2 size={16} className="text-green-500" /> : <div className="w-4 h-4 rounded-full border-2 border-slate-200" />}
                        <span className="text-xs font-bold text-slate-700 truncate">{doc.name}</span>
                      </div>
                      {doc.status === 'missing' && (
                        <Button variant="ghost" size="xs" icon={Plus} className="p-1" />
                      )}
                    </div>
                  ))}
                </div>
                <Button variant="secondary" fullWidth className="mt-6" icon={FileText} iconPosition="left">
                  Upload Vault
                </Button>
              </Card>

              {/* AI Financing Insight */}
              <Card className="p-6 bg-gradient-to-br from-primary-50 to-primary-100 border-primary-200">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles size={20} className="text-primary-600" />
                  <h3 className="font-bold text-slate-900">AI Financial Tips</h3>
                </div>
                <p className="text-sm text-slate-700 font-medium leading-relaxed mb-6 italic">
                  "Based on your ROI projections for ETH Zurich, taking a 10-year loan at 8.4% is your most efficient path. You can potentially pay back the total amount in just 4.2 years post-graduation."
                </p>
                <Divider />
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[10px] font-black text-primary-600 uppercase tracking-widest">Efficiency Rating</span>
                  <span className="text-sm font-black text-primary-900">Top 5%</span>
                </div>
              </Card>

              {/* Quick Contact */}
              <div className="p-6 rounded-[32px] bg-white border border-slate-200 shadow-sm text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Info size={24} className="text-slate-500" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Need expert help?</h4>
                <p className="text-xs text-slate-500 font-medium mb-6">Talk to our loan advisors for a custom financing plan.</p>
                <Button variant="secondary" fullWidth>Request Call Back</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

const InputGroup = ({ label, icon, placeholder }) => (
  <div className="space-y-3">
    <div className="flex items-center gap-2 px-4 text-slate-400">
      {icon}
      <label className="text-xs font-black uppercase tracking-widest">{label}</label>
    </div>
    <input 
      type="text" 
      placeholder={placeholder} 
      className="w-full px-6 py-4 bg-white border border-slate-200 rounded-3xl focus:ring-4 focus:ring-primary-100 transition-all font-bold text-slate-900 placeholder:text-slate-300" 
    />
  </div>
)

export default LoanEligibility
