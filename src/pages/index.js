import Link from "next/link";
import { getFeaturedProjects } from "@/data/projects";
import {skills} from "@/data/skills";
import ProjectCard from "@/components/projects/ProjectCard";

export default function Home() {
    const featuredProjects = getFeaturedProjects();
   return ( 
    <div>
        <section>
            <div>
                <h1> Isaiah Potts</h1>
                <h2>Software Engineer</h2>
                <p>Welcome to my portfolio! I am a Software Engineer with a passion for creating beautiful and functional websites. </p>
                <div>
                    <Link href="/projects">View Projects</Link>
                    <Link href="/contact">Contact Me</Link>
                </div>
            </div>
        </section>
        <section>
            <h2>Featured Projects</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
            {getFeaturedProjects().map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
            </div>
        </section>
        <section>
            <h2>Skills & Technologies</h2>
            <div>
                {skills.map((skillGroup) => (
                    <div key={skillGroup.category}>
                        <h3>{skillGroup.category}</h3>
                        <div>
                            {skillGroup.skills.map((skill) => (
                                <span key={skill}>{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
   );
}