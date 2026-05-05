import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Bug, Droplets, Wind, AlertOctagon } from 'lucide-react';

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

const impacts = [
  {
    icon: Bug,
    title: 'Alteración de Corredores Biológicos',
    description: 'Desplazamiento de fauna y flora local. Las construcciones fragmentan los corredores naturales que conectan los ecosistemas de la cordillera, aislando poblaciones de especies y reduciendo la biodiversidad.',
    severity: 'Crítico',
    emoji: '🦜',
    stats: [
      { label: 'Especies afectadas', value: '120+' },
      { label: 'Corredores fragmentados', value: '8' },
    ],
  },
  {
    icon: Droplets,
    title: 'Crisis Climática Local',
    description: 'Degradación de la capacidad de los suelos para absorber agua y regular la temperatura. La impermeabilización del terreno incrementa los riesgos de inundación y deslizamientos en la temporada de lluvias.',
    severity: 'Alto',
    emoji: '💧',
    stats: [
      { label: 'Capacidad de absorción perdida', value: '65%' },
      { label: 'Riesgo de deslizamiento', value: '↑ 3x' },
    ],
  },
  {
    icon: Wind,
    title: 'Calidad del Aire',
    description: 'Reducción de los "pulmones" de la ciudad en un contexto de crisis de contaminación atmosférica. Cada hectárea de bosque eliminada reduce la capacidad de filtrado del aire que respiramos.',
    severity: 'Alto',
    emoji: '🌫️',
    stats: [
      { label: 'CO₂ no absorbido/año', value: '4,800 ton' },
      { label: 'Días con mala calidad', value: '87/año' },
    ],
  },
];

export default function Impact() {
  return (
    <section id="impacto" className="relative py-24 lg:py-32">
      {/* Red-tinted background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block text-red-400 text-xs uppercase tracking-[0.3em] font-mono mb-4 border border-red-800/50 px-4 py-1 rounded-full">
              04 — Impacto Ambiental y Social
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Consecuencias que <span className="text-gradient-danger">no se ven</span>
            </h2>
            <p className="text-concrete-400 text-lg max-w-3xl mx-auto">
              La deforestación en estas áreas no es solo estética. Conlleva consecuencias graves 
              a largo plazo para la salud, la seguridad y el futuro de la ciudad.
            </p>
          </div>
        </FadeIn>

        {/* Impact cards */}
        <div className="space-y-6">
          {impacts.map((impact, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="bg-concrete-900/40 border border-red-900/20 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-red-800/30 transition-all duration-500 group">
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
                    {/* Left: Icon and title */}
                    <div className="flex items-start gap-4 lg:w-2/5">
                      <div className="relative flex-shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-red-950/60 border border-red-800/30 flex items-center justify-center text-3xl">
                          {impact.emoji}
                        </div>
                        <div className="absolute -top-1 -right-1 px-2 py-0.5 bg-red-600 rounded-full text-[10px] text-white font-bold uppercase">
                          {impact.severity}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-serif text-xl sm:text-2xl text-white font-semibold mb-2">
                          {impact.title}
                        </h3>
                        <div className="flex gap-4 mt-3">
                          {impact.stats.map((stat, j) => (
                            <div key={j}>
                              <div className="font-mono text-lg text-red-400 font-bold">{stat.value}</div>
                              <div className="text-xs text-concrete-500">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: Description */}
                    <div className="lg:w-3/5">
                      <p className="text-concrete-300 leading-relaxed text-base lg:text-lg">
                        {impact.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Severity bar at bottom */}
                <div className="h-1 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 opacity-40 group-hover:opacity-70 transition-opacity" />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Warning callout */}
        <FadeIn delay={0.3}>
          <div className="mt-12 bg-red-950/30 border border-red-800/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-4">
            <AlertOctagon className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-serif text-lg text-white font-semibold mb-2">
                Más allá de la legalidad técnica
              </h4>
              <p className="text-concrete-400 leading-relaxed">
                Este proyecto apela a la <strong className="text-white">moralidad colectiva</strong>. 
                Plantea una dicotomía fundamental para el futuro de la ciudad: entre el beneficio 
                económico a corto plazo de unos pocos y la supervivencia ecosistémica de todos. 
                Cada ladrillo que sube a la montaña es un metro cuadrado de futuro que perdemos.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
