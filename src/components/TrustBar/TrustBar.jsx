import { motion } from 'framer-motion';
import { CREDENTIALS } from '../../constants/siteConfig';

// Duplicated once for a seamless infinite marquee loop.
const LOOP_ITEMS = [...CREDENTIALS, ...CREDENTIALS];

export default function TrustBar() {
  return (
    <section className="relative py-8 md:py-10 bg-charcoal overflow-hidden" aria-label="Credenciais profissionais">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex gap-12 md:gap-20 pr-12 md:pr-20"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        >
          {LOOP_ITEMS.map((item, idx) => (
            <div key={`${item.label}-${idx}`} className="flex items-center gap-2 shrink-0">
              <span className="text-gold-300 font-display italic text-lg">{item.value}</span>
              <span className="text-cream/60 text-xs uppercase tracking-[0.2em]">{item.label}</span>
              <span className="text-cream/20 ml-10 md:ml-16">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
