import React from 'react'
import { motion } from 'framer-motion'

export const Card = ({ children, className = '', elevated = false, hover = true, ...props }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -2 } : {}}
      className={`
        rounded-xl border bg-white transition-all duration-200
        ${elevated ? 'border-glass shadow-xl' : 'border-slate-200 shadow-sm hover:shadow-md'}
        ${className}
      `}
      style={{
        border: '1px solid var(--slate-200)',
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const StatCard = ({ icon: Icon, label, value, trend, color = 'primary', className = '' }) => {
  const colorStyles = {
    primary: { bg: 'var(--primary-50)', text: 'var(--primary-600)' },
    success: { bg: '#ecfdf5', text: '#059669' },
    warning: { bg: '#fffbeb', text: '#d97706' },
    error: { bg: '#fef2f2', text: '#dc2626' },
  }[color]

  return (
    <Card className={`p-6 ${className}`}>
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <p className="text-sm font-bold text-slate-500 mb-1 uppercase tracking-widest">{label}</p>
          <h3 className="text-3xl font-black text-slate-900 tracking-tighter">{value}</h3>
          {trend && (
            <p className={`text-xs font-black mt-2 ${trend.startsWith('+') ? 'text-emerald-600' : 'text-red-600'}`}>
              {trend}
            </p>
          )}
        </div>
        {Icon && (
          <div 
            className="p-3 rounded-xl flex items-center justify-center shadow-inner"
            style={{ backgroundColor: colorStyles.bg, color: colorStyles.text }}
          >
            <Icon size={24} />
          </div>
        )}
      </div>
    </Card>
  )
}

export const Badge = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const variants = {
    primary: { bg: 'var(--primary-100)', text: 'var(--primary-700)' },
    success: { bg: '#d1fae5', text: '#065f46' },
    warning: { bg: '#fef3c7', text: '#92400e' },
    error: { bg: '#fee2e2', text: '#991b1b' },
    slate: { bg: 'var(--slate-100)', text: 'var(--slate-700)' },
  }

  const sizes = {
    sm: 'px-2 py-0.5 text-[10px]',
    md: 'px-3 py-1 text-xs',
    lg: 'px-4 py-1.5 text-sm',
  }

  return (
    <span 
      className={`inline-flex items-center gap-1 font-black rounded-full uppercase tracking-widest ${sizes[size]} ${className}`}
      style={{ 
        backgroundColor: variants[variant].bg, 
        color: variants[variant].text 
      }}
      {...props}
    >
      {children}
    </span>
  )
}

export const InputField = ({ label, helper, error, icon: Icon, ...props }) => {
  return (
    <div className="w-full">
      {label && <label className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 block">{label}</label>}
      <div className="relative">
        {Icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300">
            <Icon size={20} />
          </div>
        )}
        <input
          className={`
            w-full px-4 py-4 rounded-2xl border-2 transition-all duration-300 font-bold text-slate-900 bg-white
            ${Icon ? 'pl-12' : ''}
            focus:outline-none focus:ring-4 focus:ring-primary-50
          `}
          style={{ 
            borderColor: error ? 'var(--error)' : 'var(--slate-200)',
            borderStyle: 'solid'
          }}
          {...props}
        />
      </div>
      {(error || helper) && (
        <p className={`text-[10px] font-black uppercase tracking-widest mt-2 ${error ? 'text-red-500' : 'text-slate-400'}`}>
          {error || helper}
        </p>
      )}
    </div>
  )
}

export const Divider = ({ className = '' }) => (
  <div className={`h-px w-full bg-slate-100 ${className}`} style={{ height: '1px' }} />
)

export const Section = ({ title, subtitle, children, className = '' }) => (
  <div className={className}>
    {(title || subtitle) && (
      <div className="mb-10 text-left">
        {title && <h2 className="text-3xl font-black text-slate-950 tracking-tighter mb-2">{title}</h2>}
        {subtitle && <p className="text-lg text-slate-400 font-bold tracking-tight">{subtitle}</p>}
      </div>
    )}
    {children}
  </div>
)

export const ProgressBar = ({ value, max = 100, showLabel = true, color = 'primary', size = 'md' }) => {
  const percentage = Math.round((value / max) * 100)
  const height = size === 'sm' ? '6px' : size === 'md' ? '10px' : '14px'
  const colorMap = {
    primary: 'var(--primary-600)',
    success: 'var(--success)',
    warning: 'var(--warning)',
    error: 'var(--error)',
  }

  return (
    <div className="w-full">
      <div 
        className="w-full bg-slate-100 rounded-full overflow-hidden" 
        style={{ height }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: colorMap[color] }}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
      {showLabel && (
        <p className="text-[10px] font-black text-slate-400 mt-2 uppercase tracking-widest">{percentage}% Completed</p>
      )}
    </div>
  )
}

export const Loader = () => (
  <div className="flex items-center justify-center p-10">
    <div className="w-10 h-10 border-4 border-primary-100 border-t-primary-600 rounded-full animate-spin"></div>
  </div>
)
