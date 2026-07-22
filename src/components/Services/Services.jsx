import SectionHeading from '../Shared/SectionHeading';
import ServiceCard from './ServiceCard';
import { SERVICES } from '../../data/services';

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-beige/40">
      <div className="container-lux flex flex-col gap-16">
        <SectionHeading
          eyebrow="Tratamentos"
          title="Um espectro completo de cuidados dermatofuncionais"
          description="Cada tratamento é oferecido individualmente ou combinado em um protocolo personalizado — sempre adaptado ao seu corpo, seus objetivos e seu ritmo."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} delay={(i % 3) * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
