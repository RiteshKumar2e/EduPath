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
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  }

  return (
    <div className="landing-container pt-20">
      {/* Navigation is now handled globally by App.jsx and the shared Navbar component */}

      {/* Hero Section */}
      <section className="hero-wrapper">
        <div className="hero-grid-pattern"></div>
        <div className="hero-spotlight"></div>
        
        {/* Mesh Background Decorations */}
        <div className="mesh-container">
          <div className="mesh-circle w-[600px] h-[600px] bg-primary-200/20 -top-20 -left-20 animate-float"></div>
          <div className="mesh-circle w-[400px] h-[400px] bg-emerald-200/20 top-1/4 -right-10 animate-float-slow"></div>
          <div className="mesh-circle w-[500px] h-[500px] bg-purple-200/10 bottom-0 left-1/4 animate-pulse-subtle"></div>
        </div>
        
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="hero-badge-container">
            <span className="hero-badge-tag">New</span>
            <span className="flex items-center gap-1.5">
              AI-Powered University Discovery is here <ChevronRight size={14} />
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-title">
            Your Path to <br />
            <span className="hero-title-gradient">Dream Education</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="hero-description">
            Intelligent guidance for university discovery, admission prediction, and career success. 
            EduPath uses advanced AI to navigate your educational journey.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/register" className="btn-premium group">
              <span className="btn-premium-shine"></span>
              Start Your Journey <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="#features" className="btn-secondary-premium group">
              Explore Tools <Sparkles size={20} className="text-primary-600 group-hover:rotate-12 transition-transform" />
            </a>
          </motion.div>

          {/* Hero Visual */}
          <motion.div 
            variants={itemVariants}
            className="mt-20 relative max-w-5xl mx-auto"
          >
            <div className="relative rounded-[40px] p-2 bg-slate-200/20 border border-slate-200/50 backdrop-blur-sm shadow-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
                alt="EduPath Platform" 
                className="rounded-[32px] w-full object-cover shadow-2xl h-[300px] md:h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-12 bottom-20 floating-card hidden lg:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500">ADMISSION PROBABILITY</p>
                  <p className="text-2xl font-black text-slate-900">94.8%</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-12 top-20 floating-card hidden lg:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600">
                  <BrainCircuit size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500">AI MENTOR ACTIVE</p>
                  <p className="text-lg font-black text-slate-900">Personal Guidance</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-24 bg-slate-50 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: "Successful Students", value: "50K+" },
              { label: "Partner Institutions", value: "200+" },
              { label: "Countries Covered", value: "25+" },
              { label: "Expert Mentors", value: "500+" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="stat-item"
              >
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Bento Grid */}
      <section id="features" className="py-32 px-6 max-w-7xl mx-auto">
        <div id="tools" className="text-center mb-24">
          <span className="section-label">Everything you need</span>
          <h2 className="section-title">Intelligent Tools for <br /> Future Success</h2>
          <p className="section-desc">
            We've built a comprehensive suite of AI-powered tools to ensure every student 
            finds their perfect educational path.
          </p>
        </div>

        <div className="bento-grid">
          {[
            {
              icon: BrainCircuit,
              title: "Career Navigator",
              desc: "Deep analysis of your skills and market trends to find your ideal career.",
              className: "lg:col-span-3 lg:row-span-2 bg-gradient-to-br from-blue-50 to-white"
            },
            {
              icon: TrendingUp,
              title: "Admission AI",
              desc: "Predict your chances at 200+ universities globally.",
              className: "lg:col-span-3 bg-gradient-to-br from-emerald-50 to-white"
            },
            {
              icon: Calculator,
              title: "Smart ROI",
              desc: "Calculate the real financial return on your education.",
              className: "lg:col-span-2 bg-gradient-to-br from-orange-50 to-white"
            },
            {
              icon: Banknote,
              title: "Finance Match",
              desc: "Get matched with the best educational loan options.",
              className: "lg:col-span-2 bg-gradient-to-br from-purple-50 to-white"
            },
            {
              icon: Clock,
              title: "Timeline Hub",
              desc: "Never miss a deadline with automated tracking.",
              className: "lg:col-span-2 bg-gradient-to-br from-rose-50 to-white"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              className={`bento-card ${item.className}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="bento-card-bg"></div>
              <div className="bento-card-icon">
                <item.icon size={28} />
              </div>
              <h3 className="bento-card-title">{item.title}</h3>
              <p className="bento-card-text">{item.desc}</p>
              <div className="mt-8 flex items-center gap-2 text-primary-600 font-bold group-hover:gap-4 transition-all cursor-pointer">
                Learn interaction <ArrowRight size={18} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-500 rounded-full blur-[200px]"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500 rounded-full blur-[200px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter">Trusted by Students Everywhere</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            {[
              { text: "EduPath helped me find a university I hadn't even considered. The AI prediction was spot on!", author: "Sarah Jenkins", role: "Graduate Student" },
              { text: "The ROI calculator is a game changer. I could clearly see the financial impact of my choices.", author: "James Chen", role: "Undergraduate" },
              { text: "Finally, a platform that understands student needs. The AI Mentor is always there for me.", author: "Priya Sharma", role: "Masters Applicant" }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-[32px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex gap-1 mb-6 text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <p className="text-xl font-medium mb-10 leading-relaxed text-slate-300 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-lg">{testimonial.author}</p>
                  <p className="text-primary-400 text-sm font-bold uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 max-w-4xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="section-label">Common Questions</span>
          <h2 className="section-title">You Ask, We Answer</h2>
        </div>

        <div className="space-y-6">
          {[
            {
              q: "How does the AI prediction work?",
              a: "We analyze millions of historical data points and current trends to provide highly accurate admission probability scores."
            },
            {
              q: "Is my data secure?",
              a: "We use enterprise-grade encryption and strictly follow data protection regulations. Your information is 100% private."
            },
            {
              q: "Can I use it for free?",
              a: "Yes! Our core features are completely free. We also offer premium plans for more advanced analytics."
            }
          ].map((faq, i) => (
            <motion.div 
              key={i}
              className="faq-card"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="faq-question">
                {faq.q}
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <span className="text-xl font-bold">+</span>
                </div>
              </div>
              <p className="faq-answer">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[56px] p-12 md:p-24 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tighter">Ready to Build Your Future?</h2>
            <p className="text-xl text-slate-400 mb-14 font-medium leading-relaxed">
              Join 50,000+ students who are already using EduPath to achieve their educational goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/register" className="btn-premium group !bg-white !text-slate-900 !px-12">
                Get Started Now <Rocket size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="btn-secondary-premium !bg-transparent !border-white/20 !text-white !px-12 hover:!bg-white/10">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-white border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
            <div className="col-span-2">
              <Link to="/" className="flex items-center gap-2.5 mb-8">
                <div className="w-9 h-9 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-lg">E</div>
                <span className="text-2xl font-black tracking-tighter text-slate-900">EduPath</span>
              </Link>
              <p className="text-slate-500 font-medium leading-relaxed max-w-sm">
                Empowering the next generation of students with AI-driven educational intelligence.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Discovery</h4>
              <ul className="space-y-4 text-slate-500 font-medium">
                <li><a href="#" className="hover:text-primary-600 transition-colors">Universities</a></li>
                <li><a href="#" className="hover:text-primary-600 transition-colors">Career Paths</a></li>
                <li><a href="#" className="hover:text-primary-600 transition-colors">Loan Matching</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Resources</h4>
              <ul className="space-y-4 text-slate-500 font-medium">
                <li><a href="#" className="hover:text-primary-600 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary-600 transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-primary-600 transition-colors">API Docs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Legal</h4>
              <ul className="space-y-4 text-slate-500 font-medium">
                <li><a href="#" className="hover:text-primary-600 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-primary-600 transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-primary-600 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <Divider className="bg-slate-200/50 mb-12" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-slate-500 font-bold text-sm">© 2024 EduPath AI. Built with precision for the future.</p>
            <div className="flex items-center gap-6">
              {[Globe, Users, Zap].map((Icon, i) => (
                <div key={i} className="w-10 h-10 bg-slate-50 border border-slate-200/50 rounded-xl flex items-center justify-center text-slate-900 hover:bg-slate-900 hover:text-white transition-all cursor-pointer">
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Landing
