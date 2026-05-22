import type { Metadata, Viewport } from "next";
import { Sora, Space_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";
import { ScrollProgress } from "@/components/ScrollProgress";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
  weight: ["400", "700"],
});

const SITE_URL = "https://santiago-duran.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.name} · ${profile.role}`,
    template: `%s · ${profile.shortName}`,
  },
  description:
    "Portafolio de Santiago Durán Canedo, Ingeniero de Sistemas (último semestre). Construyo software real para problemas reales: Mandao, tuperfil.net, Turnex, Namu Code y más.",
  keywords: [
    "Santiago Durán",
    "Ingeniero de Sistemas",
    "desarrollador full stack",
    "Next.js",
    "Flutter",
    "Node.js",
    "Colombia",
    "portafolio",
    "Mandao",
    "tuperfil.net",
    "Namu Code",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: SITE_URL,
    siteName: profile.shortName,
    title: `${profile.name} · ${profile.role}`,
    description:
      "Construyo software real para problemas reales. Apps en producción, freelance y proyectos académicos.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} · Portafolio`,
    description:
      "Construyo software real para problemas reales. Apps en producción, freelance y proyectos académicos.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${sora.variable} ${spaceMono.variable}`}>
      <body className="min-h-screen antialiased">
        <div className="bg-orbs" aria-hidden>
          <div className="orb orb-green animate-float-slow" />
          <div className="orb orb-cyan animate-float-slower" />
          <div className="orb orb-violet animate-float-slowest" />
        </div>
        <div className="bg-grid" aria-hidden />
        <div className="bg-noise" aria-hidden />
        <div className="bg-grain" aria-hidden />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
