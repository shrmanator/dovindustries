import Image from "next/image";

type Project = {
  name: string;
  logo?: string;
  url?: string;
  summary: string;
  focus: string[];
  status: string;
  highlight: string;
  stack: string;
};

export function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section
      id="work"
      className="border-b-4 border-accent px-6 py-24"
    >
      <div className="mb-16">
        <h2 className="text-[8vw] md:text-[6vw] font-black uppercase leading-[0.85] mb-8">
          SELECTED<br/>
          <span className="text-accent">WORK</span>
        </h2>
      </div>

      <div className="space-y-0">
        {projects.map((project, index) => (
          <article
            key={project.name}
            className="group border-4 border-white p-8 md:p-16 hover:border-accent transition-colors"
          >
            <div className="mb-8 flex items-start justify-between">
              <div className="text-9xl font-black opacity-10 group-hover:opacity-20 group-hover:text-accent">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="flex gap-4 text-xs uppercase">
                <span className="flex items-center gap-2 border-2 border-current px-3 py-1">
                  {project.status === 'Live' && (
                    <span className="beacon h-2 w-2 rounded-full bg-accent inline-block" />
                  )}
                  {project.status}
                </span>
                <span className="border-2 border-current px-3 py-1">{project.stack}</span>
              </div>
            </div>

            <div className="mb-8 flex items-center gap-6">
              {project.logo && (
                <Image
                  src={project.logo}
                  alt={`${project.name} logo`}
                  width={120}
                  height={80}
                  className="h-16 w-auto object-contain brightness-0 invert md:h-20"
                />
              )}
              <h3 className="text-4xl md:text-6xl font-black uppercase">
                {project.name}
              </h3>
            </div>

            <p className="mb-8 max-w-4xl text-xl md:text-2xl leading-relaxed">
              {project.summary}
            </p>

            <div className="mb-8 border-l-4 border-accent pl-6 text-accent">
              <p className="text-lg font-bold uppercase">
                → {project.highlight}
              </p>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {project.focus.map((topic) => (
                <span
                  key={topic}
                  className="border-2 border-current px-4 py-2 text-sm uppercase"
                >
                  {topic}
                </span>
              ))}
            </div>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-accent bg-accent px-6 py-3 text-sm font-black uppercase text-black hover:bg-black hover:text-accent transition-colors"
              >
                → VISIT_SITE
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export type { Project };
