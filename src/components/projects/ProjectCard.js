import Link from "next/link";

export default function ProjectCard({ project }) {
    return(
   <div>
    <div>
        {/* Add project image here */}
        <div style={{ width: "100%", height: "200px", backgroundColor: "#ccc" }}></div>

    </div>
    <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div>
            {project.technologies.map((tech) => (
                <span ket = {tech}></span>
            ))}
        </div>
    </div>
    <div>
        <Link href={`/projects/${project.slug}`}>View Project</Link>
        <div>
            {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
            )}
            {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo
                </a>
            )}
            </div>
        </div>
   </div>
    );
}