import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Download, FileText } from "lucide-react";

const ResumeSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="resume" className="py-24 px-4">
      <div className="max-w-3xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-sm text-primary mb-2">{"// resume"}</h2>
          <h3 className="text-3xl font-bold mb-8 font-body">Resume</h3>

          <div className="bg-card border border-border rounded-lg p-8 border-glow-cyan">
            <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
            <div className="font-mono text-sm text-muted-foreground mb-6 space-y-1">
              <p className="text-accent">$ ls ~/documents/</p>
              <p>Mahima_Nandana_K_Resume.pdf</p>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-3 px-6 py-3 font-mono text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_20px_hsl(185_100%_50%_/_0.4)]"
            >
              <Download className="w-4 h-4" />
              {">"} download resume.pdf
            </a>

            <p className="text-xs text-muted-foreground mt-4 font-mono">
              {"// Upload your resume PDF and update the link above"}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
