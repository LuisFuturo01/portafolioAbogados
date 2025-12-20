export interface TeamMember {
  id: string;
  name: string;
  position: string;
  specialty: string;
  image: string;
  email: string;
  phone: string;
  linkedin?: string;
  education: string[];
  experience: string[];
  achievements: string[];
  bio: string;
  order: number;
}

export const team: TeamMember[] = [
  {
    id: 'john-shaffer',
    name: 'John Shaffer',
    position: 'Socio Fundador',
    specialty: 'Derecho Corporativo y M&A',
    image: '/images/team/john-shaffer.jpg',
    email: 'john.shaffer@shafferlaws.com',
    phone: '+1 (555) 123-4567',
    linkedin: 'https://linkedin.com/in/johnshaffer',
    education: [
      'Doctor en Derecho - Harvard Law School',
      'Maestría en Derecho Corporativo - Yale Law School',
      'Licenciatura en Derecho - Stanford University'
    ],
    experience: [
      'Partner en Baker McKenzie (2015-2020)',
      'Senior Associate en Clifford Chance (2010-2015)',
      'Associate en White & Case (2005-2010)'
    ],
    achievements: [
      'Reconocido por Chambers & Partners como líder en M&A',
      'Super Lawyer 2018-2024',
      'Mejor abogado corporativo del año - Legal 500 (2022)',
      'Autor de "Corporate Law in the Digital Age"',
      'Conferencista internacional en derecho corporativo'
    ],
    bio: 'John Shaffer es el fundador de Shaffer Laws y cuenta con más de 20 años de experiencia en derecho corporativo. Se especializa en fusiones y adquisiciones complejas, habiendo liderado transacciones por más de $5 billones de dólares. Su enfoque combina excelencia técnica con una profunda comprensión de las necesidades empresariales de sus clientes.',
    order: 1
  },
  {
    id: 'maria-gonzalez',
    name: 'María González',
    position: 'Socia Principal',
    specialty: 'Derecho Civil y Litigios',
    image: '/images/team/maria-gonzalez.jpg',
    email: 'maria.gonzalez@shafferlaws.com',
    phone: '+1 (555) 123-4568',
    linkedin: 'https://linkedin.com/in/mariagonzalez',
    education: [
      'Maestría en Litigios - Columbia Law School',
      'Licenciatura en Derecho - Georgetown University',
      'Diplomado en Arbitraje Internacional - The Hague Academy'
    ],
    experience: [
      'Socia en Morrison & Foerster (2016-2021)',
      'Senior Litigator en Jones Day (2011-2016)',
      'Associate en Latham & Watkins (2007-2011)'
    ],
    achievements: [
      'Top 50 Litigators - National Law Journal',
      'Tasa de éxito del 92% en litigios civiles',
      'Mejor abogada civilista - Bar Association Award',
      'Mediadora certificada por JAMS',
      'Profesora invitada en Columbia Law School'
    ],
    bio: 'María González es reconocida por su habilidad excepcional en litigios complejos. Con una tasa de éxito del 92%, ha representado a clientes en casos de alto perfil involucrando disputas contractuales, responsabilidad civil y conflictos empresariales. Su estrategia combina preparación meticulosa con una presencia convincente en la sala del tribunal.',
    order: 2
  },
  {
    id: 'robert-chen',
    name: 'Robert Chen',
    position: 'Socio',
    specialty: 'Derecho Laboral',
    image: '/images/team/robert-chen.jpg',
    email: 'robert.chen@shafferlaws.com',
    phone: '+1 (555) 123-4569',
    linkedin: 'https://linkedin.com/in/robertchen',
    education: [
      'Maestría en Derecho Laboral - NYU School of Law',
      'Licenciatura en Derecho - UC Berkeley',
      'Certificación en Mediación Laboral'
    ],
    experience: [
      'Partner en Ogletree Deakins (2014-2021)',
      'Counsel en Littler Mendelson (2009-2014)',
      'Associate en Fisher Phillips (2005-2009)'
    ],
    achievements: [
      'Leading Labor Lawyer - Best Lawyers',
      'Asesor de más de 200 empresas en temas laborales',
      'Autor de "Modern Employment Law Practices"',
      'Panelista frecuente en conferencias laborales',
      'Mentor del programa de derecho laboral de NYU'
    ],
    bio: 'Robert Chen es un experto en derecho laboral con enfoque en prevención de conflictos y compliance. Ha asesorado a empresas Fortune 500 en la implementación de políticas laborales, negociación colectiva y litigios. Su enfoque proactivo ha ayudado a numerosas organizaciones a evitar costosos litigios laborales.',
    order: 3
  },
  {
    id: 'sarah-williams',
    name: 'Sarah Williams',
    position: 'Socia',
    specialty: 'Derecho Penal',
    image: '/images/team/sarah-williams.jpg',
    email: 'sarah.williams@shafferlaws.com',
    phone: '+1 (555) 123-4570',
    linkedin: 'https://linkedin.com/in/sarahwilliams',
    education: [
      'Maestría en Derecho Penal - University of Chicago',
      'Licenciatura en Derecho - Duke University',
      'Especialización en Derecho Penal Económico'
    ],
    experience: [
      'Federal Prosecutor - US Attorney Office (2010-2018)',
      'Senior Associate en Paul Weiss (2018-2022)',
      'Defensora Pública Federal (2007-2010)'
    ],
    achievements: [
      'Top Criminal Defense Attorney - Super Lawyers',
      'Más de 100 casos penales ganados',
      'Reconocimiento por la Bar Association en defensa penal',
      'Experta consultora en casos de cuello blanco',
      'Conferencista en derecho penal económico'
    ],
    bio: 'Sarah Williams aporta una perspectiva única combinando su experiencia como fiscal federal y defensora. Especializada en derecho penal económico, ha defendido exitosamente a clientes en casos complejos de fraude, lavado de dinero y delitos corporativos. Su comprensión profunda del sistema judicial federal es invaluable para sus clientes.',
    order: 4
  },
  {
    id: 'david-miller',
    name: 'David Miller',
    position: 'Asociado Senior',
    specialty: 'Derecho de Familia',
    image: '/images/team/david-miller.jpg',
    email: 'david.miller@shafferlaws.com',
    phone: '+1 (555) 123-4571',
    education: [
      'Maestría en Derecho de Familia - UCLA School of Law',
      'Licenciatura en Derecho - University of Michigan',
      'Certificación en Mediación Familiar'
    ],
    experience: [
      'Family Law Attorney en Cohen & Associates (2015-2022)',
      'Associate en Family Law Partners (2012-2015)'
    ],
    achievements: [
      'Rising Star en Derecho de Familia - Super Lawyers',
      'Tasa de éxito del 88% en casos de custodia',
      'Mediador certificado por la Corte Superior',
      'Voluntario en clínicas de derecho familiar'
    ],
    bio: 'David Miller se especializa en resolver conflictos familiares con sensibilidad y profesionalismo. Su enfoque se centra en el bienestar de los menores y en encontrar soluciones que minimicen el impacto emocional en las familias. Ha ayudado a cientos de familias a navegar procesos de divorcio, custodia y adopción.',
    order: 5
  },
  {
    id: 'elena-rodriguez',
    name: 'Elena Rodríguez',
    position: 'Asociada Senior',
    specialty: 'Derecho Inmobiliario',
    image: '/images/team/elena-rodriguez.jpg',
    email: 'elena.rodriguez@shafferlaws.com',
    phone: '+1 (555) 123-4572',
    education: [
      'Maestría en Derecho Inmobiliario - Cornell Law School',
      'Licenciatura en Derecho - Boston University',
      'Diplomado en Desarrollo Urbano'
    ],
    experience: [
      'Real Estate Attorney en Greenberg Traurig (2014-2022)',
      'Associate en Holland & Knight (2010-2014)'
    ],
    achievements: [
      'Top 40 Under 40 - Real Estate Magazine',
      'Ha cerrado transacciones por más de $800 millones',
      'Especialista en desarrollos de uso mixto',
      'Conferencista en temas de financiamiento inmobiliario'
    ],
    bio: 'Elena Rodríguez es una experta en transacciones inmobiliarias complejas. Ha asesorado a desarrolladores, inversionistas y propietarios en adquisiciones, financiamiento y desarrollo de proyectos inmobiliarios. Su conocimiento del mercado y su atención al detalle aseguran que cada transacción se complete exitosamente.',
    order: 6
  }
];