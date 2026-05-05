import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Camera, Heart, Eye } from 'lucide-react';

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

const objectives = [
  {
    icon: Camera,
    title: 'Analizar la Transformación',
    description: 'Documentar cómo el paisaje natural de Las Palmas se convierte en un entorno urbano y cómo esto impacta la identidad visual de Medellín.',
    visual: (
      <div className="relative h-40 overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-forest-600 via-forest-500 to-earth-600">
          <div className="absolute inset-0 flex">
            <div className="w-1/2 bg-gradient-to-br from-forest-600 to-forest-800 flex items-center justify-center">
              <span className="text-4xl">🌿</span>
            </div>
            <div className="w-1/2 bg-gradient-to-br from-concrete-600 to-concrete-800 flex items-center justify-center relative">
              <span className="text-4xl">🏗️</span>
              <div className="absolute inset-0 bg-gradient-to-r from-forest-700/50 to-transparent" />
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-concrete-900 to-transparent" />
        <div className="absolute bottom-3 left-3 text-xs text-concrete-400 font-mono">ANTES → DESPUÉS</div>
      </div>
    ),
    accent: 'border-forest-700/40',
  },
  {
    icon: Heart,
    title: 'Bienestar Ciudadano',
    description: 'Determinar cómo la pérdida de la continuidad verde afecta la percepción de calidad de vida y salud mental de los habitantes de la ciudad.',
    visual: (
      <div className="relative h-40 overflow-hidden rounded-xl bg-gradient-to-br from-rose-950/60 to-concrete-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex gap-3 items-end">
            {[70, 55, 40, 28, 20].map((h, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div
                  className="w-8 rounded-t-md bg-gradient-to-t from-red-600/60 to-forest-500/60"
                  style={{ height: `${h}px` }}
                />
                <span className="text-[9px] text-concrete-500 font-mono">{2020 + i}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-3 left-3 text-xs text-concrete-400 font-mono">BIENESTAR ↓</div>
      </div>
    ),
    accent: 'border-rose-700/40',
  },
  {
    icon: Eye,
    title: 'Hitos Visuales Perdidos',
    description: 'Identificar la pérdida de la línea del horizonte y de los referentes naturales debido a la ocupación de zonas ecológicas en la cordillera.',
    visual: (
      <div className="relative h-40 overflow-hidden rounded-xl bg-gradient-to-b from-blue-950/40 to-concrete-900">
        <svg viewBox="0 0 400 160" className="absolute inset-0 w-full h-full">
          {/* Mountain silhouette - natural */}
          <path
            d="M0,120 Q50,60 100,80 Q150,40 200,70 Q250,30 300,65 Q350,50 400,90 L400,160 L0,160 Z"
            fill="rgba(22,101,52,0.3)"
            stroke="rgba(74,222,128,0.4)"
            strokeWidth="1.5"
          />
          {/* Building silhouettes blocking */}
          <rect x="120" y="55" width="30" height="65" fill="rgba(100,116,139,0.4)" rx="2" />
          <rect x="165" y="45" width="25" height="75" fill="rgba(100,116,139,0.5)" rx="2" />
          <rect x="250" y="40" width="35" height="80" fill="rgba(100,116,139,0.45)" rx="2" />
          <rect x="310" y="50" width="20" height="60" fill="rgba(100,116,139,0.35)" rx="2" />
          {/* Horizon line */}
          <line x1="0" y1="80" x2="400" y2="80" stroke="rgba(239,68,68,0.3)" strokeWidth="1" strokeDasharray="8,4" />
        </svg>
        <div className="absolute bottom-3 left-3 text-xs text-concrete-400 font-mono">HORIZONTE PERDIDO</div>
      </div>
    ),
    accent: 'border-blue-700/40',
  },
];

export default function Objectives() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-concrete-950/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block text-earth-400 text-xs uppercase tracking-[0.3em] font-mono mb-4 border border-earth-800/50 px-4 py-1 rounded-full">
              03 — Objetivos
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Lo que buscamos <span className="text-gradient-earth">documentar</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {objectives.map((obj, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className={`bg-concrete-900/40 border ${obj.accent} rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-concrete-900/60 transition-all duration-500 group h-full flex flex-col`}>
                {/* Visual */}
                {obj.visual}

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-concrete-800/60 flex items-center justify-center">
                      <obj.icon className="w-5 h-5 text-forest-400" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-white">{obj.title}</h3>
                  </div>
                  <p className="text-concrete-400 leading-relaxed text-sm flex-1">{obj.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
