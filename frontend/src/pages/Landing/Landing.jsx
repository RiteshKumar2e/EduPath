import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  BrainCircuit,
  Banknote,
  TrendingUp,
  Users,
  Zap,
  Star,
  MessageSquare,
  Calculator,
  Clock,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Rocket
} from 'lucide-react'
import Button from '../../components/ui/premium/Button'
import { Card, Badge, Divider } from '../../components/ui/premium/index'
import '../../styles/Landing.css'

const Landing = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <div className="landing-container pt-20">
      {/* Hero Section */}
      <section className="hero-wrapper">
        <div className="hero-grid-pattern"></div>
        <div className="hero-spotlight"></div>
        
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="hero-badge-container group">
            <span className="hero-badge-tag">Platform Update</span>
            <span className="flex items-center gap-1.5 px-2">
              AI-First University Discovery 2.0 is live <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-title">
            Your Future, <br />
            <span className="hero-title-gradient">AI-Guided.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="hero-description">
            The unified ecosystem for Indian students. Discover universities, predict admissions with 94% accuracy, 
            and secure the best education financing—all powered by advanced AI.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Link to="/register" className="btn-premium group">
              <span className="btn-premium-shine"></span>
              Get Started Free <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="#features" className="btn-secondary-premium group">
              View Tools <Sparkles size={22} className="text-primary-600 group-hover:rotate-12 transition-all" />
            </a>
          </motion.div>

          {/* Core Visual */}
          <motion.div 
            variants={itemVariants}
            className="hero-visual-container"
          >
            <div className="hero-visual-frame">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop" 
                alt="EduPath Platform Interface" 
                className="hero-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>
            </div>

            {/* Floating Visual Labels */}
            <motion.div 
              animate={{ y: [0, -30, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-20 bottom-1/3 floating-card hidden lg:flex"
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-[20px] flex items-center justify-center text-emerald-600 shadow-inner">
                <TrendingUp size={28} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Success Rate</p>
                <p className="text-3xl font-black text-slate-900 tracking-tighter">94.8%</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 30, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-20 top-1/4 floating-card hidden lg:flex"
            >
              <div className="w-14 h-14 bg-primary-100 rounded-[20px] flex items-center justify-center text-primary-600 shadow-inner">
                <BrainCircuit size={28} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">AI Insights</p>
                <p className="text-2xl font-black text-slate-900 tracking-tighter">Real-time Analysis</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-12">Trusted by students at leading institutions</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale filter">
            <h3 className="text-2xl font-black tracking-tighter">IIT DELHI</h3>
            <h3 className="text-2xl font-black tracking-tighter">BITSPILANI</h3>
            <h3 className="text-2xl font-black tracking-tighter">STANFORD</h3>
            <h3 className="text-2xl font-black tracking-tighter">MIT</h3>
            <h3 className="text-2xl font-black tracking-tighter">OXFORD</h3>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24">
            {[
              { label: "Successful Admits", value: "50K+" },
              { label: "Loan Sanctioned", value: "₹2.5Cr+" },
              { label: "AI Predictions", value: "1.2M" },
              { label: "Active Mentors", value: "850+" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl md:text-7xl font-black text-slate-950 tracking-tighter mb-4">{stat.value}</div>
                <div className="text-slate-400 font-black uppercase tracking-[0.2em] text-[10px]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Premium Bento Grid */}
      <section id="features" className="py-40 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <span className="section-label">A Unified Ecosystem</span>
          <h2 className="section-title">One Platform. <br /> Infinite Possibilities.</h2>
          <p className="section-desc">
            We've combined university discovery, ROI prediction, and education financing into a single, seamless experience.
          </p>
        </div>

        <div className="bento-grid">
          <motion.div
            className="bento-card md:col-span-4 bg-slate-50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bento-icon-wrapper">
              <BrainCircuit size={40} />
            </div>
            <h3 className="bento-title">AI Career Navigator</h3>
            <p className="bento-text">
              Our neural engine analyzes your academic profile, extracurriculars, and market trends to recommend programs with the highest growth potential.
            </p>
            <div className="flex items-center gap-2 text-slate-950 font-black text-sm uppercase tracking-widest hover:gap-4 transition-all cursor-pointer">
              Discovery Engine <ArrowRight size={18} />
            </div>
          </motion.div>

          <motion.div
            className="bento-card md:col-span-2 bg-primary-600 text-white border-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="bento-icon-wrapper !bg-white/10 !text-white shadow-none">
              <TrendingUp size={40} />
            </div>
            <h3 className="bento-title !text-white">Admission AI</h3>
            <p className="bento-text !text-white/70">
              Get an instant probability score for over 2,000 global universities based on your specific profile.
            </p>
          </motion.div>

          <motion.div
            className="bento-card md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bento-icon-wrapper">
              <Calculator size={40} />
            </div>
            <h3 className="bento-title">Smart ROI</h3>
            <p className="bento-text">
              Predict your lifetime earnings and calculate exactly when your education investment will pay off.
            </p>
          </motion.div>

          <motion.div
            className="bento-card md:col-span-4 bg-slate-950 text-white border-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="bento-icon-wrapper !bg-white/10 !text-white shadow-none">
              <Banknote size={40} />
            </div>
            <h3 className="bento-title !text-white">Financing Suite</h3>
            <p className="bento-text !text-white/60">
              Instant loan eligibility and matching with leading lenders. Get pre-approved and manage your entire application process digitally.
            </p>
            <div className="flex items-center gap-2 text-white font-black text-sm uppercase tracking-widest hover:gap-4 transition-all cursor-pointer">
              Get Pre-Approved <ArrowRight size={18} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-40 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-7xl font-black mb-24 tracking-tighter">Loved by the next generation.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { text: "EduPath didn't just find me a university; it found me a career path I'm passionate about. The AI prediction was spot-on.", author: "Arjun Mehta", role: "Masters, CMU" },
              { text: "The ROI tool showed me the true value of my degree. Secured my loan in 48 hours thanks to their Financing Suite.", author: "Sneha Rao", role: "MBA Applicant" },
              { text: "Having a 24/7 AI Mentor made the stressful application season feel like a breeze. Highly recommended!", author: "Vikram Singh", role: "Undergrad, Stanford" }
            ].map((t, i) => (
              <motion.div 
                key={i}
                className="bg-white p-12 rounded-[48px] border border-slate-100 shadow-sm"
                whileHover={{ y: -10 }}
              >
                <div className="flex gap-1 mb-8 text-amber-500">
                   {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-xl font-bold mb-10 text-slate-700 leading-relaxed italic">"{t.text}"</p>
                <div>
                   <p className="font-black text-slate-950 text-lg">{t.author}</p>
                   <p className="text-primary-600 font-black text-[10px] uppercase tracking-widest mt-1">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6">
        <div className="cta-container">
          <div className="cta-mesh"></div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-8xl font-black text-white mb-10 tracking-tighter">Ready to lead?</h2>
            <p className="text-xl text-slate-400 mb-16 font-bold tracking-tight px-4">
              Join 50,000+ students navigating their higher education with the world's most intelligent ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link to="/register" className="btn-premium group !bg-white !text-slate-950 !px-12 w-full sm:w-auto">
                Join Now <Rocket size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
              </Link>
              <Link to="/chat-mentor" className="text-white hover:text-primary-400 font-black text-sm uppercase tracking-[0.2em] transition-colors">
                Speak to AI Mentor
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-16 md:gap-24 mb-32">
            <div className="col-span-2">
              <Link to="/" className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-black text-xl">E</div>
                <span className="text-2xl font-black tracking-tighter text-slate-900">EduPath</span>
              </Link>
              <p className="text-slate-500 font-bold leading-relaxed max-w-sm tracking-tight text-lg">
                The AI-First student ecosystem empowering the next generation of global leaders.
              </p>
            </div>
            <div>
              <h4 className="font-black text-slate-950 text-xs uppercase tracking-widest mb-10">Intelligence</h4>
              <ul className="space-y-6">
                <li><a className="footer-link">Career Navigator</a></li>
                <li><a className="footer-link">Admission Predictor</a></li>
                <li><a className="footer-link">ROI Calculator</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-slate-950 text-xs uppercase tracking-widest mb-10">Ecosystem</h4>
              <ul className="space-y-6">
                <li><a className="footer-link">Loan Matching</a></li>
                <li><a className="footer-link">Document Vault</a></li>
                <li><a className="footer-link">AI Mentor</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-slate-950 text-xs uppercase tracking-widest mb-10">Support</h4>
              <ul className="space-y-6">
                <li><a className="footer-link">Help Center</a></li>
                <li><a className="footer-link">Resources</a></li>
                <li><a className="footer-link">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <Divider className="opacity-50 mb-12" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-slate-400 font-black text-[10px] uppercase tracking-widest">© 2024 EduPath AI Ecosystem. Designed for Impact.</p>
            <div className="flex items-center gap-10">
              <Globe size={18} className="text-slate-300 hover:text-slate-900 cursor-pointer transition-colors" />
              <Users size={18} className="text-slate-300 hover:text-slate-900 cursor-pointer transition-colors" />
              <Zap size={18} className="text-slate-300 hover:text-slate-900 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Landing
