import { motion } from 'framer-motion';
import { ChevronDown, AlertTriangle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-medellin.jpg"
          alt="Medellín skyline against mountains"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0f0d]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      </div>

      {/* Grain overlay */}
      <div className="absolute inset-0 grain pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Alert badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-red-950/60 border border-red-800/40 text-red-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-8 backdrop-blur-sm"
        >
          <AlertTriangle className="w-3.5 h-3.5" />
          Alerta ambiental activa — Sector Las Palmas
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-forest-400 text-sm sm:text-base uppercase tracking-[0.3em] font-medium mb-4"
        >
          Cibercultura — Proyecto de investigación
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6"
        >
          <span className="text-white">Medellín:</span>
          <br />
          <span className="text-gradient-earth">Ciudad del</span>
          <br />
          <span className="text-gradient-danger">eterno ladrillo</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-concrete-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-4"
        >
          Documentando cómo la expansión inmobiliaria devora el manto verde de nuestras 
          montañas, una construcción a la vez.
        </motion.p>

        {/* Alternative names */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {['Ladrillos sobre el césped', 'Cicatrices de concreto', 'Entre Valles y Vigas'].map((name) => (
            <span
              key={name}
              className="text-xs text-concrete-500 border border-concrete-800 px-3 py-1 rounded-full font-mono"
            >
              {name}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#problema"
            className="bg-forest-600 hover:bg-forest-500 text-white px-8 py-3.5 rounded-full font-medium transition-all hover:shadow-xl hover:shadow-forest-600/20 flex items-center gap-2"
          >
            Descubre el problema
            <ChevronDown className="w-4 h-4" />
          </a>
          <a
            href="#pilares"
            className="border border-concrete-600 hover:border-forest-600 text-concrete-200 hover:text-forest-400 px-8 py-3.5 rounded-full font-medium transition-all"
          >
            Conoce los pilares
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-concrete-500 text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-5 h-5 text-forest-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
