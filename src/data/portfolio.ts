export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  repo?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export const portfolioData = {
  hero: {
    name: "John Doe",
    title: "Senior Full Stack Engineer",
    description: "I build robust, scalable, and elegant software solutions using modern technologies. Specialized in distributed systems and performance optimization.",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:hello@example.com"
    }
  },
  skills: [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "Go", "PostgreSQL", "Redis"]
    },
    {
      category: "Infrastructure",
      items: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"]
    }
  ],
  projects: [
    {
      id: "1",
      title: "Scalable Microservices Architecture",
      description: "A high-performance microservices platform handling 1M+ req/sec using Go and gRPC.",
      tags: ["Go", "gRPC", "Kubernetes", "Redis"],
      link: "#",
      repo: "https://github.com"
    },
    {
      id: "2",
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time data visualization platform with predictive analytics integration.",
      tags: ["React", "Python", "TensorFlow", "D3.js"],
      link: "#",
      repo: "https://github.com"
    }
  ]
};
