import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink, Terminal } from "lucide-react";

const projects = [
  {
    name: "E-Commerce Web App",
    desc: "Full-stack e-commerce platform with user authentication, product management, and shopping cart functionality.",
    tech: ["Java", "Spring Boot", "React.js", "MySQL"],
    link: "#",
  },
  {
    name: "Queueing System Analysis",
    desc: "Simulation and analysis tool for queueing models using MATLAB, applying mathematical modeling to real-world problems.",
    tech: ["MATLAB", "Probability", "Statistics"],
    link: "#",
  },
  {
    name: "Adaptive Learning Platform",
    desc: "Intelligent learning system that adapts content difficulty based on student performance and engagement metrics.",
    tech: ["Python", "Machine Learning", "Flask"],
    link: "#",
  },
  {
    name: "Algebraic Structures Visualizer",
    desc: "Interactive tool to visualize algebraic structures like groups, rings, and fields for educational purposes.",
    tech: ["Python", "Mathematics", "Visualization"],
    link: "#",
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-sm text-primary mb-2">{"// projects"}</h2>
          <h3 className="text-3xl font-bold mb-8 font-body">Projects</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:border-glow-cyan"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-lg font-body group-hover:text-primary transition-colors">{p.name}</h4>
                  <a href={p.link} className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs font-mono bg-secondary text-primary rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground group-hover:text-accent transition-colors">
                  <Terminal className="w-3 h-3" />
                  <span>{"$ git clone repo"}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
