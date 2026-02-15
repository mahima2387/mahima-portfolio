import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Send, Mail, Github, Linkedin } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend only - no backend
    alert("Message sent! (Frontend demo — connect a backend to make this work)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-sm text-primary mb-2">{"// contact"}</h2>
          <h3 className="text-3xl font-bold mb-8 font-body">Get In Touch</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-6 border-glow-cyan">
              <div className="flex items-center gap-2 mb-4 font-mono text-xs text-muted-foreground">
                <span className="w-3 h-3 rounded-full bg-destructive inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-accent inline-block" />
                <span className="ml-2">terminal — send_message.sh</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="font-mono text-xs text-accent block mb-1">$ name:</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-secondary border border-border rounded px-3 py-2 font-mono text-sm text-foreground focus:border-primary focus:outline-none"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-accent block mb-1">$ email:</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-secondary border border-border rounded px-3 py-2 font-mono text-sm text-foreground focus:border-primary focus:outline-none"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-accent block mb-1">$ message:</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-secondary border border-border rounded px-3 py-2 font-mono text-sm text-foreground focus:border-primary focus:outline-none min-h-[100px] resize-none"
                    placeholder="Your message..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 font-mono text-sm bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-all hover:shadow-[0_0_15px_hsl(185_100%_50%_/_0.3)]"
                >
                  <Send className="w-4 h-4" />
                  {">"} send_message
                </button>
              </form>
            </div>

            <div className="flex flex-col justify-center space-y-6">
              <div className="font-mono text-sm text-muted-foreground">
                <p className="text-accent mb-4">$ cat contact_info.txt</p>
                <p className="mb-6 text-foreground/80">
                  Feel free to reach out! I'm always open to discussing new projects, opportunities, or just having a chat about tech.
                </p>
              </div>

              <div className="space-y-4">
                <a href="mailto:mahimanandana@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="p-2 bg-secondary rounded group-hover:bg-primary/10 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-sm">mahimanandana@gmail.com</span>
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="p-2 bg-secondary rounded group-hover:bg-primary/10 transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-sm">github.com/mahimanandana</span>
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="p-2 bg-secondary rounded group-hover:bg-primary/10 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-sm">linkedin.com/in/mahimanandana</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
