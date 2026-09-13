import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '../Shared/SectionHeading';
import { TESTIMONIALS } from '../../data/content';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  const [swiper, setSwiper] = useState(null);

  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-cream overflow-hidden">
      <div className="container-lux flex flex-col gap-16">
        <SectionHeading
          eyebrow="Avaliações das Pacientes"
          title="A confiança das pacientes em São Paulo"
          description="⭐ 5.0 de média em 24 avaliações no Google."
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          onSwiper={setSwiper}
          slidesPerView={1}
          spaceBetween={28}
          loop
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          pagination={{ clickable: true, el: '.testimonial-pagination' }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1100: { slidesPerView: 3 },
          }}
          className="!pb-4"
        >
          {TESTIMONIALS.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="relative card-lux h-full p-8 flex flex-col gap-5 mx-1">
                <Quote className="text-gold-300" size={30} strokeWidth={1.5} />
                <div className="flex text-gold-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-sm md:text-[15px] leading-relaxed text-charcoal-light/90 flex-1">
                  “{t.text}”
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-charcoal/10">
                  <div className="w-10 h-10 rounded-full bg-sage-100 grid place-items-center font-display text-sage-600">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-sm text-charcoal">{t.name}</p>
                    <p className="text-xs text-charcoal-light/60">Avaliação no Google</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => swiper?.slidePrev()}
            aria-label="Avaliação anterior"
            className="w-10 h-10 rounded-full bg-white border border-charcoal/10 grid place-items-center text-charcoal shadow-soft hover:border-gold-300/60 active:scale-95 transition-all"
          >
            <ChevronLeft size={18} strokeWidth={2.2} />
          </button>
          <div className="testimonial-pagination flex items-center gap-2" />
          <button
            type="button"
            onClick={() => swiper?.slideNext()}
            aria-label="Próxima avaliação"
            className="w-10 h-10 rounded-full bg-white border border-charcoal/10 grid place-items-center text-charcoal shadow-soft hover:border-gold-300/60 active:scale-95 transition-all"
          >
            <ChevronRight size={18} strokeWidth={2.2} />
          </button>
        </div>
      </div>
    </section>
  );
}
