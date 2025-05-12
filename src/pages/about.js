export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 via-orange-100 to-blue-100 py-12 px-6 text-gray-900">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 border-4 border-orange-500">
        {/* About Me Heading with Ki Aura */}
        <h1 className="text-4xl font-extrabold text-center text-orange-600 mb-10 drop-shadow-lg ki-aura">
          About Me
        </h1>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">Background</h2>
          <p className="text-lg text-gray-700">
            Add background here
          </p>
        </section>

        {/* Skills Section with Glow Effect */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 ki-aura">
            Skills
          </h2>
          <ul className="flex flex-wrap gap-3">
            {["JavaScript", "React", "Node.js", "HTML/CSS", "Next.js"].map((skill) => (
              <li
                key={skill}
                className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm shadow transition duration-300 hover:scale-110 hover:shadow-lg"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Experience Section with Ki Effect */}
        <section>
          <h2 className="text-2xl font-bold text-blue-700 mb-4 ki-aura">
            Experience
          </h2>
          <div className="bg-orange-100 border-l-4 border-blue-600 p-4 rounded shadow transition-all hover:bg-orange-200">
            <h3 className="text-lg font-semibold text-orange-700">
              Software Engineer Intern at Creating Coding Careers
            </h3>
            <p className="text-gray-700">
              Worked on various projects using React and Node.js.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
