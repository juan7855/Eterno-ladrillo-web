import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HelpCircle, MapPinned, FileWarning, Scale, ChevronRight } from 'lucide-react';

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

const questions = [
  {
    icon: MapPinned,
    question: '¿Dónde estamos construyendo realmente?',
    detail: 'Muchas de las nuevas construcciones se ubican en zonas clasificadas como suelo de protección ambiental. La realidad del terreno no siempre coincide con lo que los proyectos inmobiliarios presentan en sus brochures comerciales.',
    color: 'forest',
    borderColor: 'border-forest-600/30',
    bgColor: 'bg-forest-950/50',
    iconBg: 'bg-forest-900/60',
    iconColor: 'text-forest-400',
  },
  {
    icon: FileWarning,
    question: '¿Se está cumpliendo el Plan de Ordenamiento Territorial (POT)?',
    detail: 'El POT de Medellín establece límites claros para la expansión urbana. Sin embargo, la realidad muestra construcciones que parecen ignorar o reinterpretar estas regulaciones a conveniencia del mercado inmobiliario.',
    color: 'earth',
    borderColor: 'border-earth-600/30',
    bgColor: 'bg-earth-950/50',
    iconBg: 'bg-earth-900/60',
    iconColor: 'text-earth-400',
  },
  {
    icon: Scale,
    question: '¿Existen vacíos legales, falta de regulación o corrupción?',
    detail: 'La aprobación de licencias de construcción en zonas ecológicamente sensibles plantea serias preguntas sobre la transparencia del proceso. ¿Quién aprueba? ¿Bajo qué criterios? ¿Con qué intereses?',
    color: 'red',
    borderColor: 'border-red-600/30',
    bgColor: 'bg-red-950/50',
    iconBg: 'bg-red-900/60',
    iconColor: 'text-red-400',
  },
];

export default function Questions() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="interrogantes" className="relative py-24 lg:py-32">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forest-950/10 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block text-forest-400 text-xs uppercase tracking-[0.3em] font-mono mb-4 border border-forest-800/50 px-4 py-1 rounded-full">
              02 — Interrogantes Críticos
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Las preguntas que <span className="text-gradient-green italic">nadie hace</span>
            </h2>
            <p className="text-concrete-400 text-lg max-w-2xl mx-auto">
              Este proyecto busca cuestionar la ética y la legalidad detrás de las construcciones 
              que están transformando irreversiblemente nuestro paisaje.
            </p>
          </div>
        </FadeIn>

        {/* Questions grid */}
        <div className="space-y-4">
          {questions.map((q, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div
                className={`relative border ${q.borderColor} ${q.bgColor} rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-500 cursor-pointer group hover:border-opacity-60`}
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className={`w-14 h-14 rounded-xl ${q.iconBg} flex items-center justify-center flex-shrink-0 border ${q.borderColor}`}>
                      <q.icon className={`w-6 h-6 ${q.iconColor}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-serif text-xl sm:text-2xl text-white font-semibold leading-snug">
                          {q.question}
                        </h3>
                        <ChevronRight
                          className={`w-5 h-5 text-concrete-500 flex-shrink-0 transition-transform duration-300 ${
                            expanded === i ? 'rotate-90' : ''
                          }`}
                        />
                      </div>
                      <motion.div
                        initial={false}
                        animate={{
                          height: expanded === i ? 'auto' : 0,
                          opacity: expanded === i ? 1 : 0,
                        }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="text-concrete-400 leading-relaxed mt-4 text-base sm:text-lg pr-4">
                          {q.detail}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Decorative line */}
                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent ${
                  q.color === 'forest' ? 'via-forest-500' : q.color === 'earth' ? 'via-earth-500' : 'via-red-500'
                } to-transparent opacity-50`} />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Quote block */}
        <FadeIn delay={0.3}>
          <div className="mt-16 text-center">
            <div className="inline-block relative">
              <HelpCircle className="w-8 h-8 text-forest-600/30 absolute -top-4 -left-4" />
              <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-concrete-200 italic leading-relaxed max-w-3xl">
                "¿Permitiremos que la presión del mercado inmobiliario elimine el paisaje único de Medellín, 
                o buscaremos un modelo que respete los ecosistemas mientras evoluciona industrialmente?"
              </blockquote>
            </div>
            <p className="text-forest-500 text-sm mt-6 font-medium uppercase tracking-wider">
              — La dicotomía fundamental
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
