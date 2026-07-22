export default function SectionDivider({ flip = false, tone = 'cream' }) {
  const fill = tone === 'cream' ? '#FAF7F2' : tone === 'beige' ? '#EDE4D8' : '#2B2A28';

  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-[50px] md:h-[80px]"
      >
        <path
          d="M0,32 C240,80 480,0 720,24 C960,48 1200,88 1440,32 L1440,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
