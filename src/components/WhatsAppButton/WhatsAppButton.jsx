import { motion } from 'framer-motion';
import WhatsAppIcon from '../Shared/WhatsAppIcon';
import { getWhatsAppLink } from '../../constants/siteConfig';

export default function WhatsAppButton() {
  return (
    <motion.a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com a Larissa no WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed z-[60] bottom-20 right-5 md:bottom-8 md:right-8 grid place-items-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white shadow-lifted"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulseRing" />
      <WhatsAppIcon size={28} className="relative z-10" />
    </motion.a>
  );
}
