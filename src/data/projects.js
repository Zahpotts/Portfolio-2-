

export const projects = [
    {
        id:1,
        title: "Adventure Planner",
        description: 'A web application that plans your adventures',
        longDescription: "A web application that helps users plan their adventures by providing a platform to create, and discover adventure in their local area.",
        image: "",
        technologies: ["React", "Node.js", "Axios", "Bootstrap", "OpenTrip API", "Open-Meteo API"],
        githubUrl: "https://github.com/Zahpotts/Adventure-Planner-.git",
        liveUrl: "https://adventure-planner-rouge.vercel.app/",
        slug: "adventure-planner",
        featured: true
    },
    {
       id:2, 
       title: "To Do App",
         description: "A simple to-do list application",
        longDescription: "A simple to-do list application that allows users to add, edit, and delete tasks.",
        image: "",
        technologies: ["React", "Node.js", "Axios", "Bootstrap"],
        githubUrl: "https://github.com/Zahpotts/Todo-App.git",
        liveUrl: "https://todo-app-sepia-phi-84.vercel.app/",
        slug: "to-do-app",
        featured: false
    },
    {
        id:3,
        title: "Weather App",
        description: "A simple weather application",
        longDescription: "A simple weather application that allows users to search for the current weather in any city.",
        image: "",
        technologies: ["React", "Node.js", "Axios", "TailwindCSS", "Express.js", "OpenWeatherMap API"],
        githubUrl: "https://github.com/Zahpotts/Weather-App.git",
        liveUrl: "https://weather-app-frontend-dfjc.onrender.com/",
        slug: "weather-app",
        featured: true
    },
    {
        id:4,
        title: "AI Learning App",
        description: "An AI-powered learning application",
        longDescription: "An AI-powered learning application that helps users learn new skills by providing personalized learning paths and resources.",
        image: "",
        technologies: ["React", "Node.js", "CORS", "TailwindCSS", "Express.js", "Google Gemini API"],
        githubUrl: "https://github.com/Zahpotts/AI-Learning-App.git",
        liveUrl: "https://flashcard-app-sandy-pi.vercel.app/",
        slug: "ai-learning-app",
        featured: true
    },
    
];

export function getFeaturedProjects() {
    return projects.filter((project) => project.featured);
}
export function getProjectBySlug(slug) {
    return projects.find((project) => project.slug === slug);
}