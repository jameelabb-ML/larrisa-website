import { motion } from 'framer-motion';

/*
 * A hand-drawn-feeling set of single-stroke botanical/wellness icons —
 * the visual signature of the site. Each icon "grows" via an animated
 * stroke draw-in the first time it scrolls into view, echoing the
 * clinic's language of natural renewal and gentle touch.
 */

const PATHS = {
  leaf: 'M24 40C10 36 8 22 12 8c14 2 26 10 26 24 0 4-2 8-6 8-8 0-14-8-14-18',
  bloom: 'M24 8c4 4 4 10 0 14-4-4-4-10 0-14zM24 26c4 4 4 10 0 14-4-4-4-10 0-14zM10 24c4-4 10-4 14 0-4 4-10 4-14 0zM24 24c4-4 10-4 14 0-4 4-10 4-14 0z',
  contour: 'M8 30c4-14 12-22 16-22s12 8 16 22c-6 6-12 8-16 8s-10-2-16-8z',
  droplet: 'M24 6c8 10 12 17 12 23a12 12 0 1 1-24 0c0-6 4-13 12-23z',
  wave: 'M6 18c4-6 8-6 12 0s8 6 12 0 8-6 12 0M6 30c4-6 8-6 12 0s8 6 12 0 8-6 12 0',
  thread: 'M8 12c10 0 6 12 16 12s6-12 16-12M8 36c10 0 6-12 16-12s6 12 16 12',
  needle: 'M10 38 34 14m0 0 4-4m-4 4 4 4M14 34l4 4M18 30l4 4',
  breath: 'M8 30c4-16 12-22 16-22s12 6 16 22M8 30c8-4 24-4 32 0',
  stem: 'M24 40V12M24 12c-6 0-10-4-10-8 6 0 10 4 10 8zM24 20c6 0 10-4 10-8-6 0-10 4-10 8zM24 30c-5 0-9-3-9-7 5 0 9 3 9 7z',
};

const drawVariant = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.4, ease: [0.65, 0, 0.35, 1] },
  },
};

export default function TreatmentIcon({ name, size = 40, className = '', inView = true }) {
  const d = PATHS[name] || PATHS.leaf;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <motion.path
        d={d}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={drawVariant}
      />
    </svg>
  );
}
