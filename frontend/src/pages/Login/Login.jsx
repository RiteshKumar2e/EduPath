import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { GraduationCap, Mail, Lock, ArrowRight } from 'lucide-react'
import '../../styles/Auth.css'

const Login = () => {
  return (
    <div className="auth-container">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="auth-card">
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-primary-600 rounded-3xl flex items-center justify-center text-white shadow-2xl mx-auto mb-8">
            <GraduationCap size={40} />
          </div>
          <h1 className="text-4xl font-black text-slate-800">Welcome Back</h1>
          <p className="text-slate-400 font-bold mt-2">Log in to your EduPath account</p>
        </div>

        <form className="space-y-6">
          <div className="relative">
             <input type="email" placeholder="name@example.com" className="input-auth" />
             <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
          </div>
          <div className="relative">
             <input type="password" placeholder="••••••••" className="input-auth" />
             <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
          </div>
          <button className="w-full py-6 bg-primary-600 text-white rounded-[24px] font-black shadow-2xl hover:bg-primary-700 transition-all flex items-center justify-center gap-2">
            Sign In <ArrowRight size={20} />
          </button>
        </form>

        <p className="mt-8 text-center text-slate-400 font-bold">
          Don't have an account? <Link to="/register" className="text-primary-600 hover:underline">Register</Link>
        </p>
      </motion.div>
    </div>
  )
}

export default Login
