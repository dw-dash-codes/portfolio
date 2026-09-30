export interface Profile {
    name: string;
    firstName: string;
    role: string;
    role2: string;
    location: string;
    email: string;
    fiverr: string;
    github: string;
    linkedin: string;
    tagline: string;
    bio: string[];
}

export const profile: Profile = {
    name: "Danish Waheed",
    firstName: "Danish",
    role: "Full Stack Developer",
    role2: "React & Node.js",
    location: "Islamabad, Pakistan",
    email: "danishwaheed271@gmail.com",
    fiverr: "https://www.fiverr.com/s/50Gm1oz",
    github: "https://github.com/dw-dash-codes",
    linkedin: "https://www.linkedin.com/in/danishwaheed-engineer/",
    tagline:
        "I build and ship production-ready full-stack applications — from modern React & MERN architectures to scalable ASP.NET Core APIs and cloud deployments.",
    bio: [
        "I'm a Full Stack Developer skilled in building end-to-end web applications with React.js, Node.js, Express.js, MongoDB Atlas, and ASP.NET Core, with hands-on experience converting Figma mockups into pixel-perfect UIs and deploying production-ready systems.",
        "I work comfortably across the stack with MERN and .NET architectures, RESTful API engineering, JWT authentication, Role-Based Authorization, real-time communication, and CI/CD pipelines.",
        "I have a solid foundation in Data Structures, Algorithms, and OOP (C#, JavaScript/TypeScript, C++), and I'm currently pursuing a BS in Computer Science while growing as a developer.",
    ],
};

export interface StatItem {
    value: string;
    label: string;
}

export const stats: StatItem[] = [
    {
        value: "4+",
        label: "Shipped Projects",
    },
    {
        value: "10+",
        label: "Azure Deployments",
    },
    {
        value: "2",
        label: "Certifications",
    },
    {
        value: "∞",
        label: "Cups of Chai",
    },
];

export interface SkillCategory {
    category: string;
    items: string[];
}

export const skills: SkillCategory[] = [
    {
        category: "Backend & Full Stack",
        items: [
            "Node.js",
            "Express.js",
            "ASP.NET Core Web API",
            "ASP.NET MVC",
            "Entity Framework Core",
            "RESTful APIs",
            "JWT Authentication",
            "Role-Based Authorization",
            "SignalR",
            "Repository Pattern",
            "N-Tier Architecture",
        ],
    },
    {
        category: "Frontend",
        items: [
            "React.js",
            "JavaScript (ES6+)",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "Bootstrap",
            "Vite",
        ],
    },
    {
        category: "Database",
        items: [
            "MongoDB Atlas",
            "SQL Server",
            "Azure SQL Database",
            "EF Core Migrations",
        ],
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
        items: ["JavaScript", "C#", "Python", "C++", "SQL", "DSA", "OOP"],
    },
];

export interface ExperienceItem {
    period: string;
    role: string;
    company: string;
    location?: string;
    points: string[];
    tech?: string[];
}

export const workExperience: ExperienceItem[] = [
    {
        period: "May 2026 — Present",
        role: "Full Stack Developer Intern",
        company: "Neusoftix (SMC-PVT) LTD",
        location: "Islamabad / Rawalpindi, Pakistan",
        points: [
            "Converted modern UI/UX design mockups from Figma into pixel-perfect, clean, and responsive HTML and React.js components.",
            "Engineered and maintained end-to-end full-stack web applications utilizing the MERN stack (MongoDB Atlas, Express.js, React.js, Node.js).",
            "Built and integrated scalable RESTful APIs ensuring efficient client-server communication and database performance.",
        ],
        tech: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB Atlas",
            "RESTful APIs",
            "Figma",
            "HTML5",
            "CSS3",
        ],
    },
];

export interface EducationItem {
    period: string;
    title: string;
    org: string;
    detail: string;
}

export const education: EducationItem[] = [
    {
        period: "2025 — Present",
        title: "BS Computer Science",
        org: "Szabist University, Islamabad",
        detail: "Pursuing a Bachelor's in Computer Science with a strong focus on software engineering, data structures, and algorithms.",
    },
    {
        period: "2025",
        title: "Microsoft .NET Developer (Certification)",
        org: "EWX Institute, Rawalpindi",
        detail: "Professional certification covering the full ASP.NET Core stack, Entity Framework, and enterprise application patterns.",
    },
    {
        period: "2025",
        title: "Frontend Developer (Certification)",
        org: "EWX Institute, Rawalpindi",
        detail: "Certification in modern frontend development with React.js, responsive design, and component-driven architecture.",
    },
];

