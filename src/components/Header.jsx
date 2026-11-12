import { useState, useEffect } from 'react';
import { lawyerData } from '../data/data';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Deteta o scroll da página para ativar o efeito translúcido
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Número e mensagem dinâmica puxados do lawyerData
  const phoneNumber = lawyerData?.whatsapp || '5589981433161';
  const professionalName = lawyerData?.name || 'Escritório de Advocacia';
  const whatsappMessage = encodeURIComponent(`Olá, ${professionalName}! Preciso de consultoria jurídica.`);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#07182D]/90 backdrop-blur-md border-b border-[#C5A059]/30 shadow-2xl shadow-black/40' 
        : 'bg-[#07182D] border-b border-[#C5A059]/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        
        {/* Logo Horizontal */}
        <a href="#" className="flex items-center group py-2 pl-2 sm:pl-0">
          <img 
            src={logoImg} 
            alt="Escritório de Advocacia & Consultoria Jurídica" 
            className="h-12 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.01]" 
          />
        </a>

        {/* Navigation Links (Desktop) com animação de sublinhado dourado */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-300">
          <a href="#" className="relative py-1 hover:text-[#D4AF37] transition-colors group">
            Início
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#C5A059] to-[#D4AF37] transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#servicos" className="relative py-1 hover:text-[#D4AF37] transition-colors group">
            Áreas de Atuação
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#C5A059] to-[#D4AF37] transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#sobre" className="relative py-1 hover:text-[#D4AF37] transition-colors group">
            Sobre
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#C5A059] to-[#D4AF37] transition-all duration-300 group-hover:w-full" />
          </a>
          <a href="#contato" className="relative py-1 hover:text-[#D4AF37] transition-colors group">
            Contato
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#C5A059] to-[#D4AF37] transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>

        {/* CTA Button (Desktop) com o WhatsApp Oficial */}
        <div className="hidden md:block">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B8860B] hover:from-[#D4AF37] hover:to-[#C5A059] text-[#07182D] font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/40 text-sm transition-all duration-300 hover:scale-[1.02] active:scale-95 border border-[#F3E5AB]/40"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.89 5.84L2.42 21.58l3.87-1.28C7.9 21.3 9.89 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.78 0-3.44-.54-4.84-1.47l-.35-.23-2.55.84.85-2.48-.23-.37C4.1 14.9 3.5 13.5 3.5 12c0-4.69 3.81-8.5 8.5-8.5s8.5 3.81 8.5 8.5-3.81 8.5-8.5 8.5zm4.59-6.32c-.25-.13-1.48-.73-1.71-.82-.23-.09-.4-.13-.57.13-.17.25-.66.82-.81.99-.15.17-.3.19-.55.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.39.11-.52.12-.12.25-.31.37-.47.12-.16.16-.27.24-.45.08-.18.04-.34-.02-.47-.07-.13-.57-1.38-.78-1.89-.2-.5-.4-.43-.57-.44-.15-.01-.33-.01-.51-.01-.17 0-.45.06-.68.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.32 3.81.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29z"/>
            </svg>
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        {/* Mobile Menu Button (Hambúrguer) com animação ao abrir/fechar */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            aria-label="Menu"
            className="text-slate-300 hover:text-[#D4AF37] p-2 rounded-xl transition-all duration-300 active:scale-90 focus:outline-none"
          >
            {isOpen ? <X size={28} className="rotate-90 transition-transform duration-300" /> : <Menu size={28} className="transition-transform duration-300" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown com animação tátil refinada */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-[#07182D]/95 backdrop-blur-md border-b border-[#C5A059]/30 shadow-2xl py-6 px-6 flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
          <a 
            href="#" 
            onClick={closeMenu}
            className="text-slate-200 hover:text-[#D4AF37] font-medium text-base py-3 px-4 rounded-xl border-b border-slate-800/80 active:bg-[#C5A059]/20 active:translate-x-2 transition-all duration-200"
          >
            Início
          </a>
          <a 
            href="#servicos" 
            onClick={closeMenu}
            className="text-slate-200 hover:text-[#D4AF37] font-medium text-base py-3 px-4 rounded-xl border-b border-slate-800/80 active:bg-[#C5A059]/20 active:translate-x-2 transition-all duration-200"
          >
            Áreas de Atuação
          </a>
          <a 
            href="#sobre" 
            onClick={closeMenu}
            className="text-slate-200 hover:text-[#D4AF37] font-medium text-base py-3 px-4 rounded-xl border-b border-slate-800/80 active:bg-[#C5A059]/20 active:translate-x-2 transition-all duration-200"
          >
            Sobre
          </a>
          <a 
            href="#contato" 
            onClick={closeMenu}
            className="text-slate-200 hover:text-[#D4AF37] font-medium text-base py-3 px-4 rounded-xl active:bg-[#C5A059]/20 active:translate-x-2 transition-all duration-200"
          >
            Contato
          </a>

          <div className="pt-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B8860B] text-[#07182D] font-bold px-5 py-3.5 rounded-xl shadow-lg text-sm border border-[#F3E5AB]/40 transition-transform active:scale-95"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.89 5.84L2.42 21.58l3.87-1.28C7.9 21.3 9.89 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.78 0-3.44-.54-4.84-1.47l-.35-.23-2.55.84.85-2.48-.23-.37C4.1 14.9 3.5 13.5 3.5 12c0-4.69 3.81-8.5 8.5-8.5s8.5 3.81 8.5 8.5-3.81 8.5-8.5 8.5zm4.59-6.32c-.25-.13-1.48-.73-1.71-.82-.23-.09-.4-.13-.57.13-.17.25-.66.82-.81.99-.15.17-.3.19-.55.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.39.11-.52.12-.12.25-.31.37-.47.12-.16.16-.27.24-.45.08-.18.04-.34-.02-.47-.07-.13-.57-1.38-.78-1.89-.2-.5-.4-.43-.57-.44-.15-.01-.33-.01-.51-.01-.17 0-.45.06-.68.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.32 3.81.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29z"/>
              </svg>
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;