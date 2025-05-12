import { useRouter } from "next/router";
import { getProjectBySlug } from "@/data/projects";

export default function ProjectDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const project = slug ? getProjectBySlug(slug) : null;

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-500 to-yellow-400 text-white font-bold text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-yellow-100 via-orange-200 to-blue-200 min-h-screen py-12 px-6 text-gray-900 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 border-4 border-orange-500">
        <h1 className="text-4xl font-extrabold text-center text-orange-600 mb-4 drop-shadow-lg">
          {project.title}
        </h1>

        <div className="mb-6">
          {/* Add project image here */}
          <div className="w-full h-64 bg-gray-100 rounded-lg shadow-inner flex items-center justify-center text-gray-400 italic">
            Project Image Placeholder
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">Project Description</h2>
          <p className="text-lg leading-relaxed">{project.longDescription}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">Technologies Used</h2>
          <ul className="list-disc list-inside space-y-1 pl-4">
            {project.technologies.map((tech) => (
              <li key={tech} className="text-orange-700">{tech}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">Project Links</h2>
          <div className="flex gap-4 flex-wrap">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-800 transition"
              >
                GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-black px-4 py-2 rounded-full shadow hover:bg-yellow-500 transition"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
