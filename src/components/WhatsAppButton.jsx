import { lawyerData } from '../data/data';

export function WhatsAppButton() {
  const message = encodeURIComponent(
    'Olá! Gostaria de tirar uma dúvida sobre meu benefício.'
  );

  return (
    <a
      href={`https://wa.me/${lawyerData?.whatsapp || ''}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Atendimento via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-gradient-to-r from-[#C5A059] via-[#F3E5AB] to-[#D4AF37] text-[#051222] rounded-full shadow-2xl shadow-[#C5A059]/40 transition-all duration-300 hover:scale-110 active:scale-95 group border border-[#F3E5AB]/60 cursor-pointer overflow-visible"
    >
      {/* Ícone oficial do WhatsApp fixo e centrado */}
      <svg className="w-7 h-7 fill-current shrink-0 text-[#051222] relative z-10" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.89 5.84L2.42 21.58l3.87-1.28C7.9 21.3 9.89 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.78 0-3.44-.54-4.84-1.47l-.35-.23-2.55.84.85-2.48-.23-.37C4.1 14.9 3.5 13.5 3.5 12c0-4.69 3.81-8.5 8.5-8.5s8.5 3.81 8.5 8.5-3.81 8.5-8.5 8.5zm4.59-6.32c-.25-.13-1.48-.73-1.71-.82-.23-.09-.4-.13-.57.13-.17.25-.66.82-.81.99-.15.17-.3.19-.55.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.39.11-.52.12-.12.25-.31.37-.47.12-.16.16-.27.24-.45.08-.18.04-.34-.02-.47-.07-.13-.57-1.38-.78-1.89-.2-.5-.4-.43-.57-.44-.15-.01-.33-.01-.51-.01-.17 0-.45.06-.68.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.32 3.81.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29z"/>
      </svg>

      {/* Balão de texto flutuante */}
      <span className="absolute right-16 bg-[#081B33] border border-[#C5A059]/50 text-[#F3E5AB] px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-xl">
        Falar com Advogado
      </span>
    </a>
  );
}