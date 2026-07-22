import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import MagneticButton from '../components/Shared/MagneticButton';
import GlowBlob from '../components/Shared/GlowBlob';

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cream bg-sage-gold-radial overflow-hidden px-6">
      <GlowBlob className="top-1/4 left-1/4" size={420} />
      <GlowBlob className="bottom-1/4 right-1/4" size={380} from="#8A9A7E" to="#B8935F" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative text-center flex flex-col items-center gap-6 max-w-md"
      >
        <span className="font-display text-8xl text-gold-300 italic">404</span>
        <h1 className="text-2xl md:text-3xl text-charcoal">Esta página saiu para uma sessão</h1>
        <p className="text-charcoal-light/75 text-sm md:text-base">
          A página que você procura não existe. Vamos te levar de volta para onde o cuidado começa.
        </p>
        <MagneticButton href="/" external={false} variant="primary" icon={Home}>
          Voltar ao Início
        </MagneticButton>
      </motion.div>
    </div>
  );
}
