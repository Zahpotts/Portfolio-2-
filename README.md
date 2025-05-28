# Isaiah Potts - Portfolio Website 🐉

A dynamic, Dragon Ball Z-themed portfolio website showcasing my skills and projects as a Software Engineer. Built with Next.js and featuring immersive animations and interactive elements inspired by the iconic anime series.

## ✨ Features

### 🎨 Dragon Ball Z Theme
- **Animated Battle Scene Background**: Dynamic energy particles, lightning effects, and character silhouettes
- **Ki Energy Effects**: Glowing auras, energy beams, and ki-ball animations
- **Power-up Animations**: Hover effects with scaling and glowing transitions
- **Color Scheme**: Orange, yellow, and blue gradients inspired by the series

### 🚀 Modern Web Technologies
- **Next.js 14**: React framework with App Router
- **Tailwind CSS**: Utility-first styling with custom animations
- **Responsive Design**: Mobile-first approach with seamless adaptation
- **SEO Optimized**: Meta tags and structured data
- **Form Integration**: Contact form with Formspree integration

### 📱 Pages & Sections
- **Home**: Hero section with featured projects and skills showcase
- **About**: Personal background, experience, and technical skills
- **Projects**: Portfolio of web applications with live demos and GitHub links
- **Contact**: Interactive contact form with success animations

## 🛠️ Tech Stack

**Frontend:**
- Next.js 14
- React 18
- Tailwind CSS
- Custom CSS animations

**Deployment:**
- Vercel (recommended)
- Static site generation

**External Services:**
- Formspree (contact form handling)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Zahpotts/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website in action.

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Layout.js          # Main layout wrapper
│   │   ├── Navbar.js          # Navigation component
│   │   └── Footer.js          # Footer with social links
│   ├── projects/
│   │   └── ProjectCard.js     # Reusable project card
│   └── DragonBallBattleScene.js # Animated background
├── data/
│   ├── projects.js            # Project data and utilities
│   └── skills.js              # Skills and technologies
├── pages/
│   ├── _app.js                # App wrapper
│   ├── index.js               # Home page
│   ├── about.js               # About page
│   ├── contact.js             # Contact page
│   └── projects/
│       ├── index.js           # Projects listing
│       └── [slug].js          # Individual project pages
└── styles/
    └── globals.css            # Global styles and animations
```

## 🎯 Featured Projects

### Adventure Planner
A web application for planning local adventures with weather integration and activity suggestions.
- **Tech**: React, Node.js, Bootstrap, OpenTrip API, Open-Meteo API
- **Live Demo**: [adventure-planner-rouge.vercel.app](https://adventure-planner-rouge.vercel.app/)

### Weather App
Clean, responsive weather application with real-time data and location search.
- **Tech**: React, Node.js, TailwindCSS, Express.js, OpenWeatherMap API
- **Live Demo**: [weather-app-frontend-dfjc.onrender.com](https://weather-app-frontend-dfjc.onrender.com/)

### To-Do App
Simple, efficient task management application with CRUD operations.
- **Tech**: React, Node.js, Bootstrap
- **Live Demo**: [todo-app-sepia-phi-84.vercel.app](https://todo-app-sepia-phi-84.vercel.app/)

## 🎨 Custom Animations

### Ki Energy Effects
- **Ki Aura**: Pulsing glow effect for headings and important elements
- **Ki Ball**: Animated energy orb that appears on form success
- **Ki Button**: Hover effects with scaling and shadow animations
- **Ki Tags**: Skill tags with hover transformations

### Battle Scene Components
- **Energy Particles**: Floating, animated particles across the viewport
- **Energy Beams**: Rotating beam effects with gradient colors
- **Lightning**: Random lightning strikes for dramatic effect
- **Ground Craters**: Pulsing crater effects at the bottom
- **Character Silhouettes**: Floating character outlines with auras

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. **Connect your repository to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure build settings (Next.js preset works automatically)

2. **Environment Variables**
   - No environment variables required for basic functionality
   - Contact form uses Formspree (already configured)

3. **Deploy**
   - Vercel will automatically deploy on every push to main branch
   - Custom domain can be configured in Vercel dashboard

### Alternative Deployment Options
- **Netlify**: Drag and drop build folder or connect repository
- **GitHub Pages**: Use `next export` for static generation
- **Railway/Render**: Full-stack deployment options

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Zahpotts/portfolio-website/issues).

### Development Guidelines
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact

**Isaiah Potts**
- **Email**: [Contact Form](http://localhost:3000/contact)
- **LinkedIn**: [linkedin.com/in/isaiah-potts-710848148](https://www.linkedin.com/in/isaiah-potts-710848148)
- **GitHub**: [github.com/Zahpotts](https://github.com/Zahpotts)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Dragon Ball Z**: Inspiration for the theme and animations
- **Next.js Team**: For the amazing React framework
- **Tailwind CSS**: For utility-first styling approach
- **Vercel**: For seamless deployment platform
- **Creating Coding Careers**: For mentorship and guidance

---

**Power Level: Over 9000!** ⚡

*Built with ❤️ and a lot of ki energy by Isaiah Potts*