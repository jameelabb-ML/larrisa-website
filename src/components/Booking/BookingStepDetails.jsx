const inputClass =
  'w-full rounded-soft border-2 border-charcoal/10 bg-white/90 px-4 py-3.5 text-sm md:text-base text-charcoal placeholder:text-charcoal-light/40 outline-none transition-colors duration-300 focus:border-gold-400';

export default function BookingStepDetails({ details, onChange }) {
  const handleChange = (field) => (e) => {
    onChange({ ...details, [field]: e.target.value });
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <h3 className="font-display text-2xl md:text-3xl text-charcoal">
          Seus <span className="italic text-rose-400">dados</span>
        </h3>
        <p className="text-sm md:text-base text-charcoal-light/70 mt-2">
          Para confirmarmos seu horário
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="booking-name" className="text-xs font-medium text-charcoal-light/70">
            Nome completo
          </label>
          <input
            id="booking-name"
            type="text"
            value={details.name}
            onChange={handleChange('name')}
            placeholder="Seu nome"
            className={inputClass}
            autoComplete="name"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="booking-city" className="text-xs font-medium text-charcoal-light/70">
            Cidade
          </label>
          <input
            id="booking-city"
            type="text"
            value={details.city}
            onChange={handleChange('city')}
            placeholder="Sua cidade"
            className={inputClass}
            autoComplete="address-level2"
          />
        </div>

        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label htmlFor="booking-phone" className="text-xs font-medium text-charcoal-light/70">
            Telefone / WhatsApp
          </label>
          <input
            id="booking-phone"
            type="tel"
            value={details.phone}
            onChange={handleChange('phone')}
            placeholder="(00) 00000-0000"
            className={inputClass}
            autoComplete="tel"
          />
        </div>

        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label htmlFor="booking-note" className="text-xs font-medium text-charcoal-light/70">
            Observação adicional <span className="text-charcoal-light/40">(opcional)</span>
          </label>
          <textarea
            id="booking-note"
            value={details.note}
            onChange={handleChange('note')}
            placeholder="Conte um pouco sobre o que procura..."
            rows={3}
            className={`${inputClass} resize-none`}
          />
        </div>
      </div>
    </div>
  );
}
