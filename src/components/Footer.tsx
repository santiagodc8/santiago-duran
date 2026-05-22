import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-[var(--border)] mt-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="font-mono text-xs text-text-faint">
          © {year} {profile.name}. Hecho con Next.js + Framer Motion.
        </p>
        <p className="font-mono text-xs text-text-faint">
          Cali, Colombia &middot; v1.0
        </p>
      </div>
    </footer>
  );
}
