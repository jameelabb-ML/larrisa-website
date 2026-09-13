import { Instagram, MapPin, Phone, ArrowUp } from 'lucide-react';
import WhatsAppIcon from '../Shared/WhatsAppIcon';
import { SITE, CONTACT, BUSINESS_HOURS, NAV_LINKS, getWhatsAppLink, openWhatsAppChat } from '../../constants/siteConfig';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNavClick = (href) => (e) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="relative bg-charcoal text-cream/80 pt-20 pb-10">
      <div className="container-lux grid md:grid-cols-4 gap-12 pb-14 border-b border-cream/10">
        <div className="md:col-span-1 flex flex-col gap-4">
          <p className="font-display text-2xl text-cream">
            Camila <span className="italic text-gold-300">Ribeiro</span>
          </p>
          <p className="text-sm text-cream/55 leading-relaxed">
            Fisioterapia dermatofuncional e reabilitação personalizada para saúde,
            beleza e bem-estar.
          </p>
          <div className="flex gap-3 pt-2">
            <a
              href={getWhatsAppLink()}
              onClick={(e) => {
                e.preventDefault();
                openWhatsAppChat();
              }}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-full bg-cream/5 hover:bg-[#25D366]/20 hover:text-[#25D366] grid place-items-center transition-colors"
            >
              <WhatsAppIcon size={18} />
            </a>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-cream/5 hover:bg-gold-300/20 hover:text-gold-300 grid place-items-center transition-colors"
            >
              <Instagram size={18} strokeWidth={1.6} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-base text-cream mb-4">Links Rápidos</h3>
          <ul className="flex flex-col gap-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick(link.href)}
                  className="text-sm text-cream/55 hover:text-gold-300 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base text-cream mb-4">Contato</h3>
          <div className="flex flex-col gap-3 text-sm text-cream/55">
            <div className="flex items-start gap-2.5">
              <MapPin size={16} className="shrink-0 mt-0.5" />
              <span>{CONTACT.addressLines.join(', ')}</span>
            </div>
            <a
              href={getWhatsAppLink()}
              onClick={(e) => {
                e.preventDefault();
                openWhatsAppChat();
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 hover:text-gold-300 transition-colors"
            >
              <Phone size={16} className="shrink-0" />
              {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-base text-cream mb-4">Horário de Funcionamento</h3>
          <div className="flex flex-col gap-1.5 text-sm text-cream/55">
            {BUSINESS_HOURS.map((item) => (
              <div key={item.day} className="flex justify-between gap-6">
                <span>{item.day}</span>
                <span>{item.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-lux flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-cream/40">
        <p>© {year} {SITE.clinicName}. Todos os direitos reservados.</p>
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-cream/60 hover:text-gold-300 transition-colors"
          aria-label="Voltar ao topo"
        >
          Voltar ao topo
          <span className="w-8 h-8 rounded-full border border-cream/20 grid place-items-center">
            <ArrowUp size={14} />
          </span>
        </button>
      </div>
    </footer>
  );
}
