import { Check } from 'lucide-react';

const STEP_LABELS = ['Serviço', 'Data & Hora', 'Seus Dados', 'Confirmar'];

export default function BookingProgress({ currentStep }) {
  return (
    <div className="w-full max-w-2xl mx-auto mb-10 md:mb-14">
      <div className="flex items-center">
        {STEP_LABELS.map((label, index) => {
          const stepNumber = index + 1;
          const isComplete = stepNumber < currentStep;
          const isActive = stepNumber === currentStep;
          const isLast = index === STEP_LABELS.length - 1;

          return (
            <div key={label} className={`flex items-center ${isLast ? '' : 'flex-1'}`}>
              <div className="flex flex-col items-center gap-2 shrink-0">
                <div
                  className={`w-9 h-9 md:w-10 md:h-10 rounded-full grid place-items-center text-xs md:text-sm font-medium transition-all duration-500 ${
                    isComplete
                      ? 'bg-gold-400 text-white'
                      : isActive
                        ? 'bg-rose-400 text-white shadow-glow scale-110'
                        : 'bg-white border border-charcoal/15 text-charcoal-light/50'
                  }`}
                >
                  {isComplete ? <Check size={16} strokeWidth={2.5} /> : stepNumber}
                </div>
                <span
                  className={`text-[10px] md:text-xs font-medium tracking-wide whitespace-nowrap transition-colors duration-500 ${
                    isActive ? 'text-charcoal' : 'text-charcoal-light/50'
                  }`}
                >
                  {label}
                </span>
              </div>

              {!isLast && (
                <div className="flex-1 h-px mx-2 md:mx-3 -mt-5 bg-charcoal/10 relative overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 bg-gold-400 transition-all duration-700 ease-out"
                    style={{ width: isComplete ? '100%' : '0%' }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
