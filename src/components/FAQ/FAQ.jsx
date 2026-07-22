import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import Reveal from '../Shared/Reveal';
import SectionHeading from '../Shared/SectionHeading';
import { fadeUp } from '../../animations/variants';
import { FAQS } from '../../data/content';

function AccordionItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-charcoal/10">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-display text-lg md:text-xl text-charcoal">{faq.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 w-9 h-9 rounded-full bg-sage-50 grid place-items-center text-sage-500"
        >
          <Plus size={18} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm md:text-base text-charcoal-light/80 leading-relaxed pr-10">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState(FAQS[0].id);

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-cream">
      <div className="container-lux grid lg:grid-cols-[0.8fr_1.2fr] gap-16">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Perguntas Frequentes"
            title="Tudo o que você precisa saber antes da sua primeira visita"
          />
        </div>

        <Reveal variants={fadeUp} className="flex flex-col">
          {FAQS.map((faq) => (
            <AccordionItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
