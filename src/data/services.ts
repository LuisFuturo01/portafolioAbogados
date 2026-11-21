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
    icon: 'lucide:scale',
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
    id: 'derecho-penal',
    title: 'Derecho Penal',
    description: 'Defensa legal rigurosa en procesos penales, garantizando el debido proceso y la protección de sus derechos fundamentales.',
    image: '/images/services/penal.jpg',
    icon: 'lucide:shield-alert',
    order: 2,
    subservices: [
      {
        id: 'defensa-penal',
        title: 'Defensa Técnica Penal',
        description: 'Representación legal en todas las etapas del proceso penal para imputados o acusados.',
        details: [
          'Asistencia en declaraciones informativas',
          'Audiencias de medidas cautelares',
          'Defensa en juicio oral y público',
          'Recursos de apelación y casación',
          'Solicitudes de libertad irrestricta'
        ],
        process: [
          'Estudio minucioso del cuaderno de investigaciones',
          'Elaboración de la teoría del caso',
          'Recolección de pruebas de descargo',
          'Representación en audiencias',
          'Seguimiento hasta la sentencia o sobreseimiento'
        ],
        benefits: [
          'Garantía del debido proceso',
          'Estrategia de defensa personalizada',
          'Mitigación de penas o sanciones',
          'Protección contra abusos procesales'
        ]
      },
      {
        id: 'delitos-economicos',
        title: 'Delitos Económicos y Financieros',
        description: 'Asesoría especializada en delitos de "cuello blanco", estafas y legitimación de ganancias ilícitas.',
        details: [
          'Estafas y estelionatos',
          'Apropiación indebida y abuso de confianza',
          'Delitos societarios',
          'Defensa en casos de corrupción',
          'Compliance penal para empresas'
        ],
        process: [
          'Auditoría legal preventiva',
          'Análisis forense de documentos',
          'Presentación de querellas o defensa',
          'Negociación de salidas alternativas',
          'Litigio especializado'
        ],
        benefits: [
          'Protección del patrimonio empresarial',
          'Prevención de responsabilidad penal corporativa',
          'Recuperación de activos',
          'Confidencialidad absoluta'
        ]
      }
    ]
  },
  {
    id: 'derecho-familiar',
    title: 'Derecho Familiar',
    description: 'Trámites de divorcio, asistencia familiar y acuerdos con un enfoque humano y conciliador.',
    image: '/images/services/familiar.jpg',
    icon: 'lucide:heart-handshake',
    order: 3,
    subservices: [
      {
        id: 'divorcio-separacion',
        title: 'Divorcios y Desvinculación',
        description: 'Gestión de procesos de divorcio notarial o judicial, buscando la solución menos traumática.',
        details: [
          'Divorcio de mutuo acuerdo',
          'Divorcio contencioso',
          'Separación de bienes gananciales',
          'Anulación de matrimonio',
          'Acuerdos reguladores'
        ],
        process: [
          'Mediación entre cónyuges',
          'Redacción del acuerdo transaccional',
          'Presentación de la demanda',
          'Asistencia a audiencias familiares',
          'Inscripción de la cancelación de partida'
        ],
        benefits: [
          'Resolución rápida (en casos de mutuo acuerdo)',
          'Protección de los intereses patrimoniales',
          'Reducción del estrés emocional',
          'Seguridad jurídica futura'
        ]
      },
      {
        id: 'asistencia-guarda',
        title: 'Niñez y Adolescencia',
        description: 'Protección de los derechos de los hijos: asistencia familiar, guarda y régimen de visitas.',
        details: [
          'Fijación de asistencia familiar (pensiones)',
          'Incremento o reducción de asistencia',
          'Guarda y custodia legal',
          'Régimen de visitas',
          'Autorización de viajes al exterior'
        ],
        process: [
          'Cálculo de necesidades del beneficiario',
          'Negociación extrajudicial',
          'Proceso judicial de asistencia',
          'Ejecución de sentencias (liquidaciones)',
          'Apelación de medidas injustas'
        ],
        benefits: [
          'Bienestar garantizado para los hijos',
          'Equilibrio en las responsabilidades parentales',
          'Cumplimiento forzoso de obligaciones',
          'Marco legal claro para la convivencia'
        ]
      }
    ]
  },
  {
    id: 'derecho-cooperativo',
    title: 'Derecho Cooperativo',
    description: 'Asesoría integral en la constitución, administración y resolución de conflictos internos en cooperativas.',
    image: '/images/services/cooperativa.jpg',
    icon: 'lucide:building-2',
    order: 4,
    subservices: [
      {
        id: 'gestion-cooperativa',
        title: 'Constitución y Gobernanza',
        description: 'Creación de cooperativas y actualización de estatutos según la normativa vigente (AFCOOP).',
        details: [
          'Trámite de Personería Jurídica',
          'Redacción y reforma de Estatutos Orgánicos',
          'Reglamentos internos y electorales',
          'Asesoría a Consejos de Administración',
          'Fusiones y disoluciones de cooperativas'
        ],
        process: [
          'Asesoría en asambleas constitutivas',
          'Elaboración de actas y documentación',
          'Gestión ante el ente regulador',
          'Capacitación a socios fundadores',
          'Registro oficial'
        ],
        benefits: [
          'Legalidad operativa garantizada',
          'Estructura interna sólida',
          'Prevención de sanciones administrativas',
          'Funcionamiento democrático eficiente'
        ]
      },
      {
        id: 'conflictos-cooperativos',
        title: 'Resolución de Conflictos Internos',
        description: 'Manejo de disputas entre socios, consejos y procesos disciplinarios internos.',
        details: [
          'Procesos disciplinarios a socios',
          'Impugnación de asambleas',
          'Exclusión de asociados',
          'Recuperación de aportaciones',
          'Arbitraje cooperativo'
        ],
        process: [
          'Análisis del reglamento de infracciones',
          'Instauración del tribunal de honor',
          'Mediación y conciliación interna',
          'Defensa del debido proceso interno',
          'Resoluciones fundamentadas'
        ],
        benefits: [
          'Estabilidad institucional',
          'Resolución imparcial de disputas',
          'Mantenimiento de la armonía societaria',
          'Cumplimiento de principios cooperativos'
        ]
      }
    ]
  },
  {
    id: 'derecho-laboral',
    title: 'Derecho Laboral',
    description: 'Resolución de conflictos laborales y protección de derechos tanto para empleadores como para trabajadores.',
    image: '/images/services/laboral.jpg',
    icon: 'lucide:briefcase',
    order: 5,
    subservices: [
      {
        id: 'asesoria-empresarial',
        title: 'Asesoría Empresarial Laboral',
        description: 'Gestión preventiva de recursos humanos y defensa ante el Ministerio de Trabajo.',
        details: [
          'Redacción de contratos de trabajo',
          'Visado de contratos y planillas',
          'Reglamentos internos de trabajo',
          'Procesos de reestructuración',
          'Defensa ante inspecciones laborales'
        ],
        process: [
          'Auditoría laboral de la empresa',
          'Regularización de documentación',
          'Implementación de normas de seguridad',
          'Atención a citaciones administrativas',
          'Negociación colectiva'
        ],
        benefits: [
          'Evita multas y sanciones',
          'Relaciones laborales claras',
          'Optimización de costos laborales',
          'Seguridad jurídica en contrataciones'
        ]
      },
      {
        id: 'litigio-laboral',
        title: 'Litigio y Reclamaciones',
        description: 'Defensa en procesos de despidos, beneficios sociales y reincorporaciones.',
        details: [
          'Cálculo y pago de beneficios sociales',
          'Demanda de reincorporación laboral',
          'Acoso laboral y discriminación',
          'Accidentes de trabajo',
          'Juicios laborales'
        ],
        process: [
          'Conciliación en el Ministerio de Trabajo',
          'Liquidación de finiquitos',
          'Presentación de demanda judicial',
          'Prueba y audiencias',
          'Ejecución de sentencia'
        ],
        benefits: [
          'Pago justo de beneficios',
          'Respeto a la estabilidad laboral',
          'Compensación por daños',
          'Resolución efectiva del conflicto'
        ]
      }
    ]
  },
  {
    id: 'derecho-minero',
    title: 'Derecho Minero',
    description: 'Asesoría especializada en la cadena productiva minera, permisos, regulaciones y medio ambiente.',
    image: '/images/services/mineria.jpg',
    icon: 'lucide:pickaxe',
    order: 6,
    subservices: [
      {
        id: 'contratos-mineros',
        title: 'Contratos y Concesiones',
        description: 'Gestión de derechos mineros y adecuación a la normativa estatal (AJAM).',
        details: [
          'Contratos Administrativos Mineros (CAM)',
          'Adecuaciones de derechos preconstituidos',
          'Contratos de riesgo compartido',
          'Transferencias y arrendamientos',
          'Pago de patentes mineras'
        ],
        process: [
          'Solicitud de área minera',
          'Consulta previa con comunidades',
          'Firma de contrato con el Estado',
          'Registro minero',
          'Informes de cumplimiento'
        ],
        benefits: [
          'Seguridad jurídica sobre la cuadrícula',
          'Derecho legal a la explotación',
          'Cumplimiento con el Estado',
          'Protección de la inversión'
        ]
      },
      {
        id: 'ambiental-social',
        title: 'Cumplimiento Ambiental y Social',
        description: 'Gestión de licencias ambientales y relaciones con comunidades locales.',
        details: [
          'Licencias Ambientales',
          'Manifiestos ambientales',
          'Acuerdos con comunidades',
          'Responsabilidad Social Empresarial',
          'Defensa ante sanciones ambientales'
        ],
        process: [
          'Evaluación de impacto ambiental',
          'Trámites ante autoridades competentes',
          'Negociación de compensaciones comunales',
          'Auditorías ambientales',
          'Planes de cierre de mina'
        ],
        benefits: [
          'Operación sostenible',
          'Evita paralización de actividades',
          'Buenas relaciones comunitarias',
          'Certificaciones de cumplimiento'
        ]
      }
    ]
  }
];