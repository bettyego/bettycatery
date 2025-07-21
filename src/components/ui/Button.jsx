import React from 'react';
import { colors, typography, borderRadius, shadows } from '../../constants/theme';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  loading = false,
  onClick,
  type = 'button',
  className = '',
  ...props 
}) => {
  const baseClasses = `
    inline-flex items-center justify-center font-medium transition-all duration-300 
    focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 
    disabled:cursor-not-allowed relative overflow-hidden
  `;

  const variants = {
    primary: `
      bg-purple-600 hover:bg-purple-700 text-white
      focus:ring-purple-500 shadow-md hover:shadow-lg
    `,
    secondary: `
      bg-gray-100 hover:bg-gray-200 text-gray-900
      focus:ring-gray-500 shadow-sm hover:shadow-md
    `,
    outline: `
      border-2 border-purple-600 text-purple-600 hover:bg-purple-600
      hover:text-white focus:ring-purple-500 bg-transparent
    `,
    ghost: `
      text-gray-700 hover:bg-gray-100 focus:ring-gray-500 bg-transparent
    `,
    danger: `
      bg-red-500 hover:bg-red-600 text-white 
      focus:ring-red-500 shadow-md hover:shadow-lg
    `,
    success: `
      bg-green-500 hover:bg-green-600 text-white 
      focus:ring-green-500 shadow-md hover:shadow-lg
    `
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-base rounded-lg',
    lg: 'px-6 py-3 text-lg rounded-xl',
    xl: 'px-8 py-4 text-xl rounded-2xl'
  };

  const buttonClasses = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && (
        <svg 
          className="animate-spin -ml-1 mr-2 h-4 w-4" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
