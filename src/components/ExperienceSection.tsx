import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Briefcase, Calendar, CheckCircle } from "lucide-react";

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const highlights = [
    "Developed scalable REST APIs using Java Spring Boot",
    "Managed relational databases with complex SQL queries",
    "Built dynamic front-end components with React.js and Angular",
    "Collaborated with cross-functional teams using Agile methodologies",
  ];

  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-sm text-primary mb-2">{"// experience"}</h2>
          <h3 className="text-3xl font-bold mb-8 font-body">Work Experience</h3>

          <div className="relative pl-8 border-l-2 border-primary/30">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary animate-glow-pulse" />

            <div className="bg-card border border-border rounded-lg p-6 border-glow-cyan">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <h4 className="text-xl font-bold font-body">SDE Intern</h4>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs mt-2 sm:mt-0">
                  <Calendar className="w-3 h-3" />
                  <span>Jan 2025 – Jun 2025</span>
                </div>
              </div>

              <p className="text-primary font-mono text-sm mb-4">@ Indium Software — Chennai</p>

              <div className="space-y-3">
                {highlights.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-2 text-sm text-foreground/80"
                  >
                    <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
