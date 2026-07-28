import { ArrowRight } from 'lucide-react';
import Reveal from '../Shared/Reveal';
import MagneticButton from '../Shared/MagneticButton';
import GlowBlob from '../Shared/GlowBlob';
import { fadeUp } from '../../animations/variants';
import { CTA_BACKGROUND_IMAGE } from '../../constants/images';

export default function CTA() {
  return (
    <section className="relative py-28 md:py-36 bg-charcoal overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={CTA_BACKGROUND_IMAGE}
          alt=""
          className="w-full h-full object-cover opacity-[0.14]"
        />
        <div className="absolute inset-0 bg-charcoal/70" />
        <GlowBlob className="top-0 left-1/4" size={500} />
        <GlowBlob className="bottom-0 right-1/4" size={420} from="#8A9A7E" to="#B8935F" />
      </div>

      <div className="container-lux relative flex flex-col items-center text-center gap-8 max-w-2xl mx-auto">
        <Reveal variants={fadeUp}>
          <span className="eyebrow text-gold-200">
            <span className="h-px w-6 bg-gold-200" />
            Comece Hoje
          </span>
        </Reveal>

        <Reveal variants={fadeUp} delay={0.1}>
          <h2 className="text-3xl md:text-5xl leading-[1.12] text-cream">
            Comece Sua Jornada Rumo a uma{' '}
            <span className="italic text-gold-300">Saúde Melhor</span> e Bem-estar
          </h2>
        </Reveal>

        <Reveal variants={fadeUp} delay={0.2}>
          <p className="text-cream/70 text-base md:text-lg">
            Um plano personalizado, um espaço calmo e uma profissional que escuta — o
            primeiro passo está a uma mensagem de distância.
          </p>
        </Reveal>

        <Reveal variants={fadeUp} delay={0.3}>
          <MagneticButton
            onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            variant="primary"
            className="!bg-gold-400 !text-charcoal hover:!bg-gold-300 !px-10 !py-5 !text-base"
          >
            Agendar Minha Consulta
            <ArrowRight size={18} />
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
