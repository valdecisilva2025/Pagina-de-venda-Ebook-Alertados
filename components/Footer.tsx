import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 border-t border-neutral-900 py-12 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-black text-white uppercase tracking-tighter mb-8">
          Aler<span className="text-gold-600">tados</span>
        </h2>
        
        <p className="max-w-2xl mx-auto text-gray-400 mb-8 font-serif italic">
          "Que cada página traga luz. Que cada capítulo traga revelação. E que, ao final, você tenha coragem de viver aquilo que Deus te chamou para ser."
        </p>

        <div className="text-sm text-gray-600 space-y-2">
          <p>&copy; {new Date().getFullYear()} Valdeci Pereira da Silva. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-4">
            <span className="cursor-pointer hover:text-gold-500 transition-colors">Política de Privacidade</span>
            <span className="cursor-pointer hover:text-gold-500 transition-colors">Termos de Uso</span>
            <span className="cursor-pointer hover:text-gold-500 transition-colors">Contato</span>
          </div>
        </div>
      </div>
    </footer>
  );
};