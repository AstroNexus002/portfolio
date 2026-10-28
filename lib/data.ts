// All portfolio content lives here. Replace the sample entries with your own details.

export const profile = {
  name: "Roman Novak",
  initials: "RN",
  title: "Full-Stack Web Developer",
  // The hero types these out one after another.
  roles: [
    "Full-Stack Developer",
    "React & Next.js Developer",
    "Node.js Engineer",
  ],
  handle: "@romannovak",
  email: "roman.novak@example.com",
  location: "Prague, Czech Republic",
  // Optional: put a square photo in /public (e.g. "/profile.jpg") to replace the initials tile.
  photo: "",
  summary:
    "Full-stack developer focused on building fast, accessible and well-crafted web products with React, Next.js and Node.js.",
  // Words wrapped in **double asterisks** are highlighted.
  intro:
    "**Full-stack developer** building fast, accessible products with **React, Next.js and Node.js**. Turning ideas into polished, production-ready web apps.",
  about:
    "I'm a full-stack developer who loves turning complex problems into simple, elegant products. I work across the whole stack, from pixel-perfect interfaces to the APIs and infrastructure behind them, and I care about speed, accessibility and clean code.",
  availability:
    "I'm currently available for new opportunities. Whether it's a full-time role, a freelance project, or just a chat, reach out!",
};

export const socials = {
  github: "https://github.com/romannovak",
  linkedin: "https://www.linkedin.com/in/romannovak",
  x: "https://x.com/romannovak",
};

export type Experience = {
  role: string;
  company: string;
  initials: string;
  color: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Full-Stack Engineer",
    company: "Brightlane Studio",
    initials: "BS",
    color: "#2349FF",
    period: "Mar 2023 - Present",
    points: [
      "Designed and shipped end-to-end authentication flows including Signup, Login, Email Verification, OTP and Reset Password, with full backend integration.",
      "Built interactive analytics dashboards with Chart.js and Recharts to support business reporting.",
      "Developed admin settings modules, including a custom form builder, an announcement system and their REST APIs.",
      "Handled deployments and asset storage on AWS (EC2, S3) and set up CI pipelines for faster releases.",
      "Worked closely with the UI/UX team to turn wireframes into responsive, production-ready interfaces.",
    ],
  },
];

export type Project = {
  name: string;
  description: string;
  image: string; // path in /public, e.g. "/projects/my-app.png"
  tags: string[];
  category: string; // used by the filter buttons in the projects section
  liveUrl: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Docsumo: Document AI Platform",
    description:
      "Intelligent document processing for lending, insurance and eligibility teams. AI agents extract and cross-check bank statements, ACORD forms and more, so teams only review exceptions.",
    image: "/projects/docsumo.png",
    tags: ["Document AI", "OCR", "Data Extraction", "Workflow Automation"],
    category: "Automation",
    liveUrl: "https://www.docsumo.com/",
    featured: true,
  },
  {
    name: "Retell AI: Voice Agent Platform",
    description:
      "A platform for deploying AI voice agents that handle inbound and outbound phone calls, with HIPAA and SOC 2 compliance.",
    image: "/projects/retell.webp",
    tags: ["Voice AI", "LLM", "Telephony", "Real-Time"],
    category: "AI Agents",
    liveUrl: "https://www.retellai.com/",
    featured: true,
  },
  {
    name: "Lindy: AI Teammate",
    description:
      "An AI employee that connects to all your tools, knows everything about your company and does real work for the whole team.",
    image: "/projects/lindy.jpg",
    tags: ["AI Agents", "Automation", "Integrations", "LLM"],
    category: "AI Agents",
    liveUrl: "https://www.lindy.ai/",
    featured: true,
  },
  {
    name: "Manifest AI: Support & Marketing Agents",
    description:
      "A platform to build AI agents that handle support and marketing across Chat, Email, Instagram and WhatsApp.",
    image: "/projects/manifest.jpg",
    tags: ["AI Agents", "Chatbots", "WhatsApp", "Instagram"],
    category: "AI Agents",
    liveUrl: "https://getmanifest.ai/",
  },
  {
    name: "Yuma AI: Ecommerce AI Agents",
    description:
      "AI agents for ecommerce that automate support, sales, social and chat, resolving tickets and growing revenue without scaling headcount.",
    image: "/projects/yuma.jpg",
    tags: ["Ecommerce", "AI Agents", "Customer Support", "Shopify"],
    category: "AI Agents",
    liveUrl: "https://yuma.ai/",
  },
  {
    name: "Browse AI: No-Code Web Scraping",
    description:
      "Scrape web data, monitor webpage changes and turn any website into an API, all without writing code.",
    image: "/projects/browseai.jpg",
    tags: ["Web Scraping", "Monitoring", "APIs", "No-Code"],
    category: "Automation",
    liveUrl: "https://www.browse.ai/",
  },
];

export type Education = {
  title: string;
  type: string;
  school: string;
  period: string;
  initials: string;
  color: string;
};

export const education: Education[] = [
  {
    title: "Computer Science",
    type: "Bachelor's",
    school: "Czech Technical University in Prague",
    period: "Sep 2018 - Jun 2022",
    initials: "CT",
    color: "#0065BD",
  },
  {
    title: "Full-Stack Development",
    type: "Certification",
    school: "Online Bootcamp",
    period: "Jul 2022 - Jan 2023",
    initials: "FS",
    color: "#8B5CF6",
  },
];

// Icon keys map to components in components/TechIcon.tsx
export type Tech = { name: string; icon: string; color: string };

export const skills: Tech[] = [
  { name: "HTML", icon: "html", color: "#E34F26" },
  { name: "CSS", icon: "css", color: "#1572B6" },
  { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
  { name: "TypeScript", icon: "typescript", color: "#3178C6" },
  { name: "React.js", icon: "react", color: "#61DAFB" },
  { name: "Redux Toolkit", icon: "redux", color: "#764ABC" },
  { name: "Next.js", icon: "nextjs", color: "#FFFFFF" },
  { name: "Tailwind CSS", icon: "tailwind", color: "#06B6D4" },
  { name: "Bootstrap", icon: "bootstrap", color: "#7952B3" },
  { name: "Node.js", icon: "node", color: "#339933" },
  { name: "Express.js", icon: "express", color: "#FFFFFF" },
  { name: "MongoDB", icon: "mongodb", color: "#47A248" },
  { name: "Mongoose", icon: "mongoose", color: "#E04848" },
  { name: "MySQL", icon: "mysql", color: "#4479A1" },
  { name: "JWT Auth", icon: "jwt", color: "#4479A1" },
];

export const tools: Tech[] = [
  { name: "Git", icon: "git", color: "#F05032" },
  { name: "GitLab", icon: "gitlab", color: "#FC6D26" },
  { name: "VS Code", icon: "vscode", color: "#007ACC" },
  { name: "AWS", icon: "aws", color: "#FF9900" },
  { name: "Docker", icon: "docker", color: "#2496ED" },
  { name: "Figma", icon: "figma", color: "#F24E1E" },
  { name: "Trello", icon: "trello", color: "#0052CC" },
  { name: "Slack", icon: "slack", color: "#E01E5A" },
  { name: "Teams", icon: "teams", color: "#6264A7" },
];
