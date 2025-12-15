import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: 'dark' | 'black' | 'gradient';
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id, bg = 'black' }) => {
  const bgStyles = {
    black: 'bg-dark-900',
    dark: 'bg-dark-800',
    gradient: 'bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900',
  };

  return (
    <section id={id} className={`py-16 md:py-24 relative overflow-hidden ${bgStyles[bg]} ${className}`}>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {children}
      </div>
    </section>
  );
};