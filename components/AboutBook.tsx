import React from 'react';
import { Section } from './Section';
import { Megaphone, Zap, ShieldAlert, Cross } from 'lucide-react';

export const AboutBook: React.FC = () => {
  return (
    <Section id="sobre" bg="black">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            O que é o livro <br/><span className="text-gold-500">ALERTADOS?</span>
          </h2>
          
          <div className="space-y-4 text-gray-300 text-lg">
            <p>Este não é um livro de frases motivacionais.</p>
            <p>Não é uma leitura leve para passar o tempo.</p>
          </div>

          <div className="p-6 border-l-4 border-gold-600 bg-neutral-900/50 rounded-r-lg my-8">
            <div className="flex items-start gap-4">
              <Megaphone className="w-8 h-8 text-gold-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Este livro é uma trombeta.</h3>
                <p className="text-gray-300">
                  Uma trombeta de alerta. De guerra espiritual. De despertamento.
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-300">
            Cada capítulo confronta, limpa os olhos espirituais, reacende o propósito e fortalece o espírito.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {[
            { icon: <Zap />, title: "Direção Espiritual", desc: "Sólida e baseada na Bíblia." },
            { icon: <ShieldAlert />, title: "Confronto", desc: "Contra a superficialidade da fé moderna." },
            { icon: <Cross />, title: "Posicionamento", desc: "Um chamado real ao cristianismo autêntico." },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 p-6 bg-dark-800 rounded-lg border border-neutral-800 hover:border-gold-600/50 transition-colors">
              <div className="p-3 bg-black rounded-full text-gold-500 border border-gold-600/20">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-white">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};