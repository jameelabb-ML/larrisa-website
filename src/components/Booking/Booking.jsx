import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Send } from 'lucide-react';
import SectionHeading from '../Shared/SectionHeading';
import Reveal from '../Shared/Reveal';
import GlowBlob from '../Shared/GlowBlob';
import BookingProgress from './BookingProgress';
import BookingStepService from './BookingStepService';
import BookingStepDateTime from './BookingStepDateTime';
import BookingStepDetails from './BookingStepDetails';
import BookingStepConfirm from './BookingStepConfirm';
import { fadeUp } from '../../animations/variants';
import { getWhatsAppLink } from '../../constants/siteConfig';
import { formatBookingDate } from '../../data/booking';

const TOTAL_STEPS = 4;

const initialDetails = { name: '', city: '', phone: '', note: '' };

/** Compiles the booking selections into a clean, readable WhatsApp message. */
function buildWhatsAppMessage({ service, date, time, details }) {
  const lines = [
    'Olá Larissa! Gostaria de agendar uma consulta com os seguintes detalhes:',
    '',
    `✨ Serviço: ${service?.title || '-'}`,
    `📅 Data: ${formatBookingDate(date)}`,
    `🕐 Horário: ${time || '-'}`,
    `👤 Nome: ${details.name}`,
    `📍 Cidade: ${details.city}`,
  ];
  if (details.phone) lines.push(`📞 Telefone: ${details.phone}`);
  if (details.note) lines.push('', `📝 Observação: ${details.note}`);
  return lines.join('\n');
}

export default function Booking() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [service, setService] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [details, setDetails] = useState(initialDetails);

  const goTo = (nextStep) => {
    setDirection(nextStep > step ? 1 : -1);
    setStep(nextStep);
  };

  const canContinue = () => {
    if (step === 1) return !!service;
    if (step === 2) return !!date && !!time;
    if (step === 3) return details.name.trim().length > 1 && details.city.trim().length > 1 && details.phone.trim().length > 7;
    return true;
  };

  const handleConfirm = () => {
    const message = buildWhatsAppMessage({ service, date, time, details });
    window.open(getWhatsAppLink(message), '_blank', 'noopener,noreferrer');
  };

  const slideVariants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 24 : -24 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -24 : 24, transition: { duration: 0.25 } }),
  };

  return (
    <section id="booking" className="relative py-24 md:py-32 bg-rose-50/40 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <GlowBlob className="-top-10 -right-10" size={460} from="#D48D7E" to="#B8935F" />
        <GlowBlob className="bottom-0 -left-16" size={380} from="#8A9A7E" to="#D48D7E" />
      </div>

      <div className="container-lux relative flex flex-col gap-12">
        <SectionHeading
          eyebrow="Agende Seu Horário"
          title="Agendamento Online"
          description="Escolha o tratamento, data e horário — em poucos passos, sem sair da página."
        />

        <Reveal variants={fadeUp} delay={0.1} className="max-w-2xl w-full mx-auto">
          <BookingProgress currentStep={step} />

          <div className="rounded-lux bg-white/70 backdrop-blur-md border border-white/60 shadow-lifted p-6 md:p-10 min-h-[420px] flex flex-col">
            <div className="flex-1 overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={step}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  {step === 1 && (
                    <BookingStepService selectedService={service} onSelect={setService} />
                  )}
                  {step === 2 && (
                    <BookingStepDateTime
                      selectedDate={date}
                      selectedTime={time}
                      onSelectDate={(d) => {
                        setDate(d);
                        setTime(null);
                      }}
                      onSelectTime={setTime}
                    />
                  )}
                  {step === 3 && (
                    <BookingStepDetails details={details} onChange={setDetails} />
                  )}
                  {step === 4 && (
                    <BookingStepConfirm service={service} date={date} time={time} details={details} />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between gap-4 pt-8 mt-2 border-t border-charcoal/10">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => goTo(step - 1)}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-charcoal-light hover:text-charcoal transition-colors"
                >
                  <ArrowLeft size={16} />
                  Voltar
                </button>
              ) : (
                <span />
              )}

              {step < TOTAL_STEPS ? (
                <button
                  type="button"
                  disabled={!canContinue()}
                  onClick={() => goTo(step + 1)}
                  className="btn-primary !bg-gold-400 !text-charcoal hover:!bg-gold-300 disabled:opacity-40 disabled:pointer-events-none !px-7 !py-3.5 !text-sm"
                >
                  Continuar
                  <ArrowRight size={16} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleConfirm}
                  className="btn-primary !bg-[#25D366] !text-white hover:!bg-[#20BD5A] !px-7 !py-3.5 !text-sm"
                >
                  <Send size={16} />
                  Confirmar no WhatsApp
                </button>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
