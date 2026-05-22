import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiSupabase,
  SiPostgresql,
  SiPrisma,
  SiFlutter,
  SiDart,
  SiPython,
  SiVercel,
  SiRailway,
  SiGit,
  SiGithub,
  SiLinux,
  SiHive,
  SiWhatsapp,
  SiEspressif,
  SiHtml5,
  SiJavascript,
  SiClaude,
} from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { VscCode } from "react-icons/vsc";
import {
  LuDatabase,
  LuBrainCircuit,
  LuShieldCheck,
  LuSearch,
} from "react-icons/lu";

export type IconDef = { Icon: IconType; color: string; label: string };

export const iconMap: Record<string, IconDef> = {
  nextjs: { Icon: SiNextdotjs, color: "#ffffff", label: "Next.js" },
  react: { Icon: SiReact, color: "#61DAFB", label: "React" },
  typescript: { Icon: SiTypescript, color: "#3178C6", label: "TypeScript" },
  tailwind: { Icon: SiTailwindcss, color: "#06B6D4", label: "Tailwind CSS" },
  nodejs: { Icon: SiNodedotjs, color: "#5FA04E", label: "Node.js" },
  express: { Icon: SiExpress, color: "#ffffff", label: "Express" },
  firebase: { Icon: SiFirebase, color: "#FFCA28", label: "Firebase" },
  supabase: { Icon: SiSupabase, color: "#3ECF8E", label: "Supabase" },
  postgres: { Icon: SiPostgresql, color: "#4169E1", label: "PostgreSQL" },
  prisma: { Icon: SiPrisma, color: "#e8e8ee", label: "Prisma" },
  flutter: { Icon: SiFlutter, color: "#02569B", label: "Flutter" },
  dart: { Icon: SiDart, color: "#0175C2", label: "Dart" },
  python: { Icon: SiPython, color: "#FFD43B", label: "Python" },
  vercel: { Icon: SiVercel, color: "#ffffff", label: "Vercel" },
  railway: { Icon: SiRailway, color: "#ffffff", label: "Railway" },
  git: { Icon: SiGit, color: "#F05032", label: "Git" },
  github: { Icon: SiGithub, color: "#ffffff", label: "GitHub" },
  linkedin: { Icon: FaLinkedin, color: "#0A66C2", label: "LinkedIn" },
  linux: { Icon: SiLinux, color: "#FCC624", label: "Linux" },
  hive: { Icon: SiHive, color: "#FFC107", label: "Hive" },
  whatsapp: { Icon: SiWhatsapp, color: "#25D366", label: "WhatsApp" },
  esp32: { Icon: SiEspressif, color: "#E7352C", label: "ESP32" },
  claude: { Icon: SiClaude, color: "#D97757", label: "Claude AI" },
  html: { Icon: SiHtml5, color: "#E34F26", label: "HTML5" },
  javascript: { Icon: SiJavascript, color: "#F7DF1E", label: "JavaScript" },
  vscode: { Icon: VscCode, color: "#3B96D2", label: "VS Code" },
  database: { Icon: LuDatabase, color: "#a78bfa", label: "Database" },
  ai: { Icon: LuBrainCircuit, color: "#a78bfa", label: "IA" },
  shield: { Icon: LuShieldCheck, color: "#4ade80", label: "ISO" },
  search: { Icon: LuSearch, color: "#22d3ee", label: "Auditoría" },
};

const aliases: Record<string, string> = {
  "node.js": "nodejs",
  "next.js": "nextjs",
  "whatsapp cloud api": "whatsapp",
  "claude ai": "claude",
  "claude api": "claude",
  "flutter web": "flutter",
  "esp32 ble": "esp32",
  "ble / esp32": "esp32",
  "html/css/js": "javascript",
  "postgresql": "postgres",
  "fl_chart": "flutter",
  "iso 27001": "shield",
  "coso 2013": "shield",
  "calidad de software": "shield",
  "auditoría de sistemas": "search",
  "detección de anomalías": "ai",
  "ia": "ai",
  "secop": "database",
  "datos abiertos": "database",
  "eda / data mining": "ai",
  "git / github": "github",
  "vs code": "vscode",
  "multi-tenant": "database",
  "saas": "database",
  "seo": "search",
};

const normalize = (s: string) =>
  s
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");

export function iconForTag(tag: string): IconDef | null {
  const n = normalize(tag);
  const aliased = aliases[n];
  if (aliased && iconMap[aliased]) return iconMap[aliased];
  const key = n.replace(/[.\s/-]+/g, "");
  if (iconMap[key]) return iconMap[key];
  return null;
}

export const marqueeStack: IconDef[] = [
  iconMap.nextjs,
  iconMap.react,
  iconMap.typescript,
  iconMap.flutter,
  iconMap.dart,
  iconMap.nodejs,
  iconMap.firebase,
  iconMap.supabase,
  iconMap.postgres,
  iconMap.python,
  iconMap.claude,
  iconMap.tailwind,
  iconMap.vercel,
  iconMap.git,
  iconMap.github,
  iconMap.linux,
  iconMap.whatsapp,
  iconMap.esp32,
];
