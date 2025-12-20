export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  pubDate: Date;
  author: string;
  authorImage: string;
  image: string;
  category: string;
  tags: string[];
  featured: boolean;
  readTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'nuevas-reformas-laborales-2024',
    title: 'Nuevas Reformas Laborales 2024: Lo que Toda Empresa Debe Saber',
    description: 'Análisis completo de las reformas laborales que entrarán en vigor y cómo afectarán a empleadores y trabajadores.',
    content: `Las reformas laborales aprobadas este año traen cambios significativos que toda empresa debe conocer. En este artículo analizamos los puntos clave y cómo prepararse...`,
    pubDate: new Date('2024-11-15'),
    author: 'Robert Chen',
    authorImage: '/images/team/robert-chen.jpg',
    image: '/images/blog/labor-reforms.jpg',
    category: 'Derecho Laboral',
    tags: ['reformas', 'laboral', 'empresa', 'compliance'],
    featured: true,
    readTime: 8
  },
  {
    id: 'guia-fusiones-adquisiciones',
    title: 'Guía Completa para Fusiones y Adquisiciones Exitosas',
    description: 'Todo lo que necesitas saber sobre el proceso de M&A, desde el due diligence hasta el cierre de la operación.',
    content: `Las fusiones y adquisiciones son operaciones complejas que requieren planificación meticulosa. Esta guía cubre todos los aspectos esenciales...`,
    pubDate: new Date('2024-11-01'),
    author: 'John Shaffer',
    authorImage: '/images/team/john-shaffer.jpg',
    image: '/images/blog/ma-guide.jpg',
    category: 'Derecho Corporativo',
    tags: ['M&A', 'fusiones', 'adquisiciones', 'due diligence'],
    featured: true,
    readTime: 12
  },
  {
    id: 'proteccion-datos-personales',
    title: 'Protección de Datos Personales: Obligaciones para Empresas',
    description: 'Cómo cumplir con las regulaciones de protección de datos y evitar sanciones millonarias.',
    content: `La protección de datos personales es más importante que nunca. Las empresas deben implementar medidas robustas para cumplir con la ley...`,
    pubDate: new Date('2024-10-20'),
    author: 'María González',
    authorImage: '/images/team/maria-gonzalez.jpg',
    image: '/images/blog/data-protection.jpg',
    category: 'Derecho Civil',
    tags: ['datos personales', 'GDPR', 'privacidad', 'compliance'],
    featured: false,
    readTime: 10
  },
  {
    id: 'divorcio-mutuo-acuerdo',
    title: 'Divorcio de Mutuo Acuerdo: Proceso y Ventajas',
    description: 'Conoce las ventajas del divorcio de mutuo acuerdo y cómo puede simplificar el proceso de separación.',
    content: `El divorcio de mutuo acuerdo es la opción más rápida y económica para parejas que desean separarse de forma amistosa...`,
    pubDate: new Date('2024-10-10'),
    author: 'David Miller',
    authorImage: '/images/team/david-miller.jpg',
    image: '/images/blog/divorce-agreement.jpg',
    category: 'Derecho de Familia',
    tags: ['divorcio', 'familia', 'acuerdo', 'separación'],
    featured: false,
    readTime: 6
  },
  {
    id: 'defensa-penal-economica',
    title: 'Defensa en Delitos Económicos: Estrategias Clave',
    description: 'Estrategias efectivas de defensa en casos de delitos económicos y de cuello blanco.',
    content: `Los delitos económicos requieren una defensa especializada. Analizamos las mejores estrategias para enfrentar estos casos...`,
    pubDate: new Date('2024-09-28'),
    author: 'Sarah Williams',
    authorImage: '/images/team/sarah-williams.jpg',
    image: '/images/blog/economic-crimes.jpg',
    category: 'Derecho Penal',
    tags: ['penal', 'delitos económicos', 'defensa', 'cuello blanco'],
    featured: true,
    readTime: 15
  },
  {
    id: 'compraventa-inmuebles-segura',
    title: 'Claves para una Compraventa de Inmuebles Segura',
    description: 'Pasos esenciales y precauciones al comprar o vender una propiedad para evitar problemas legales.',
    content: `La compraventa de inmuebles es una de las transacciones más importantes. Sigue estos pasos para proteger tu inversión...`,
    pubDate: new Date('2024-09-15'),
    author: 'Elena Rodríguez',
    authorImage: '/images/team/elena-rodriguez.jpg',
    image: '/images/blog/real-estate-sale.jpg',
    category: 'Derecho Inmobiliario',
    tags: ['inmobiliario', 'compraventa', 'propiedad', 'due diligence'],
    featured: false,
    readTime: 9
  },
  {
    id: 'startups-estructura-legal',
    title: 'Estructura Legal para Startups: Guía del Emprendedor',
    description: 'Cómo elegir la estructura legal correcta para tu startup y proteger tu propiedad intelectual.',
    content: `Elegir la estructura legal adecuada es crucial para el éxito de una startup. Esta guía te ayudará a tomar la decisión correcta...`,
    pubDate: new Date('2024-09-01'),
    author: 'John Shaffer',
    authorImage: '/images/team/john-shaffer.jpg',
    image: '/images/blog/startup-legal.jpg',
    category: 'Derecho Corporativo',
    tags: ['startups', 'emprendimiento', 'estructura legal', 'IP'],
    featured: false,
    readTime: 11
  },
  {
    id: 'despido-procedente-improcedente',
    title: 'Despido Procedente vs Improcedente: Diferencias Clave',
    description: 'Entiende las diferencias entre despido procedente e improcedente y sus consecuencias legales.',
    content: `Conocer la diferencia entre un despido procedente e improcedente es fundamental tanto para empleadores como empleados...`,
    pubDate: new Date('2024-08-20'),
    author: 'Robert Chen',
    authorImage: '/images/team/robert-chen.jpg',
    image: '/images/blog/wrongful-termination.jpg',
    category: 'Derecho Laboral',
    tags: ['despido', 'laboral', 'indemnización', 'derechos'],
    featured: false,
    readTime: 7
  },
  {
    id: 'testamentos-herencias',
    title: 'Planificación Sucesoria: La Importancia del Testamento',
    description: 'Por qué es crucial hacer un testamento y cómo planificar la distribución de tu patrimonio.',
    content: `Un testamento bien redactado puede evitar conflictos familiares y asegurar que tus deseos se cumplan. Aquí te explicamos cómo...`,
    pubDate: new Date('2024-08-05'),
    author: 'María González',
    authorImage: '/images/team/maria-gonzalez.jpg',
    image: '/images/blog/estate-planning.jpg',
    category: 'Derecho Civil',
    tags: ['testamento', 'herencia', 'sucesiones', 'planificación'],
    featured: false,
    readTime: 8
  },
  {
    id: 'custodia-compartida-beneficios',
    title: 'Custodia Compartida: Beneficios para los Hijos',
    description: 'Los beneficios de la custodia compartida y cómo implementarla exitosamente tras un divorcio.',
    content: `La custodia compartida puede ser beneficiosa para los hijos cuando se implementa correctamente. Analizamos sus ventajas...`,
    pubDate: new Date('2024-07-22'),
    author: 'David Miller',
    authorImage: '/images/team/david-miller.jpg',
    image: '/images/blog/shared-custody.jpg',
    category: 'Derecho de Familia',
    tags: ['custodia', 'hijos', 'divorcio', 'familia'],
    featured: false,
    readTime: 10
  },
  {
    id: 'compliance-penal-empresas',
    title: 'Compliance Penal Corporativo: Protege tu Empresa',
    description: 'Implementa un programa de compliance penal efectivo para prevenir responsabilidades penales corporativas.',
    content: `El compliance penal es esencial para proteger a las empresas de responsabilidades penales. Descubre cómo implementarlo...`,
    pubDate: new Date('2024-07-10'),
    author: 'Sarah Williams',
    authorImage: '/images/team/sarah-williams.jpg',
    image: '/images/blog/corporate-compliance.jpg',
    category: 'Derecho Penal',
    tags: ['compliance', 'penal', 'corporativo', 'prevención'],
    featured: false,
    readTime: 13
  },
  {
    id: 'contratos-arrendamiento-covid',
    title: 'Contratos de Arrendamiento Post-Pandemia: Nuevas Cláusulas',
    description: 'Cláusulas esenciales en contratos de arrendamiento tras la experiencia de la pandemia.',
    content: `La pandemia cambió las dinámicas de arrendamiento. Estas son las cláusulas que debes incluir en tus contratos ahora...`,
    pubDate: new Date('2024-06-28'),
    author: 'Elena Rodríguez',
    authorImage: '/images/team/elena-rodriguez.jpg',
    image: '/images/blog/lease-agreements.jpg',
    category: 'Derecho Inmobiliario',
    tags: ['arrendamiento', 'contratos', 'covid', 'inmobiliario'],
    featured: false,
    readTime: 8
  }
];