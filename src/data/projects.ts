export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  subCategory: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  storyHeading?: string;
  storyText?: string;
}

export const projects: Project[] = [
  {
    id: "dmrc",
    number: "01",
    title: "DMRC (MetroFlow)",
    category: "TRANSIT ROUTING / GRAPH ALGORITHMS",
    subCategory: "Delhi Metro Multi-Route SaaS",
    description: "An intelligent journey planner and alternative-route discovery engine for the Delhi-NCR Metro network featuring an interactive SVG vector map, fare calculators, and station timings.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Graph Algorithms", "Interactive SVG"],
    githubUrl: "https://github.com/sh4dabexe/DMRC",
    demoUrl: "https://metro-tool.netlify.app/",
    storyHeading: "Mapping Delhi's underground transit arteries.",
    storyText: "MetroFlow calculates minimum-station routes, official fare slabs, and transfer alternatives across 261 stations and 12 lines with deterministic graph search.",
  },
  {
    id: "vidora",
    number: "02",
    title: "Vidora",
    category: "DESKTOP APP / MEDIA ENGINE",
    subCategory: "YouTube Video & Audio Downloader",
    description: "A high-performance desktop application for downloading YouTube videos and playlists in custom resolutions up to 4K 60fps or extracting pristine 320kbps MP3 audio with concurrent queue workers.",
    tags: ["Electron", "React", "TypeScript", "Tailwind CSS", "Vite", "yt-dlp", "FFmpeg"],
    githubUrl: "https://github.com/sh4dabexe/Vidora",
    storyHeading: "High-throughput desktop media processing.",
    storyText: "Vidora unifies yt-dlp and FFmpeg streams behind a modern desktop UI with real-time speed, ETA telemetry, and concurrent job workers.",
  },
  {
    id: "unhooked",
    number: "03",
    title: "Unhooked",
    category: "ANDROID / DIGITAL WELLBEING",
    subCategory: "Mindful Focus & App Blocker",
    description: "A modern, local-first Android digital wellbeing application built with Kotlin and Jetpack Compose. Features drift-resistant focus timers, zero-conflict accessibility blocking, and mindful telemetry charts.",
    tags: ["Kotlin", "Jetpack Compose", "Android SDK", "Room DB", "Accessibility Service"],
    githubUrl: "https://github.com/sh4dabexe/Unhooked",
    storyHeading: "Reclaiming digital attention through mindful design.",
    storyText: "Engineered with local-first Room persistence and zero-tapjacking architecture to protect user privacy while enforcing strict habit boundaries.",
  },
  {
    id: "chess-online-3d",
    number: "04",
    title: "Chess Online 3D",
    category: "CHESS / 3D WEB EXPERIENCE",
    subCategory: "Interactive 3D Game",
    description: "A browser-based 3D chess experience focused on interaction, presentation, and making a familiar game feel spatial.",
    tags: ["JavaScript", "3D Web", "Game Dev", "Spatial UI"],
    githubUrl: "https://github.com/sh4dabexe/ChessOnline3D",
    demoUrl: "https://chess-online3-d.vercel.app/",
    storyHeading: "Chess, rebuilt as a world.",
    storyText: "A browser-based 3D chess experience focused on interaction, presentation, and making a familiar game feel spatial.",
  },
  {
    id: "cutter",
    number: "05",
    title: "Cutter",
    category: "URL SHORTENER / ANALYTICS",
    subCategory: "Link Shortener & SaaS",
    description: "A fast and minimal URL shortener and link analytics web app designed to generate custom branded short links, monitor real-time click metrics, and simplify link management.",
    tags: ["React", "URL Shortener", "Analytics", "Link Management", "Tailwind CSS"],
    githubUrl: "https://github.com/sh4dabexe/Cutter",
    demoUrl: "https://cutter-black.vercel.app/",
    storyHeading: "Short links, high signal.",
    storyText: "Cutter transforms long, cumbersome URLs into fast, trackable short links with real-time analytics.",
  },
  {
    id: "typeforge",
    number: "06",
    title: "TypeForge",
    category: "WEB APP / INTERFACE",
    subCategory: "Typing Engine",
    description: "A modern typing-test experience designed around accurate input tracking, clean UI feedback, and a focused practice workflow.",
    tags: ["JavaScript", "Typing Engine", "Feedback Loop", "UI"],
    githubUrl: "https://github.com/sh4dabexe/Typeforge",
    // Demo intentionally TBD per spec
    storyHeading: "Typing becomes an interface.",
    storyText: "TypeForge explores speed, feedback, and the rhythm of interaction.",
  },
  {
    id: "ludo-online",
    number: "07",
    title: "Ludo Online",
    category: "GAME / WEB APPLICATION",
    subCategory: "Multiplayer Board Game",
    description: "An online Ludo game with a clean interface and smooth gameplay experience — bringing the classic board game to the browser.",
    tags: ["HTML", "CSS", "JavaScript", "Turn Logic"],
    githubUrl: "https://github.com/sh4dabexe/LudoOnline",
    demoUrl: "https://ludo-online-phi.vercel.app/",
    storyHeading: "Games are still great experiments.",
    storyText: "Ludo Online and Flappy Bird are playgrounds for interaction, logic, and browser-based experiences.",
  },
  {
    id: "birthday-present",
    number: "08",
    title: "Birthday Present",
    category: "CREATIVE / EXPERIENCE",
    subCategory: "Celebratory Web App",
    description: "A beautifully designed birthday surprise website featuring smooth animations, interactive elements, and a personalized user experience.",
    tags: ["HTML", "CSS", "JavaScript", "Choreography"],
    githubUrl: "https://github.com/sh4dabexe/BirthdayPresent",
    demoUrl: "https://hbdpresent.netlify.app/",
    storyHeading: "Surprise through subtle motion.",
    storyText: "Designing personal celebratory websites that evoke wonder through interactive sequences.",
  },
  {
    id: "flappy-bird",
    number: "09",
    title: "Flappy Bird Clone",
    category: "ARCADE / PYTHON",
    subCategory: "Game Recreation",
    description: "Recreated the classic Flappy Bird game from scratch. Because why not? Turns out — pretty fun to build.",
    tags: ["Python", "Pygame", "Game Loop", "Arcade Physics"],
    githubUrl: "https://github.com/sh4dabexe/Flappy-Bird",
    demoUrl: "https://flybirdhop.netlify.app/",
    storyHeading: "Revisiting classic game mechanics.",
    storyText: "Rebuilding classic arcade mechanics in Python to study physics, collision, and player feedback.",
  }
];
