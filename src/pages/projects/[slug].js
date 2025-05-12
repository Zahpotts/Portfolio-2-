import { useRouter } from "next/router";
import { getProjectBySlug } from "@/data/projects";

export default function ProjectDetail(){
    const router = useRouter();
    const { slug } = router.query;
    const project = slug ? getProjectBySlug(slug) : null;
    if (!project) {
        return <div>Loading...</div>;
    }
    return(
        <div>
            <h1>{project.title}</h1>
            
            <div>
                {/* Add project image here */}
            </div>
            <div>
                <h2>Project Description</h2>
                <p>{project.longDescription}</p>
                </div>
                <div>
                <h2>Technologies Used</h2>
                <ul>
                    {project.technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
                    ))}
                </ul>
                </div>
                <div>
                <h2>Project Links</h2>
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
    )
}