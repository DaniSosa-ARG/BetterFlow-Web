export type Lang = 'es' | 'en';

export const t = {
  nav: {
    inicio: { es: 'Inicio', en: 'Home' },
    servicios: { es: 'Servicios', en: 'Services' },
    productos: { es: 'Productos', en: 'Products' },
    nosotros: { es: 'Nosotros', en: 'About' },
    contacto: { es: 'Contacto', en: 'Contact' },
    cta: { es: 'Hablar con un experto', en: 'Talk to an expert' },
  },

  hero: {
    badge: { es: 'Consultoría + IA para tu negocio', en: 'Consulting + AI for your business' },
    headline: {
      es: 'Optimizamos cómo trabaja tu equipo con tecnología e IA',
      en: 'We optimize how your team works with technology and AI',
    },
    subheadline: {
      es: 'Acompañamos a empresas, consultorios y complejos deportivos a mejorar sus procesos incorporando automatización e inteligencia artificial.',
      en: 'We help companies, medical practices and sports facilities improve their processes by incorporating automation and artificial intelligence.',
    },
    ctaPrimary: { es: 'Ver nuestros servicios', en: 'See our services' },
    ctaSecondary: { es: 'Conocer los productos', en: 'Explore products' },
  },

  comoTrabajamos: {
    titulo: { es: 'Cómo trabajamos', en: 'How we work' },
    col1Title: { es: 'Diagnosticamos', en: 'We diagnose' },
    col1Desc: {
      es: 'Entendemos cómo trabaja tu equipo hoy e identificamos dónde se pierde tiempo y dinero.',
      en: 'We understand how your team works today and identify where time and money are being lost.',
    },
    col2Title: { es: 'Diseñamos', en: 'We design' },
    col2Desc: {
      es: 'Co-diseñamos procesos claros con métricas simples y ciclos de mejora continua.',
      en: 'We co-design clear processes with simple metrics and continuous improvement cycles.',
    },
    col3Title: { es: 'Automatizamos', en: 'We automate' },
    col3Desc: {
      es: 'Incorporamos la tecnología adecuada para que tu equipo trabaje mejor con menos esfuerzo.',
      en: 'We incorporate the right technology so your team works better with less effort.',
    },
  },

  servicios: {
    titulo: { es: 'Nuestros servicios', en: 'Our services' },
    subtitulo: {
      es: 'Trabajamos con empresas de todos los tamaños en Argentina',
      en: 'We work with businesses of all sizes in Argentina',
    },
    card1Title: { es: 'Proyectos de mejora', en: 'Improvement projects' },
    card1Desc: {
      es: 'Diagnóstico y rediseño de procesos críticos con foco en resultados medibles en 30 días.',
      en: 'Diagnosis and redesign of critical processes focused on measurable results in 30 days.',
    },
    card2Title: { es: 'Consultoría continua', en: 'Ongoing consulting' },
    card2Desc: {
      es: 'Acompañamiento mensual para equipos que quieren mejorar continuamente sin contratar tecnología cara.',
      en: 'Monthly support for teams that want to continuously improve without expensive technology.',
    },
    card3Title: { es: 'Implementación de IA', en: 'AI Implementation' },
    card3Desc: {
      es: 'Automatización de tareas repetitivas con agentes de IA. Desde atención al cliente hasta gestión de turnos.',
      en: 'Automation of repetitive tasks with AI agents. From customer service to appointment management.',
    },
    saberMas: { es: 'Saber más', en: 'Learn more' },
    verProductos: { es: 'Ver productos', en: 'See products' },
    badge: { es: 'Nuevo', en: 'New' },
  },

  productosDestacados: {
    titulo: { es: 'Nuestros productos de IA', en: 'Our AI products' },
    subtitulo: {
      es: 'Soluciones listas para usar para sectores específicos',
      en: 'Ready-to-use solutions for specific industries',
    },
    flowmedBadge: { es: 'Salud', en: 'Healthcare' },
    flowmedDesc: {
      es: 'Agente WhatsApp para consultorios médicos. Reserva turnos automáticamente las 24hs.',
      en: 'WhatsApp agent for medical practices. Automatically books appointments 24/7.',
    },
    flowmedPrecio: { es: 'Desde $25 USD/mes', en: 'From $25 USD/month' },
    flowmedCta: { es: 'Ver FlowMed', en: 'See FlowMed' },
    flowsportBadge: { es: 'Deporte', en: 'Sports' },
    flowsportDesc: {
      es: 'Agente WhatsApp para complejos deportivos. Tus canchas se reservan solas.',
      en: 'WhatsApp agent for sports facilities. Your courts book themselves.',
    },
    flowsportPrecio: { es: 'Desde $40 USD/mes', en: 'From $40 USD/month' },
    flowsportCta: { es: 'Ver FlowSport', en: 'See FlowSport' },
  },

  nosotros: {
    titulo: { es: '¿Por qué elegirnos?', en: 'Why choose us' },
    punto1: { es: 'Resultados en 30 días', en: 'Results in 30 days' },
    punto2: { es: 'Metodología probada', en: 'Proven methodology' },
    punto3: { es: 'Tecnología adecuada', en: 'Right technology' },
    punto4: { es: 'Equipo comprometido', en: 'Committed team' },
    parrafo: {
      es: 'Combinamos experiencia en estrategia de negocios, mejora de procesos y tecnología de IA para ayudarte a trabajar mejor.',
      en: 'We combine expertise in business strategy, process improvement and AI technology to help you work better.',
    },
  },

  ctaFinal: {
    titulo: { es: '¿Listo para optimizar tu negocio?', en: 'Ready to optimize your business?' },
    boton: { es: 'Hablar con nosotros', en: 'Talk to us' },
  },

  // Productos page
  heroProductos: {
    badge: { es: 'Agentes IA para WhatsApp', en: 'AI Agents for WhatsApp' },
    headline: {
      es: 'Tu negocio reserva turnos solo, las 24hs',
      en: 'Your business books appointments on its own, 24/7',
    },
    subheadline: {
      es: 'Sin apps, sin formularios, sin esperas. Solo WhatsApp y nuestra IA.',
      en: 'No apps, no forms, no waiting. Just WhatsApp and our AI.',
    },
    msg1: { es: 'Hola, quiero reservar un turno para mañana', en: 'Hi, I want to book an appointment for tomorrow' },
    msg2: {
      es: '¡Hola! Encontré disponibilidad a las 10:00hs. ¿Te confirmo?',
      en: 'Hi! I found availability at 10:00am. Shall I confirm?',
    },
    msg3: { es: '¡Sí, confirmo!', en: 'Yes, confirm!' },
    msg4: {
      es: '¡Turno confirmado! Código: TRN-ABC1234. ¡Hasta mañana!',
      en: 'Appointment confirmed! Code: TRN-ABC1234. See you tomorrow!',
    },
  },

  problema: {
    titulo: { es: 'El problema que resolvemos', en: 'The problem we solve' },
    card1: { es: 'Mensajes sin respuesta', en: 'Unanswered messages' },
    card1Desc: {
      es: 'Turnos perdidos porque nadie respondió a tiempo fuera del horario laboral.',
      en: 'Missed appointments because no one replied in time outside business hours.',
    },
    card2: { es: 'Agenda desorganizada', en: 'Disorganized schedule' },
    card2Desc: {
      es: 'Superposición de turnos, cancelaciones sin aviso y confusión en la coordinación.',
      en: 'Overlapping appointments, cancellations without notice and coordination confusion.',
    },
    card3: { es: 'Tiempo en tareas repetitivas', en: 'Time on repetitive tasks' },
    card3Desc: {
      es: 'Tu equipo pierde horas respondiendo siempre las mismas preguntas por WhatsApp.',
      en: 'Your team wastes hours answering the same questions over and over on WhatsApp.',
    },
  },

  flowmed: {
    badge: { es: 'Para consultorios médicos', en: 'For medical practices' },
    titulo: {
      es: 'FlowMed — Tu consultorio atiende por WhatsApp, solo',
      en: 'FlowMed — Your practice handles WhatsApp, automatically',
    },
    feat1: { es: 'Identificación de pacientes por nombre o DNI', en: 'Patient identification by name or ID' },
    feat2: { es: 'Disponibilidad en tiempo real', en: 'Real-time availability' },
    feat3: { es: 'Confirmación automática del turno', en: 'Automatic appointment confirmation' },
    feat4: { es: 'Panel web de gestión para secretarias', en: 'Web management panel for receptionists' },
    precio: {
      es: 'Desde $25 USD/mes — Sin costo de setup — Primer mes gratis',
      en: 'From $25 USD/month — No setup fee — First month free',
    },
    cta: { es: 'Quiero FlowMed', en: 'I want FlowMed' },
  },

  flowsport: {
    badge: { es: 'Para complejos deportivos', en: 'For sports facilities' },
    titulo: {
      es: 'FlowSport — Tus canchas se reservan solas por WhatsApp',
      en: 'FlowSport — Your courts book themselves via WhatsApp',
    },
    feat1: { es: 'Reserva sin registro previo', en: 'Booking without prior registration' },
    feat2: { es: 'Múltiples canchas simultáneas', en: 'Multiple simultaneous courts' },
    feat3: { es: 'Seña con Mercado Pago (próximamente)', en: 'Deposit via Mercado Pago (coming soon)' },
    feat4: { es: 'Panel web de gestión', en: 'Web management panel' },
    precio: {
      es: 'Desde $40 USD/mes — Sin costo de setup — Primer mes gratis',
      en: 'From $40 USD/month — No setup fee — First month free',
    },
    cta: { es: 'Quiero FlowSport', en: 'I want FlowSport' },
  },

  comoFunciona: {
    titulo: { es: 'Cómo funciona', en: 'How it works' },
    paso1: { es: 'Tu cliente escribe por WhatsApp', en: 'Your client messages on WhatsApp' },
    paso2: { es: 'La IA gestiona todo', en: 'AI handles everything' },
    paso3: { es: 'Vos gestionás desde el panel', en: 'You manage from the dashboard' },
  },

  precios: {
    titulo: { es: 'Planes simples, sin sorpresas', en: 'Simple plans, no surprises' },
    popular: { es: 'Popular', en: 'Popular' },
    mes: { es: '/mes', en: '/month' },

    starterTitle: { es: 'Starter', en: 'Starter' },
    starterPrice: { es: '$25 USD', en: '$25 USD' },
    starterFeat1: { es: '1 médico o 2 canchas', en: '1 doctor or 2 courts' },
    starterFeat2: { es: 'Agente WhatsApp ilimitado', en: 'Unlimited WhatsApp agent' },
    starterFeat3: { es: 'Panel web', en: 'Web panel' },
    starterFeat4: { es: 'Soporte email', en: 'Email support' },

    proTitle: { es: 'Pro', en: 'Pro' },
    proPrice: { es: '$50 USD', en: '$50 USD' },
    proFeat1: { es: 'Hasta 5 médicos o canchas', en: 'Up to 5 doctors or courts' },
    proFeat2: { es: 'Todo Starter +', en: 'Everything in Starter +' },
    proFeat3: { es: 'Recordatorios automáticos', en: 'Automatic reminders' },
    proFeat4: { es: 'Métricas básicas', en: 'Basic metrics' },
    proFeat5: { es: 'Soporte prioritario', en: 'Priority support' },

    businessTitle: { es: 'Business', en: 'Business' },
    businessPrice: { es: '$100 USD', en: '$100 USD' },
    businessFeat1: { es: 'Ilimitado', en: 'Unlimited' },
    businessFeat2: { es: 'Todo Pro +', en: 'Everything in Pro +' },
    businessFeat3: { es: 'Onboarding personalizado', en: 'Custom onboarding' },
    businessFeat4: { es: 'Soporte WhatsApp', en: 'WhatsApp support' },

    empezar: { es: 'Empezar', en: 'Get started' },
    contactar: { es: 'Contactar', en: 'Contact us' },
  },

  ctaFinalProductos: {
    titulo: { es: 'Primer mes gratis. Sin contratos.', en: 'First month free. No contracts.' },
    boton: { es: 'Hablar con un experto por WhatsApp', en: 'Talk to an expert on WhatsApp' },
  },

  footer: {
    rights: { es: '© 2026 BetterFlow. Todos los derechos reservados.', en: '© 2026 BetterFlow. All rights reserved.' },
    inicio: { es: 'Inicio', en: 'Home' },
    servicios: { es: 'Servicios', en: 'Services' },
    productos: { es: 'Productos', en: 'Products' },
    contacto: { es: 'Contacto', en: 'Contact' },
  },

  whatsapp: {
    tooltip: { es: 'Contáctanos', en: 'Contact us' },
  },
};

export function tr(key: { es: string; en: string }, lang: Lang): string {
  return key[lang];
}
