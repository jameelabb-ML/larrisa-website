import { Sparkles, Calendar, Clock, User, MapPin, MessageSquare } from 'lucide-react';
import { formatBookingDate } from '../../data/booking';

export default function BookingStepConfirm({ service, date, time, details }) {
  const rows = [
    { icon: Sparkles, label: 'Serviço', value: service?.title },
    { icon: Calendar, label: 'Data', value: formatBookingDate(date) },
    { icon: Clock, label: 'Horário', value: time },
    { icon: User, label: 'Nome', value: details.name },
    { icon: MapPin, label: 'Cidade', value: details.city },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center">
        <h3 className="font-display text-2xl md:text-3xl text-charcoal">
          Confirme seu <span className="italic text-rose-400">agendamento</span>
        </h3>
        <p className="text-sm md:text-base text-charcoal-light/70 mt-2">
          Revise os detalhes antes de enviar pelo WhatsApp
        </p>
      </div>

      <div className="rounded-card bg-white/90 backdrop-blur-sm border border-black/5 shadow-soft divide-y divide-charcoal/5">
        {rows.map(
          (row) =>
            row.value && (
              <div key={row.label} className="flex items-center gap-4 px-5 py-4">
                <div className="w-9 h-9 rounded-full bg-rose-50 text-rose-400 grid place-items-center shrink-0">
                  <row.icon size={16} strokeWidth={1.8} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] uppercase tracking-wide text-charcoal-light/50">{row.label}</p>
                  <p className="text-sm md:text-base font-medium text-charcoal truncate">{row.value}</p>
                </div>
              </div>
            )
        )}
        {details.note && (
          <div className="flex items-start gap-4 px-5 py-4">
            <div className="w-9 h-9 rounded-full bg-rose-50 text-rose-400 grid place-items-center shrink-0">
              <MessageSquare size={16} strokeWidth={1.8} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] uppercase tracking-wide text-charcoal-light/50">Observação</p>
              <p className="text-sm text-charcoal-light/80 leading-relaxed">{details.note}</p>
            </div>
          </div>
        )}
      </div>

      <p className="text-xs text-center text-charcoal-light/50">
        Ao confirmar, o WhatsApp será aberto com um resumo pré-preenchido desta solicitação.
      </p>
    </div>
  );
}
