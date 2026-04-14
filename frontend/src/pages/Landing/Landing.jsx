import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, ShieldCheck, Globe, GraduationCap, Banknote, BrainCircuit, Rocket } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Spotlight } from '../../components/ui/Spotlight'
import '../../styles/Landing.css'

const Landing = () => {
  return (
    <div className="landing-container">
      {/* Background & Effects */}
      <div className="grid-bg"></div>
      <Spotlight className="spotlight-blue" fill="#0ea5e9" />
      
      {/* Hero Section */}
      <section className="hero-wrapper">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-accent"
            >
              ✨ The Future of Student Engagement
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-6xl md:text-8xl font-black text-slate-900 leading-[1] mb-8"
            >
              Empowering <br />
              <span className="text-gradient">Student Ambition.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-slate-500 mb-12 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium"
            >
              Unified ecosystem for global education discovery, admission probability, and premium financing choices.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start"
            >
              <Link to="/register" className="w-full sm:w-auto px-10 py-5 bg-primary-600 text-white rounded-3xl font-black shadow-2xl shadow-primary-200 flex items-center justify-center gap-3 hover:bg-primary-700 hover:-translate-y-1.5 transition-all text-lg">
                Get Started <ArrowRight size={22} />
              </Link>
              <button className="w-full sm:w-auto px-10 py-5 bg-white text-slate-800 border-2 border-slate-100 rounded-3xl font-black shadow-lg flex items-center justify-center gap-3 hover:bg-slate-50 hover:border-slate-200 transition-all text-lg">
                Explore Tech
              </button>
            </motion.div>
          </div>

          <div className="flex-1 w-full max-w-[600px] relative">
            {/* Main 3D Styled Card */}
            <motion.div
              initial={{ opacity: 0, rotateY: 20, scale: 0.9 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative rounded-[48px] bg-white p-6 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border border-slate-50"
            >
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756ebafe1?q=80&w=2670&auto=format&fit=crop" 
                alt="University Life" 
                className="w-full h-[400px] object-cover rounded-[40px] grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Floating 2D Widgets */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 top-12 bg-white p-6 rounded-3xl shadow-2xl border border-slate-50 min-w-[220px]"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="text-xs font-black text-slate-400 uppercase">Visa Ready</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full mb-2">
                  <div className="h-full bg-green-500 w-[85%] rounded-full"></div>
                </div>
                <p className="text-sm font-bold text-slate-800">85% Documentation Done</p>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-8 bottom-12 bg-slate-900 text-white p-6 rounded-3xl shadow-2xl min-w-[200px]"
              >
                <p className="text-[10px] font-black uppercase text-primary-400 mb-2">Financing Live</p>
                <p className="text-2xl font-black">₹52,00,000</p>
                <p className="text-xs text-slate-400 mt-1">Pre-approved Loan</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Grid Features Section */}
      <section className="bg-slate-50/50 py-32 border-y border-slate-100 relative overflow-hidden">
        <div className="bento-grid">
          <div className="col-span-1 md:col-span-4 mb-8 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Unified Modules</h2>
            <p className="text-lg text-slate-500 font-medium">Powering every step of your international education journey.</p>
          </div>

          <BentoItem 
            className="bento-item-large"
            icon={<BrainCircuit className="text-primary-600" size={32} />}
            title="AI Career Navigator"
            description="Deep analysis of your skills, interests, and budget to find the perfect global match."
            tag="AI-POWERED"
          />
          <BentoItem 
            icon={<Rocket className="text-orange-500" size={32} />}
            title="Admission Predictor"
            description="Real-time data calibration for your admit chances."
            tag="V2.0"
          />
          <BentoItem 
            icon={<Banknote className="text-green-600" size={32} />}
            title="Loan Engine"
            description="Compare and secure funding without hassle."
            tag="PREMIUM"
          />
          <BentoItem 
            icon={<GraduationCap className="text-purple-600" size={32} />}
            title="Timeline Gen"
            description="Automated roadmap for your Fall 2025 intake."
          />
          <BentoItem 
            className="bento-item-large"
            icon={<Globe className="text-blue-600" size={32} />}
            title="Document Vault"
            description="One-click verification and secure storage for all your sensitive academic and financial records."
            tag="SECURE"
          />
        </div>
      </section>
    </div>
  )
}

const BentoItem = ({ className = "", icon, title, description, tag }) => (
  <motion.div 
    whileHover={{ scale: 0.98 }}
    className={`bento-item ${className}`}
  >
    <div className="flex flex-col h-full">
      <div className="mb-6 flex items-center justify-between">
        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-primary-50 transition-colors">
          {icon}
        </div>
        {tag && <span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-[10px] font-black uppercase tracking-tighter">{tag}</span>}
      </div>
      <h3 className="text-2xl font-black text-slate-800 mb-3">{title}</h3>
      <p className="text-slate-500 font-medium leading-relaxed">{description}</p>
    </div>
  </motion.div>
)

export default Landing
