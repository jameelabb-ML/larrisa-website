import { motion } from 'framer-motion';
import TreatmentIcon from '../Shared/TreatmentIcon';
import { BOOKING_SERVICES } from '../../data/booking';

export default function BookingStepService({ selectedService, onSelect }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <h3 className="font-display text-2xl md:text-3xl text-charcoal">
          Escolha o seu <span className="italic text-rose-400">tratamento</span>
        </h3>
        <p className="text-sm md:text-base text-charcoal-light/70 mt-2">
          Selecione o serviço desejado para continuar
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
        {BOOKING_SERVICES.map((service) => {
          const isSelected = selectedService?.id === service.id;
          return (
            <motion.button
              key={service.id}
              type="button"
              onClick={() => onSelect(service)}
              whileTap={{ scale: 0.98 }}
              className={`group relative text-left rounded-card p-5 md:p-6 flex items-start gap-4 border-2 transition-all duration-300 bg-white/90 backdrop-blur-sm ${
                isSelected
                  ? 'border-gold-400 shadow-glow'
                  : 'border-transparent shadow-soft hover:border-rose-200'
              }`}
            >
              <div
                className={`w-12 h-12 rounded-full grid place-items-center shrink-0 transition-colors duration-300 ${
                  isSelected ? 'bg-gold-50 text-gold-500' : 'bg-rose-50 text-rose-400'
                }`}
              >
                <TreatmentIcon name={service.icon} size={24} />
              </div>
              <div className="flex-1">
                <h4 className="font-display text-lg text-charcoal">{service.title}</h4>
                <p className="text-sm text-charcoal-light/70 mt-1 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {isSelected && (
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute top-4 right-4 w-5 h-5 rounded-full bg-gold-400 grid place-items-center"
                >
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.span>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
