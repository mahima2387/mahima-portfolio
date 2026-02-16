import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, MapPin, Award, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

const AnimatedCounter = ({ target, label }: { target: number; label: string }) => {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const step = target / 40;
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.round(start * 100) / 100);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [isVisible, target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold font-mono text-primary text-glow-cyan">
        {typeof target === "number" && target % 1 !== 0 ? count.toFixed(2) : Math.round(count)}
      </div>
      <div className="text-xs text-muted-foreground mt-1 font-mono">{label}</div>
    </div>
  );
};

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-sm text-primary mb-2">{"// about"}</h2>
          <h3 className="text-3xl font-bold mb-8 font-body">About Me</h3>

          <div className="bg-card border border-border rounded-lg p-6 border-glow-cyan">
            <div className="flex items-center gap-2 mb-4 font-mono text-xs text-muted-foreground">
              <span className="w-3 h-3 rounded-full bg-destructive inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-accent inline-block" />
              <span className="ml-2">terminal — about_me.sh</span>
            </div>

            <div className="font-mono text-sm leading-relaxed space-y-3">
              <p className="text-accent">$ cat profile.txt</p>
              <p className="text-foreground/90">
                I'm Mahima, a Computer Science and Mathematics student, who loves building things that make sense and make impact.
                I enjoy blending logic with creativity, whether it's through code, analytics or design.
                Currently exploring tech, problem-solving and everything in between.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-sm font-mono">
              <div className="flex items-center gap-2 text-muted-foreground">
                <GraduationCap className="w-4 h-4 text-primary" />
                <span>B.E. CS + M.Sc. Mathematics</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>BITS Pilani, Hyderabad Campus</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Award className="w-4 h-4 text-primary" />
                <span>2023 – 2028</span>
              </div>
              {/* VIEW RESUME BUTTON */}
              <a 
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
              >
                <ExternalLink className="w-4 h-4 group-hover:animate-bounce" />
                <span>View Resume</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold font-mono text-primary text-glow-cyan">
                v3.0
              </div>
              <div className="text-xs text-muted-foreground mt-1 font-mono">Career</div>
            </div>
            <AnimatedCounter target={4} label="Projects" />
            <AnimatedCounter target={3} label="Leadership Roles" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;