import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Share2, BookOpen, Users, TreePine, ArrowRight } from 'lucide-react';

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

const actions = [
  {
    icon: BookOpen,
    title: 'Infórmate',
    description: 'Conoce el POT de tu ciudad y las regulaciones sobre construcción en zonas de ladera.',
  },
  {
    icon: Share2,
    title: 'Comparte',
    description: 'Difunde esta investigación. Cada persona informada es una voz más por nuestras montañas.',
  },
  {
    icon: Users,
    title: 'Organízate',
    description: 'Únete a colectivos ambientales locales. La acción ciudadana es el contrapeso al interés inmobiliario.',
  },
  {
    icon: TreePine,
    title: 'Defiende',
    description: 'Apoya las veedurías ciudadanas que vigilan las licencias de construcción en zonas ecológicas.',
  },
];

export default function CTA() {
  return (
    <section id="actua" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/aerial-expansion.jpg"
          alt="Vista aérea de la expansión urbana"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0d] via-[#0a0f0d]/90 to-[#0a0f0d]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block text-forest-400 text-xs uppercase tracking-[0.3em] font-mono mb-4 border border-forest-800/50 px-4 py-1 rounded-full">
              06 — Actúa
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              El manto verde nos <span className="text-gradient-green">necesita</span>
            </h2>
            <p className="text-concrete-400 text-lg max-w-2xl mx-auto">
              No basta con documentar. Cada ciudadano tiene el poder de exigir que nuestras 
              montañas sean respetadas. Aquí puedes empezar.
            </p>
          </div>
        </FadeIn>

        {/* Action cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
          {actions.map((action, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-concrete-900/50 border border-forest-800/20 rounded-2xl p-6 backdrop-blur-sm hover:border-forest-600/40 hover:bg-concrete-900/70 transition-all duration-500 group h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-forest-950/80 border border-forest-800/30 flex items-center justify-center mb-4 group-hover:bg-forest-900/50 transition-colors">
                  <action.icon className="w-6 h-6 text-forest-400" />
                </div>
                <h3 className="font-serif text-lg text-white font-semibold mb-2">{action.title}</h3>
                <p className="text-concrete-400 text-sm leading-relaxed flex-1">{action.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Big CTA */}
        <FadeIn delay={0.3}>
          <div className="bg-gradient-to-br from-forest-900/40 to-forest-950/60 border border-forest-700/30 rounded-3xl p-8 sm:p-12 text-center backdrop-blur-sm">
            <div className="text-5xl mb-4">🌱</div>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-bold mb-4">
              ¿Estás listo para defender el verde?
            </h3>
            <p className="text-concrete-300 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Cada acción cuenta. Desde compartir esta información hasta asistir a las audiencias 
              públicas sobre ordenamiento territorial.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-forest-600 hover:bg-forest-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-xl hover:shadow-forest-600/25 flex items-center gap-3 group">
                Comparte este proyecto
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#inicio"
                className="text-concrete-400 hover:text-forest-400 font-medium transition-colors px-6 py-4"
              >
                Volver al inicio ↑
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
