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
  /** Path relative to /public (e.g. "/projects/mandao.png") */
  logo?: string;
  /** Background color used behind the logo tile when the asset is dark/transparent. */
  logoBg?: string;
};

export const projects: Project[] = [
  {
    slug: "mandao",
    name: "Mandao",
    emoji: "🛵",
    logo: "/projects/mandao.png",
    logoBg: "#ffffff",
    url: "https://mandao-landing.vercel.app/",
    status: "EN PRODUCCIÓN",
    description:
      "Plataforma de domicilios y mensajería operada por WhatsApp con agente de IA. Sistema de precios por zonas para los 192 barrios de Valledupar. Dashboard web en tiempo real.",
    tags: ["Node.js", "Firebase", "WhatsApp Cloud API", "Claude AI", "Flutter Web"],
  },
  {
    slug: "tuperfil-net",
    name: "tuperfil.net",
    emoji: "📰",
    logo: "/projects/tuperfil-net.png",
    logoBg: "#0a0a0f",
    url: "https://www.tuperfil.net/",
    status: "EN PRODUCCIÓN",
    description:
      "Portal de noticias regional para Valledupar y Cesar. Frontend, panel admin, RSS, SEO/sitemap automático, AdSense. Desplegado en Vercel.",
    tags: ["Next.js", "Supabase", "Vercel", "SEO"],
  },
  {
    slug: "stats-futbol-amateur",
    name: "Stats de Fútbol Amateur",
    emoji: "⚽",
    logo: "/projects/stats-futbol-amateur.png",
    logoBg: "#0a0a0f",
    url: "https://matchmetricsapp.vercel.app/",
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
];
