import React from 'react';
import { Section } from './Section';
import { EyeOff } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <Section bg="dark" className="border-y border-neutral-800">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="flex justify-center mb-6">
          <EyeOff className="w-16 h-16 text-gold-600 opacity-80" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Algo está errado… <span className="text-gold-500">e você sente isso</span>
        </h2>
        
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Estamos vivendo um ataque espiritual silencioso, estratégico e devastador. 
          Enquanto muitos estão distraídos com as luzes do mundo, a fé se torna rasa, 
          a verdade se relativiza e uma geração inteira caminha sem direção.
        </p>

        <p className="text-2xl font-serif text-white font-bold italic pt-4">
          ALERTADOS nasce como resposta a esse clamor.
        </p>
      </div>
    </Section>
  );
};