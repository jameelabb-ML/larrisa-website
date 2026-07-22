import { useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * Button/link with a subtle magnetic pull toward the cursor and a
 * click-ripple micro-interaction. Renders an <a> when href is provided.
 */
export default function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  icon: Icon,
  className = '',
  external = true,
  ...rest
}) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.35}px)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = 'translate(0px, 0px)';
  };

  const handleRipple = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const span = document.createElement('span');
    const size = Math.max(rect.width, rect.height);
    span.className = 'ripple-span';
    span.style.width = span.style.height = `${size}px`;
    span.style.left = `${e.clientX - rect.left - size / 2}px`;
    span.style.top = `${e.clientY - rect.top - size / 2}px`;
    el.appendChild(span);
    setTimeout(() => span.remove(), 650);
    if (onClick) onClick(e);
  };

  const baseClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  const Tag = href ? motion.a : motion.button;
  const linkProps = href
    ? { href, target: external ? '_blank' : undefined, rel: external ? 'noopener noreferrer' : undefined }
    : { type: 'button' };

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleRipple}
      className={`${baseClass} ${className}`}
      style={{ transition: 'transform 0.25s cubic-bezier(0.22,1,0.36,1)' }}
      {...linkProps}
      {...rest}
    >
      {Icon && <Icon size={18} strokeWidth={1.75} />}
      <span className="relative z-10">{children}</span>
    </Tag>
  );
}
