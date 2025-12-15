import React from 'react';
import { Section } from './Section';

export const Author: React.FC = () => {
  return (
    <Section bg="dark" className="border-t border-neutral-800">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/3 flex justify-center">
          {/* Placeholder for Author Image */}
          <div className="w-64 h-64 md:w-80 md:h-80 bg-neutral-900 rounded-full border-4 border-gold-600/30 overflow-hidden relative shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
            <img 
              src="https://picsum.photos/400/400?grayscale" 
              alt="Valdeci Pereira da Silva"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-gold-500 font-bold uppercase tracking-wider mb-2 text-sm">Sobre o Autor</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Valdeci Pereira da Silva</h3>
          
          <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
            <p>
              Valdeci Pereira da Silva é educador e líder comprometido com a transformação de vidas através da Palavra de Deus.
            </p>
            <p>
              Dedica sua caminhada à formação de jovens dentro e fora dos campos de futebol, ensinando não apenas técnicas, mas valores eternos que moldam caráter.
            </p>
            <p>
              Criador de projetos sociais e educacionais, carrega o propósito de ser uma ponte entre o Evangelho e a nova geração — uma geração marcada por ansiedade, pressão social, dúvidas existenciais e falta de direção espiritual.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};