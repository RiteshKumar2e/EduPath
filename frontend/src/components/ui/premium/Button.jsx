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
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus-ring cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-sm hover:shadow-md active:scale-95',
    secondary: 'bg-slate-100 text-slate-900 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 active:scale-95',
    ghost: 'text-primary-600 hover:bg-primary-50 border border-transparent active:scale-95',
    outline: 'border-2 border-primary-300 text-primary-600 hover:bg-primary-50 active:scale-95',
    danger: 'bg-error text-white hover:bg-red-700 shadow-sm hover:shadow-md active:scale-95',
    success: 'bg-success text-white hover:bg-emerald-700 shadow-sm hover:shadow-md active:scale-95',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-3.5 text-lg',
  }

  const finalClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`

  return (
    <motion.button
      whileHover={disabled ? {} : { y: -2 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      className={finalClassName}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
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
