import { Phone, Calendar } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { CONTACT, getWhatsAppLink, openWhatsAppChat } from '../../constants/siteConfig';

export default function MobileQuickActions() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[55] flex md:hidden bg-cream/95 backdrop-blur-lg border-t border-charcoal/10 shadow-[0_-8px_24px_-8px_rgba(0,0,0,0.08)]">
      <a
        href={`tel:${CONTACT.whatsappNumber}`}
        className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2.5 text-charcoal-light"
      >
        <Phone size={18} strokeWidth={1.7} />
        <span className="text-[10px] font-medium">Ligar</span>
      </a>
      <a
        href={getWhatsAppLink()}
        onClick={(e) => {
          e.preventDefault();
          openWhatsAppChat();
        }}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2.5 text-[#25D366]"
      >
        <WhatsAppIcon size={18} />
        <span className="text-[10px] font-medium">WhatsApp</span>
      </a>
      <a
        href="#booking"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2.5 text-gold-500"
      >
        <Calendar size={18} strokeWidth={1.7} />
        <span className="text-[10px] font-medium">Agendar</span>
      </a>
    </div>
  );
}
