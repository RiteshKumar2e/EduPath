import React from 'react'
import { motion } from 'framer-motion'

export const Card = ({ children, className = '', elevated = false, hover = true, ...props }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -2 } : {}}
      className={`
        rounded-xl border bg-white transition-all duration-200
        ${elevated ? 'border-slate-150 shadow-elevated' : 'border-slate-200 shadow-card hover:shadow-card-hover'}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const StatCard = ({ icon: Icon, label, value, trend, color = 'primary', className = '' }) => {
  const colorClass = {
    primary: 'bg-primary-50 text-primary-600',
    success: 'bg-emerald-50 text-emerald-600',
    warning: 'bg-amber-50 text-amber-600',
    error: 'bg-red-50 text-red-600',
  }[color]

  return (
    <Card className={`p-6 ${className}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-600 mb-1">{label}</p>
          <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
          {trend && (
            <p className={`text-xs font-semibold mt-2 ${trend.startsWith('+') ? 'text-emerald-600' : 'text-red-600'}`}>
              {trend}
            </p>
          )}
        </div>
        {Icon && (
          <div className={`p-3 rounded-lg ${colorClass}`}>
            <Icon size={24} />
          </div>
        )}
      </div>
    </Card>
  )
}

export const Badge = ({ children, variant = 'primary', size = 'md', ...props }) => {
  const variants = {
    primary: 'bg-primary-100 text-primary-700',
    success: 'bg-emerald-100 text-emerald-700',
    warning: 'bg-amber-100 text-amber-700',
    error: 'bg-red-100 text-red-700',
    slate: 'bg-slate-100 text-slate-700',
  }

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  }

  return (
    <span className={`inline-flex items-center gap-1 font-semibold rounded-full ${variants[variant]} ${sizes[size]}`} {...props}>
      {children}
    </span>
  )
}

export const InputField = ({ label, helper, error, icon: Icon, ...props }) => {
  return (
    <div className="w-full">
      {label && <label className="label mb-2">{label}</label>}
      <div className="relative">
        {Icon && <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />}
        <input
          className={`
            w-full px-4 py-3 ${Icon ? 'pl-10' : ''} rounded-lg border-2 transition-all duration-200
            ${error ? 'border-error focus:border-error' : 'border-slate-200 focus:border-primary-500'}
            bg-white font-medium text-slate-900 placeholder-slate-400
            focus:outline-none focus:ring-2 focus:ring-primary-100
          `}
          {...props}
        />
      </div>
      {error && <p className="helper-text text-error mt-1">{error}</p>}
      {helper && !error && <p className="helper-text mt-1">{helper}</p>}
    </div>
  )
}

export const TextArea = ({ label, helper, error, maxLength, ...props }) => {
  const [charCount, setCharCount] = React.useState(0)

  return (
    <div className="w-full">
      {label && <label className="label mb-2">{label}</label>}
      <textarea
        className={`
          w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 resize-vertical
          ${error ? 'border-error focus:border-error' : 'border-slate-200 focus:border-primary-500'}
          bg-white font-medium text-slate-900 placeholder-slate-400
          focus:outline-none focus:ring-2 focus:ring-primary-100
        `}
        maxLength={maxLength}
        onChange={(e) => setCharCount(e.target.value.length)}
        {...props}
      />
      <div className="flex justify-between items-start mt-1">
        <div>
          {error && <p className="helper-text text-error">{error}</p>}
          {helper && !error && <p className="helper-text">{helper}</p>}
        </div>
        {maxLength && <p className="text-xs text-slate-400">{charCount}/{maxLength}</p>}
      </div>
    </div>
  )
}

export const Alert = ({ type = 'info', title, message, icon: Icon, onClose }) => {
  const typeStyles = {
    info: 'bg-info/10 border-info/30 text-info',
    success: 'bg-success/10 border-success/30 text-success',
    warning: 'bg-warning/10 border-warning/30 text-warning',
    error: 'bg-error/10 border-error/30 text-error',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`flex gap-3 p-4 rounded-lg border-l-4 ${typeStyles[type]}`}
    >
      {Icon && <Icon size={20} className="flex-shrink-0 mt-0.5" />}
      <div className="flex-grow">
        {title && <h4 className="font-semibold text-sm">{title}</h4>}
        {message && <p className="text-sm opacity-90">{message}</p>}
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="flex-shrink-0 hover:opacity-70 transition-opacity"
        >
          ✕
        </button>
      )}
    </motion.div>
  )
}

export const Skeleton = ({ className = '', count = 1 }) => {
  return (
    <>
      {Array(count).fill(0).map((_, i) => (
        <div
          key={i}
          className={`
            animate-pulse bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200
            bg-[length:200%_100%] rounded-lg ${className}
          `}
        />
      ))}
    </>
  )
}

export const EmptyState = ({ icon: Icon, title, description, action }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      {Icon && (
        <div className="mb-4 p-4 bg-slate-100 rounded-full text-slate-400">
          <Icon size={40} />
        </div>
      )}
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      {description && <p className="text-slate-600 mb-6 max-w-md">{description}</p>}
      {action && <div>{action}</div>}
    </div>
  )
}

export const Divider = ({ className = '' }) => (
  <div className={`h-px bg-slate-200 ${className}`} />
)

export const Section = ({ title, subtitle, children, className = '' }) => (
  <div className={className}>
    {title && (
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-1">{title}</h2>
        {subtitle && <p className="text-slate-600">{subtitle}</p>}
      </div>
    )}
    {children}
  </div>
)

export const Tabs = ({ tabs, defaultTab = 0, onChange }) => {
  const [active, setActive] = React.useState(defaultTab)

  const handleChange = (index) => {
    setActive(index)
    onChange?.(index)
  }

  return (
    <div>
      <div className="flex border-b border-slate-200 gap-1">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => handleChange(i)}
            className={`
              px-4 py-3 font-semibold text-sm border-b-2 transition-colors -mb-0.5
              ${active === i
                ? 'text-primary-600 border-primary-600'
                : 'text-slate-600 border-transparent hover:text-slate-900'
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-6">
        {tabs[active]?.content}
      </div>
    </div>
  )
}

export const ProgressBar = ({ value, max = 100, showLabel = true, color = 'primary', size = 'md' }) => {
  const percentage = Math.round((value / max) * 100)
  const sizeClass = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-3',
  }[size]

  const colorClass = {
    primary: 'bg-primary-600',
    success: 'bg-emerald-600',
    warning: 'bg-amber-600',
    error: 'bg-red-600',
  }[color]

  return (
    <div>
      <div className={`w-full bg-slate-200 rounded-full overflow-hidden ${sizeClass}`}>
        <motion.div
          className={`${colorClass} h-full rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      {showLabel && (
        <p className="text-xs font-semibold text-slate-600 mt-1.5">{percentage}%</p>
      )}
    </div>
  )
}

export const Tooltip = ({ children, content, position = 'top' }) => {
  const [show, setShow] = React.useState(false)

  return (
    <div className="relative inline-block">
      {show && (
        <div className={`
          absolute z-50 px-3 py-2 text-xs font-medium text-white bg-slate-900 rounded-lg whitespace-nowrap
          ${position === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'}
        `}>
          {content}
          <div className={`
            absolute w-1.5 h-1.5 bg-slate-900 rotate-45
            ${position === 'top' ? 'top-full left-1/2 -translate-x-1/2 -translate-y-1/2' : 'bottom-full left-1/2 -translate-x-1/2 translate-y-1/2'}
          `} />
        </div>
      )}
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="cursor-help"
      >
        {children}
      </div>
    </div>
  )
}
