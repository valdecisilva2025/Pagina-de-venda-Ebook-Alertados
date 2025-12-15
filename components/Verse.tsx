import React from 'react';

export const Verse: React.FC = () => {
  return (
    <div className="py-20 bg-fixed bg-center bg-cover relative" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop")'}}>
      <div className="absolute inset-0 bg-black/80" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <blockquote className="max-w-4xl mx-auto">
          <p className="text-2xl md:text-4xl font-serif font-bold text-white leading-relaxed mb-6">
            “Desperta, tu que dormes, e levanta-te dentre os mortos, e Cristo te esclarecerá.”
          </p>
          <footer className="text-gold-500 font-bold tracking-widest uppercase">
            Efésios 5:14
          </footer>
        </blockquote>
      </div>
    </div>
  );
};