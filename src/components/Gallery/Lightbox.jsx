import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ images, activeIndex, onClose, onNavigate }) {
  if (activeIndex === null) return null;
  const image = images[activeIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[80] bg-charcoal/90 backdrop-blur-md flex items-center justify-center p-6"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          aria-label="Close gallery"
          className="absolute top-6 right-6 text-cream/80 hover:text-cream p-2"
        >
          <X size={28} />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(-1);
          }}
          aria-label="Previous image"
          className="absolute left-4 md:left-8 text-cream/80 hover:text-cream p-2"
        >
          <ChevronLeft size={32} />
        </button>

        <motion.img
          key={image.src}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          src={image.src}
          alt={image.alt}
          className="max-h-[80vh] max-w-[88vw] rounded-card object-contain shadow-lifted"
          onClick={(e) => e.stopPropagation()}
        />

        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(1);
          }}
          aria-label="Next image"
          className="absolute right-4 md:right-8 text-cream/80 hover:text-cream p-2"
        >
          <ChevronRight size={32} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
