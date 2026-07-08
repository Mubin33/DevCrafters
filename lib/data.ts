import {
  Code,
  Laptop,
  Server,
  PenTool,
  Headphones,
  CheckCircle,
  TrendingUp,
  Zap,
} from "lucide-react";

export const siteInfo = {
  name: "DevCrafters",
  description: "We are an independent team of developers and designers who provide professional software development services.",
  email: "mubinulislam14@gmail.com",
  phone: "01560008450, 01330019348",
  whatsapp: "01560008450",
  address: "Dhaka, Bangladesh",
  website: "https://dev-crafters.netlify.app",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
};

export const services = [
  {
    title: "Website Development",
    description: "Modern, responsive, and SEO-friendly websites tailored to your brand.",
    icon: Laptop,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Web Applications",
    description: "Complex, interactive web applications built with the latest technologies.",
    icon: Code,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Custom Software",
    description: "Bespoke software solutions designed to solve your unique business challenges.",
    icon: Server,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "UI/UX Design",
    description: "Intuitive, user-centric designs that provide an exceptional user experience.",
    icon: PenTool,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "API Integration",
    description: "Seamless connection of third-party services and APIs into your systems.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing support and updates to keep your applications secure and running smoothly.",
    icon: Headphones,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200",
  },
];

export const reasons = [
  {
    title: "Agile & Fast",
    description: "Being a small team allows us to be highly agile and deliver results quickly.",
    icon: Zap,
  },
  {
    title: "Quality Focused",
    description: "We pride ourselves on writing clean, maintainable, and robust code.",
    icon: CheckCircle,
  },
  {
    title: "Direct Communication",
    description: "You work directly with the developers building your product, no middlemen.",
    icon: Headphones,
  },
  {
    title: "Modern Tech Stack",
    description: "We utilize the latest proven technologies to build scalable solutions.",
    icon: TrendingUp,
  },
];

export const projects = [
  {
    id: "1",
    title: "Next.js Framework",
    category: "Web Framework",
    description: "The React Framework for the Web. Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, smart bundling, and more.",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "TypeScript", "Rust", "Turbopack"],
    liveUrl: "https://nextjs.org",
    githubUrl: "https://github.com/vercel/next.js",
  },
  {
    id: "2",
    title: "Tailwind CSS",
    category: "CSS Framework",
    description: "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80&w=800",
    technologies: ["CSS", "JavaScript", "PostCSS", "Node.js"],
    liveUrl: "https://tailwindcss.com",
    githubUrl: "https://github.com/tailwindlabs/tailwindcss",
  },
  {
    id: "3",
    title: "Excalidraw",
    category: "Web Application",
    description: "A virtual collaborative whiteboard tool that lets you easily sketch diagrams that have a hand-drawn feel to them. Highly responsive and fully open-source.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "TypeScript", "Canvas", "Rough.js"],
    liveUrl: "https://excalidraw.com",
    githubUrl: "https://github.com/excalidraw/excalidraw",
  },
  {
    id: "4",
    title: "Supabase",
    category: "Backend as a Service",
    description: "The open source Firebase alternative. Supabase adds realtime and RESTful APIs to your existing PostgreSQL database without a single line of code.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    technologies: ["PostgreSQL", "TypeScript", "Go", "Elixir"],
    liveUrl: "https://supabase.com",
    githubUrl: "https://github.com/supabase/supabase",
  },
];

export const team = [
  {
    name: "MD. Yasin Arafat Mubin",
    role: "Lead Full-Stack Developer",
    image: "https://i.ibb.co/zh9yNwVg/Picsart-25-10-25-19-33-35-723.jpg",
    bio: "With over 5 years of experience, Mubin leads the technical architecture and development.",
    socials: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Mrs. Romana Akter",
    role: "UI/UX Designer",
    image: "https://img.magnific.com/premium-vector/vector-flat-icon-isolated-user-profile-avatar-silhouette-man-woman-black-silhouette-white-background-perfect-social-media-messengers-stories-your-adx9xa_719432-803.jpg?semt=ais_hybrid&w=740&q=80",
    bio: "Romana crafts beautiful, intuitive interfaces that users love.",
    socials: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "MD. Naeeym",
    role: "Backend Engineer",
    image: "https://img.magnific.com/premium-vector/vector-flat-icon-isolated-user-profile-avatar-silhouette-man-woman-black-silhouette-white-background-perfect-social-media-messengers-stories-your-adx9xa_719432-803.jpg?semt=ais_hybrid&w=740&q=80",
    bio: "Naeeym specializes in building scalable databases and robust APIs.",
    socials: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Ashik Elahi",
    role: "Frontend Developer",
    image: "https://scontent.fdac207-1.fna.fbcdn.net/v/t39.30808-6/574886991_1462574388162756_3694712839253136359_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x1028&ctp=s1024x1028&_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGrcSnv9grIDRKwGnH43NIm4-srkLfZ3-zj6yuQt9nf7IzfEh7QDhEfpq_uUgCYEo67MmO8grqduTUsP7fwYAJf&_nc_ohc=EKCAftIwlc4Q7kNvwGymKUw&_nc_oc=Ado8YHU7h3PBEIS511n7XDihGDcdD-fllOQVa1h-bLZDvXOciocaCTAWbYeCIyjmsgw&_nc_zt=23&_nc_ht=scontent.fdac207-1.fna&_nc_gid=eoHovxMYS4KfxDmjccp-Ug&_nc_ss=7c2a8&oh=00_AQAmPF5VghlD0cZUJnHGQUwNScrLv87kayHWh25CUCfMfQ&oe=6A539454",
    bio: "Ashik brings designs to life with smooth animations and responsive layouts.",
    socials: { github: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Mrs. Shamima",
    role: "Marketing",
    image: "https://img.magnific.com/premium-vector/vector-flat-icon-isolated-user-profile-avatar-silhouette-man-woman-black-silhouette-white-background-perfect-social-media-messengers-stories-your-adx9xa_719432-803.jpg?semt=ais_hybrid&w=740&q=80",
    bio: "Shamima ensures our applications are reliable, tested, and deployed seamlessly.",
    socials: { github: "#", linkedin: "#", twitter: "#" },
  },
];

export const technologies = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "Svelte", category: "Frontend" },
  { name: "TypeScript", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "Go", category: "Languages" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Framer Motion", category: "Styling" },
  { name: "Sass / SCSS", category: "Styling" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "NestJS", category: "Backend" },
  { name: "Django", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "Prisma", category: "Backend" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "AWS", category: "DevOps" },
  { name: "Vercel", category: "DevOps" },
  { name: "GitHub Actions", category: "DevOps" },
];

export const processSteps = [
  {
    id: "01",
    title: "Discussion",
    description: "We start by understanding your goals, requirements, and target audience.",
  },
  {
    id: "02",
    title: "Planning",
    description: "Creating a detailed roadmap, timeline, and technical architecture.",
  },
  {
    id: "03",
    title: "Design",
    description: "Crafting wireframes and high-fidelity designs for your approval.",
  },
  {
    id: "04",
    title: "Development",
    description: "Writing clean, efficient code to bring the designs to life.",
  },
  {
    id: "05",
    title: "Testing",
    description: "Rigorous QA testing to ensure everything works flawlessly.",
  },
  {
    id: "06",
    title: "Delivery",
    description: "Deploying the project and handing over the deliverables.",
  },
  {
    id: "07",
    title: "Support",
    description: "Providing ongoing maintenance and support as needed.",
  },
];
