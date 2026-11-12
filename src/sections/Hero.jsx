import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { lawyerData } from '../data/data';
import { ShieldCheck, ArrowRight, Scale } from 'lucide-react';

export function Hero() {
  // Coordenadas para o efeito 3D Tilt na moldura
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden flex items-center min-h-[90vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Lado Esquerdo: Títulos e Chamadas para Ação */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#D4AF37] text-xs sm:text-sm font-semibold uppercase tracking-widest backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              Especialistas em Direito & Consultoria
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-tight">
              Seu futuro merece <span className="bg-gradient-to-r from-[#C5A059] via-[#F3E5AB] to-[#D4AF37] bg-clip-text text-transparent font-serif italic">segurança e atenção.</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Atendimento jurídico com responsabilidade, transparência e atenção às necessidades de cada cliente. Compromisso com uma atuação ética, cuidadosa e individualizada.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`https://wa.me/${lawyerData?.whatsapp || '5589981059793'}?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B8860B] text-[#051222] font-bold rounded-2xl shadow-xl shadow-[#D4AF37]/20 border border-[#F3E5AB]/40 text-center transition-all"
              >
                <span>Entrar em contato</span>
                <ArrowRight size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#servicos"
                className="w-full sm:w-auto px-8 py-4 bg-[#081B33]/80 hover:bg-[#081B33] text-slate-200 hover:text-[#D4AF37] font-semibold rounded-2xl border border-[#C5A059]/30 text-center backdrop-blur-md transition-all"
              >
                Áreas de atuação
              </motion.a>
            </div>

            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-400">
              <ShieldCheck size={16} className="text-[#C5A059]" />
              <span>Atuação estratégica e sigilo absoluto em todas as etapas</span>
            </div>
          </motion.div>

          {/* Lado Direito: Cartão 3D com Balança e Efeito Glow */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              
              {/* Aura Dourada Tridimensional (Glow de fundo animado) */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#C5A059]/30 via-[#D4AF37]/20 to-[#B8860B]/30 rounded-3xl blur-2xl opacity-70 animate-pulse pointer-events-none" />

              {/* Card 3D com inclinação baseada no movimento do rato */}
              <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  rotateY,
                  rotateX,
                  transformStyle: "preserve-3d",
                }}
                className="relative bg-[#081B33]/90 border border-[#C5A059]/40 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-xl cursor-pointer group flex flex-col items-center justify-center text-center min-h-[420px]"
              >
                {/* Elemento Central 3D (Balança / Símbolo da Justiça Estilizado) */}
                <div 
                  style={{ transform: "translateZ(40px)" }} 
                  className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#C5A059]/20 to-[#051222] border border-[#C5A059]/40 flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500"
                >
                  <Scale className="w-12 h-12 text-[#D4AF37]" />
                </div>

                <div style={{ transform: "translateZ(30px)" }} className="space-y-3">
                  <h3 className="text-2xl font-bold font-serif text-slate-100">
                    Tradição & Rigor Técnico
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xs mx-auto">
                    Defesa intransigente dos seus direitos com total transparência, agilidade e segurança jurídica.
                  </p>
                </div>

                {/* Badge Flutuante em Camada 3D */}
                <div 
                  style={{ transform: "translateZ(60px)" }}
                  className="absolute -bottom-4 -left-4 bg-[#07182D]/95 border border-[#C5A059]/60 px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2.5 backdrop-blur-md"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-ping" />
                  <span className="text-[11px] font-semibold text-slate-100 uppercase tracking-wider">
                    Excelência Jurídica
                  </span>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}