// Retain backward-compatible alias if imported elsewhere
export const experience = education;

export interface Project {
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
}

export const projects: Project[] = [
    {
        slug: "parent-genius",
        title: "Parent Genius",
        subtitle: "Parent Guidance & Course Platform (Ongoing)",
        year: "2026",
        role: "Full-Stack Developer",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Vite"],
        summary:
            "A parent guidance application designed to help parents join structured courses to bring up their children in the best way possible. (Frontend completed, Backend currently in development).",
        problem:
            "Parents often lack a centralized, accessible platform to find structured guidance, courses, and communities for effective child upbringing.",
        solution:
            "Developing a comprehensive MERN stack application to provide educational resources for parents. The frontend delivers a smooth, intuitive onboarding experience, while the backend is currently being integrated using Node.js, Express, and MongoDB Atlas.",
        features: [
            "Seamless frontend UI and onboarding components (Completed)",
            "Course discovery and parent guidance modules",
            "Backend REST API development with Node.js & Express (In Progress)",
            "Database binding and management using MongoDB Atlas (In Progress)",
        ],
        architecture:
            "React frontend deployed on Vercel → Node.js & Express.js REST API (In Development) → MongoDB Atlas for scalable data storage.",
        liveUrl: "https://parent-genius-theta.vercel.app/home",
        repoUrl: "https://github.com/dw-dash-codes/parentGenius.git",
        accent: "#f5a623",
        image: "/projects/parentGenius.webp",
        detailImage: "/projects/parentGenius.webp",
    },
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
            "https://skill-square-api-egdtcsapcnegb6cs.austriaeast-01.azurewebsites.net/index.html",
        accent: "#5cc8ff",
        image: "/projects/skillsquare.webp",
        detailImage: "/projects/skillsquare-detail.webp",
    },
    {
        slug: "skill-square-api",
        title: "SkillSquare API",
        subtitle: "Local Skilled Services Marketplace Backend",
        year: "2026",
        role: "Backend Developer",
        tech: [
            "ASP.NET Core 9",
            "C#",
            "Entity Framework Core",
            "Azure SQL Database",
            "ASP.NET Core Identity",
            "JWT Authentication",
            "SignalR",
            "Azure App Service",
            "Swagger / OpenAPI",
        ],
        summary:
            "A robust, high-performance RESTful backend API powering a marketplace connecting clients with local skilled service providers, complete with real-time updates and interactive Swagger documentation.",
        problem:
            "Marketplaces connecting clients and tradespeople require reliable transaction handling, real-time notifications for bookings, and distinct security boundaries across different account types.",
        solution:
            "Engineered an enterprise-grade ASP.NET Core Web API adhering to N-Tier architecture and the Repository Pattern. Implemented secure JWT authentication alongside ASP.NET Core Identity for role-based authorization, paired with SignalR hubs for instant notifications and Azure SQL for scalable data persistence.",
        features: [
            "N-Tier layered architecture with Repository Pattern for modular data access",
            "Secure JWT Bearer authentication integrated with ASP.NET Core Identity",
            "Granular Role-Based Access Control (RBAC) across Customers, Providers, and Admins",
            "Real-time event dispatching and push notifications powered by SignalR WebSockets",
            "Interactive Swagger UI documentation equipped with ready-to-test demo credentials",
            "Cloud-native deployment and hosting on Microsoft Azure App Service",
        ],
        architecture:
            "Client / Swagger UI → Microsoft Azure App Service (ASP.NET Core 9 Controllers) → Repository Pattern & Business Layer → Entity Framework Core → Azure SQL Database | SignalR Hub for WebSockets.",
        liveUrl:
            "https://skill-square-api-egdtcsapcnegb6cs.austriaeast-01.azurewebsites.net/index.html",
        repoUrl: "https://github.com/dw-dash-codes/SkillSquareWebAPI-Project",
        accent: "#512bd4",
        image: "/projects/backend-api.webp",
        detailImage: "/projects/backend-api-detailed.webp",
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
        image: "/projects/docket.webp",
        detailImage: "/projects/docket-detail.webp",
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
        image: "/projects/serveai-detail.webp",
        detailImage: "/projects/serveai.webp",
    },
];
