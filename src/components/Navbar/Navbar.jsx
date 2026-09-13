import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import useScrolled from '../../hooks/useScrolled';
import useActiveSection from '../../hooks/useActiveSection';
import { NAV_LINKS, SITE } from '../../constants/siteConfig';
import MagneticButton from '../Shared/MagneticButton';

export default function Navbar() {
  const scrolled = useScrolled(30);
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(NAV_LINKS.map((l) => l.href));

  const handleNavClick = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[65] transition-all duration-500 ${
          scrolled ? 'py-3 glass shadow-soft' : 'py-6 bg-transparent'
        }`}
      >
        <nav className="container-lux flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="font-display text-lg md:text-xl tracking-tight text-charcoal"
          >
            Camila <span className="text-gold-400 italic">Ribeiro</span>
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`underline-grow text-sm tracking-wide transition-colors ${
                    activeId === link.href ? 'text-gold-500' : 'text-charcoal/80 hover:text-charcoal'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <MagneticButton
              onClick={() => handleNavClick('#booking')}
              variant="primary"
              className="!px-6 !py-3 !text-sm"
            >
              Agendar Consulta
            </MagneticButton>
          </div>

          <button
            className="lg:hidden text-charcoal p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[64] bg-charcoal/40 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="absolute top-0 right-0 h-full w-[78%] max-w-sm bg-cream flex flex-col p-8 pt-24 gap-2"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-2xl font-display py-3 border-b border-charcoal/10 text-charcoal"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-8">
                <MagneticButton
                  onClick={() => handleNavClick('#booking')}
                  variant="primary"
                  className="w-full"
                >
                  Agendar Consulta
                </MagneticButton>
              </div>
              <p className="mt-auto text-xs text-charcoal/50">{SITE.clinicName}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
