import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { RefreshCw, Sparkles } from "lucide-react";

const facts = [
  "I play football and I've twisted my ankle more times than I've broken my code. ",
  "I love Beaches.",
  "I also love farms.",
];

const RandomSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [factIndex, setFactIndex] = useState(Math.floor(Math.random() * facts.length));

  const nextFact = () => {
    let next;
    do {
      next = Math.floor(Math.random() * facts.length);
    } while (next === factIndex);
    setFactIndex(next);
  };

  return (
    <section id="random" className="py-24 px-4">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-sm text-primary mb-2">{"// random"}</h2>
          <h3 className="text-3xl font-bold mb-8 font-body">Fun Facts</h3>

          <div className="bg-card border border-border rounded-lg p-8 text-center border-glow-cyan">
            <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
            <div className="font-mono text-xs text-accent mb-4 text-glow-green">
              💡 DID YOU KNOW?
            </div>
            <motion.p
              key={factIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg text-foreground mb-6"
            >
              {facts[factIndex]}
            </motion.p>
            <button
              onClick={nextFact}
              className="inline-flex items-center gap-2 px-4 py-2 font-mono text-sm bg-secondary text-primary rounded hover:bg-secondary/80 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Next Fact
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RandomSection;
