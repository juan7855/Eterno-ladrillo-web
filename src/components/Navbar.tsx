import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Leaf, TreePine } from 'lucide-react';

// ESTA ES LA LISTA MAESTRA. ¡Aquí agregué Cartografía!
const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'El Problema', href: '#problema' },
  { label: 'Interrogantes', href: '#interrogantes' },
  { label: 'Impacto', href: '#impacto' },
  { label: 'Pilares', href: '#pilares' },
  { label: 'Prototipo', href: '#polinizador' },
  { label: 'Cartografía', href: '#cartografia' }, // <-- TU NUEVA SECCIÓN
  { label: 'Actúa', href: '#actua' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-concrete-950/90 backdrop-blur-xl border-b border-forest-900/30 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#inicio" className="flex items-center gap-2 group">
              <div className="relative">
                <TreePine className="w-7 h-7 text-forest-400 group-hover:text-forest-300 transition-colors" />
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full pulse-dot" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-lg font-bold text-white tracking-tight">Cibercultura</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-forest-400/80">Medellín</span>
              </div>
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm text-concrete-300 hover:text-forest-400 transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-forest-500 group-hover:w-4/5 transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#actua"
                className="flex items-center gap-2 bg-forest-600 hover:bg-forest-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:shadow-forest-600/25"
              >
                <Leaf className="w-4 h-4" />
                Únete
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-concrete-300 hover:text-white transition-colors"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-concrete-950/98 backdrop-blur-2xl pt-20 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-2 mt-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-serif text-concrete-200 hover:text-forest-400 py-3 border-b border-concrete-800/50 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}