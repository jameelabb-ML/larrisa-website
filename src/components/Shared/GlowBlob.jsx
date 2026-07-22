export default function GlowBlob({ className = '', size = 480, from = '#B8935F', to = '#8A9A7E' }) {
  return (
    <div
      className={`absolute rounded-full animate-breathe pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${from}33 0%, ${to}22 45%, transparent 72%)`,
        filter: 'blur(30px)',
      }}
      aria-hidden="true"
    />
  );
}
