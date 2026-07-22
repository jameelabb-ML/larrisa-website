import { motion } from 'framer-motion';
import { Heart, FlaskConical, Award, Flower2, Sparkles, HandHeart, Gem, ShieldCheck } from 'lucide-react';
import SectionHeading from '../Shared/SectionHeading';
import { fadeUp, staggerContainer } from '../../animations/variants';
import { WHY_CHOOSE_US } from '../../data/content';

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

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 md:py-32 bg-cream">
      <div className="container-lux flex flex-col gap-16">
        <SectionHeading
          eyebrow="Por que Escolher a Larissa"
          title="Cuidado premium, fundamentado em evidências"
          description="Uma prática construída sobre precisão, acolhimento e resultados cinco estrelas consistentes."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.08)}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {WHY_CHOOSE_US.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -6, borderColor: '#B8935F' }}
                className="card-lux p-6 flex flex-col gap-4 border border-transparent"
              >
                <div className="w-12 h-12 rounded-full bg-gold-50 grid place-items-center text-gold-500">
                  <Icon size={22} strokeWidth={1.6} />
                </div>
                <h3 className="font-display text-lg text-charcoal">{item.title}</h3>
                <p className="text-sm text-charcoal-light/75 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
