import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import WhatsAppIcon from '../Shared/WhatsAppIcon';
import MagneticButton from '../Shared/MagneticButton';
import GlowBlob from '../Shared/GlowBlob';
import Reveal from '../Shared/Reveal';
import { fadeUp, fadeRight, staggerContainer } from '../../animations/variants';
import { getWhatsAppLink, openWhatsAppChat } from '../../constants/siteConfig';
import { OWNER_IMAGE } from '../../constants/images';

const TRUST_ITEMS = [
  { label: '5.0 de Avaliação', icon: 'star' },
  { label: '24 Avaliações', icon: null },
  { label: 'Especialista Dermatofuncional', icon: null },
  { label: 'Anos de Dedicação', icon: null },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-cream bg-sage-gold-radial pt-28 pb-16 md:pt-32"
    >
      {/* Ambient floating shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <GlowBlob className="-top-20 -left-20" size={420} />
        <GlowBlob className="bottom-0 right-0" size={520} from="#8A9A7E" to="#B8935F" />
        <motion.div
          className="absolute top-[18%] right-[8%] w-16 h-16 rounded-full border border-gold-300/40 hidden md:block"
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[22%] left-[6%] w-10 h-10 rounded-full bg-sage-200/50 hidden md:block"
          animate={{ y: [0, 16, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
      </div>

      <div className="container-lux relative grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.14, 0.1)}
          className="flex flex-col gap-7 max-w-xl"
        >
          <motion.span variants={fadeUp} className="eyebrow">
            <span className="h-px w-6 bg-sage-400" />
            Fisioterapia Dermatofuncional · São Paulo
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08]"
          >
            Fisioterapia Personalizada para{' '}
            <span className="italic text-gold-400">Saúde</span>,{' '}
            <span className="italic text-sage-500">Beleza</span> e Bem-estar
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg text-charcoal-light/85 leading-relaxed">
            Larissa Matos une expertise clínica a um cuidado genuíno e humanizado —
            fisioterapia dermatofuncional baseada em evidências, harmonização facial e
            corporal, e reabilitação pensada inteiramente para você.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
            <MagneticButton
              onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              variant="primary"
            >
              Agendar Consulta
              <ArrowRight size={16} className="ml-1" />
            </MagneticButton>
            <MagneticButton
              href={getWhatsAppLink('Olá Larissa! Tenho uma dúvida antes de agendar.')}
              onClick={(e) => {
                e.preventDefault();
                openWhatsAppChat('Olá Larissa! Tenho uma dúvida antes de agendar.');
              }}
              variant="secondary"
            >
              <WhatsAppIcon size={18} />
              Falar no WhatsApp
            </MagneticButton>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 mt-2 border-t border-charcoal/10"
          >
            {TRUST_ITEMS.map((item) => (
              <div key={item.label} className="flex items-center gap-1.5 text-sm text-charcoal-light">
                {item.icon === 'star' && (
                  <span className="flex text-gold-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
                    ))}
                  </span>
                )}
                <span className="font-medium">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: portrait */}
        <Reveal variants={fadeRight} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] w-full max-w-sm mx-auto lg:max-w-md">
            <div className="absolute -inset-4 rounded-lux border border-gold-200/60" />
            <motion.div
              className="relative w-full h-full rounded-lux overflow-hidden shadow-lifted bg-beige"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src={OWNER_IMAGE}
                alt="Larissa Matos, Especialista em Fisioterapia Dermatofuncional"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/25 via-transparent to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-6 -left-6 md:-left-10 card-lux px-5 py-4 flex items-center gap-3"
            >
              <div className="flex text-gold-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <div className="text-sm">
                <p className="font-semibold text-charcoal">5.0 · 24 avaliações</p>
                <p className="text-charcoal-light/70 text-xs">Avaliações no Google</p>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
