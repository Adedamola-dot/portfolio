import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = false,
  glass = false,
  ...props 
}) => {
  const baseStyles = 'rounded-2xl overflow-hidden transition-all duration-300';
  const hoverStyles = hover ? 'hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(102,102,255,0.15)] dark:hover:shadow-[0_20px_60px_rgba(102,102,255,0.1)]' : '';
  const glassStyles = glass ? 'bg-white/5 dark:bg-dark-card/30 backdrop-blur-lg border border-gray-200/20 dark:border-dark-border/30' : 'bg-white dark:bg-dark-card border border-gray-200/50 dark:border-dark-border';

  return (
    <div 
      className={`${baseStyles} ${hoverStyles} ${glassStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;