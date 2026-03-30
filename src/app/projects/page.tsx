import type { Metadata } from "next";
import projectsData from "@/data/projects.json";
import type { ProjectEntry } from "@/types";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  const projects = (projectsData as ProjectEntry[]).sort(
    (a, b) => b.year - a.year,
  );

  let lastYear = 0;

  return (
    <div className="flex flex-col gap-4">
      <div className="text-glow">
        <span className="text-amber-dim">C:\PROJECTS&gt;</span>{" "}
        <span className="text-amber-bright">dir /chronological</span>
      </div>

      <p className="text-amber-dim text-sm">
        Displaying {projects.length} projects...
      </p>

      <div className="flex flex-col">
        {projects.map((project, index) => {
          const showYear = project.year !== lastYear;
          lastYear = project.year;

          return (
            // biome-ignore lint/suspicious/noArrayIndexKey: Static data
            <div key={index}>
              {showYear && (
                <div className="flex items-center gap-2 mt-4 mb-2">
                  <span className="text-amber-bright text-glow-strong text-lg">
                    [{project.year}]
                  </span>
                  <span className="text-amber-dim flex-1 overflow-hidden whitespace-nowrap">
                    &#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;&#9472;
                  </span>
                </div>
              )}

              <div className="pl-2 sm:pl-4 py-2 border-l border-amber-dim ml-3">
                <div className="relative">
                  <div className="absolute left-[-calc(0.75rem+1px)] sm:left-[-calc(1rem+1px)] top-1 text-amber-dim">
                    &#9500;&#9472;
                  </div>
                  <div className="pl-4 sm:pl-6">
                    <div className="text-amber-bright text-glow">
                      {project.name}
                    </div>
                    <p className="text-amber mt-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-amber-dim text-sm border border-amber-dim px-2 py-0.5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-amber-dim text-sm text-glow mt-4">
        <span>--- END OF DIRECTORY ---</span>
      </div>
    </div>
  );
}
