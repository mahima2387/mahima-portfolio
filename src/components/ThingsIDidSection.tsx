import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    id: "work-experience",
    title: "Industry Experience",
    description: "Hands-on development during internships in real-world engineering teams.",
    icon: { type: "emoji", src: "🌍" },
    gradient: "bg-gradient-to-br from-blue-500/5 to-cyan-500/5",
  },
  {
    id: "projects",
    title: "Projects",
    description: "Some things I've built.",
    icon: { type: "image", src: "/logos/projects.png" },
    gradient: "bg-gradient-to-br from-green-500/5 to-emerald-500/5",
  },
  {
    id: "acm-w",
    title: "Chairperson of ACM-W",
    description: "Check out our progress and motivation!",
    icon: { type: "image", src: "/logos/acm-w.png" },
    gradient: "bg-gradient-to-br from-purple-500/5 to-pink-500/5",
  },
  {
    id: "swmc",
    title: "SWMC",
    description: "Student Welfare & Mentorship Committee",
    icon: { type: "image", src: "/logos/swmc.png" },
    gradient: "bg-gradient-to-br from-yellow-500/5 to-orange-500/5",
  },
];

const ThingsIDidSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const navigate = useNavigate();

  return (
    <section id="things-i-did" className="py-24 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-sm text-primary mb-2">{"// more about me"}</h2>
          <h3 className="text-3xl font-bold mb-12 font-body">Things I Did</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => navigate(`/things/${category.id}`)}
                className={`relative group ${category.gradient} border-2 border-border rounded-2xl p-10 cursor-pointer hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]`}
              >
                {/* Icon/Logo */}
                <div className="mb-6 h-16 flex items-center">
                  {category.icon.type === "emoji" ? (
                    <span className="text-6xl">{category.icon.src}</span>
                  ) : (
                    <img 
                      src={category.icon.src} 
                      alt={category.title}
                      className="h-16 w-16 object-contain"
                    />
                  )}
                </div>
                
                {/* Title */}
                <h4 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {category.title}
                </h4>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {category.description}
                </p>

                {/* Click indicator */}
                <div className="absolute bottom-6 right-6 text-xs font-mono text-muted-foreground/60 group-hover:text-primary transition-colors">
                  Click for more →
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThingsIDidSection;