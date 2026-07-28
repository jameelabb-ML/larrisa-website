import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import TreatmentIcon from '../Shared/TreatmentIcon';
import { fadeUp } from '../../animations/variants';
import { getWhatsAppLink, openWhatsAppChat } from '../../constants/siteConfig';

export default function ServiceCard({ service, delay = 0 }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeUp}
      transition={{ delay }}
      whileHover={{ y: -8 }}
      className="group relative rounded-card p-[1px] bg-gradient-to-br from-gold-200/70 via-transparent to-sage-200/70 transition-all duration-500"
    >
      <div className="relative h-full rounded-card bg-white/90 backdrop-blur-sm p-7 flex flex-col gap-5 shadow-soft group-hover:shadow-lifted transition-shadow duration-500">
        <div className="w-14 h-14 rounded-full bg-sage-50 grid place-items-center text-gold-500 group-hover:text-sage-500 transition-colors duration-500">
          <TreatmentIcon name={service.icon} size={30} inView={inView} />
        </div>
        <h3 className="font-display text-xl text-charcoal">{service.title}</h3>
        <p className="text-sm text-charcoal-light/80 leading-relaxed flex-1">{service.description}</p>
        <a
          href={getWhatsAppLink(`Olá Larissa! Gostaria de saber mais sobre ${service.title}.`)}
          onClick={(e) => {
            e.preventDefault();
            openWhatsAppChat(`Olá Larissa! Gostaria de saber mais sobre ${service.title}.`);
          }}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-charcoal underline-grow w-fit"
        >
          Saiba mais
          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </motion.div>
  );
}
