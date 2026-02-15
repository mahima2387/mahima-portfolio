import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 90 },
      { name: "C/C++", level: 80 },
      { name: "JavaScript", level: 50 },
      { name: "SQL", level: 75 },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      { name: "Spring Boot", level: 85 },
      { name: "React.js", level: 80 },
      { name: "Angular", level: 70 },
      { name: "Flask", level: 65 },
    ],
  },
  {
    category: "Tools & Databases",
    skills: [
      { name: "Git", level: 85 },
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 65 },
    ],
  },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-sm text-primary mb-2">{"// skills"}</h2>
          <h3 className="text-3xl font-bold mb-8 font-body">Skill Tree</h3>

          <div className="space-y-8">
            {skillCategories.map((cat, ci) => (
              <div key={ci}>
                <h4 className="font-mono text-sm text-accent mb-4 text-glow-green">
                  {">"} {cat.category}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cat.skills.map((skill, si) => (
                    <motion.div
                      key={si}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: ci * 0.1 + si * 0.05 }}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-mono text-sm text-foreground">{skill.name}</span>
                        <span className="font-mono text-xs text-muted-foreground">
                          LVL {Math.round(skill.level / 10)}
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                          initial={{ width: 0 }}
                          animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: ci * 0.1 + si * 0.05 }}
                          style={{ boxShadow: "0 0 8px hsl(185 100% 50% / 0.5)" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
