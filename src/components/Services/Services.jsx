import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '../Shared/SectionHeading';
import ServiceCard from './ServiceCard';
import { SERVICES } from '../../data/services';

import 'swiper/css';

export default function Services() {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="relative py-24 md:py-32 bg-beige/40">
      <div className="container-lux flex flex-col gap-16">
        <SectionHeading
          eyebrow="Tratamentos"
          title="Um espectro completo de cuidados dermatofuncionais"
          description="Cada tratamento é oferecido individualmente ou combinado em um protocolo personalizado — sempre adaptado ao seu corpo, seus objetivos e seu ritmo."
        />

        {/* Mobile: horizontal swipe carousel with arrows */}
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
            {SERVICES.map((service, index) => (
              <SwiperSlide key={service.id}>
                <div className="relative h-full">
                  <ServiceCard service={service} />
                  {swiper && index === activeIndex && (
                    <>
                      <button
                        type="button"
                        onClick={() => swiper.slidePrev()}
                        aria-label="Tratamento anterior"
                        className="absolute left-3 top-14 -translate-y-1/2 w-9 h-9 rounded-full bg-white/85 backdrop-blur grid place-items-center text-charcoal shadow-soft active:scale-95 transition-transform z-10"
                      >
                        <ChevronLeft size={18} strokeWidth={2.2} />
                      </button>
                      <button
                        type="button"
                        onClick={() => swiper.slideNext()}
                        aria-label="Próximo tratamento"
                        className="absolute right-3 top-14 -translate-y-1/2 w-9 h-9 rounded-full bg-white/85 backdrop-blur grid place-items-center text-charcoal shadow-soft active:scale-95 transition-transform z-10"
                      >
                        <ChevronRight size={18} strokeWidth={2.2} />
                      </button>
                    </>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop / tablet: static grid */}
        <div className="hidden md:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} delay={(i % 3) * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
