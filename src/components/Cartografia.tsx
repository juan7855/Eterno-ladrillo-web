import { motion, useInView } from 'framer-motion';

import { useRef } from 'react';

import { Map, Video, Layers, Crosshair, ArrowRight } from 'lucide-react';



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



const modules = [

  {

    icon: Map,

    number: '01',

    title: 'Mapeo de Locaciones',

    description: 'Análisis y selección de coordenadas en la infraestructura de Medellín para intervenciones audiovisuales.',

  },

  {

    icon: Video,

    number: '02',

    title: 'Captura en Crudo',

    description: 'Registro de la estética callejera y captura de video sets contrastando el caos urbano con sonido experimental.',

  },

  {

    icon: Layers,

    number: '03',

    title: 'Análisis Semiótico',

    description: 'Descomposición de la imagen urbana para entender la construcción de significado en el espacio público.',

  },

  {

    icon: Crosshair,

    number: '04',

    title: 'Tracking Interactivo',

    description: 'Implementación de técnicas de tracking 3D para integrar elementos virtuales sobre las grabaciones físicas.',

  },

];



const flowSteps = ['Mapea', 'Registra', 'Analiza', 'Sintetiza', 'Expone'];



export default function Cartografia() {

  return (

    <section id="cartografia" className="relative py-24 lg:py-32">

      {/* Subtle gradient background */}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forest-950/8 to-transparent pointer-events-none" />



      {/* Subtle grid pattern */}

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

              08 — Visualización

            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3">

              Cartografía: <span className="text-gradient-green italic">Visualización de Territorios</span>

            </h2>

            <h3 className="text-concrete-300 text-base sm:text-lg lg:text-xl font-light tracking-wide mb-6 uppercase">

              Análisis Visual y Entorno Urbano

            </h3>

            <p className="text-concrete-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">

              La traducción de datos territoriales en representaciones visuales permite decodificar las dinámicas estructurales del entorno. Esta aproximación metodológica revela la complejidad intrínseca de la infraestructura urbana, transformando el espacio físico en un modelo empírico que integra precisión analítica y claridad estética.

            </p>

          </div>

        </FadeIn>



        {/* Main diagram image */}

        <FadeIn delay={0.2}>

          <div className="relative mb-20 lg:mb-24">

            {/* Decorative frame elements */}

            <div className="absolute -top-4 -left-4 w-12 h-12 border-l border-t border-forest-700/40" />

            <div className="absolute -top-4 -right-4 w-12 h-12 border-r border-t border-forest-700/40" />

            <div className="absolute -bottom-4 -left-4 w-12 h-12 border-l border-b border-forest-700/40" />

            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-r border-b border-forest-700/40" />



            {/* Top label */}

            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0a0f0d] px-4 z-10">

              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-forest-500">

                Visualización de Datos · Esc 1:1

              </span>

            </div>



            {/* Image container */}

            <div className="bg-gradient-to-br from-concrete-100/95 to-concrete-200/95 rounded-2xl p-4 sm:p-8 lg:p-12 backdrop-blur-sm">

              <div className="max-w-5xl mx-auto">

                <img

                  src="/images/cartografia.jpg"

                  alt="Cartografía: Visualización de Territorios"

                  className="w-full h-auto object-contain rounded-lg shadow-2xl transition-transform duration-700 hover:scale-[1.02]"

                />

              </div>

            </div>



            {/* Bottom annotation */}

            <div className="flex items-center justify-between mt-3 px-2">

              <span className="text-[10px] font-mono uppercase tracking-widest text-concrete-600">

                · Mapeo interactivo

              </span>

              <span className="text-[10px] font-mono uppercase tracking-widest text-concrete-600">

                Cibercultura · Med-2026 ·

              </span>

            </div>

          </div>

        </FadeIn>



        {/* Modules grid */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-20">

          {modules.map((mod, i) => (

            <FadeIn key={i} delay={i * 0.1}>

              <div className="relative bg-concrete-900/40 border border-concrete-800/40 rounded-2xl p-6 backdrop-blur-sm hover:border-forest-700/40 hover:bg-concrete-900/60 transition-all duration-500 group h-full">

                {/* Number watermark */}

                <span className="absolute top-4 right-5 font-mono text-xs text-forest-600/60 tracking-widest">

                  {mod.number}

                </span>



                {/* Icon */}

                <div className="w-11 h-11 rounded-xl bg-forest-950/60 border border-forest-800/30 flex items-center justify-center mb-4 group-hover:bg-forest-900/40 transition-colors">

                  <mod.icon className="w-5 h-5 text-forest-400" />

                </div>



                {/* Title */}

                <h4 className="font-serif text-base lg:text-lg text-white font-semibold mb-2 leading-snug">

                  {mod.title}

                </h4>



                {/* Description */}

                <p className="text-concrete-400 text-sm leading-relaxed">

                  {mod.description}

                </p>



                {/* Bottom accent line */}

                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-forest-700/30 to-transparent" />

              </div>

            </FadeIn>

          ))}

        </div>



        {/* Functional flow */}

        <FadeIn delay={0.2}>

          <div className="bg-gradient-to-br from-concrete-900/30 to-forest-950/20 border border-forest-800/20 rounded-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-sm">

            <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">

              {/* Label */}

              <div className="lg:w-1/4">

                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-forest-500 block mb-2">

                  Flujo de Registro

                </span>

                <h4 className="font-serif text-xl lg:text-2xl text-white font-semibold">

                  Metodología de Campo

                </h4>

              </div>



              {/* Steps */}

              <div className="lg:w-3/4">

                <div className="flex flex-wrap items-center gap-x-2 gap-y-3">

                  {flowSteps.map((step, i) => (

                    <div key={step} className="flex items-center gap-2">

                      <div className="flex items-center gap-2">

                        <span className="font-mono text-[10px] text-forest-600 font-bold">

                          0{i + 1}

                        </span>

                        <span className="text-concrete-200 font-medium text-sm sm:text-base tracking-wide">

                          {step}

                        </span>

                      </div>

                      {i < flowSteps.length - 1 && (

                        <ArrowRight className="w-3.5 h-3.5 text-forest-600/60 mx-1" />

                      )}

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </FadeIn>



        {/* Tech specs footer line */}

        <FadeIn delay={0.3}>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] font-mono uppercase tracking-[0.2em] text-concrete-600">

            <span>· Entorno Urbano</span>

            <span>· Análisis de Imagen</span>

            <span>· Tracking Visual 3D</span>

            <span>· Documentación Cruda</span>

          </div>

        </FadeIn>

      </div>

    </section>

  );

} 

