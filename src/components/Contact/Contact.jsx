import { MapPin, Clock, Instagram, Phone } from 'lucide-react';
import Reveal from '../Shared/Reveal';
import SectionHeading from '../Shared/SectionHeading';
import MagneticButton from '../Shared/MagneticButton';
import WhatsAppIcon from '../Shared/WhatsAppIcon';
import { fadeLeft, fadeRight } from '../../animations/variants';
import { CONTACT, BUSINESS_HOURS, getWhatsAppLink } from '../../constants/siteConfig';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-beige/40">
      <div className="container-lux flex flex-col gap-16">
        <SectionHeading
          eyebrow="Entre em Contato"
          title="Vamos planejar sua primeira visita"
          description="Entre em contato com qualquer dúvida, ou agende diretamente pelo WhatsApp — a Larissa costuma responder no mesmo dia."
        />

        <div className="grid lg:grid-cols-2 gap-10">
          <Reveal variants={fadeLeft} className="rounded-lux overflow-hidden shadow-soft min-h-[360px] lg:min-h-full">
            <iframe
              title="Mapa de localização da clínica"
              className="w-full h-full min-h-[360px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=R.+Sen.+Carlos+Teixeira+de+Carvalho,+73,+Cambuci,+S%C3%A3o+Paulo+-+SP,+01535-010&output=embed"
            />
          </Reveal>

          <Reveal variants={fadeRight} className="flex flex-col gap-5">
            <div className="card-lux p-6 flex gap-4 items-start">
              <div className="w-11 h-11 rounded-full bg-sage-50 grid place-items-center text-sage-500 shrink-0">
                <MapPin size={20} strokeWidth={1.6} />
              </div>
              <div>
                <h3 className="font-display text-lg text-charcoal mb-1">Endereço</h3>
                {CONTACT.addressLines.map((line) => (
                  <p key={line} className="text-sm text-charcoal-light/80">{line}</p>
                ))}
              </div>
            </div>

            <div className="card-lux p-6 flex gap-4 items-start">
              <div className="w-11 h-11 rounded-full bg-gold-50 grid place-items-center text-gold-500 shrink-0">
                <Clock size={20} strokeWidth={1.6} />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg text-charcoal mb-2">Horário de Funcionamento</h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm text-charcoal-light/80">
                  {BUSINESS_HOURS.map((item) => (
                    <div key={item.day} className="flex justify-between gap-3">
                      <span>{item.day}</span>
                      <span className={item.closed ? 'text-charcoal-light/40' : 'font-medium text-charcoal'}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="card-lux p-5 flex items-center gap-3 hover:border-[#25D366]/40 border border-transparent transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[#25D366]/10 grid place-items-center text-[#25D366]">
                  <WhatsAppIcon size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-charcoal">WhatsApp</p>
                  <p className="text-xs text-charcoal-light/60">{CONTACT.phoneDisplay}</p>
                </div>
              </a>

              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="card-lux p-5 flex items-center gap-3 hover:border-gold-300/50 border border-transparent transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-gold-50 grid place-items-center text-gold-500">
                  <Instagram size={20} strokeWidth={1.6} />
                </div>
                <div>
                  <p className="text-sm font-medium text-charcoal">Instagram</p>
                  <p className="text-xs text-charcoal-light/60 truncate max-w-[140px]">{CONTACT.instagramHandle}</p>
                </div>
              </a>
            </div>

            <MagneticButton href={getWhatsAppLink()} variant="primary" className="w-full mt-1">
              <Phone size={17} />
              Agendar Minha Consulta
            </MagneticButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
