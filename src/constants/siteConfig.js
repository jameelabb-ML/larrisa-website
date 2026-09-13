

export const SITE = {
  clinicName: 'Fisioterapeuta Camila Ribeiro',
  ownerName: 'Camila Ribeiro Alves',
  ownerFirstName: 'Camila',
  profession: 'Especialista em Fisioterapia Dermatofuncional',
  city: 'São Paulo',
};

export const CONTACT = {
  phoneDisplay: '+55 11 99999-0000',
  whatsappNumber: '5511999990000',
  whatsappMessage:
    'Olá Camila! Visitei seu site e gostaria de agendar uma consulta de fisioterapia.',
  addressLines: [
    'Av. Paulista, 1000',
    'Bela Vista — São Paulo, SP',
    '01310-100, Brasil',
  ],
  instagram: 'https://www.instagram.com/camilaribeirofisio/',
  instagramHandle: '@camilaribeirofisio',
};

export const getWhatsAppLink = (customMessage) => {
  const message = encodeURIComponent(customMessage || CONTACT.whatsappMessage);
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${message}`;
};

const isMobileDevice = () =>
  
  typeof navigator !== 'undefined' && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

/**
 * Opens a WhatsApp chat reliably across devices.
 * On mobile, some browsers/webviews fail to hand off wa.me links to the
 * installed app (shows "searching... couldn't connect"). To work around
 * this, we first try the native `whatsapp://` app deep link — if the app
 * opens, the page loses focus and we cancel the fallback; if it doesn't
 * open within 1.5s (app not installed, or the deep link silently failed),
 * we fall back to the universal https://wa.me link in a new tab.
 * On desktop, we just open the universal link directly (WhatsApp Web/Desktop).
 */
export const openWhatsAppChat = (customMessage) => {
  const message = encodeURIComponent(customMessage || CONTACT.whatsappMessage);
  const universalLink = `https://wa.me/${CONTACT.whatsappNumber}?text=${message}`;

  if (!isMobileDevice()) {
    window.open(universalLink, '_blank', 'noopener,noreferrer');
    return;
  }

  const appLink = `whatsapp://send?phone=${CONTACT.whatsappNumber}&text=${message}`;
  const fallbackTimer = setTimeout(() => {
    window.open(universalLink, '_blank', 'noopener,noreferrer');
  }, 1500);

  window.addEventListener('blur', () => clearTimeout(fallbackTimer), { once: true });
  window.location.href = appLink;
};

export const BUSINESS_HOURS = [
  { day: 'Domingo', hours: 'Fechado', closed: true },
  { day: 'Segunda-feira', hours: '8h – 19h' },
  { day: 'Terça-feira', hours: '8h – 19h' },
  { day: 'Quarta-feira', hours: '8h – 19h' },
  { day: 'Quinta-feira', hours: '8h – 18h' },
  { day: 'Sexta-feira', hours: '8h – 19h' },
  { day: 'Sábado', hours: '8h – 12h' },
];

export const NAV_LINKS = [
  { label: 'Sobre', href: '#about' },
  { label: 'Tratamentos', href: '#services' },
  { label: 'Jornada', href: '#journey' },
  { label: 'Galeria', href: '#gallery' },
  { label: 'Avaliações', href: '#testimonials' },
  { label: 'Perguntas', href: '#faq' },
  { label: 'Agendamento', href: '#booking' },
  { label: 'Contato', href: '#contact' },
];

export const CREDENTIALS = [
  { label: 'CREFITO', value: '29264' },
  { label: 'RQE', value: '476/2024' },
  { label: 'ABHDF', value: 'Membro' },
  { label: 'UNICEP', value: 'Graduação' },
  { label: 'PUC/PR', value: 'Residência' },
];
