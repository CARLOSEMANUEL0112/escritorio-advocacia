import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Background3D } from './components/Background3D';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      }, 
      { 
        threshold: 0.1, // Dispara assim que 10% do elemento aparece no ecrã
        rootMargin: '0px 0px -30px 0px' 
      }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#051222] text-slate-100 font-sans antialiased selection:bg-[#D4AF37] selection:text-[#051222] overflow-x-hidden relative">
      
      {/* Fundo de Partículas e Linhas Douradas Conectadas 3D */}
      <Background3D />

      {/* Conteúdo Principal do Site */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          
          <div className="reveal-on-scroll">
            <Services />
          </div>
          
          <div className="reveal-on-scroll">
            <About />
          </div>
          
          <div className="reveal-on-scroll">
            <Contact />
          </div>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>

    </div>
  );
}