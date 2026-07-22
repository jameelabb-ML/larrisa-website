import Reveal from './Reveal';
import { fadeUp } from '../../animations/variants';

/**
 * Consistent section heading: eyebrow label, large display title, optional
 * supporting copy. `align` controls text alignment.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}) {
  const alignClass =
    align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto';

  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <Reveal variants={fadeUp}>
          <span className={`eyebrow ${light ? 'text-gold-200' : ''}`}>
            <span className={`h-px w-6 ${light ? 'bg-gold-200' : 'bg-sage-400'}`} />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal variants={fadeUp} delay={0.08}>
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl leading-[1.1] ${
            light ? 'text-cream' : 'text-charcoal'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal variants={fadeUp} delay={0.16}>
          <p
            className={`text-base md:text-lg leading-relaxed ${
              light ? 'text-cream/75' : 'text-charcoal-light/80'
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
