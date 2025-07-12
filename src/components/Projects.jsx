import React from "react";

const projects = [
  {
    id: 1,
    title: "Amazon Clone",
    description: "Clone built with HTML & CSS",
    image: "/project/project1.png",
    tags: ["HTML", "CSS"],
    projectLink: "https://amazon-eta-gules.vercel.app/",
    github: "https://github.com/jb-28-sde/amazon",
  },
  {
    id: 2,
    title: "Rock‑Paper‑Scissors",
    description: "Fun game built with Vanilla JS",
    image: "/project/project-2.png",
    tags: ["HTML", "CSS", "JavaScript"],
    projectLink: "https://jb-28-sde.github.io/rock-papper-scissors-game/",
    github: "https://github.com/jb-28-sde/rock-papper-scissors-game",
  },
  {
    id: 3,
    title: "SEO Lounge",
    description: "Landing page (JS + Bootstrap)",
    image: "/project/project-3.png",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    projectLink: "https://jb-28-sde.github.io/newproject/",
    github: "https://github.com/jb-28-sde/newproject",
  },
  {
    id: 4,
    title: "React Todo",
    description: "Productive Todo app",
    image: "/project/project-4.png",
    tags: ["React"],
    projectLink: "https://jb-28-sde.github.io/todoapp/",
    github: "https://github.com/jb-28-sde/todoapp",
  },
  {
    id: 5,
    title: "E‑commerce Front‑End",
    description: "Fully‑featured store (React + Redux)",
    image: "/project/project-5.png",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Redux"],
    projectLink: "https://jb-28-sde.github.io/frontend/",
    github: "https://github.com/jb-28-sde/frontend",
  },
   {
    id: 6,
    title: "Parallax website",
    description: "Advanced UI based with vanilla JS ",
    image: "/project/project-6.png",
    tags: ["HTML", "CSS", "JavaScript",],
    projectLink: "https://jb-28-sde.github.io/parallax/",
    github: "https://github.com/jb-28-sde/parallax",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        {/* subtitle */}
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects — each one strategically built
          with a strong focus on clean code, performance optimization, and an
          exceptional user experience. I prioritize attention to detail,
          responsive design, and seamless interactivity across all devices.
        </p>

        {/* project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg overflow-hidden shadow transition-transform hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4 bg-card">
                <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
