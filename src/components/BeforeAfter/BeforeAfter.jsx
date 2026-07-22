import Reveal from '../Shared/Reveal';
import SectionHeading from '../Shared/SectionHeading';
import { fadeUp } from '../../animations/variants';
import { BENEFITS_EDUCATION } from '../../data/content';

export default function BeforeAfter() {
  return (
    <section className="relative py-24 md:py-32 bg-cream">
      <div className="container-lux flex flex-col gap-16">
        <SectionHeading
          eyebrow="Entendendo os Benefícios"
          title="Para onde cada tratamento está te levando"
          description="Em vez de mostrar imagens de pacientes, aqui está o que acontece por baixo da superfície — os benefícios reais e comprovados por trás de cada protocolo."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {BENEFITS_EDUCATION.map((item, i) => (
            <Reveal key={item.title} variants={fadeUp} delay={i * 0.1} className="group flex flex-col gap-5">
              <div className="relative aspect-[4/5] rounded-card overflow-hidden shadow-soft">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div>
                <h3 className="font-display text-xl text-charcoal mb-2">{item.title}</h3>
                <p className="text-sm text-charcoal-light/80 leading-relaxed">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
