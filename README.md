# Fisioterapeuta Larissa Matos — Site Premium

Site premium, animado e em página única para Larissa Ap. Matos de Camargo,
especialista em fisioterapia dermatofuncional em São Paulo. Construído como
um demo refinado para mostrar como a presença online dela poderia ser.

O site está em **português (pt-BR)**.

## Tecnologias

- **React 18** + **Vite** — servidor de desenvolvimento rápido e build otimizado
- **Tailwind CSS** — estilização utility-first com design system próprio (`tailwind.config.js`)
- **Framer Motion** — animações de scroll, micro-interações e sequência de carregamento
- **Lucide React** — conjunto de ícones
- **React CountUp** — estatísticas animadas
- **Swiper.js** — carrossel de depoimentos
- **React Intersection Observer** — gatilhos de animação ao rolar a página

## Como Rodar

```bash
npm install
npm run dev
```

O site roda em `http://localhost:5173`.

Para gerar a build de produção:

```bash
npm run build
npm run preview   # visualizar a build de produção localmente
```

## ⚠️ Importante — Adicione a Foto da Larissa

Conforme combinado, o código agora referencia um único arquivo chamado
**`owner.jpg`**, usado na seção Home (Hero) e na seção Sobre (About). Até você
adicionar o arquivo, o navegador vai mostrar um ícone de imagem quebrada
nesses dois lugares — isso é esperado e não afeta o restante do site.

Para adicionar sua foto:

1. Coloque o arquivo em `public/owner.jpg` (exatamente esse nome).
2. Pronto — tanto a seção Home quanto a seção Sobre já apontam para
   `/owner.jpg` automaticamente, então não é preciso editar nenhum componente.

Se preferir usar um nome ou formato diferente (ex: `.png`, `.webp`), basta
abrir `src/constants/images.js` e atualizar o valor de `OWNER_IMAGE`.

A Galeria e a seção final de CTA usam imagens genéricas de bem-estar (não a
foto da Larissa), conforme solicitado.

## Fonte dos Títulos

Os títulos agora usam **Italiana**, uma serifada alta e elegante (antes era
Bodoni Moda). O corpo do texto continua em **Albert Sans**. Para trocar
novamente, edite `fontFamily.display` em `tailwind.config.js` e o link do
Google Fonts em `index.html`.

## Estrutura do Projeto

```
src/
 ├── assets/            Imagens/ícones/fontes locais
 ├── components/        Uma pasta por seção/funcionalidade
 ├── constants/         Configurações do site, contato, referências de imagem
 ├── data/               Conteúdo (serviços, depoimentos, FAQ, etc.)
 ├── animations/        Variantes compartilhadas do Framer Motion
 ├── hooks/              Progresso de scroll, seção ativa, posição do mouse
 ├── pages/              Página 404
 ├── styles/             CSS global (camadas Tailwind, scrollbar, ripple, etc.)
 ├── App.jsx             Monta a página única completa
 └── main.jsx            Ponto de entrada
```

Cada seção da página (Hero, TrustBar, About, Services, WhyChooseUs,
PatientJourney, BeforeAfter, Gallery, Testimonials, Statistics, FAQ, Contact,
CTA, Footer) tem sua própria pasta em `src/components/`.

## Editando o Conteúdo

Praticamente todo o conteúdo editável está em dois arquivos — sem precisar
mexer nos componentes para alterar textos:

- `src/constants/siteConfig.js` — nome da clínica, telefone, endereço,
  horário de funcionamento, links do menu, mensagem padrão do WhatsApp
- `src/data/content.js` e `src/data/services.js` — serviços, depoimentos,
  perguntas frequentes, etapas da jornada, estatísticas, imagens da galeria

## Integração com WhatsApp

Toda ação de "Agendar Consulta" / "Contato" abre o WhatsApp via
`https://wa.me/5511918655406` com uma mensagem pré-preenchida, configurada
centralmente em `getWhatsAppLink()` dentro de `src/constants/siteConfig.js`.

## Observações

- Os depoimentos do Google exibidos na seção de Avaliações são os três
  fornecidos, escritos em português.
- A seção "Antes/Depois" propositalmente evita imagens de corpos de
  pacientes, conforme solicitado, e explica os benefícios dos tratamentos com
  fotografias discretas de bem-estar.
- As imagens de banco de imagens são carregadas diretamente de URLs do
  Unsplash (não é necessário baixar nada) — basta trocar qualquer link
  `images.unsplash.com` em `src/data/content.js` por outra foto quando quiser.
