export type ProjectStatus =
  | "EN PRODUCCIÓN"
  | "EN DESARROLLO"
  | "ACTIVO"
  | "ACADÉMICO";

export type Project = {
  slug: string;
  name: string;
  emoji: string;
  status: ProjectStatus;
  description: string;
  tags: string[];
  url?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: "mandao",
    name: "Mandao",
    emoji: "🛵",
    status: "EN PRODUCCIÓN",
    description:
      "Plataforma de domicilios y mensajería operada por WhatsApp con agente de IA. Sistema de precios por zonas para los 192 barrios de Valledupar. Dashboard web en tiempo real.",
    tags: ["Node.js", "Firebase", "WhatsApp Cloud API", "Claude AI", "Flutter Web"],
  },
  {
    slug: "tuperfil-net",
    name: "tuperfil.net",
    emoji: "📰",
    status: "EN PRODUCCIÓN",
    description:
      "Portal de noticias regional para Valledupar y Cesar. Frontend, panel admin, RSS, SEO/sitemap automático, AdSense. Desplegado en Vercel.",
    tags: ["Next.js", "Supabase", "Vercel", "SEO"],
  },
  {
    slug: "stats-futbol-amateur",
    name: "Stats de Fútbol Amateur",
    emoji: "⚽",
    status: "EN DESARROLLO",
    description:
      "App móvil para gestión de estadísticas de fútbol amateur en Cali (proyecto de tesis). Sensores DIY con ESP32 vía Bluetooth para captura en cancha y gráficas interactivas.",
    tags: ["Flutter", "Dart", "Firebase", "Hive", "ESP32 BLE"],
  },
  {
    slug: "turnex",
    name: "Turnex",
    emoji: "💈",
    status: "EN DESARROLLO",
    description:
      "SaaS white-label de reserva de citas para barberías y salones en Colombia. Arquitectura multi-tenant.",
    tags: ["Node.js", "Firebase", "Multi-tenant", "SaaS"],
  },
  {
    slug: "namu-code",
    name: "Namu Code",
    emoji: "🌳",
    status: "ACTIVO",
    description:
      "Marca de desarrollo de software (나무 = “árbol” en coreano). Landing que agrupa proyectos y servicios a la medida.",
    tags: ["Branding", "Web", "Freelance"],
  },
  {
    slug: "contrato-limpio",
    name: "ContratoLimpio",
    emoji: "🔍",
    status: "ACADÉMICO",
    description:
      "Propuesta de sistema de detección de anomalías con IA para contratación pública colombiana (datos SECOP), alineado con CONPES 4144.",
    tags: ["IA", "Detección de anomalías", "SECOP", "Datos abiertos"],
  },
];
