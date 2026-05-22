# CLAUDE.md — Portafolio de Santiago Durán

## Objetivo del proyecto
Portafolio web personal para buscar trabajo (prácticas, primer empleo como dev, freelance) y mostrarlo a empresas. El dueño es estudiante de último semestre de Ingeniería de Sistemas con varios proyectos reales en producción. La prioridad de contenido es: **1) Proyectos, 2) Stack técnico, 3) Historia/perfil, 4) Contacto/CV**.

## Stack
- **Next.js 15** (App Router)
- **React** con componentes de servidor por defecto; usar `"use client"` solo cuando se necesite interactividad (animaciones de scroll, navbar)
- **TypeScript** en modo estricto, sin `any`
- **CSS Modules o Tailwind CSS** (preferir Tailwind para velocidad; si se usa CSS plano, usar variables CSS)
- **Framer Motion** para animaciones (reveal on scroll, stagger en hero)
- Despliegue final en **Vercel**

## Comandos
- `npm run dev` — servidor de desarrollo en puerto 3000
- `npm run build` — build de producción
- `npm run lint` — ESLint

## Identidad visual (tono: moderno con personalidad, dark mode)
Paleta dark mode con acentos en gradiente verde/cyan/violeta:
```
--bg: #0a0a0f          /* fondo principal */
--bg-soft: #12121a     /* fondos suaves */
--bg-card: #16161f     /* tarjetas */
--border: #23232f      /* bordes */
--text: #e8e8ee        /* texto principal */
--text-dim: #8a8a99    /* texto secundario */
--text-faint: #5a5a68  /* texto tenue */
--accent: #4ade80      /* verde — acento principal */
--accent-2: #22d3ee    /* cyan */
--accent-3: #a78bfa    /* violeta */
```
- **Tipografía**: `Sora` para títulos/cuerpo (display) y `Space Mono` para detalles técnicos (tags, índices, números de stats). Cargar desde Google Fonts vía `next/font`.
- **Efectos de fondo**: grid sutil con máscara radial + 3 orbes con blur animados flotando (verde, cyan, violeta).
- **Animaciones**: reveal al hacer scroll (fade + translateY), navbar que añade borde al hacer scroll, hover en tarjetas (translateY -6px + barra de gradiente superior que crece), ping animado en el badge de "disponible".
- Evitar estética genérica de IA. Tipografía y composición con carácter.

## Estructura sugerida
```
src/
  app/
    layout.tsx          # fuentes, metadata SEO
    page.tsx            # ensambla las secciones
    globals.css         # variables CSS, reset, efectos de fondo
  components/
    Navbar.tsx          # "use client" — efecto scroll + menú móvil
    Hero.tsx            # tag disponible, título con gradiente, stats
    Projects.tsx        # grid de tarjetas de proyectos
    ProjectCard.tsx     # tarjeta individual con status badge
    Skills.tsx          # categorías de stack técnico
    About.tsx           # texto + timeline
    Contact.tsx         # CTA + enlaces (email, LinkedIn, GitHub, CV)
    Footer.tsx
  data/
    projects.ts         # array de proyectos (fuente de verdad)
    skills.ts           # categorías de skills
```

## Datos del perfil

### Headline
"Construyo software real para problemas reales."
Santiago Durán Canedo — Ingeniero de Sistemas en último semestre (Universidad Cooperativa de Colombia, sede Cali). No solo estudia código: despliega apps en producción para negocios y emprendimientos.

### Stats del hero
- 7+ proyectos construidos
- 3 en producción
- 5+ años programando

### Proyectos (data/projects.ts)
1. **Mandao** — `EN PRODUCCIÓN` — 🛵
   Plataforma de domicilios y mensajería operada por WhatsApp con agente de IA. Sistema de precios por zonas para los 192 barrios de Valledupar. Dashboard web en tiempo real.
   Tags: Node.js, Firebase, WhatsApp Cloud API, Claude AI, Flutter Web

2. **tuperfil.net** — `EN PRODUCCIÓN` — 📰
   Portal de noticias regional para Valledupar y Cesar. Frontend, panel admin, RSS, SEO/sitemap automático, AdSense. Desplegado en Vercel.
   Tags: Next.js, Supabase, Vercel, SEO

3. **Stats de Fútbol Amateur** — `EN DESARROLLO` — ⚽
   App móvil para gestión de estadísticas de fútbol amateur en Cali (proyecto de tesis). Sensores DIY con ESP32 vía Bluetooth para captura en cancha y gráficas interactivas.
   Tags: Flutter, Dart, Firebase, Hive, ESP32 BLE

4. **Turnex** — `EN DESARROLLO` — 💈
   SaaS white-label de reserva de citas para barberías y salones en Colombia. Arquitectura multi-tenant.
   Tags: Node.js, Firebase, Multi-tenant, SaaS

5. **Namu Code** — `ACTIVO` — 🌳
   Marca de desarrollo de software (나무 = "árbol" en coreano). Landing que agrupa proyectos y servicios a la medida.
   Tags: Branding, Web, Freelance

6. **ContratoLimpio** — `ACADÉMICO` — 🔍
   Propuesta de sistema de detección de anomalías con IA para contratación pública colombiana (datos SECOP), alineado con CONPES 4144.
   Tags: IA, Detección de anomalías, SECOP, Datos abiertos

### Stack técnico (data/skills.ts)
- **📱 Móvil**: Flutter, Dart, Hive, fl_chart, BLE / ESP32
- **🌐 Frontend**: Next.js, React, HTML/CSS/JS, Flutter Web
- **⚙️ Backend**: Node.js, Express, Firebase, Supabase, PostgreSQL, Prisma
- **🤖 IA & Datos**: Claude API, Python, EDA / Data Mining, Detección de anomalías
- **☁️ DevOps & Tools**: Vercel, Railway, Git / GitHub, Linux, VS Code
- **📐 Metodologías**: Auditoría de sistemas, ISO 27001, COSO 2013, Calidad de software

### Sobre mí
Estudia Ingeniería de Sistemas en la Universidad Cooperativa de Colombia (sede Cali), último semestre. Patrón: detectar un problema concreto y resolverlo con código. Ejemplos: domicilios del hermano → Mandao; portal del tío → tuperfil.net; fútbol amateur sin stats → app con sensores propios. Cómodo en todo el stack, aprende rápido.

Timeline:
- **2026 · Actualidad**: Último semestre + tesis (app fútbol con ESP32). Auditoría de sistemas con ISO/COSO.
- **2025**: Mandao & tuperfil.net en producción.
- **2024**: Fundó Namu Code, empezó freelance.

### Contacto (PLACEHOLDERS — reemplazar con datos reales)
- Email: tucorreo@ejemplo.com
- LinkedIn: #
- GitHub: #
- CV: /cv-santiago-duran.pdf (colocar PDF en /public)

## Convenciones
- Mensajes de commit en modo imperativo, < 72 caracteres.
- Datos de proyectos y skills viven en `src/data/` como fuente única de verdad; los componentes los mapean.
- Metadata SEO completa en `layout.tsx` (title, description, Open Graph) — el sitio debe indexar bien para que las empresas lo encuentren.
- Responsive: el menú de navegación colapsa en móvil (<768px).
- Idioma del contenido: español (con opción de versión bilingüe más adelante).
