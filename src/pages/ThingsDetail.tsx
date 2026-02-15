import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Briefcase, Calendar, CheckCircle, ExternalLink, Terminal } from "lucide-react";
import { motion } from "framer-motion";

// Work Experience Data
const workExperiences = [
  {
    title: "SDE Intern",
    company: "Indium Software",
    location: "Chennai",
    period: "May 2025 – July 2025",
    highlights: [
      "Developed an Interactive Data Insights Bot integrating Data Science workflows with query handling.",
      "Designed and implemented data processing pipelines for extracting and transforming structured datasets.",
      "Generated data visualizations using Matplotlib to communicate key findings.",
      "Automated data workflows and integrations using n8n for streamlined processing.",
    ],
  },
  // Add more work experiences here
];

// Projects Data
const projects = [
  {
    name: "E-Commerce Web App",
    desc: "Full-stack e-commerce platform with user authentication, product management, and shopping cart functionality.",
    tech: ["Java", "Spring Boot", "React.js", "MySQL"],
    link: "https://github.com/mahima2387/livemart-project", // Your GitHub repo
    hasLink: true,
    linkType: "github",
  },
  {
    name: "Queueing System Analysis",
    desc: "Collected real-world data from the Library Stationar Shop and modeled the system using M/M/1 queueing theory and proposed operational improvements to reduce customer waiting time and congestion.",
    tech: ["Operations Research", "Probability", "Statistics"],
    link: "/reports/queueing-system-analysis.pdf",
    hasLink: true,
    linkType: "pdf",
  },
  {
    name: "Adaptive Learning Platform",
    desc: "Studied adaptive learning systems incorporating DDA mechanisms, analyzed the role of gamification and derived insights to balance effectiveness with long-term motivation.",
    tech: ["DDA", "Knowledge Space Theory", "IRT"],
    link: "https://github.com/mahima2387/A-study-on-Adaptive-Learning-with-a-Gaming-Perspective", // Your GitHub repo
    hasLink: true,
    linkType: "github",
  },
  {
    name: "Algebraic Structures and Proof-Based Reasoning",
    desc: "Explored core algebraic structures like groups, rings, fields and developed structured approaches to constructing and validating mathematical proofs.",
    tech: ["Rings", "Groups", "Visualization"],
    link: "/reports/algebraic-structures-visualizer.pdf",
    hasLink: true,
    linkType: "pdf",
  },
];

// ACM-W Data
const acmwActivities = [
  {
    title: "Chairperson / Founding Member",
    period: "2023 - Present",
    highlights: [
      "Founded and established the ACM-W chapter at BITS Pilani Hyderabad",
      "Organized 10+ technical workshops and coding events",
      "Grew membership to 150+ students",
      "Led team of 20+ volunteers",
      "Hosted coding bootcamp for 100+ participants",
    ],
  },
];

// SWMC Data
const swmcActivities = [
  {
    title: "Student Welfare Committee Member",
    period: "2023 - Present",
    highlights: [
      "Implemented new student feedback system",
      "Improved campus facilities and student amenities",
      "Organized wellness and mental health programs",
      "Coordinated with administration for student concerns",
    ],
  },
];

const ThingsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/#things-i-did");
    setTimeout(() => {
      document.getElementById("things-i-did")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // Render Work Experience
  if (id === "work-experience") {
    return (
      <div className="min-h-screen bg-background bg-grid-pattern">
        <div className="max-w-4xl mx-auto px-4 py-24">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-mono text-sm group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Things I Did
          </button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-mono text-sm text-primary mb-2">{"// experience"}</h2>
            <h3 className="text-3xl font-bold mb-8 font-body">Work Experience</h3>

            <div className="space-y-12">
              {workExperiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary animate-glow-pulse" />

                  <div className="bg-card border border-border rounded-lg p-6 border-glow-cyan">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-primary" />
                        <h4 className="text-xl font-bold font-body">{exp.title}</h4>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs mt-2 sm:mt-0">
                        <Calendar className="w-3 h-3" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-primary font-mono text-sm mb-4">@ {exp.company} — {exp.location}</p>

                    <div className="space-y-3">
                      {exp.highlights.map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
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
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

// Render Projects
if (id === "projects") {
  return (
    <div className="min-h-screen bg-background bg-grid-pattern">
      <div className="max-w-5xl mx-auto px-4 py-24">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-mono text-sm group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Things I Did
        </button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-sm text-primary mb-2">{"// projects"}</h2>
          <h3 className="text-3xl font-bold mb-8 font-body">Projects</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:border-glow-cyan"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-lg font-body group-hover:text-primary transition-colors">{p.name}</h4>
                  {p.hasLink && (
                    <a 
                      href={p.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      onClick={(e) => e.stopPropagation()}
                      title={p.linkType === "pdf" ? "View Report" : "View Repository"}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
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
                  <span>{p.linkType === "pdf" ? "$ open report.pdf" : "$ git clone repo"}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

  // Render ACM-W
  if (id === "acm-w") {
    return (
      <div className="min-h-screen bg-background bg-grid-pattern">
        <div className="max-w-4xl mx-auto px-4 py-24">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-mono text-sm group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Things I Did
          </button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-mono text-sm text-primary mb-2">{"// activities"}</h2>
            <h3 className="text-3xl font-bold mb-2 font-body">ACM-W</h3>
            <p className="text-muted-foreground font-mono text-sm mb-8">Association for Computing Machinery - Women's Chapter</p>

            <div className="space-y-12">
              {acmwActivities.map((activity, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary animate-glow-pulse" />

                  <div className="bg-card border border-border rounded-lg p-6 border-glow-cyan">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h4 className="text-xl font-bold font-body">{activity.title}</h4>
                      <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs mt-2 sm:mt-0">
                        <Calendar className="w-3 h-3" />
                        <span>{activity.period}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {activity.highlights.map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
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
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Render SWMC
  if (id === "swmc") {
    return (
      <div className="min-h-screen bg-background bg-grid-pattern">
        <div className="max-w-4xl mx-auto px-4 py-24">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-mono text-sm group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Things I Did
          </button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-mono text-sm text-primary mb-2">{"// activities"}</h2>
            <h3 className="text-3xl font-bold mb-2 font-body">SWMC</h3>
            <p className="text-muted-foreground font-mono text-sm mb-8">Student Welfare Management Committee</p>

            <div className="space-y-12">
              {swmcActivities.map((activity, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary animate-glow-pulse" />

                  <div className="bg-card border border-border rounded-lg p-6 border-glow-cyan">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h4 className="text-xl font-bold font-body">{activity.title}</h4>
                      <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs mt-2 sm:mt-0">
                        <Calendar className="w-3 h-3" />
                        <span>{activity.period}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {activity.highlights.map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
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
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Fallback for unknown IDs
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Not Found</h1>
        <button
          onClick={handleBack}
          className="text-primary hover:text-primary/80"
        >
          ← Back to Things I Did
        </button>
      </div>
    </div>
  );
};

export default ThingsDetail;