import Link from "next/link";
import { getFeaturedProjects } from "@/data/projects";
import { skills } from "@/data/skills";
import ProjectCard from "@/components/projects/ProjectCard";

export default function Home() {
    const featuredProjects = getFeaturedProjects();
  
   return ( 
    <div className="bg-gradient-to-br from-orange-400 via-yellow-300 to-blue-500 min-h-screen text-white font-sans">
      
      {/* Hero Section with Glowing Effect */}
      <section className="text-center py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-2 text-shadow ki-aura">Isaiah Potts</h1>
          <h2 className="text-2xl font-semibold mb-4 ki-aura">Software Engineer</h2>
          <p className="text-lg mb-6">Welcome to my portfolio! I am a Software Engineer with a passion for creating beautiful and functional websites.</p>
          <div className="space-x-4">
            <Link href="/projects" className="bg-blue-700 hover:bg-blue-800 px-6 py-2 rounded-full shadow-lg transition ki-button">View Projects</Link>
            <Link href="/contact" className="bg-yellow-500 hover:bg-yellow-600 px-6 py-2 rounded-full shadow-lg transition ki-button">Contact Me</Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="bg-white text-black py-10">
        <h2 className="text-3xl font-bold text-center mb-6 ki-aura">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Skills Section with Glowing Tags */}
      <section className="py-10 bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-6 ki-aura">Skills & Technologies</h2>
        <div className="grid gap-4 px-4">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category}>
              <h3 className="text-xl font-semibold text-orange-400">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {skillGroup.items.map((skill) => (
                  <span key={skill} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm shadow transition-all hover:scale-110 hover:shadow-xl ki-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
   );
}
