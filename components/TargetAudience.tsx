import React from 'react';
import { Section } from './Section';
import { CheckCircle2 } from 'lucide-react';

export const TargetAudience: React.FC = () => {
  const points = [
    "Sente que algo está espiritualmente errado",
    "Não aceita uma fé rasa e confortável",
    "Busca sentido em meio ao caos",
    "Deseja permanecer firme, mesmo sob pressão",
    "Quer viver aquilo que Deus te chamou para ser"
  ];

  return (
    <Section bg="black">
      <div className="max-w-4xl mx-auto bg-dark-800 rounded-2xl p-8 md:p-12 border border-neutral-800 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gold-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold-600/10 rounded-full blur-3xl" />

        <div className="relative z-10 text-center md:text-left grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 leading-tight">
              Este livro é <br/> <span className="text-gold-500">para você que...</span>
            </h2>
            <p className="text-gray-400 mb-6">
              Se você busca apenas conforto, este livro não é para você.
              Mas se busca verdade, ele foi escrito para você.
            </p>
          </div>
          
          <ul className="space-y-4">
            {points.map((point, i) => (
              <li key={i} className="flex items-start text-left gap-3">
                <CheckCircle2 className="w-6 h-6 text-gold-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-200 text-lg">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};