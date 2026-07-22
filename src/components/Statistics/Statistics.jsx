import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Reveal from '../Shared/Reveal';
import { fadeUp } from '../../animations/variants';
import { STATS } from '../../data/content';

export default function Statistics() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <section ref={ref} className="relative py-20 md:py-24 bg-charcoal overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(circle at 15% 30%, rgba(184,147,95,0.15), transparent 55%), radial-gradient(circle at 85% 70%, rgba(138,154,126,0.15), transparent 55%)',
        }}
      />
      <div className="container-lux relative grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} variants={fadeUp} delay={i * 0.1} className="text-center">
            <p className="font-display text-4xl md:text-5xl text-gold-300">
              {inView && <CountUp end={stat.value} duration={2.2} suffix={stat.suffix} />}
            </p>
            <p className="mt-2 text-xs md:text-sm uppercase tracking-[0.18em] text-cream/60">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
