import React from 'react';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { AboutBook } from './components/AboutBook';
import { Themes } from './components/Themes';
import { TargetAudience } from './components/TargetAudience';
import { Author } from './components/Author';
import { Verse } from './components/Verse';
import { Offer } from './components/Offer';
import { Footer } from './components/Footer';
import { Button } from './components/Button';

// Additional component for the Features section which was split in the structure but can be combined for cleaner App.tsx
// I will create a specific component for "What You Will Find" as requested in section 4.

const App: React.FC = () => {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-gold-600 selection:text-white">
      <Hero />
      <Problem />
      <AboutBook />
      <Themes />
      <TargetAudience />
      <Author />
      <Verse />
      <Offer />
      
      {/* Final Call To Action Section */}
      <section className="py-20 bg-gradient-to-t from-black to-dark-900 text-center">
         <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Você foi alertado.</h2>
            <p className="text-xl text-gray-400 mb-8">Agora precisa escolher o que fará com isso.</p>
            <Button href="https://pay.hotmart.com/K103343194M" className="animate-pulse">👉 QUERO SER ALERTADO AGORA</Button>
         </div>
      </section>

      <Footer />
    </main>
  );
};

export default App;