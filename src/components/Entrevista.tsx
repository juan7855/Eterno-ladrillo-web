import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, User, MessageSquare } from 'lucide-react';

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

const interviewData = {
  name: "Camilo Sánchez",
  role: "Voz del Territorio",
  mainQuote: "La naturaleza no entiende de decretos ni firmas.",
  phrases: [
    {
      topic: "Sobre la restauración",
      text: "Restaurar no es solo sembrar un palo de Guayacán.",
    },
    {
      topic: "Sobre la infraestructura",
      text: "Cuando meten esas máquinas y tiran cemento el suelo deja de respirar.",
    },
    {
      topic: "Sobre la burocracia",
      text: "La naturaleza no entiende de decretos ni firmas.",
    }
  ]
};

export default function Entrevista() {
  return (
    <section id="entrevista" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-forest-950/5 to-transparent pointer-events-none" />
      
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
            <h3 className="text-concrete-300 text-base sm:text-lg lg:text-xl font-light tracking-wide uppercase flex items-center justify-center gap-3">
              <User className="w-5 h-5 text-forest-500" />
              {interviewData.name}
            </h3>
            <p className="text-forest-600/80 font-mono text-sm tracking-widest uppercase mt-2">
              {interviewData.role}
            </p>
          </div>
        </FadeIn>

        {/* Main Quote / Hero Phrase */}
        <FadeIn delay={0.2}>
          <div className="max-w-4xl mx-auto relative mb-20">
            <Quote className="absolute -top-10 -left-6 w-20 h-20 text-forest-800/20 rotate-180 pointer-events-none" />
            <div className="bg-concrete-900/30 border-l-2 border-forest-500 p-8 sm:p-10 backdrop-blur-sm rounded-r-2xl">
              <p className="font-serif text-2xl sm:text-3xl text-concrete-200 leading-relaxed italic">
                "{interviewData.mainQuote}"
              </p>
            </div>
            <Quote className="absolute -bottom-10 -right-6 w-20 h-20 text-forest-800/20 pointer-events-none" />
          </div>
        </FadeIn>

        {/* Grid of key phrases */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {interviewData.phrases.map((phrase, i) => (
            <FadeIn key={i} delay={0.3 + (i * 0.1)}>
              <div className="bg-concrete-900/40 border border-concrete-800/40 rounded-2xl p-8 backdrop-blur-sm hover:border-forest-700/40 hover:bg-concrete-900/60 transition-all duration-500 h-full flex flex-col relative group">
                <MessageSquare className="absolute top-6 right-6 w-5 h-5 text-forest-900/40 group-hover:text-forest-700/60 transition-colors" />
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-forest-500 mb-4 block">
                  · {phrase.topic}
                </span>
                <p className="text-concrete-300 text-base leading-relaxed flex-grow">
                  "{phrase.text}"
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}