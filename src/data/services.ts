export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  order: number;
  subservices: Subservice[];
}

export interface Subservice {
  id: string;
  title: string;
  description: string;
  details: string[];
  process: string[];
  benefits: string[];
}

export const services: Service[] = [
  {
    id: 'derecho-civil',
    title: 'Derecho Civil',
    description: 'Asesoramiento integral en asuntos civiles, contratos, responsabilidad civil y resolución de conflictos patrimoniales.',
    image: '/images/services/civil.jpg',
    icon: '⚖️',
    order: 1,
    subservices: [
      {
        id: 'contratos',
        title: 'Contratos y Obligaciones',
        description: 'Redacción, revisión y negociación de todo tipo de contratos civiles y comerciales.',
        details: [
          'Contratos de compraventa',
          'Contratos de arrendamiento',
          'Contratos de prestación de servicios',
          'Contratos de obra',
          'Contratos atípicos y complejos'
        ],
        process: [
          'Análisis de necesidades del cliente',
          'Redacción o revisión del contrato',
          'Negociación con la contraparte',
          'Firma y protocolización si es necesaria',
          'Seguimiento del cumplimiento'
        ],
        benefits: [
          'Protección legal de sus intereses',
          'Prevención de conflictos futuros',
          'Claridad en derechos y obligaciones',
          'Cumplimiento de normativa vigente'
        ]
      },
      {
        id: 'responsabilidad-civil',
        title: 'Responsabilidad Civil',
        description: 'Defensa y reclamación en casos de daños y perjuicios por actos ilícitos o incumplimientos contractuales.',
        details: [
          'Responsabilidad extracontractual',
          'Responsabilidad contractual',
          'Daños personales y materiales',
          'Responsabilidad por productos defectuosos',
          'Indemnizaciones por accidentes'
        ],
        process: [
          'Evaluación del daño causado',
          'Recopilación de pruebas',
          'Cuantificación de la indemnización',
          'Negociación extrajudicial',
          'Litigio si es necesario'
        ],
        benefits: [
          'Obtención de compensación justa',
          'Gestión profesional del caso',
          'Maximización de la indemnización',
          'Defensa sólida ante reclamaciones'
        ]
      },
      {
        id: 'derecho-sucesorio',
        title: 'Derecho Sucesorio',
        description: 'Asesoramiento en herencias, testamentos, planificación patrimonial y sucesiones.',
        details: [
          'Redacción de testamentos',
          'Tramitación de herencias',
          'Particiones hereditarias',
          'Impugnación de testamentos',
          'Planificación sucesoria'
        ],
        process: [
          'Análisis de la situación patrimonial',
          'Redacción de documentos',
          'Tramitación notarial y registral',
          'Gestión de impuestos sucesorios',
          'Resolución de conflictos entre herederos'
        ],
        benefits: [
          'Protección del patrimonio familiar',
          'Reducción de carga fiscal',
          'Evita conflictos familiares',
          'Claridad en la distribución de bienes'
        ]
      }
    ]
  },
  {
    id: 'derecho-corporativo',
    title: 'Derecho Corporativo',
    description: 'Soluciones legales para empresas, desde su constitución hasta operaciones complejas, fusiones y adquisiciones.',
    image: '/images/services/corporate.jpg',
    icon: '🏢',
    order: 2,
    subservices: [
      {
        id: 'constitucion-empresas',
        title: 'Constitución de Empresas',
        description: 'Asesoramiento integral en la creación y estructuración de sociedades mercantiles.',
        details: [
          'Elección de forma societaria',
          'Redacción de estatutos sociales',
          'Tramitación registral',
          'Obtención de licencias',
          'Estructuración corporativa'
        ],
        process: [
          'Consulta inicial sobre tipo de sociedad',
          'Preparación de documentación',
          'Trámites notariales',
          'Inscripción en registros públicos',
          'Acompañamiento post-constitución'
        ],
        benefits: [
          'Estructura legal óptima',
          'Protección patrimonial',
          'Optimización fiscal',
          'Cumplimiento normativo desde el inicio'
        ]
      },
      {
        id: 'fusiones-adquisiciones',
        title: 'Fusiones y Adquisiciones',
        description: 'Asesoría legal en operaciones de M&A, due diligence y reestructuraciones empresariales.',
        details: [
          'Due diligence legal',
          'Negociación de términos',
          'Estructuración de operaciones',
          'Valoración de empresas',
          'Gestión de aspectos regulatorios'
        ],
        process: [
          'Análisis preliminar',
          'Due diligence exhaustivo',
          'Negociación y redacción de contratos',
          'Obtención de autorizaciones',
          'Cierre de la operación'
        ],
        benefits: [
          'Identificación de riesgos',
          'Maximización del valor',
          'Protección en la transacción',
          'Ejecución eficiente'
        ]
      },
      {
        id: 'gobierno-corporativo',
        title: 'Gobierno Corporativo',
        description: 'Implementación de mejores prácticas de gobierno corporativo y compliance.',
        details: [
          'Diseño de estructuras de gobierno',
          'Políticas de compliance',
          'Códigos de ética',
          'Protocolos familiares',
          'Gestión de juntas y asambleas'
        ],
        process: [
          'Diagnóstico de situación actual',
          'Diseño de políticas y procedimientos',
          'Implementación de sistemas',
          'Capacitación a directivos',
          'Monitoreo continuo'
        ],
        benefits: [
          'Reducción de riesgos legales',
          'Mejora en toma de decisiones',
          'Transparencia corporativa',
          'Atracción de inversores'
        ]
      }
    ]
  },
  {
    id: 'derecho-laboral',
    title: 'Derecho Laboral',
    description: 'Defensa de derechos laborales, contratos de trabajo, despidos y negociación colectiva.',
    image: '/images/services/labor.jpg',
    icon: '👥',
    order: 3,
    subservices: [
      {
        id: 'contratos-laborales',
        title: 'Contratos Laborales',
        description: 'Redacción y revisión de contratos de trabajo adaptados a las necesidades de cada empresa.',
        details: [
          'Contratos indefinidos y temporales',
          'Contratos a tiempo parcial',
          'Contratos de alta dirección',
          'Pactos de no competencia',
          'Acuerdos de confidencialidad'
        ],
        process: [
          'Análisis de necesidades',
          'Redacción del contrato',
          'Revisión de cláusulas especiales',
          'Firma y registro',
          'Seguimiento del cumplimiento'
        ],
        benefits: [
          'Cumplimiento de normativa laboral',
          'Protección de intereses empresariales',
          'Claridad en condiciones laborales',
          'Prevención de conflictos'
        ]
      },
      {
        id: 'despidos-finiquitos',
        title: 'Despidos y Finiquitos',
        description: 'Asesoramiento en terminación de relaciones laborales y cálculo de indemnizaciones.',
        details: [
          'Despidos procedentes',
          'Despidos improcedentes',
          'Despidos disciplinarios',
          'Cálculo de finiquitos',
          'Negociación de salidas'
        ],
        process: [
          'Evaluación de causas del despido',
          'Preparación de documentación',
          'Notificación al trabajador',
          'Cálculo de indemnizaciones',
          'Defensa en caso de impugnación'
        ],
        benefits: [
          'Minimización de riesgos legales',
          'Cálculos exactos de indemnizaciones',
          'Procedimientos correctos',
          'Defensa sólida ante demandas'
        ]
      },
      {
        id: 'conflictos-laborales',
        title: 'Conflictos Laborales',
        description: 'Representación en juicios laborales y mediación en conflictos entre empleados y empleadores.',
        details: [
          'Demandas por despido',
          'Reclamaciones de cantidad',
          'Acoso laboral',
          'Accidentes de trabajo',
          'Conflictos colectivos'
        ],
        process: [
          'Análisis del caso',
          'Intento de conciliación',
          'Preparación de demanda o defensa',
          'Representación en juicio',
          'Recursos si son necesarios'
        ],
        benefits: [
          'Defensa experta de derechos',
          'Maximización de compensaciones',
          'Reducción de costos en litigios',
          'Soluciones rápidas y efectivas'
        ]
      }
    ]
  },
  {
    id: 'derecho-penal',
    title: 'Derecho Penal',
    description: 'Defensa penal integral en todo tipo de procedimientos, desde delitos menores hasta casos complejos.',
    image: '/images/services/criminal.jpg',
    icon: '🛡️',
    order: 4,
    subservices: [
      {
        id: 'defensa-penal',
        title: 'Defensa Penal',
        description: 'Representación legal en procesos penales garantizando los derechos del acusado.',
        details: [
          'Delitos contra el patrimonio',
          'Delitos económicos',
          'Delitos contra las personas',
          'Delitos de tráfico',
          'Defensa en todas las instancias'
        ],
        process: [
          'Entrevista inicial con el cliente',
          'Análisis de pruebas',
          'Estrategia de defensa',
          'Representación en juicio',
          'Recursos de apelación'
        ],
        benefits: [
          'Protección de derechos fundamentales',
          'Defensa técnica especializada',
          'Búsqueda de mejores resultados',
          'Acompañamiento en todo el proceso'
        ]
      },
      {
        id: 'victimas-delito',
        title: 'Víctimas de Delito',
        description: 'Asesoramiento y representación de víctimas en procesos penales.',
        details: [
          'Denuncia y querella',
          'Acción civil en proceso penal',
          'Reclamación de indemnizaciones',
          'Orden de alejamiento',
          'Protección de testigos'
        ],
        process: [
          'Presentación de denuncia',
          'Personación en el proceso',
          'Aportación de pruebas',
          'Ejercicio de acción civil',
          'Obtención de indemnización'
        ],
        benefits: [
          'Reparación del daño',
          'Justicia para la víctima',
          'Protección durante el proceso',
          'Compensación económica'
        ]
      },
      {
        id: 'derecho-penal-economico',
        title: 'Derecho Penal Económico',
        description: 'Defensa especializada en delitos económicos y compliance penal.',
        details: [
          'Fraude y estafa',
          'Delitos societarios',
          'Blanqueo de capitales',
          'Delitos fiscales',
          'Insolvencia punible'
        ],
        process: [
          'Análisis de documentación financiera',
          'Defensa técnica especializada',
          'Peritos económicos',
          'Negociación con Fiscalía',
          'Defensa en juicio'
        ],
        benefits: [
          'Defensa técnica compleja',
          'Reducción de penas',
          'Protección patrimonial',
          'Soluciones alternativas'
        ]
      }
    ]
  },
  {
    id: 'derecho-familiar',
    title: 'Derecho de Familia',
    description: 'Asesoramiento en divorcios, custodia de menores, pensiones alimenticias y derecho sucesorio.',
    image: '/images/services/family.jpg',
    icon: '👨‍👩‍👧‍👦',
    order: 5,
    subservices: [
      {
        id: 'divorcios-separaciones',
        title: 'Divorcios y Separaciones',
        description: 'Gestión integral de procesos de divorcio, tanto de mutuo acuerdo como contenciosos.',
        details: [
          'Divorcio de mutuo acuerdo',
          'Divorcio contencioso',
          'Separaciones',
          'Liquidación de régimen económico',
          'Acuerdos prematrimoniales'
        ],
        process: [
          'Consulta inicial',
          'Negociación de acuerdos',
          'Redacción de convenio',
          'Tramitación judicial',
          'Ejecución de sentencia'
        ],
        benefits: [
          'Protección de intereses',
          'Reducción de conflictos',
          'Procesos más rápidos',
          'Acuerdos equilibrados'
        ]
      },
      {
        id: 'custodia-menores',
        title: 'Custodia de Menores',
        description: 'Defensa del interés superior del menor en procedimientos de custodia y régimen de visitas.',
        details: [
          'Custodia compartida',
          'Custodia exclusiva',
          'Régimen de visitas',
          'Modificación de medidas',
          'Traslados de residencia'
        ],
        process: [
          'Análisis de la situación familiar',
          'Propuesta de régimen de custodia',
          'Defensa en juicio',
          'Informe psicosocial',
          'Ejecución de sentencia'
        ],
        benefits: [
          'Protección del menor',
          'Acuerdos justos para los padres',
          'Estabilidad familiar',
          'Defensa del interés del menor'
        ]
      },
      {
        id: 'pensiones',
        title: 'Pensiones Alimenticias',
        description: 'Cálculo, modificación y ejecución de pensiones alimenticias y compensatorias.',
        details: [
          'Pensiones de alimentos',
          'Pensiones compensatorias',
          'Modificación de pensiones',
          'Reclamación de impagos',
          'Extinción de pensiones'
        ],
        process: [
          'Cálculo de la pensión',
          'Negociación o litigio',
          'Establecimiento judicial',
          'Modificación por cambio de circunstancias',
          'Ejecución forzosa si hay impago'
        ],
        benefits: [
          'Pensiones justas y proporcionadas',
          'Protección económica',
          'Actualización según necesidades',
          'Garantía de cumplimiento'
        ]
      }
    ]
  },
  {
    id: 'derecho-inmobiliario',
    title: 'Derecho Inmobiliario',
    description: 'Asesoramiento legal en compraventa, arrendamientos, hipotecas y propiedad horizontal.',
    image: '/images/services/real-estate.jpg',
    icon: '🏠',
    order: 6,
    subservices: [
      {
        id: 'compraventa',
        title: 'Compraventa de Inmuebles',
        description: 'Asesoramiento integral en operaciones de compraventa de bienes inmuebles.',
        details: [
          'Due diligence inmobiliaria',
          'Contratos de arras',
          'Escrituras de compraventa',
          'Gestión de cargas y gravámenes',
          'Tramitación registral'
        ],
        process: [
          'Revisión de documentación',
          'Negociación de condiciones',
          'Redacción de contratos',
          'Firma ante notario',
          'Inscripción en registro'
        ],
        benefits: [
          'Compra segura',
          'Identificación de riesgos',
          'Protección de inversión',
          'Tranquilidad jurídica'
        ]
      },
      {
        id: 'arrendamientos',
        title: 'Arrendamientos',
        description: 'Gestión de contratos de alquiler, desahucios y conflictos arrendaticios.',
        details: [
          'Contratos de alquiler de vivienda',
          'Contratos de local comercial',
          'Desahucios',
          'Actualización de rentas',
          'Resolución de contratos'
        ],
        process: [
          'Redacción del contrato',
          'Negociación de cláusulas',
          'Firma y depósito de fianza',
          'Gestión de incidencias',
          'Procedimientos de desahucio si es necesario'
        ],
        benefits: [
          'Contratos adaptados a la LAU',
          'Protección de derechos',
          'Prevención de conflictos',
          'Solución rápida de problemas'
        ]
      },
      {
        id: 'propiedad-horizontal',
        title: 'Propiedad Horizontal',
        description: 'Asesoramiento en comunidades de propietarios y conflictos vecinales.',
        details: [
          'Gestión de comunidades',
          'Modificación de estatutos',
          'Reclamación de cuotas',
          'Conflictos entre vecinos',
          'Obras en elementos comunes'
        ],
        process: [
          'Análisis de estatutos',
          'Asesoramiento a la comunidad',
          'Gestión de conflictos',
          'Representación en juntas',
          'Procedimientos judiciales'
        ],
        benefits: [
          'Convivencia pacífica',
          'Cumplimiento de normativa',
          'Protección de intereses comunes',
          'Resolución efectiva de conflictos'
        ]
      }
    ]
  }
];