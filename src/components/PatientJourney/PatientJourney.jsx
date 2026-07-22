import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../Shared/SectionHeading';
import { fadeUp } from '../../animations/variants';
import { JOURNEY_STEPS } from '../../data/content';

function JourneyStep({ step }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <div ref={ref} className="relative flex lg:flex-col items-start lg:items-center gap-5 lg:gap-6 lg:text-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 shrink-0 w-14 h-14 rounded-full bg-cream border-2 border-gold-300 grid place-items-center font-display text-lg text-gold-500 shadow-soft"
      >
        {step.step}
      </motion.div>
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeUp}
        transition={{ delay: 0.15 }}
        className="lg:max-w-[180px]"
      >
        <h3 className="font-display text-lg text-charcoal mb-1">{step.title}</h3>
        <p className="text-sm text-charcoal-light/75 leading-relaxed">{step.description}</p>
      </motion.div>
    </div>
  );
}

export default function PatientJourney() {
  const [lineRef, lineInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="journey" className="relative py-24 md:py-32 bg-sage-50/60 overflow-hidden">
      <div className="container-lux flex flex-col gap-16">
        <SectionHeading
          eyebrow="O Processo"
          title="Sua jornada, passo a passo"
          description="Um caminho claro e guiado, desde sua primeira mensagem até resultados duradouros."
        />

        <div ref={lineRef} className="relative">
          {/* connecting line */}
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-[2px] bg-sage-200">
            <motion.div
              className="h-full bg-gradient-to-r from-gold-400 to-sage-400"
              initial={{ scaleX: 0 }}
              animate={lineInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'left' }}
            />
          </div>
          <div className="lg:hidden absolute top-0 bottom-0 left-7 w-[2px] bg-sage-200">
            <motion.div
              className="w-full bg-gradient-to-b from-gold-400 to-sage-400"
              initial={{ scaleY: 0 }}
              animate={lineInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'top', height: '100%' }}
            />
          </div>

          <div className="grid lg:grid-cols-6 gap-10 lg:gap-4 relative">
            {JOURNEY_STEPS.map((step) => (
              <JourneyStep key={step.step} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
