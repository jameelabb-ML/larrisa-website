import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeUp } from '../../animations/variants';

/**
 * Generic scroll-reveal wrapper. Wraps children in a motion.div that animates
 * into view once when it enters the viewport.
 */
export default function Reveal({
  children,
  variants = fadeUp,
  className = '',
  delay = 0,
  threshold = 0.2,
  as = 'div',
  ...rest
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold });
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ delay }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
