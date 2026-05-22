import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section
      id="proyectos"
      className="relative py-24 sm:py-32 px-5 sm:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          index="01"
          eyebrow="LO QUE HE CONSTRUIDO"
          title={
            <>
              Proyectos que <span className="text-gradient">resuelven algo</span>.
            </>
          }
          description="Cada uno nace de un problema real: del barrio, de un familiar, de la cancha. No son demos: están desplegados o en construcción activa."
        />

        <div className="mt-14 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
