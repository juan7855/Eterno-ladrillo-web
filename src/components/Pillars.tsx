import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sprout, Users, BarChart3, TrainFront } from 'lucide-react';

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

const pillars = [
  {
    icon: Sprout,
    number: '01',
    title: 'Soluciones Basadas en la Naturaleza',
    subtitle: 'Alternativas al desarrollo tradicional',
    description: 'Infraestructura verde, corredores ecológicos urbanos, techos y fachadas verdes, restauración de microcuencas y soluciones que trabajan con la naturaleza, no contra ella.',
    tags: ['Infraestructura verde', 'Bioingeniería', 'Restauración ecológica'],
    color: 'forest',
    gradient: 'from-forest-600/20 to-forest-900/20',
    borderColor: 'border-forest-600/30',
    tagBg: 'bg-forest-900/50',
    tagText: 'text-forest-300',
    numberColor: 'text-forest-600',
  },
  {
    icon: Users,
    number: '02',
    title: 'Proyecto Urbano Integral e Inclusión',
    subtitle: 'Urbanismo que no excluya lo ambiental',
    description: 'Desarrollo urbano que integre comunidades, respete límites ecológicos y garantice acceso equitativo al espacio público y al paisaje natural como derecho colectivo.',
    tags: ['Urbanismo inclusivo', 'Participación ciudadana', 'Justicia ambiental'],
    color: 'earth',
    gradient: 'from-earth-600/20 to-earth-900/20',
    borderColor: 'border-earth-600/30',
    tagBg: 'bg-earth-900/50',
    tagText: 'text-earth-300',
    numberColor: 'text-earth-600',
  },
  {
    icon: BarChart3,
    number: '03',
    title: 'Ciencia de Datos para las Ciudades',
    subtitle: 'Monitoreo técnico del crecimiento urbano',
    description: 'Uso de datos satelitales, SIG, inteligencia artificial y monitoreo ambiental para documentar, cuantificar y predecir el impacto de la expansión urbana en tiempo real.',
    tags: ['GIS', 'Teledetección', 'Machine Learning', 'Open Data'],
    color: 'blue',
    gradient: 'from-blue-600/20 to-blue-900/20',
    borderColor: 'border-blue-600/30',
    tagBg: 'bg-blue-900/50',
    tagText: 'text-blue-300',
    numberColor: 'text-blue-600',
  },
  {
    icon: TrainFront,
    number: '04',
    title: 'Desarrollo Orientado al Transporte',
    subtitle: 'El rol de vías como Las Palmas en la expansión',
    description: 'Análisis de cómo las vías de acceso como la Avenida Las Palmas facilitan la expansión descontrolada y propuestas para un desarrollo de transporte sostenible.',
    tags: ['Movilidad sostenible', 'TOD', 'Planificación vial'],
    color: 'purple',
    gradient: 'from-purple-600/20 to-purple-900/20',
    borderColor: 'border-purple-600/30',
    tagBg: 'bg-purple-900/50',
    tagText: 'text-purple-300',
    numberColor: 'text-purple-600',
  },
];

export default function Pillars() {
  return (
    <section id="pilares" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forest-950/8 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block text-forest-400 text-xs uppercase tracking-[0.3em] font-mono mb-4 border border-forest-800/50 px-4 py-1 rounded-full">
              05 — Los Pilares
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Cuatro líneas de <span className="text-gradient-green">enfoque</span>
            </h2>
            <p className="text-concrete-400 text-lg max-w-3xl mx-auto">
              La estructura de este proyecto se fundamenta en cuatro pilares de investigación 
              y acción para abordar la problemática desde múltiples ángulos.
            </p>
          </div>
        </FadeIn>

        {/* Pillar cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div className={`relative bg-gradient-to-br ${pillar.gradient} border ${pillar.borderColor} rounded-2xl p-6 sm:p-8 backdrop-blur-sm hover:scale-[1.02] transition-all duration-500 group h-full`}>
                {/* Number watermark */}
                <div className={`absolute top-4 right-6 font-mono text-6xl font-bold ${pillar.numberColor} opacity-20 select-none`}>
                  {pillar.number}
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-concrete-900/60 border ${pillar.borderColor} flex items-center justify-center mb-5`}>
                  <pillar.icon className={`w-7 h-7 ${pillar.tagText}`} />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl sm:text-2xl text-white font-bold mb-1">{pillar.title}</h3>
                <p className={`text-sm ${pillar.tagText} mb-4 font-medium`}>{pillar.subtitle}</p>
                <p className="text-concrete-400 leading-relaxed mb-5">{pillar.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`${pillar.tagBg} ${pillar.tagText} text-xs px-3 py-1 rounded-full font-medium border ${pillar.borderColor}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Connecting image */}
        <FadeIn delay={0.2}>
          <div className="mt-16 relative rounded-2xl overflow-hidden">
            <img
              src="/images/green-solution.jpg"
              alt="Soluciones verdes para Medellín"
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f0d] via-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-white font-bold mb-2">
                Otra Medellín es posible
              </p>
              <p className="text-concrete-300 text-sm sm:text-base max-w-xl">
                Desarrollo urbano sostenible que integre la naturaleza como eje central, 
                no como obstáculo del progreso.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
