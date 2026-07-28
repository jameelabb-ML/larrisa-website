// Data + pure helper functions for the on-site multistep Booking section.
// Kept separate from data/services.js because the booking flow only
// surfaces a curated subset of treatments as bookable categories.

export const BOOKING_SERVICES = [
  {
    id: 'facial-harmonization',
    icon: 'bloom',
    title: 'Harmonização Facial',
    description: 'Equilíbrio e suavidade nos contornos do rosto.',
  },
  {
    id: 'lip-fillers',
    icon: 'droplet',
    title: 'Preenchimento Labial',
    description: 'Aprimoramento natural, com mão leve e precisa.',
  },
  {
    id: 'body-contouring',
    icon: 'contour',
    title: 'Contorno Corporal',
    description: 'Protocolos personalizados para tônus e forma.',
  },
  {
    id: 'dermatofunctional-evaluation',
    icon: 'leaf',
    title: 'Avaliação Dermatofuncional',
    description: 'Consulta inicial para montar seu plano ideal.',
  },
];

export const BOOKING_TIME_SLOTS = [
  '09:00',
  '10:00',
  '11:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
];

const WEEKDAY_LABELS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const MONTH_LABELS = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
];

/**
 * Builds a flat list of the next `count` weekdays (Mon–Fri only),
 * starting from today (or tomorrow if `skipToday` is true).
 * Pure vanilla Date math — no calendar library.
 */
export function getUpcomingWeekdays(count = 12, { skipToday = false } = {}) {
  const days = [];
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);
  if (skipToday) cursor.setDate(cursor.getDate() + 1);

  while (days.length < count) {
    const dow = cursor.getDay(); // 0 = Sun, 6 = Sat
    if (dow >= 1 && dow <= 5) {
      days.push({
        iso: cursor.toISOString().slice(0, 10),
        dayNumber: cursor.getDate(),
        weekdayLabel: WEEKDAY_LABELS[dow],
        monthLabel: MONTH_LABELS[cursor.getMonth()],
      });
    }
    cursor.setDate(cursor.getDate() + 1);
  }
  return days;
}

export function formatBookingDate(iso) {
  if (!iso) return '';
  const [year, month, day] = iso.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  const dow = WEEKDAY_LABELS[date.getDay()];
  return `${dow}, ${date.getDate()} de ${MONTH_LABELS[date.getMonth()]}`;
}
