import { motion } from 'framer-motion';
import { lawyerData } from '../data/data';
import { Card3DTilt } from '../components/Card3DTilt';
import { Award, Sparkles, Code2, Cpu, Zap, ShieldCheck } from 'lucide-react';
export function About() {
  return (
    <section id="sobre" className="py-28 relative overflow-hidden bg-[#051222]">
      
      {/* Linha Divisória Dourada com Brilho no Topo da Secção */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-60 shadow-[0_0_15px_rgba(197,160,89,0.8)]" />

      {/* Efeito de Fundo: Brilhos e Gradientes de Profundidade */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-1/3 right-1/4 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] bg-[#C5A059]/20 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] bg-[#1E3A8A]/30 rounded-full blur-[160px] animate-pulse duration-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Secção */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#D4AF37] text-xs sm:text-sm font-semibold uppercase tracking-widest backdrop-blur-md shadow-lg"
          >
            <Sparkles size={14} className="animate-spin" />
            Sobre o Escritório & Arquitetura
          </motion.div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
            Excelência, Ética e <span className="bg-gradient-to-r from-[#C5A059] via-[#F3E5AB] to-[#D4AF37] bg-clip-text text-transparent font-serif italic">Inovação Digital</span>
          </h2>
          
          <p className="text-slate-300 text-base sm:text-lg">
            A união perfeita entre a tradição jurídica de alto padrão e a engenharia front-end mais avançada do mercado.
          </p>
        </div>

        {/* Grelha Principal: Selo CE (Desenvolvedor) + Biografia & Destaque */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Coluna da Esquerda: Emblema com as Iniciais CE (Carlos Emanuel) com Efeito Premium */}
          <div className="lg:col-span-5">
            <Card3DTilt className="w-full">
              <div className="relative bg-gradient-to-b from-[#081B33] via-[#061428] to-[#040E1B] border-2 border-[#C5A059]/60 rounded-3xl p-8 sm:p-12 shadow-[0_25px_60px_rgba(5,18,34,0.9)] backdrop-blur-2xl text-center overflow-hidden group">
                
                {/* Efeito de brilho flutuante no fundo do card */}
                <div className="absolute -top-24 -right-24 w-60 h-60 bg-gradient-to-br from-[#C5A059]/25 to-transparent rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

                <div className="relative z-10 flex flex-col items-center space-y-6">
                  
                  {/* Círculo com as Iniciais CE em Destaque */}
                  <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-[#C5A059]/30 via-[#081B33] to-[#051222] border-2 border-[#C5A059] flex items-center justify-center shadow-[0_0_35px_rgba(197,160,89,0.35)] relative group-hover:scale-105 transition-transform duration-500">
                    <span className="text-4xl sm:text-5xl font-serif font-extrabold bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C5A059] bg-clip-text text-transparent tracking-widest drop-shadow-md">
                      CE
                    </span>
                    <div className="absolute inset-0 rounded-full border border-dashed border-[#C5A059]/50 animate-spin" style={{ animationDuration: '25s' }} />
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-xl font-serif font-bold text-slate-100 tracking-wide">
                      Carlos Emanuel
                    </h3>
                    <p className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
                      Lead Front-End Developer
                    </p>
                  </div>

                  {/* Tech stack badge mini */}
                  <div className="flex flex-wrap justify-center gap-2 pt-2">
                    <span className="px-2.5 py-1 rounded-lg bg-[#051222] border border-[#C5A059]/30 text-[10px] font-mono text-slate-300">React</span>
                    <span className="px-2.5 py-1 rounded-lg bg-[#051222] border border-[#C5A059]/30 text-[10px] font-mono text-slate-300">Tailwind</span>
                    <span className="px-2.5 py-1 rounded-lg bg-[#051222] border border-[#C5A059]/30 text-[10px] font-mono text-slate-300">3D Tilt</span>
                  </div>

                  <div className="w-full pt-4 border-t border-[#C5A059]/20">
                    <span className="text-[11px] text-slate-400 italic">
                      [ Arquitetura Web de Alta Performance ]
                    </span>
                  </div>

                </div>
              </div>
            </Card3DTilt>
          </div>

          {/* Coluna da Direita: Biografia do Escritório & Detalhes (7 Colunas) */}
          <div className="lg:col-span-7 space-y-6">
            
            <Card3DTilt className="w-full">
              <div className="relative bg-[#081B33]/95 border-2 border-[#C5A059]/60 rounded-3xl p-8 sm:p-10 shadow-[0_25px_60px_rgba(5,18,34,0.9)] backdrop-blur-2xl overflow-hidden group">
                
                {/* Brilho interno subtil */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-[#C5A059]/15 to-transparent rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

                <div className="relative z-10 space-y-6">
                  
                  {/* Badge de Destaque do Projeto */}
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#C5A059]/25 to-[#D4AF37]/10 border border-[#C5A059]/50 text-[#F3E5AB] text-xs font-mono tracking-wider shadow-lg">
                    <Code2 size={16} className="text-[#D4AF37]" />
                    <span>Engenharia & Código por <strong className="text-white font-bold">Carlos Emanuel</strong></span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-slate-100 leading-snug">
                    {lawyerData.about?.title}
                  </h3>

                  <p className="text-slate-300 text-base leading-relaxed font-light">
                    {lawyerData.about?.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#C5A059]/20">
                    <div className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                      <div className="w-8 h-8 rounded-lg bg-[#C5A059]/20 flex items-center justify-center text-[#D4AF37] border border-[#C5A059]/40">
                        <Zap size={18} />
                      </div>
                      <span>Alta Performance & Velocidade</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                      <div className="w-8 h-8 rounded-lg bg-[#C5A059]/20 flex items-center justify-center text-[#D4AF37] border border-[#C5A059]/40">
                        <ShieldCheck size={18} />
                      </div>
                      <span>Segurança & Rigor Técnico</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card3DTilt>

            {/* Caixas menores de diferenciais técnicos com efeitos melhorados */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-[#081B33]/90 border border-[#C5A059]/40 hover:border-[#C5A059]/80 rounded-2xl p-5 backdrop-blur-xl shadow-xl transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C5A059]/30 to-[#051222] border border-[#C5A059]/50 flex items-center justify-center text-[#D4AF37] group-hover:rotate-6 transition-transform">
                    <Award size={20} />
                  </div>
                  <h4 className="text-base font-bold text-slate-100">Design Exclusivo</h4>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Interface moderna e sofisticada focada em conversão e impacto visual.
                </p>
              </div>

              <div className="bg-[#081B33]/90 border border-[#C5A059]/40 hover:border-[#C5A059]/80 rounded-2xl p-5 backdrop-blur-xl shadow-xl transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C5A059]/30 to-[#051222] border border-[#C5A059]/50 flex items-center justify-center text-[#D4AF37] group-hover:rotate-6 transition-transform">
                    <Cpu size={20} />
                  </div>
                  <h4 className="text-base font-bold text-slate-100">100% Responsivo</h4>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Fluidez perfeita em telemóveis, tablets, portáteis e ecrãs 4K.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;