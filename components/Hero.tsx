import React from 'react';
import { Button } from './Button';
import { ChevronRight, AlertTriangle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gold-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="text-center md:text-left space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-gold-600/50 rounded-full bg-gold-900/10 text-gold-500 text-sm font-semibold tracking-wider uppercase">
            <AlertTriangle size={16} />
            <span>Lançamento Oficial</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase tracking-tighter">
            Aler<span className="text-gold-500 glow-text">tados</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 font-serif italic border-l-4 border-gold-600 pl-4">
            Como permanecer firme em um mundo que quer te derrubar
          </p>

          <div className="space-y-4 text-gray-400 text-lg">
            <p>Este livro não foi escrito para agradar. <strong className="text-white">Foi escrito para acordar.</strong></p>
            <p>Não é para entreter, mas para equipar. <br/>Não é para suavizar, mas para preparar.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <Button href="https://pay.hotmart.com/K103343194M">
              COMPRAR AGORA <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" href="#sobre">
              QUERO SER ALERTADO
            </Button>
          </div>
        </div>

        {/* Book Mockup Area */}
        <div className="relative flex justify-center items-center perspective-1000">
            {/* Glow behind book */}
            <div className="absolute inset-0 bg-gold-600/20 blur-[80px] rounded-full pointer-events-none" />
            
            <img 
              src="https://s11.aconvert.com/convert/p3r68-cdx67/pm716-3hbqj.jpg" 
              alt="Capa do Livro ALERTADOS - Valdeci Pereira da Silva"
              className="relative z-10 w-[280px] md:w-[380px] h-auto rounded-lg shadow-2xl shadow-gold-900/50 transform transition-transform duration-500 hover:scale-105"
            />
        </div>
      </div>
    </section>
  );
};