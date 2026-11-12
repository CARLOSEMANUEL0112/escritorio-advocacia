import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { lawyerData } from '../data/data';
import { Card3DTilt } from '../components/Card3DTilt';
import { ShieldCheck, HeartHandshake, Stethoscope, Users, FileSearch, Baby, ArrowRight, FolderOpen, Sparkles } from 'lucide-react';

const iconMap = {
  ShieldCheck: ShieldCheck,
  HeartHandshake: HeartHandshake,
  Stethoscope: Stethoscope,
  Users: Users,
  FileSearch: FileSearch,
  Baby: Baby,
};

export function Services() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="servicos" className="py-28 relative overflow-hidden bg-[#071930]">
      
      {/* Linha Divisória Dourada com Brilho no Topo da Secção */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-60 shadow-[0_0_15px_rgba(197,160,89,0.8)]" />

      {/* Efeito de Fundo: Partículas de Luz Flutuantes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25">
        <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#C5A059]/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#1E40AF]/30 rounded-full blur-[140px] animate-pulse duration-1000" />
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
            Áreas de Atuação
          </motion.div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
            Soluções Jurídicas com <span className="bg-gradient-to-r from-[#C5A059] via-[#F3E5AB] to-[#D4AF37] bg-clip-text text-transparent font-serif italic">Rigor & Precisão</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Selecione uma das pastas abaixo para consultar as nossas especialidades e soluções dedicadas ao seu caso.
          </p>
        </div>

        {/* Abas Superiores: Grelha em Telemóveis (2 colunas) e Flex Centrado em Computadores */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10 relative z-20 px-2">
          {lawyerData.services.map((service, index) => {
            const isActive = activeTab === index;
            return (
              <motion.button
                key={service.id}
                onClick={() => setActiveTab(index)}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`px-3 sm:px-5 py-3 rounded-2xl text-[11px] sm:text-sm font-semibold transition-all duration-300 flex items-center justify-center sm:justify-start gap-2 backdrop-blur-xl border w-full sm:w-auto ${
                  isActive
                    ? 'bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B8860B] text-[#051222] border-[#F3E5AB] shadow-lg shadow-[#D4AF37]/30 sm:scale-105'
                    : 'bg-[#0A2240]/90 text-slate-300 border-[#C5A059]/30 hover:border-[#C5A059]/60 hover:text-white shadow-md'
                }`}
              >
                <span className={`font-mono text-[10px] sm:text-xs shrink-0 ${isActive ? 'text-[#051222] font-bold' : 'text-[#C5A059]'}`}>
                  0{index + 1}.
                </span>
                <span className="tracking-wide truncate">{service.title.split('&')[0]}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Caixa Principal (O Dossier / Arquivo Central) */}
        <div className="max-w-4xl mx-auto relative z-10">
          <Card3DTilt className="w-full">
            <div className="relative bg-[#0A2240]/95 border-2 border-[#C5A059]/60 rounded-3xl p-6 sm:p-12 shadow-[0_25px_60px_rgba(3,10,20,0.9)] backdrop-blur-2xl overflow-hidden group">
              
              {/* Brilho Radial Dinâmico nos Cantos */}
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-gradient-to-br from-[#C5A059]/25 via-[#D4AF37]/10 to-transparent rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Cabeçalho Interno da Pasta */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-[#C5A059]/30 relative z-10">
                    <div className="flex items-center gap-4 sm:gap-5">
                      <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#C5A059]/30 to-[#071930] border border-[#C5A059]/60 flex items-center justify-center shadow-2xl text-[#D4AF37] shrink-0 transform group-hover:rotate-3 transition-transform">
                        {(() => {
                          const IconComponent = iconMap[lawyerData.services[activeTab].icon] || ShieldCheck;
                          return <IconComponent size={30} className="sm:w-9 sm:h-9" />;
                        })()}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <FolderOpen size={14} className="text-[#C5A059]" />
                          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#C5A059] font-bold">
                            Pasta Especializada 0{activeTab + 1}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-3xl font-bold font-serif text-slate-100 tracking-tight leading-snug">
                          {lawyerData.services[activeTab].title}
                        </h3>
                      </div>
                    </div>

                    <div className="self-start sm:self-center px-3.5 py-1.5 rounded-xl bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#D4AF37] text-[10px] sm:text-xs font-bold tracking-widest uppercase shadow-inner">
                      Ativa
                    </div>
                  </div>

                  {/* Descrição e Detalhes */}
                  <div className="py-6 sm:py-8 relative z-10 space-y-4">
                    <p className="text-slate-200 text-base sm:text-xl font-light leading-relaxed">
                      {lawyerData.services[activeTab].description}
                    </p>
                    <p className="text-slate-400 text-xs sm:text-base leading-relaxed">
                      Atuação estratégica focada em resultados céleres, transparentes e na salvaguarda absoluta dos seus interesses legais.
                    </p>
                  </div>

                  {/* Rodapé do Dossier com WhatsApp */}
                  <div className="pt-6 border-t border-[#C5A059]/20 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
                    <motion.a
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      href={`https://wa.me/${lawyerData.whatsapp}?text=Olá,%20gostaria%20de%20esclarecer%20dúvidas%20sobre%20a%20pasta:%20${encodeURIComponent(lawyerData.services[activeTab].title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#C5A059]/25 to-[#D4AF37]/15 hover:from-[#C5A059]/35 hover:to-[#D4AF37]/25 border border-[#C5A059]/60 text-[#F3E5AB] font-semibold text-xs sm:text-sm transition-all shadow-lg text-center"
                    >
                      <span>Tirar dúvida sobre esta pasta via WhatsApp</span>
                      <ArrowRight size={16} />
                    </motion.a>

                    <span className="text-[11px] sm:text-xs text-slate-400 font-mono italic text-center sm:text-right">
                      Responsável: {lawyerData.name}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </Card3DTilt>
        </div>

      </div>
    </section>
  );
}

export default Services;