import { TreePine, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-concrete-800/30 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <TreePine className="w-6 h-6 text-forest-400" />
              <div className="flex flex-col leading-none">
                <span className="font-serif text-lg font-bold text-white">Cibercultura</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-forest-400/80">
                  Medellín
                </span>
              </div>
            </div>
            <p className="text-concrete-500 text-sm leading-relaxed">
              Proyecto de investigación y documentación sobre la expansión urbana 
              en las montañas de Medellín. Ciudad del eterno ladrillo.
            </p>
          </div>

          {/* Sections */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Secciones</h4>
            <ul className="space-y-2">
              {[
                { label: 'El Problema', href: '#problema' },
                { label: 'Interrogantes', href: '#interrogantes' },
                { label: 'Impacto', href: '#impacto' },
                { label: 'Pilares', href: '#pilares' },
                { label: 'Actúa', href: '#actua' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-concrete-500 hover:text-forest-400 text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Also known as */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              También conocido como
            </h4>
            <div className="space-y-2">
              {['Ladrillos sobre el césped', 'Cicatrices de concreto', 'Entre Valles y Vigas'].map((name) => (
                <p key={name} className="text-concrete-500 text-sm italic font-serif">"{name}"</p>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-concrete-800/30 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-concrete-600 text-xs flex items-center gap-1.5">
              Hecho con <Heart className="w-3 h-3 text-red-500 inline" /> por quienes aman las montañas
            </p>
            <p className="text-concrete-600 text-xs font-mono">
              Cibercultura © {new Date().getFullYear()} — Medellín, Colombia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
