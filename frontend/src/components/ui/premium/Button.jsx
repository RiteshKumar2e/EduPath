import React from 'react'
import { motion } from 'framer-motion'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  disabled = false,
  icon: Icon = null,
  iconPosition = 'left',
  loading = false,
  ...props
}) => {
  // Styles are now handled by standard CSS classes defined in index.css
  // but we build the final string here.
  
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-all duration-300 cursor-pointer'
  
  const variants = {
    primary: 'bg-primary-600 text-white shadow-lg shadow-primary-100 hover:-translate-y-1 hover:shadow-xl',
    secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200',
    ghost: 'text-primary-600 hover:bg-primary-50',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    success: 'bg-emerald-500 text-white hover:bg-emerald-600',
  }

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    xl: 'px-10 py-5 text-lg',
  }

  const finalClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className} ${disabled || loading ? 'opacity-50 cursor-not-allowed shadow-none hover:translate-y-0' : ''}`

  return (
    <motion.button
      whileTap={disabled || loading ? {} : { scale: 0.98 }}
      className={finalClassName}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <span className="loading-spinner" />
          {children}
        </>
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon size={18} />}
          {children}
          {Icon && iconPosition === 'right' && <Icon size={18} />}
        </>
      )}
    </motion.button>
  )
}

export default Button
