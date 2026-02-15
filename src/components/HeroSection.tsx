import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const roles = ["CS & Math Student", "Developer", "Leader", "Problem Solver"];

const HeroSection = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState("");
  const [isTypingName, setIsTypingName] = useState(true);
  const fullName = "> Hello, I'm Mahima Nandana K";

  useEffect(() => {
    if (!isTypingName) return;
    if (text.length < fullName.length) {
      const t = setTimeout(() => setText(fullName.slice(0, text.length + 1)), 60);
      return () => clearTimeout(t);
    } else {
      setIsTypingName(false);
    }
  }, [text, isTypingName]);

  useEffect(() => {
    if (isTypingName) return;
    const role = roles[roleIndex];
    let typing = true;
    let i = 0;

    const interval = setInterval(() => {
      if (typing) {
        setRoleText(role.slice(0, i + 1));
        i++;
        if (i >= role.length) {
          typing = false;
          setTimeout(() => {
            const deleteInterval = setInterval(() => {
              i--;
              setRoleText(role.slice(0, i));
              if (i <= 0) {
                clearInterval(deleteInterval);
                setRoleIndex((prev) => (prev + 1) % roles.length);
              }
            }, 30);
          }, 1500);
        }
      }
    }, 80);

    return () => clearInterval(interval);
  }, [roleIndex, isTypingName]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4">
      <div className="text-center z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h1 className="font-mono text-3xl sm:text-5xl md:text-6xl font-bold text-foreground">
            {text}
            <span className="animate-blink text-primary">|</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isTypingName ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="h-8 sm:h-10"
        >
          <p className="font-mono text-lg sm:text-xl text-primary text-glow-cyan">
            {roleText}<span className="animate-blink">_</span>
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="mt-8 text-muted-foreground font-mono text-sm"
        >
          {"// BITS Pilani | B.E. Computer Science + M.Sc. Mathematics"}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-10 cursor-pointer"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <ChevronDown className="w-8 h-8 text-primary animate-bounce-slow" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
