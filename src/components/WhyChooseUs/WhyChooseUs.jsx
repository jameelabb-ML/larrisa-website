import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Heart, FlaskConical, Award, Flower2, Sparkles, HandHeart, Gem, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '../Shared/SectionHeading';
import { fadeUp, staggerContainer } from '../../animations/variants';
import { WHY_CHOOSE_US } from '../../data/content';

import 'swiper/css';

const ICONS = {
  heart: Heart,
  flask: FlaskConical,
  award: Award,
  spa: Flower2,
  sparkle: Sparkles,
  handHeart: HandHeart,
  gem: Gem,
  shield: ShieldCheck,
};

function WhyCard({ item }) {
  const Icon = ICONS[item.icon];
  return (
    <div className="card-lux p-6 flex flex-col gap-4 border border-transparent h-full">
      <div className="w-12 h-12 rounded-full bg-gold-50 grid place-items-center text-gold-500">
        <Icon size={22} strokeWidth={1.6} />
      </div>
      <h3 className="font-display text-lg text-charcoal">{item.title}</h3>
      <p className="text-sm text-charcoal-light/75 leading-relaxed">{item.description}</p>
    </div>
  );
}

export default function WhyChooseUs() {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-24 md:py-32 bg-cream">
      <div className="container-lux flex flex-col gap-16">
        <SectionHeading
          eyebrow="Por que Escolher a Camila"
          title="Cuidado premium, fundamentado em evidências"
          description="Uma prática construída sobre precisão, acolhimento e resultados cinco estrelas consistentes."
        />

        {/* Mobile: horizontal swipe carousel with arrows */}
        <div className="md:hidden -mx-6 px-6">
          <Swiper
            onSwiper={(s) => {
              setSwiper(s);
              setActiveIndex(s.activeIndex);
            }}
            onSlideChange={(s) => setActiveIndex(s.activeIndex)}
            slidesPerView={1.15}
            spaceBetween={16}
          >
            {WHY_CHOOSE_US.map((item, index) => (
              <SwiperSlide key={item.title}>
                <div className="relative h-full">
                  <WhyCard item={item} />
                  {swiper && index === activeIndex && (
                    <>
                      <button
                        type="button"
                        onClick={() => swiper.slidePrev()}
                        aria-label="Anterior"
                        className="absolute left-3 top-12 -translate-y-1/2 w-9 h-9 rounded-full bg-white/85 backdrop-blur grid place-items-center text-charcoal shadow-soft active:scale-95 transition-transform z-10"
                      >
                        <ChevronLeft size={18} strokeWidth={2.2} />
                      </button>
                      <button
                        type="button"
                        onClick={() => swiper.slideNext()}
                        aria-label="Próximo"
                        className="absolute right-3 top-12 -translate-y-1/2 w-9 h-9 rounded-full bg-white/85 backdrop-blur grid place-items-center text-charcoal shadow-soft active:scale-95 transition-transform z-10"
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.08)}
          className="hidden md:grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {WHY_CHOOSE_US.map((item) => (
            <motion.div key={item.title} variants={fadeUp} whileHover={{ y: -6, borderColor: '#B8935F' }}>
              <WhyCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
