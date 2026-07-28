import { useMemo } from 'react';
import { getUpcomingWeekdays, BOOKING_TIME_SLOTS } from '../../data/booking';

export default function BookingStepDateTime({ selectedDate, selectedTime, onSelectDate, onSelectTime }) {
  // Weekdays only (Mon–Fri), computed once per mount — pure vanilla Date math.
  const days = useMemo(() => getUpcomingWeekdays(10), []);

  return (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <h3 className="font-display text-2xl md:text-3xl text-charcoal">
          Escolha <span className="italic text-rose-400">data e horário</span>
        </h3>
        <p className="text-sm md:text-base text-charcoal-light/70 mt-2">
          Atendimento de segunda a sexta-feira
        </p>
      </div>

      {/* Date grid */}
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-charcoal-light/60 font-medium mb-3">
          Data
        </p>
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-2.5 md:gap-3">
          {days.map((day) => {
            const isSelected = selectedDate === day.iso;
            return (
              <button
                key={day.iso}
                type="button"
                onClick={() => onSelectDate(day.iso)}
                className={`flex flex-col items-center gap-0.5 rounded-soft py-3 border-2 transition-all duration-300 ${
                  isSelected
                    ? 'border-gold-400 bg-gold-50 shadow-glow'
                    : 'border-transparent bg-white/80 hover:border-rose-200 shadow-soft'
                }`}
              >
                <span className={`text-[10px] uppercase tracking-wide ${isSelected ? 'text-gold-600' : 'text-charcoal-light/60'}`}>
                  {day.weekdayLabel}
                </span>
                <span className={`text-lg font-display ${isSelected ? 'text-charcoal' : 'text-charcoal'}`}>
                  {day.dayNumber}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Time slots */}
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-charcoal-light/60 font-medium mb-3">
          Horário
        </p>
        <div className="grid grid-cols-4 gap-2.5 md:gap-3">
          {BOOKING_TIME_SLOTS.map((slot) => {
            const isSelected = selectedTime === slot;
            return (
              <button
                key={slot}
                type="button"
                disabled={!selectedDate}
                onClick={() => onSelectTime(slot)}
                className={`rounded-soft py-3 text-sm font-medium border-2 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed ${
                  isSelected
                    ? 'border-gold-400 bg-gold-50 text-charcoal shadow-glow'
                    : 'border-transparent bg-white/80 text-charcoal-light hover:border-rose-200 shadow-soft'
                }`}
              >
                {slot}
              </button>
            );
          })}
        </div>
        {!selectedDate && (
          <p className="text-xs text-charcoal-light/50 mt-3">Selecione uma data primeiro</p>
        )}
      </div>
    </div>
  );
}
