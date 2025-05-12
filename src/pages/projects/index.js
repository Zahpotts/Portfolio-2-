import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
export default function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <section>
                <h2>Featured Projects</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>
            <section>
                <h2>Other Projects</h2>
                <div>
                    {/* List other projects here */}
                </div>
            </section>
        </div>
    );
}