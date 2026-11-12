import { lawyerData } from '../data/data';
import { ArrowUp, Mail } from 'lucide-react';
import logoImg from '../assets/logo.png';

// Converte 5589981433161 em (89) 98143-3161
const formatPhone = (raw = '') => {
  let digits = raw.replace(/\D/g, '');
  if (digits.startsWith('55') && digits.length === 13) digits = digits.slice(2);
  return digits.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    'Olá! Encontrei o número no rodapé do site e gostaria de atendimento.'
  );

  return (
    <footer className="bg-[#051222] text-slate-300 relative overflow-hidden pt-16">

      {/* Linha Divisória Dourada com Brilho no Topo */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-80 shadow-[0_0_20px_rgba(197,160,89,0.9)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 relative z-10">

        {/* Grelha Principal do Footer (3 Colunas) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800">

          {/* Coluna 1: Logo e Resumo Institucional */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center">
              <img
                src={logoImg}
                alt={`${lawyerData.name} - ${lawyerData.title}`}
                className="h-14 sm:h-16 w-auto object-contain mix-blend-lighten"
              />
            </div>

            {/* Subtítulo dinâmico puxado do lawyerData.title */}
            <p className="text-sm text-[#C5A059] font-medium tracking-wide">
              {lawyerData.title || 'Advocacia & Consultoria Estratégica'}
            </p>

            {/* Descrição institucional dinâmica ou neutra */}
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {lawyerData.bio || 'Atuação jurídica pautada pela ética, transparência e defesa intransigente dos direitos dos clientes.'}
            </p>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <a href="#sobre" className="hover:text-[#C5A059] transition-colors inline-block">Sobre o Escritório</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#C5A059] transition-colors inline-block">Áreas de Atuação</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#C5A059] transition-colors inline-block">Central de Contato</a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contatos Diretos e Redes Sociais */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
              Canais Oficiais
            </h4>

            <div className="space-y-3.5 text-sm">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${lawyerData.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-[#C5A059] transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#D4AF37] shrink-0 group-hover:bg-[#C5A059]/20 transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.89 5.84L2.42 21.58l3.87-1.28C7.9 21.3 9.89 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.78 0-3.44-.54-4.84-1.47l-.35-.23-2.55.84.85-2.48-.23-.37C4.1 14.9 3.5 13.5 3.5 12c0-4.69 3.81-8.5 8.5-8.5s8.5 3.81 8.5 8.5-3.81 8.5-8.5 8.5zm4.59-6.32c-.25-.13-1.48-.73-1.71-.82-.23-.09-.4-.13-.57.13-.17.25-.66.82-.81.99-.15.17-.3.19-.55.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.39.11-.52.12-.12.25-.31.37-.47.12-.16.16-.27.24-.45.08-.18.04-.34-.02-.47-.07-.13-.57-1.38-.78-1.89-.2-.5-.4-.43-.57-.44-.15-.01-.33-.01-.51-.01-.17 0-.45.06-.68.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.32 3.81.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29z"/>
                  </svg>
                </div>
                <span>{formatPhone(lawyerData.whatsapp)}</span>
              </a>

              {/* Instagram */}
              <a
                href={`https://instagram.com/${lawyerData.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-[#C5A059] transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#D4AF37] shrink-0 group-hover:bg-[#C5A059]/20 transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <span>{lawyerData.instagram}</span>
              </a>

              {/* E-mail */}
              <a
                href={`mailto:${lawyerData.email}`}
                className="flex items-center gap-3 text-slate-300 hover:text-[#C5A059] transition-colors break-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#D4AF37] shrink-0 group-hover:bg-[#C5A059]/20 transition-colors">
                  <Mail size={20} />
                </div>
                <span>{lawyerData.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Linha Inferior */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">

          <div className="text-center md:text-left">
            <span>&copy; {new Date().getFullYear()} {lawyerData.name}. Todos os direitos reservados.</span>
          </div>

          <div className="text-center">
            Desenvolvido por Carlos Emanuel com excelência e precisão técnica.
          </div>

          <div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-slate-200 hover:text-[#051222] bg-[#071930] hover:bg-[#C5A059] border border-[#C5A059]/30 hover:border-[#C5A059] px-4 py-2.5 rounded-xl transition-all duration-300 cursor-pointer shadow-md font-medium"
            >
              <span>Voltar ao topo</span>
              <ArrowUp size={14} className="stroke-[2.5]" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;