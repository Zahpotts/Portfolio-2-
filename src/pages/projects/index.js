import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 via-yellow-50 to-blue-100 py-12 px-6 text-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Projects Section Header with Glowing Effect */}
        <h1 className="text-5xl font-extrabold text-orange-600 text-center mb-12 drop-shadow-lg ki-aura">
          Projects
        </h1>

        <section className="mb-16">
          {/* Featured Projects Header with Glowing Effect */}
          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center ki-aura">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section>
          {/* Other Projects Header with Glowing Effect */}
          <h2 className="text-3xl font-bold text-orange-700 mb-4 text-center ki-aura">
            Other Projects
          </h2>
          <div className="text-center text-gray-500 italic ki-glow-text">
            Coming soon...
          </div>
        </section>
      </div>
    </div>
  );
}
