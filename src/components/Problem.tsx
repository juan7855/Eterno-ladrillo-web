import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Mountain, TrendingUp, MapPin } from 'lucide-react';

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

export default function Problem() {
  return (
    <section id="problema" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #22c55e 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <FadeIn>
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-block text-forest-400 text-xs uppercase tracking-[0.3em] font-mono mb-4 border border-forest-800/50 px-4 py-1 rounded-full">
              01 — El Problema
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
              El avance de la{' '}
              <span className="text-gradient-danger italic">"mancha"</span>{' '}
              urbana
            </h2>
            <p className="text-concrete-400 text-lg max-w-3xl mx-auto leading-relaxed">
              El proyecto nace de la observación de una perturbación en el paisaje montañoso de 
              Medellín. Construcciones modernas rompen la armonía natural y el "manto verde" de 
              la cordillera de los Andes.
            </p>
          </div>
        </FadeIn>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image side */}
          <FadeIn delay={0.2}>
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/images/deforestation.jpg"
                  alt="Deforestación en las montañas de Medellín"
                  className="w-full h-80 sm:h-96 lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Floating label */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/60 backdrop-blur-md rounded-xl px-4 py-3 border border-white/10">
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="w-3.5 h-3.5 text-red-400" />
                      <span className="text-xs text-red-300 font-medium">Sector Avenida Las Palmas</span>
                    </div>
                    <p className="text-sm text-concrete-300">
                      Expansión inmobiliaria sobre zonas ecológicas críticas
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-forest-600/20 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-earth-600/20 rounded-2xl -z-10" />
            </div>
          </FadeIn>

          {/* Text side */}
          <div className="space-y-6">
            <FadeIn delay={0.3}>
              <div className="bg-concrete-900/50 border border-concrete-800/50 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-950/80 border border-red-800/30 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Caso Emblemático: Edificio Cuántum</h3>
                    <p className="text-concrete-400 leading-relaxed">
                      Este edificio representa un síntoma visible de la expansión inmobiliaria descontrolada. 
                      Su presencia rompe la continuidad visual del paisaje montañoso que define la identidad de Medellín.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-concrete-900/50 border border-concrete-800/50 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-forest-950/80 border border-forest-800/30 flex items-center justify-center flex-shrink-0">
                    <Mountain className="w-6 h-6 text-forest-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">No es un caso aislado</h3>
                    <p className="text-concrete-400 leading-relaxed">
                      Es un síntoma de la expansión inmobiliaria hacia zonas ecológicas críticas, 
                      específicamente en el sector de la Avenida Las Palmas, donde el manto verde 
                      de la cordillera retrocede cada día.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="bg-concrete-900/50 border border-concrete-800/50 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-earth-950/80 border border-earth-800/30 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-earth-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Presión del Mercado</h3>
                    <p className="text-concrete-400 leading-relaxed">
                      La demanda inmobiliaria y la valorización de terrenos en altura empujan las 
                      construcciones cada vez más arriba, invadiendo áreas que deberían ser intocables 
                      por su valor ecosistémico.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Stats bar */}
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { value: '2,600+', label: 'Hectáreas deforestadas en la última década', color: 'text-red-400' },
              { value: '340%', label: 'Aumento de construcción en ladera (2010-2024)', color: 'text-earth-400' },
              { value: '47', label: 'Proyectos inmobiliarios en zonas ecológicas', color: 'text-yellow-400' },
              { value: '12°C', label: 'Diferencia térmica entre zonas verdes y urbanas', color: 'text-forest-400' },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-concrete-900/40 border border-concrete-800/40 rounded-xl p-5 text-center backdrop-blur-sm"
              >
                <div className={`font-mono text-2xl sm:text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <p className="text-concrete-500 text-xs sm:text-sm leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
