import React from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { FileText, ShieldCheck, Lock, Smartphone, Download } from 'lucide-react';

export const Offer: React.FC = () => {
  return (
    <Section id="oferta" bg="black" className="relative">
      <div className="absolute inset-0 bg-gold-600/5 blur-3xl pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-gradient-to-b from-dark-800 to-black border border-gold-600/30 rounded-3xl p-8 md:p-12 shadow-2xl shadow-gold-900/20 text-center">
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">Adquira agora</h2>
          <p className="text-xl text-gold-500 font-serif mb-10">O livro digital ALERTADOS</p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
             <div className="flex flex-col gap-4 text-left justify-center px-4">
                <div className="flex items-center gap-3 text-gray-300">
                   <div className="p-2 bg-dark-700 rounded-lg"><FileText className="text-gold-500" /></div>
                   <span>Formato: <strong>E-book (PDF)</strong></span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                   <div className="p-2 bg-dark-700 rounded-lg"><Download className="text-gold-500" /></div>
                   <span>Acesso imediato</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                   <div className="p-2 bg-dark-700 rounded-lg"><Smartphone className="text-gold-500" /></div>
                   <span>Leitura em qualquer dispositivo</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                   <div className="p-2 bg-dark-700 rounded-lg"><Lock className="text-gold-500" /></div>
                   <span>Compra 100% segura</span>
                </div>
             </div>

             <div className="bg-dark-900/50 rounded-xl p-6 flex flex-col justify-center border border-neutral-800">
                <p className="text-gray-400 text-sm mb-2">Preço Especial de Lançamento</p>
                <div className="flex items-end justify-center gap-2 mb-6">
                   {/* If there was a price, it would go here. Using a generic 'Buy' structure. */}
                   <span className="text-5xl font-bold text-white">Adquira</span>
                   <span className="text-gold-500 text-2xl font-bold mb-1">Hoje</span>
                </div>
                <Button fullWidth href="https://pay.hotmart.com/K103343194M">👉 COMPRAR AGORA</Button>
                <p className="text-xs text-gray-500 mt-3 flex items-center justify-center gap-1">
                  <Lock size={12} /> Pagamento processado com segurança
                </p>
             </div>
          </div>

          <p className="text-lg text-white font-medium mb-12 max-w-2xl mx-auto">
            O mundo vai continuar tentando te derrubar. <br/>
            <span className="text-gold-500">A diferença é se você estará preparado.</span>
          </p>

          {/* Guarantee */}
          <div className="bg-dark-700/30 rounded-xl p-6 border border-neutral-700 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6">
               <ShieldCheck className="w-16 h-16 text-gold-500 flex-shrink-0" />
               <div className="text-left">
                  <h3 className="text-xl font-bold text-white mb-1">Garantia Incondicional de 7 Dias</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                     Você tem 7 dias de garantia. Se dentro desse período sentir que o livro não é para você, basta solicitar o reembolso. Sem perguntas. Sem burocracia.
                  </p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};