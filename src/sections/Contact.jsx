import { lawyerData } from '../data/data';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card3DTilt } from '../components/Card3DTilt';
import { Clock, Mail, MapPin, ExternalLink, MessageSquare, Sparkles, ShieldCheck } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, message } = formData;
    
    // Formata a mensagem para o teu WhatsApp
    const text = `Olá! Meu nome é *${name}*.\nTelefone: ${phone}\nE-mail: ${email}\n\n*Resumo do caso:* ${message}`;
    const encodedText = encodeURIComponent(text);
    
    // Puxa o número atualizado do lawyerData.whatsapp
    const phoneNumber = lawyerData?.whatsapp || '5589981433161';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="py-24 lg:py-32 bg-[#071930] relative overflow-hidden">
      
      {/* Linha Divisória Dourada com Brilho no Topo da Secção */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-80 shadow-[0_0_20px_rgba(197,160,89,0.9)]" />

      {/* Efeito de Fundo: Esferas de Luz Dinâmicas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#C5A059]/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#1E3A8A]/40 rounded-full blur-[180px] animate-pulse duration-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Secção */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#D4AF37] text-xs sm:text-sm font-semibold uppercase tracking-widest backdrop-blur-md shadow-lg"
          >
            <Sparkles size={14} className="animate-spin" />
            Canal de Atendimento Direto
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight font-serif leading-[1.2]">
            Estamos prontos para entender seu caso e oferecer a melhor <span className="bg-gradient-to-r from-[#C5A059] via-[#F3E5AB] to-[#D4AF37] bg-clip-text text-transparent italic">orientação jurídica</span>
          </h2>
        </div>

        {/* Grelha Principal com Cartões 3D Tilt */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Coluna da Esquerda: Informações de Atendimento (5 Colunas) */}
          <div className="lg:col-span-5">
            <Card3DTilt className="w-full">
              <div className="relative bg-gradient-to-b from-[#051222] to-[#030914] border-2 border-[#C5A059]/60 rounded-3xl p-6 sm:p-8 space-y-6 shadow-[0_30px_70px_rgba(3,9,20,0.9)] backdrop-blur-2xl overflow-hidden group">
                
                {/* Brilho decorativo de canto */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#C5A059]/20 to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

                <div className="flex items-center justify-between border-b border-[#C5A059]/25 pb-4 relative z-10">
                  <h3 className="text-xl font-bold font-serif text-slate-100">
                    Informações de Atendimento
                  </h3>
                  <ShieldCheck size={22} className="text-[#D4AF37]" />
                </div>

                <div className="space-y-5 text-sm text-slate-300 relative z-10">
                  
                  {/* Horário */}
                  <div className="flex items-start gap-4 p-3 rounded-2xl bg-[#071930]/60 border border-[#C5A059]/15 hover:border-[#C5A059]/40 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center text-[#D4AF37] shrink-0 shadow-md">
                      <Clock size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-100 uppercase text-xs tracking-wider">Horários</p>
                      <p className="text-slate-300 mt-0.5 text-xs sm:text-sm">Seg a Sex, das 07:30 às 19h</p>
                    </div>
                  </div>

                  {/* Instagram Puxado do Data */}
                  <div className="flex items-start gap-4 p-3 rounded-2xl bg-[#071930]/60 border border-[#C5A059]/15 hover:border-[#C5A059]/40 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center text-[#D4AF37] shrink-0 shadow-md">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-100 uppercase text-xs tracking-wider">Instagram</p>
                      <a href={`https://instagram.com/${(lawyerData?.instagram || 'carlos_emanuelrf').replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-[#C5A059] hover:underline mt-0.5 block font-medium text-xs sm:text-sm">
                        {lawyerData?.instagram || '@carlos_emanuelrf'}
                      </a>
                    </div>
                  </div>

                  {/* Telefone / WhatsApp Puxado do Data */}
                  <div className="flex items-start gap-4 p-3 rounded-2xl bg-[#071930]/60 border border-[#C5A059]/15 hover:border-[#C5A059]/40 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center text-[#D4AF37] shrink-0 shadow-md">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.89 5.84L2.42 21.58l3.87-1.28C7.9 21.3 9.89 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.78 0-3.44-.54-4.84-1.47l-.35-.23-2.55.84.85-2.48-.23-.37C4.1 14.9 3.5 13.5 3.5 12c0-4.69 3.81-8.5 8.5-8.5s8.5 3.81 8.5 8.5-3.81 8.5-8.5 8.5zm4.59-6.32c-.25-.13-1.48-.73-1.71-.82-.23-.09-.4-.13-.57.13-.17.25-.66.82-.81.99-.15.17-.3.19-.55.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.39.11-.52.12-.12.25-.31.37-.47.12-.16.16-.27.24-.45.08-.18.04-.34-.02-.47-.07-.13-.57-1.38-.78-1.89-.2-.5-.4-.43-.57-.44-.15-.01-.33-.01-.51-.01-.17 0-.45.06-.68.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.32 3.81.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-100 uppercase text-xs tracking-wider">Telefone / WhatsApp</p>
                      <a 
                        href={`https://wa.me/${lawyerData?.whatsapp || '5589981433161'}?text=Olá!%20Encontrei%20o%20número%20no%20site%20e%20gostaria%20de%20atendimento.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-100 hover:text-[#C5A059] transition-colors mt-0.5 block font-medium text-xs sm:text-sm"
                      >
                        (89) 98143-3161
                      </a>
                    </div>
                  </div>

                  {/* E-mail */}
                  <div className="flex items-start gap-4 p-3 rounded-2xl bg-[#071930]/60 border border-[#C5A059]/15 hover:border-[#C5A059]/40 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center text-[#D4AF37] shrink-0 shadow-md">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-100 uppercase text-xs tracking-wider">E-mail</p>
                      <a 
                        href="mailto:carlos.emanuel@exemplo.com"
                        className="text-slate-100 hover:text-[#C5A059] transition-colors mt-0.5 block break-all font-medium text-xs sm:text-sm"
                      >
                        {lawyerData?.email || 'carlos.emanuel@exemplo.com'}
                      </a>
                    </div>
                  </div>

                </div>

                {/* Bloco de Localização */}
                <div className="pt-5 border-t border-[#C5A059]/25 space-y-3 relative z-10">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center text-[#D4AF37] shrink-0 shadow-md">
                        <MapPin size={16} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-100 text-sm font-serif">{lawyerData?.name || 'Escritório de Advocacia'}</h4>
                        <p className="text-xs text-slate-400 mt-0.5">SH Sol Nascente - Ceilândia, Brasília - DF</p>
                      </div>
                    </div>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs bg-[#C5A059]/20 hover:bg-[#C5A059]/35 text-[#C5A059] border border-[#C5A059]/45 px-2.5 py-1.5 rounded-lg transition-colors inline-flex items-center gap-1 shrink-0 font-medium"
                    >
                      <span>Ampliar</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>

                  {/* Miniatura do Mapa com o Iframe do Sol Nascente */}
                  <div className="relative rounded-2xl overflow-hidden border border-[#C5A059]/40 h-36 bg-[#030914] shadow-inner">
                    <iframe 
                      title="Localização do Escritório"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30708.409723397144!2d-48.159597100149576!3d-15.827600628291297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bcc418f3099e5%3A0x7fcab0541a17a436!2sSH%20Sol%20Nascente%20-%20Ceil%C3%A2ndia%2C%20Bras%C3%ADlia%2C%20DF!5e0!3m2!1spt-BR!2sbr!4v1794439136729!5m2!1spt-BR!2sbr" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen="" 
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  </div>
                </div>

              </div>
            </Card3DTilt>
          </div>

          {/* Coluna da Direita: Formulário Interativo com 3D Tilt (7 Colunas) */}
          <div className="lg:col-span-7">
            <Card3DTilt className="w-full">
              <div className="relative bg-gradient-to-b from-[#051222] to-[#030914] border-2 border-[#C5A059]/60 rounded-3xl p-6 sm:p-10 shadow-[0_30px_70px_rgba(3,9,20,0.9)] backdrop-blur-2xl overflow-hidden group">
                
                {/* Brilho interno subtil */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

                <div className="mb-6 border-b border-[#C5A059]/25 pb-4 relative z-10 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold font-serif text-slate-100">Envie a sua Mensagem</h3>
                    <p className="text-xs text-slate-400 mt-0.5">Retornaremos o mais breve possível com total sigilo.</p>
                  </div>
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10B981]" title="Atendimento Online" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Nome Completo */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                        Nome Completo *
                      </label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        required
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        className="w-full bg-[#071930] border border-slate-700/80 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/30 rounded-xl px-4 py-3.5 text-slate-100 text-sm outline-none transition-all placeholder:text-slate-500 shadow-inner"
                      />
                    </div>

                    {/* Telefone / WhatsApp */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                        Telefone / WhatsApp *
                      </label>
                      <input 
                        type="text" 
                        id="phone"
                        name="phone"
                        required
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(00) 00000-0000"
                        className="w-full bg-[#071930] border border-slate-700/80 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/30 rounded-xl px-4 py-3.5 text-slate-100 text-sm outline-none transition-all placeholder:text-slate-500 shadow-inner"
                      />
                    </div>
                  </div>

                  {/* E-mail */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                      E-mail (Opcional)
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu.email@exemplo.com"
                      className="w-full bg-[#071930] border border-slate-700/80 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/30 rounded-xl px-4 py-3.5 text-slate-100 text-sm outline-none transition-all placeholder:text-slate-500 shadow-inner"
                    />
                  </div>

                  {/* Mensagem / Resumo do Caso */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                      Mensagem / Resumo do Caso *
                    </label>
                    <textarea 
                      id="message"
                      name="message"
                      rows="4"
                      required
                      autoComplete="off"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Descreva brevemente como podemos te ajudar..."
                      className="w-full bg-[#071930] border border-slate-700/80 focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/30 rounded-xl px-4 py-3.5 text-slate-100 text-sm outline-none transition-all resize-none placeholder:text-slate-500 shadow-inner"
                    />
                  </div>

                  {/* Botão de Envio Dourado com Efeito Premium */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#C5A059] via-[#F3E5AB] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#C5A059] text-[#051222] font-extrabold px-8 py-4 rounded-xl shadow-xl shadow-[#C5A059]/30 text-base transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer tracking-wide"
                    >
                      <MessageSquare size={20} className="fill-[#051222]" />
                      <span>Enviar Mensagem via WhatsApp</span>
                    </button>
                  </div>

                </form>
              </div>
            </Card3DTilt>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;