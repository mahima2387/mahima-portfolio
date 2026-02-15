import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Trophy, Users, Shield } from "lucide-react";

const activities = [
  {
    title: "ACM-W Chairperson",
    org: "BITS Pilani, Hyderabad",
    desc: "Led the ACM-W chapter, organized tech events, workshops, and hackathons to promote women in computing.",
    icon: Trophy,
    badge: "🏆 ACHIEVEMENT UNLOCKED",
  },
  {
    title: "SWMC Operations Lead",
    org: "Student Welfare & Mentorship",
    desc: "Managed operations and coordinated mentorship programs for incoming students across the campus.",
    icon: Users,
    badge: "⚡ LEADERSHIP UNLOCKED",
  },
  {
    title: "BHCG Member",
    org: "BITS Hyderabad Community",
    desc: "Active member contributing to community growth, student welfare initiatives, and campus development.",
    icon: Shield,
    badge: "🎯 COMMUNITY UNLOCKED",
  },
];

const ActivitiesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="activities" className="py-24 px-4">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-sm text-primary mb-2">{"// activities"}</h2>
          <h3 className="text-3xl font-bold mb-8 font-body">Things I Did</h3>

          <div className="space-y-6">
            {activities.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-all duration-300"
              >
                <div className="font-mono text-xs text-accent mb-3 text-glow-green">{a.badge}</div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-lg group-hover:bg-accent/10 transition-colors">
                    <a.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg font-body">{a.title}</h4>
                    <p className="text-primary font-mono text-xs mb-2">{a.org}</p>
                    <p className="text-sm text-muted-foreground">{a.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
