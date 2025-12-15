import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  fullWidth?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  href,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-base font-bold transition-all duration-300 transform rounded hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-900";
  
  const variants = {
    primary: "bg-gold-600 hover:bg-gold-500 text-black shadow-lg shadow-gold-600/30 focus:ring-gold-500 border border-transparent",
    outline: "bg-transparent border-2 border-gold-600 text-gold-500 hover:bg-gold-600/10 hover:text-gold-400 focus:ring-gold-500"
  };

  const widthClass = fullWidth ? "w-full" : "";

  const content = (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );

  if (href) {
    return <a href={href} className={fullWidth ? "block w-full" : "inline-block"}>{content}</a>;
  }

  return content;
};