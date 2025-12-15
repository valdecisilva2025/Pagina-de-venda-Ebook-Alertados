import React from 'react';
import { Section } from './Section';
import { BookOpen, Users, Hourglass, Target, Sword } from 'lucide-react';

export const Themes: React.FC = () => {
  const themes = [
    { icon: <BookOpen />, label: "Vida Cristã" },
    { icon: <Users />, label: "Juventude e Direção" },
    { icon: <Hourglass />, label: "Profecias Bíblicas" },
    { icon: <Target />, label: "Propósito" },
    { icon: <Sword />, label: "Guerra Espiritual" },
  ];

  return (
    <Section bg="gradient" className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
        Temas abordados no livro
      </h2>
      
      <div className="flex flex-wrap justify-center gap-6">
        {themes.map((theme, idx) => (
          <div key={idx} className="group relative w-40 h-40 md:w-48 md:h-48 flex flex-col items-center justify-center p-4 bg-black border border-neutral-800 rounded-xl hover:border-gold-600 transition-all duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gold-600/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
            <div className="w-12 h-12 text-gold-500 mb-4 group-hover:scale-110 transition-transform">
              {React.cloneElement(theme.icon as React.ReactElement<any>, { size: 40 })}
            </div>
            <span className="font-semibold text-gray-200 group-hover:text-white transition-colors">{theme.label}</span>
          </div>
        ))}
      </div>
    </Section>
  );
};