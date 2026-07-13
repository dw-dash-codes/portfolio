export const profile = {
  name: "Danish Waheed",
  firstName: "Danish",
  role: "Full-Stack .NET Developer",
  role2: "React.js",
  location: "Islamabad, Pakistan",
  email: "danishwaheed271@gmail.com",
  upwork: "https://www.upwork.com/freelancers/~01d99c10c21e25d1b7?mp_source=share",
  github: "https://github.com/dw-dash-codes",
  linkedin: "http://www.linkedin.com/in/danish-waheed-3995aa296",
  tagline:
    "I build and ship production-ready full-stack applications — from ASP.NET Core APIs to React frontends, deployed on Microsoft Azure.",
  bio: [
    "I'm a Full-Stack .NET Developer skilled in ASP.NET Core Web API, Entity Framework Core, and React.js, with hands-on experience building and deploying production-ready apps to Microsoft Azure.",
    "I work comfortably across the stack with N-Tier Architecture, the Repository Pattern, JWT authentication, Role-Based Authorization, SignalR, and RAG-based AI integration — plus CI/CD pipelines via GitHub Actions.",
    "I have a solid foundation in Data Structures, Algorithms, and OOP (C#, C++), and I'm currently pursuing a BS in Computer Science while growing as a developer.",
  ],
};

export const stats = [
  { value: "3+", label: "Shipped Projects" },
  { value: "10+", label: "Azure Deployments" },
  { value: "2", label: "Certifications" },
  { value: "∞", label: "Cups of Chai" },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Backend & Frameworks",
    items: [
      "ASP.NET Core Web API",
      "ASP.NET MVC",
      "Entity Framework Core",
      "LINQ",
      "ASP.NET Identity",
      "JWT Authentication",
      "Role-Based Authorization",
      "SignalR",
      "Repository Pattern",
      "N-Tier Architecture",
      "RESTful APIs",
    ],
  },
  {
    category: "Frontend",
    items: [
      "React.js",
      "JavaScript (ES6+)",
      "Vite",
      "HTML5",
      "CSS3",
      "Bootstrap",
    ],
  },
  {
    category: "Database",
    items: ["SQL Server", "Azure SQL Database", "EF Core Migrations"],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "Microsoft Azure (App Service)",
      "Azure SQL",
      "Vercel",
      "GitHub Actions (CI/CD)",
      "Git",
      "Swagger",
      "Postman",
    ],
  },
  {
    category: "Languages & CS Fundamentals",
    items: ["C#", "Python", "C++", "SQL", "DSA", "OOP"],
  },
];

export const experience = [
  {
    period: "2024 — Present",
    title: "BS Computer Science",
    org: "Szabist University, Islamabad",
    detail:
      "Pursuing a Bachelor's in Computer Science with a strong focus on software engineering, data structures, and algorithms.",
  },
  {
    period: "2025",
    title: "Microsoft .NET Developer (Certification)",
    org: "EWX Institute, Rawalpindi",
    detail:
      "Professional certification covering the full ASP.NET Core stack, Entity Framework, and enterprise application patterns.",
  },
  {
    period: "2025",
    title: "Frontend Developer (Certification)",
    org: "EWX Institute, Rawalpindi",
    detail:
      "Certification in modern frontend development with React.js, responsive design, and component-driven architecture.",
  },
];

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  tech: string[];
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  architecture: string;
  liveUrl?: string;
  repoUrl?: string;
  apiDocsUrl?: string;
  linkedinPostUrl?: string;
  videoUrl?: string;
  accent: string;
  image?: string;
  detailImage?: string;
};

