import { useState } from 'react';
import { Expand } from 'lucide-react';
import Reveal from '../Shared/Reveal';
import SectionHeading from '../Shared/SectionHeading';
import Lightbox from './Lightbox';
import { fadeUp } from '../../animations/variants';
import { GALLERY_IMAGES, GALLERY_CLINIC_IMAGE } from '../../data/content';

const IMAGES = [
  ...GALLERY_IMAGES.slice(0, 3),
  GALLERY_CLINIC_IMAGE,
  ...GALLERY_IMAGES.slice(3),
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleNavigate = (dir) => {
    setActiveIndex((prev) => (prev + dir + IMAGES.length) % IMAGES.length);
  };

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-beige/40">
      <div className="container-lux flex flex-col gap-16">
        <SectionHeading
          eyebrow="Dentro da Clínica"
          title="Um espaço calmo, feito para cuidar"
          description="Um vislumbre do ambiente onde cada sessão acontece."
        />

        <div className="columns-2 md:columns-3 gap-5 space-y-5">
          {IMAGES.map((img, i) => (
            <Reveal
              key={img.src + i}
              variants={fadeUp}
              delay={(i % 3) * 0.08}
              className={`relative group break-inside-avoid rounded-card overflow-hidden shadow-soft cursor-pointer ${
                img.tall ? 'aspect-[3/4]' : 'aspect-square'
              }`}
              onClick={() => setActiveIndex(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-500 flex items-center justify-center">
                <Expand
                  size={26}
                  className="text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox
        images={IMAGES}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={handleNavigate}
      />
    </section>
  );
}
