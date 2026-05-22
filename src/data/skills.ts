export type SkillCategory = {
  id: string;
  icon: string;
  title: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    id: "mobile",
    icon: "📱",
    title: "Móvil",
    items: ["Flutter", "Dart", "Hive", "fl_chart", "BLE / ESP32"],
  },
  {
    id: "frontend",
    icon: "🌐",
    title: "Frontend",
    items: ["Next.js", "React", "HTML/CSS/JS", "Flutter Web"],
  },
  {
    id: "backend",
    icon: "⚙️",
    title: "Backend",
    items: ["Node.js", "Express", "Firebase", "Supabase", "PostgreSQL", "Prisma"],
  },
  {
    id: "ai",
    icon: "🤖",
    title: "IA & Datos",
    items: ["Claude API", "Python", "EDA / Data Mining", "Detección de anomalías"],
  },
  {
    id: "devops",
    icon: "☁️",
    title: "DevOps & Tools",
    items: ["Vercel", "Railway", "Git / GitHub", "Linux", "VS Code"],
  },
  {
    id: "methodologies",
    icon: "📐",
    title: "Metodologías",
    items: [
      "Auditoría de sistemas",
      "ISO 27001",
      "COSO 2013",
      "Calidad de software",
    ],
  },
];
