import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

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

const events = [
  {
    year: '1990',
    title: 'El Valle Verde',
    description: 'Medellín aún conservaba la mayor parte de sus laderas verdes. Las Palmas era una vía rodeada de fincas y naturaleza.',
    color: 'bg-forest-500',
    ring: 'ring-forest-500/30',
  },
  {
    year: '2005',
    title: 'Primeras Señales',
    description: 'Comienzan los primeros desarrollos inmobiliarios significativos en la zona de Las Palmas. La línea del horizonte empieza a cambiar.',
    color: 'bg-yellow-500',
    ring: 'ring-yellow-500/30',
  },
  {
    year: '2014',
    title: 'Boom Inmobiliario',
    description: 'La valorización del suelo dispara los proyectos de construcción. Se aprueban licencias en zonas que antes eran consideradas de protección.',
    color: 'bg-earth-500',
    ring: 'ring-earth-500/30',
  },
  {
    year: '2019',
    title: 'Alertas Ambientales',
    description: 'Se intensifican las denuncias ciudadanas y las alertas de organizaciones ambientales sobre la pérdida de cobertura vegetal.',
    color: 'bg-orange-500',
    ring: 'ring-orange-500/30',
  },
  {
    year: '2024',
    title: 'Punto Crítico',
    description: 'Edificios como el Cuántum evidencian la magnitud del problema. La "mancha" urbana ha avanzado significativamente sobre el manto verde.',
    color: 'bg-red-500',
    ring: 'ring-red-500/30',
  },
  {
    year: '2025',
    title: 'Cibercultura: Este Proyecto',
    description: 'Nace esta plataforma para documentar, denunciar y proponer alternativas antes de que sea demasiado tarde.',
    color: 'bg-forest-400',
    ring: 'ring-forest-400/30',
  },
];

export default function Timeline() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block text-concrete-400 text-xs uppercase tracking-[0.3em] font-mono mb-4 border border-concrete-700/50 px-4 py-1 rounded-full">
              Cronología
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              De lo verde a lo <span className="text-gradient-danger">gris</span>
            </h2>
          </div>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-forest-600 via-earth-600 to-red-600 opacity-30" />

          <div className="space-y-8">
            {events.map((event, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="relative pl-16 sm:pl-20">
                  {/* Dot */}
                  <div className={`absolute left-4 sm:left-6 top-1 w-4 h-4 rounded-full ${event.color} ring-4 ${event.ring}`} />

                  {/* Card */}
                  <div className="bg-concrete-900/30 border border-concrete-800/40 rounded-xl p-5 sm:p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-sm font-bold text-concrete-300 bg-concrete-800/50 px-2 py-0.5 rounded">
                        {event.year}
                      </span>
                      <h3 className="font-serif text-lg text-white font-semibold">{event.title}</h3>
                    </div>
                    <p className="text-concrete-400 leading-relaxed text-sm">{event.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