export const projects: Project[] = [
  {
    slug: "skillsquare",
    title: "SkillSquare",
    subtitle: "Full-Stack Service Marketplace Platform",
    year: "2025",
    role: "Full-Stack Developer",
    tech: [
      "ASP.NET Core 9",
      "C#",
      "EF Core",
      "Azure SQL",
      "JWT",
      "SignalR",
      "React.js",
      "Vite",
    ],
    summary:
      "A multi-role marketplace connecting customers with skilled professionals — built on N-Tier Architecture with real-time notifications and role-based access.",
    problem:
      "Connecting customers with skilled professionals requires a robust, secure platform that handles multiple user roles, real-time communication, and reliable data — all while staying maintainable and scalable.",
    solution:
      "A multi-role marketplace (User, Provider, and Admin portals) built on a RESTful ASP.NET Core 9 Web API using N-Tier Architecture and the Repository Pattern. Role-Based Authorization is handled via ASP.NET Core Identity and JWT, with SignalR powering real-time notifications.",
    features: [
      "Three dedicated portals: User, Provider, and Admin",
      "Role-Based Authorization via ASP.NET Core Identity + JWT",
      "Real-time notifications powered by SignalR",
      "N-Tier Architecture with the Repository Pattern for clean separation",
      "CI/CD via GitHub Actions, documented with Swagger, tested with Postman",
    ],
    architecture:
      "React (Vite) frontend on Vercel → ASP.NET Core 9 Web API on Azure App Service (N-Tier + Repository Pattern) → Azure SQL via EF Core. Auth via ASP.NET Identity + JWT, real-time via SignalR, CI/CD through GitHub Actions.",
    liveUrl: "https://skill-square.vercel.app/",
    apiDocsUrl:
      "https://skillsquare-live-api-b9czenhchfhxdwbp.centralindia-01.azurewebsites.net/index.html",
    accent: "#5cc8ff",
    image: "/projects/skillsquare.png",
    detailImage: "/projects/skillsquare-detail.png",
  },
  {
    slug: "docket",
    title: "Docket",
    subtitle: "Secure RAG-Based AI Document Analysis Platform",
    year: "2025",
    role: "Full-Stack Developer",
    tech: [
      "C#",
      "ASP.NET Core 8",
      "EF Core",
      "Azure SQL",
      "React.js",
      "Vite",
      "Google Gemini API (RAG)",
    ],
    summary:
      "A secure full-stack platform that analyzes proprietary PDFs using strict Retrieval-Augmented Generation — with zero hallucinations and full data privacy.",
    problem:
      "Public LLMs suffer from 'knowledge bleed' and AI hallucinations when analyzing proprietary PDFs, and raise serious data-privacy concerns when sensitive files are uploaded.",
    solution:
      "A secure full-stack platform built on strict Retrieval-Augmented Generation (RAG). It bounds the AI strictly to the uploaded document's context — if the answer isn't in the document, it refuses to guess. The result is zero hallucinations, with user-isolated sessions for privacy.",
    features: [
      "Zero-hallucination architecture through strict context bounding",
      "Data security via a user-isolated database",
      "Persistent cognitive sessions saved in Azure SQL",
      "Fast real-time responses from a C# backend and optimized React frontend",
    ],
    architecture:
      "React (Vite) frontend on Vercel → C# ASP.NET Core 8 Web API on Azure App Service → Azure SQL via EF Core → Google Gemini API configured for strict contextual grounding.",
    liveUrl: "https://docket-preview.vercel.app/",
    repoUrl: "https://github.com/dw-dash-codes/docket",
    linkedinPostUrl:
      "https://www.linkedin.com/posts/danish-waheed-3995aa296_dotnet-reactjs-azure-share-7480213565065461760--1O5/",
    accent: "#d4ff3f",
    image: "/projects/docket.png",
    detailImage: "/projects/docket-detail.png",
  },
  {
    slug: "serveai",
    title: "ServeAi",
    subtitle: "AI-Driven Multi-Agent Service Booking Platform",
    year: "2025",
    role: "Hackathon — Google Developer Group (Vibe Coding)",
    tech: [
      "React Native (Expo)",
      "TypeScript",
      "Node.js",
      "Express",
      "Google Gemini 2.5 Flash",
      "Google Maps API",
    ],
    summary:
      "A mobile-first, AI-driven booking platform built in 5 days — understanding natural language in English, Urdu, and Roman Urdu through a 7-stage multi-agent pipeline.",
    problem:
      "Booking services should be as simple as describing what you need in your own words — but most platforms force rigid forms and don't understand local languages or resist AI hallucinations in their decision-making.",
    solution:
      "A mobile-first, AI-driven service booking platform built in a 5-day hackathon. It accepts natural-language input in English, Urdu, and Roman Urdu, then routes it through a 7-stage multi-agent orchestration pipeline for auditable, hallucination-resistant decisions.",
    features: [
      "7-stage agent pipeline: Intent Parser, Provider Discovery, Matching & Ranking, Dynamic Pricing, Booking Execution, Follow-Up/Dispute, Trace Logger",
      "Natural-language input in English, Urdu, and Roman Urdu",
      "Gemini 2.5 Flash via @google/genai SDK for schema-constrained intent parsing",
      "Auditable, hallucination-resistant decisions through trace logging",
      "Node.js/Express REST API on Render, mobile builds via Expo EAS",
    ],
    architecture:
      "React Native (Expo) mobile client → Node.js/Express REST API on Render → Google Gemini 2.5 Flash (@google/genai) for a 7-stage multi-agent orchestration pipeline, with Google Maps API for location services.",
    repoUrl: "https://github.com/dw-dash-codes/ServeAi.git",
    accent: "#ff7a5c",
    image: "/projects/serveai-detail.png",
    detailImage: "/projects/serveai.png",
  },
];
