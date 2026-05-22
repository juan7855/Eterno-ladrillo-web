import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, Sprout, Activity } from 'lucide-react';

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const phrases = [
  {
    icon: Sprout,
    number: '01',
    title: 'Visión Integral',
    description: '«Restaurar no es solo sembrar un palo de Guayacán.»',
  },
  {
    icon: Activity,
    number: '02',
    title: 'Impacto Físico',
    description: '«Cuando meten esas máquinas y tiran cemento el suelo deja de respirar.»',
  }
];

export default function Entrevista() {
  return (
    <section id="entrevista" className="relative py-24 lg:py-32">
      {/* Subtle gradient background idéntico a Cartografía */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forest-950/8 to-transparent pointer-events-none" />

      {/* Subtle grid pattern idéntico a Cartografía */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #4ade80 1px, transparent 1px), linear-gradient(to bottom, #4ade80 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block text-forest-400 text-xs uppercase tracking-[0.3em] font-mono mb-4 border border-forest-800/50 px-4 py-1 rounded-full">
              09 — Testimonio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3">
              Voces del <span className="text-gradient-green italic">Territorio</span>
            </h2>
            <h3 className="text-concrete-300 text-base sm:text-lg lg:text-xl font-light tracking-wide mb-6 uppercase">
              Entrevista a Camilo Sánchez
            </h3>
            <p className="text-concrete-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              El análisis del entorno requiere escuchar a quienes habitan y entienden las dinámicas estructurales del suelo. Las siguientes observaciones reflejan el impacto empírico de las intervenciones artificiales.
            </p>
          </div>
        </FadeIn>

        {/* Main Quote Block */}
        <FadeIn delay={0.2}>
          <div className="relative mb-20 lg:mb-24">
            {/* Decorative frame elements idénticos */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-l border-t border-forest-700/40" />
            <div className="absolute -top-4 -right-4 w-12 h-12 border-r border-t border-forest-700/40" />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 border-l border-b border-forest-700/40" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-r border-b border-forest-700/40" />

            {/* Top label */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0a0f0d] px-4 z-10">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-forest-500">
                Observación Central
              </span>
            </div>

            {/* Quote container */}
            <div className="bg-gradient-to-br from-concrete-900/30 to-forest-950/20 border border-forest-800/20 rounded-2xl p-10 sm:p-16 lg:p-24 backdrop-blur-sm flex flex-col items-center justify-center text-center relative overflow-hidden">
              <Quote className="absolute top-10 left-10 w-32 h-32 text-forest-900/10 rotate-180 pointer-events-none" />
              <p className="font-serif text-3xl sm:text-4xl lg:text-5xl text-concrete-200 leading-tight italic relative z-10 max-w-4xl">
                «La naturaleza no entiende de decretos ni firmas.»
              </p>
              <Quote className="absolute bottom-10 right-10 w-32 h-32 text-forest-900/10 pointer-events-none" />
            </div>

            {/* Bottom annotation */}
            <div className="flex items-center justify-between mt-3 px-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-concrete-600">
                · Análisis Cualitativo
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-concrete-600">
                Cibercultura · Med-2026 ·
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Modules grid para las otras dos frases */}
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 mb-20 max-w-4xl mx-auto">
          {phrases.map((phrase, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="relative bg-concrete-900/40 border border-concrete-800/40 rounded-2xl p-8 backdrop-blur-sm hover:border-forest-700/40 hover:bg-concrete-900/60 transition-all duration-500 group h-full">
                {/* Number watermark */}
                <span className="absolute top-4 right-5 font-mono text-xs text-forest-600/60 tracking-widest">
                  {phrase.number}
                </span>

                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-forest-950/60 border border-forest-800/30 flex items-center justify-center mb-6 group-hover:bg-forest-900/40 transition-colors">
                  <phrase.icon className="w-5 h-5 text-forest-400" />
                </div>

                {/* Title */}
                <h4 className="font-serif text-base lg:text-lg text-white font-semibold mb-4 leading-snug">
                  {phrase.title}
                </h4>

                {/* Description (Quote) */}
                <p className="text-concrete-300 text-lg leading-relaxed italic font-serif">
                  {phrase.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-forest-700/30 to-transparent" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}