import { GraduationCap, HeartHandshake, Sparkles } from 'lucide-react';
import Reveal from '../Shared/Reveal';
import SectionHeading from '../Shared/SectionHeading';
import { fadeLeft, fadeRight } from '../../animations/variants'; // Removed imageReveal to avoid animation conflicts
import { OWNER_IMAGE } from '../../constants/images';

const PILLARS = [
  {
    icon: GraduationCap,
    title: 'Formação Clínica',
    text: 'Graduada em Fisioterapia pela UNICEP, com Residência Multiprofissional em Distúrbios Clínicos e Cirúrgicos Respiratórios pela PUC/PR.',
  },
  {
    icon: Sparkles,
    title: 'Prática Especializada',
    text: 'Especialista em Fisioterapia Dermatofuncional (RQE 476/2024, CREFITO 29264), com formação avançada em harmonização facial e corporal.',
  },
  {
    icon: HeartHandshake,
    title: 'Cuidado Humanizado',
    text: 'Todo plano de tratamento começa com escuta — seu histórico, seus objetivos e seu conforto moldam o caminho a seguir.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-cream">
      <div className="container-lux grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Image Column — circular on mobile, appears before the text there */}
        <Reveal variants={fadeLeft} className="relative w-full">
          <div className="relative aspect-square max-w-[280px] mx-auto rounded-full lg:aspect-[3/4] lg:max-w-md lg:rounded-lux overflow-hidden shadow-lifted bg-beige z-10 w-full h-full">
            <img
              src={OWNER_IMAGE}
              alt="Camila Ribeiro em consulta"
              className="w-full h-full object-cover object-top block"
              loading="lazy"
            />
          </div>
          {/* Background Decorative Circle */}
          <div className="absolute -z-10 -bottom-4 -right-4 w-28 h-28 lg:-bottom-8 lg:-right-8 lg:w-44 lg:h-44 rounded-full bg-sage-100" />
        </Reveal>

        {/* Right Side: Text & Pillars Column */}
        <div className="flex flex-col gap-10">
          <SectionHeading 
            align="left" 
            eyebrow="Sobre a Camila"
            title="Um cuidado que trata a pessoa por inteiro, não apenas o sintoma" 
            description="Camila Ribeiro Alves construiu sua prática em Curitiba e São Paulo a partir de uma crença simples: a fisioterapia deve ser tão atenciosa e pessoal quanto clinicamente precisa. Membro da ABHDF e especialista em cuidados dermatofuncionais, ela une técnica rigorosa a uma abordagem genuinamente acolhedora e centrada na paciente — tratando os objetivos de cada pessoa como inteiramente seus."
          />
          
          <div className="flex flex-col gap-6">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} variants={fadeRight} delay={i * 0.1}>
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-11 h-11 rounded-full bg-sage-100 grid place-items-center text-sage-500">
                    <pillar.icon size={20} strokeWidth={1.6} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-charcoal mb-1">{pillar.title}</h3>
                    <p className="text-sm text-charcoal-light/80 leading-relaxed">{pillar.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
