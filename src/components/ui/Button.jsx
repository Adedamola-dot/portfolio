import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon: Icon,
  iconPosition = 'left',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-dark-bg';
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-500 to-purple-600 text-white hover:shadow-[0_0_30px_rgba(102,102,255,0.4)] focus:ring-primary-500',
    secondary: 'bg-gray-200 dark:bg-dark-card text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-dark-border focus:ring-gray-500',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white focus:ring-primary-500',
    ghost: 'hover:bg-gray-100 dark:hover:bg-dark-card text-gray-700 dark:text-gray-300 focus:ring-gray-500',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3 text-base gap-2.5',
    lg: 'px-8 py-4 text-lg gap-3',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
    </button>
  );
};

export default Button;