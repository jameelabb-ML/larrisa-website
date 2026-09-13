import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from '../Shared/Reveal';
import SectionHeading from '../Shared/SectionHeading';
import { fadeUp } from '../../animations/variants';
import { BENEFITS_EDUCATION } from '../../data/content';

import 'swiper/css';

function BenefitCard({ item, swiper, showArrows }) {
  return (
    <div className="group flex flex-col gap-5">
      <div className="relative aspect-[4/5] rounded-card overflow-hidden shadow-soft">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {swiper && showArrows && (
          <>
            <button
              type="button"
              onClick={() => swiper.slidePrev()}
              aria-label="Card anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/85 backdrop-blur grid place-items-center text-charcoal shadow-soft active:scale-95 transition-transform"
            >
              <ChevronLeft size={18} strokeWidth={2.2} />
            </button>
            <button
              type="button"
              onClick={() => swiper.slideNext()}
              aria-label="Próximo card"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/85 backdrop-blur grid place-items-center text-charcoal shadow-soft active:scale-95 transition-transform"
            >
              <ChevronRight size={18} strokeWidth={2.2} />
            </button>
          </>
        )}
      </div>
      <div>
        <h3 className="font-display text-xl text-charcoal mb-2">{item.title}</h3>
        <p className="text-sm text-charcoal-light/80 leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-24 md:py-32 bg-cream">
      <div className="container-lux flex flex-col gap-16">
        <SectionHeading
          eyebrow="Entendendo os Benefícios"
          title="Para onde cada tratamento está te levando"
          description="Em vez de mostrar imagens de pacientes, aqui está o que acontece por baixo da superfície — os benefícios reais e comprovados por trás de cada protocolo."
        />

        {/* Mobile: horizontal swipe carousel with arrows over the image */}
        <div className="md:hidden -mx-6 px-6">
          <Swiper
            onSwiper={(s) => {
              setSwiper(s);
              setActiveIndex(s.activeIndex);
            }}
            onSlideChange={(s) => setActiveIndex(s.activeIndex)}
            slidesPerView={1.08}
            spaceBetween={16}
          >
            {BENEFITS_EDUCATION.map((item, index) => (
              <SwiperSlide key={item.title}>
                <BenefitCard item={item} swiper={swiper} showArrows={index === activeIndex} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop / tablet: static grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {BENEFITS_EDUCATION.map((item, i) => (
            <Reveal key={item.title} variants={fadeUp} delay={i * 0.1}>
              <BenefitCard item={item} swiper={null} showArrows={false} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
