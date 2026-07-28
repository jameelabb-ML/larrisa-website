export const SITE = {
  clinicName: 'Fisioterapeuta Larissa Matos',
  ownerName: 'Larissa Ap. Matos de Camargo',
  ownerFirstName: 'Larissa',
  profession: 'Especialista em Fisioterapia Dermatofuncional',
  city: 'São Paulo',
};

export const CONTACT = {
  phoneDisplay: '+55 41 9863-0344',
  whatsappNumber: '554198630344',
  whatsappMessage:
    'Olá Larissa! Visitei seu site e gostaria de agendar uma consulta de fisioterapia.',
  addressLines: [
    'R. Sen. Carlos Teixeira de Carvalho, 73',
    'Sala 08 — Cambuci',
    'São Paulo, SP, 01535-010',
    'Brasil',
  ],
  instagram: 'https://www.instagram.com/larissamatosdermatofuncional/',
  instagramHandle: '@larissamatosdermatofuncional',
};

export const getWhatsAppLink = (customMessage) => {
  const message = encodeURIComponent(customMessage || CONTACT.whatsappMessage);
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${message}`;
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
