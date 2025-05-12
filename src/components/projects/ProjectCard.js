export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl border-4 border-orange-400 hover:border-blue-500 transition transform hover:scale-105 duration-300 overflow-hidden">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-orange-600 mb-2">{project.title}</h3>
        <p className="text-gray-700 mb-4 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition"
            >
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-500 transition"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
