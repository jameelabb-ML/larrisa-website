import { useEffect, useState } from 'react';
import useMousePosition from '../../hooks/useMousePosition';

/** Soft radial glow that follows the cursor. Hidden on touch devices. */
export default function CursorGlow() {
  const { x, y } = useMousePosition();
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    setIsTouch(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  if (isTouch) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] hidden md:block"
      aria-hidden="true"
    >
      <div
        className="absolute rounded-full transition-transform duration-300 ease-out"
        style={{
          width: 420,
          height: 420,
          left: x - 210,
          top: y - 210,
          background:
            'radial-gradient(circle, rgba(184,147,95,0.06) 0%, rgba(138,154,126,0.04) 45%, transparent 70%)',
          filter: 'blur(10px)',
        }}
      />
    </div>
  );
}
