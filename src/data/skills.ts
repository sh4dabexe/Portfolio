export interface Skill {
  id: string;
  name: string;
  proficiency: number;
  description: string;
  technologies: string[];
  icon: string;
}

export const skills: Skill[] = [
  {
    id: "web-dev",
    name: "Web Development",
    proficiency: 80,
    description: "Building modern, responsive websites from scratch using HTML, CSS, and JavaScript with clean and maintainable code.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Semantic Web"],
    icon: "Globe"
  },
  {
    id: "frontend-dev",
    name: "Front-end Development",
    proficiency: 78,
    description: "Crafting pixel-perfect, interactive UIs with smooth animations, glassmorphism, and fully responsive layouts.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion"],
    icon: "Layout"
  },
  {
    id: "video-editing",
    name: "Video Editing",
    proficiency: 65,
    description: "Editing videos with clean cuts, effects, and color grading — from short clips to polished final productions.",
    technologies: ["Premiere Pro", "Color Grading", "Motion Cuts", "Audio Sync"],
    icon: "Film"
  },
  {
    id: "python",
    name: "Python",
    proficiency: 60,
    description: "Writing functional Python scripts and tools — automation, web scraping, CLI tools, and small applications.",
    technologies: ["Python 3", "Pygame", "Automation", "CLI Tools", "Web Scraping"],
    icon: "Terminal"
  }
];
