import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Briefcase, Calendar, CheckCircle, ExternalLink, Terminal, X, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

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
    skills: ["Python", "Data Science", "Matplotlib", "n8n", "EDA", "API Integration"],
  },
];

// Projects Data
const projects = [
  {
    name: "E-Commerce Web App",
    desc: "Full-stack e-commerce platform with user authentication, product management, and shopping cart functionality.",
    tech: ["Java", "Spring Boot", "React.js", "MySQL"],
    link: "https://github.com/mahima2387/livemart-project",
    hasLink: true,
    linkType: "github",
  },
  {
    name: "Queueing System Analysis",
    desc: "Collected real-world data from the Library Stationar Shop and modeled the system using M/M/1 queueing theory and proposed operational improvements to reduce customer waiting time and congestion.",
    tech: ["Operations Research", "Probability", "Statistics"],
    link: `${import.meta.env.BASE_URL}reports/queueing-system-analysis.pdf`,
    hasLink: true,
    linkType: "pdf",
  },
  {
    name: "Adaptive Learning Platform",
    desc: "Studied adaptive learning systems incorporating DDA mechanisms, analyzed the role of gamification and derived insights to balance effectiveness with long-term motivation.",
    tech: ["DDA", "Knowledge Space Theory", "IRT"],
    link: "https://github.com/mahima2387/A-study-on-Adaptive-Learning-with-a-Gaming-Perspective",
    hasLink: true,
    linkType: "github",
  },
  {
    name: "Algebraic Structures and Proof-Based Reasoning",
    desc: "Explored core algebraic structures like groups, rings, fields and developed structured approaches to constructing and validating mathematical proofs.",
    tech: ["Rings", "Groups", "Visualization"],
    link: `${import.meta.env.BASE_URL}reports/algebraic-structures-visualizer.pdf`,
    hasLink: true,
    linkType: "pdf",
  },
];

// ACM-W Data
const acmwData = {
  vision: "I believe ACM-W is more than a community - it's a space where women in computing can learn, grow and chase oppurtunities. My goal is to foster an environment where every member feels inspired, supported and empowered to take on challenges.",
  roles: [
    {
      title: "Member",
      period: "2023 - 2025",
      highlights: [
        "Participated in technical workshops and coding events",
        "Collaborated with team on event planning and execution",
      ],
    },
    {
      title: "Chairperson",
      period: "2025 - Present",
      highlights: [
        "Leading ACM-W Hyderabad chapter with a focus on fostering skill development and inclusivity.",
        "Organized events, workshops and competitions.",
        "Mentored members and guided teams to execute projects successfully.",
        "Introduced new initiatives to encourage learning and collaboration.",
      ],
    },
  ],
  events: [
    {
      name: "Technical Workshops",
      description: "We organize hands-on technical workshops throughout the year, led by our members and open to everyone, helping participants build practical skills.",
      impact: "Helps participants get started in tech",
    },
    {
      name: "CodeFLIX",
      description: "All our members sit together and code while watching a movie.",
      impact: "helps in team building",
    },
    {
      name: "Mentroship Structure",
      description: "Each domain has dedicated mentors who guide members on how to learn, build skills and navigate projects effectively.",
      impact: "Helps members get started and grow confidently in their domain",
    },
    {
      name: "AlgoRace",
      description: "a competition where members solve algorithm challenges together as teams",
      impact: "helps practice problem-solving",
    },
  ],
  gallery: [
    { src: `${import.meta.env.BASE_URL}acm-w-gallery/event1.jpg`, caption: "App Dev Workshop 2025" },
    { src: `${import.meta.env.BASE_URL}acm-w-gallery/event2.jpg`, caption: "Attended the ACM Summit 2025" },
    { src: `${import.meta.env.BASE_URL}acm-w-gallery/event3.jpg`, caption: "CodeFLIX 2025" },
    { src: `${import.meta.env.BASE_URL}acm-w-gallery/event5.jpg`, caption: "Team ACM-W" },
  ],
};

// SWMC Data
const swmcData = {
  about: "The Student Welfare & Mentorship Committee works to enhance student life through mentorship programs and community-building events. We assign dedicated mentors to first year students during onboarding and support them throughout the year, helping them get started, feel confident and navigate campus life smoothly.",
  roles: [
    {
      title: "Mentor",
      period: "2024 - 2025",
      highlights: [
        "Guided 6 junior students throught their first year",
      ],
    },
    {
      title: "Operations Lead",
      period: "2025 - Present",
      highlights: [
        "Led the operational planning and execution of large-scale SWMC events",
        "Successfully Organized multiple events with 150+ participants",
      ],
    },
  ],
  events: [
    {
      name: "LinkedIn IRL",
      description: "An informal networking event that majorly helps first-year students connect with seniors from various domains and participate in interactive activities.",
      impact: "Helps students build connections",
    },
    {
      name: "PS-2 Unplugged",
      description: "A forum for students to interact with seniors who have worked in various domains like IT, analytics, consulting, finance, core and product roles, ask questions, clarify doubts and get placement preparation advice.",
      impact: "Helped 200+ students with placement preparation and guidance",
    },
  ],
  gallery: [
    { src: `${import.meta.env.BASE_URL}swmc-gallery/event1.jpg`, caption: "LinkedIn IRL 2025" },
    { src: `${import.meta.env.BASE_URL}swmc-gallery/event2.jpg`, caption: "PS-2 Unplugged 2026" },
    { src: `${import.meta.env.BASE_URL}swmc-gallery/event3.jpg`, caption: "BITSAA Global Meet 2026" },
  ],
};

const ThingsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/#things-i-did");
    setTimeout(() => {
      document.getElementById("things-i-did")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  if (!id) {
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
  }

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

                    <div className="space-y-3 mb-6">
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

                    {exp.skills && exp.skills.length > 0 && (
                      <div>
                        <h5 className="font-bold text-sm mb-3 text-muted-foreground">Tools</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs font-mono bg-secondary border border-border rounded-full text-primary"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

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

  if (id === "acm-w") {
    const [lightbox, setLightbox] = useState<number | null>(null);

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

            <div className="bg-card border border-border rounded-lg p-6 mb-8 border-glow-cyan">
              <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                <span className="text-accent">✦</span> Our Vision
              </h4>
              <p className="text-foreground/80 leading-relaxed">{acmwData.vision}</p>
            </div>

            <h4 className="font-bold text-2xl mb-6">My Journey</h4>
            <div className="space-y-12 mb-12">
              {acmwData.roles.map((role, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary animate-glow-pulse" />

                  <div className="bg-card border border-border rounded-lg p-6 border-glow-cyan">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h5 className="text-xl font-bold font-body">{role.title}</h5>
                      <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs mt-2 sm:mt-0">
                        <Calendar className="w-3 h-3" />
                        <span>{role.period}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {role.highlights.map((h, i) => (
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

            <h4 className="font-bold text-2xl mb-6">Events & Activities</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {acmwData.events.map((event, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <h5 className="font-bold text-lg mb-2 text-primary">{event.name}</h5>
                  <p className="text-sm text-muted-foreground mb-3">{event.description}</p>
                  <div className="flex items-start gap-2 text-xs text-accent">
                    <span className="mt-0.5">▸</span>
                    <span>{event.impact}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <h4 className="font-bold text-2xl mb-6">Gallery</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {acmwData.gallery.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group relative aspect-square bg-card border border-border rounded-lg overflow-hidden cursor-pointer hover:border-primary/50 transition-all duration-300"
                  onClick={() => setLightbox(i)}
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <p className="text-white text-xs font-mono">{img.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {lightbox !== null && (
          <div
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button 
              onClick={() => setLightbox(null)} 
              className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="max-w-6xl max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={acmwData.gallery[lightbox].src}
                alt={acmwData.gallery[lightbox].caption}
                className="max-w-full max-h-[90vh] object-contain rounded-lg border-2 border-primary/50 shadow-2xl"
              />
              <p className="text-center mt-4 text-muted-foreground font-mono text-sm">
                {acmwData.gallery[lightbox].caption}
              </p>
            </motion.div>
          </div>
        )}
      </div>
    );
  }

  if (id === "swmc") {
    const [lightbox, setLightbox] = useState<number | null>(null);

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
            <p className="text-muted-foreground font-mono text-sm mb-8">Student Welfare & Mentorship Committee</p>

            <div className="bg-card border border-border rounded-lg p-6 mb-8 border-glow-cyan">
              <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                <span className="text-accent">✦</span> What We Do
              </h4>
              <p className="text-foreground/80 leading-relaxed">{swmcData.about}</p>
            </div>

            <h4 className="font-bold text-2xl mb-6">My Roles</h4>
            <div className="space-y-12 mb-12">
              {swmcData.roles.map((role, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary animate-glow-pulse" />

                  <div className="bg-card border border-border rounded-lg p-6 border-glow-cyan">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h5 className="text-xl font-bold font-body">{role.title}</h5>
                      <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs mt-2 sm:mt-0">
                        <Calendar className="w-3 h-3" />
                        <span>{role.period}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {role.highlights.map((h, i) => (
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

            <h4 className="font-bold text-2xl mb-6">Events & Initiatives</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {swmcData.events.map((event, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <h5 className="font-bold text-lg mb-2 text-primary">{event.name}</h5>
                  <p className="text-sm text-muted-foreground mb-3">{event.description}</p>
                  <div className="flex items-start gap-2 text-xs text-accent">
                    <span className="mt-0.5">▸</span>
                    <span>{event.impact}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <h4 className="font-bold text-2xl mb-6">Gallery</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {swmcData.gallery.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group relative aspect-square bg-card border border-border rounded-lg overflow-hidden cursor-pointer hover:border-primary/50 transition-all duration-300"
                  onClick={() => setLightbox(i)}
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <p className="text-white text-xs font-mono">{img.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {lightbox !== null && (
          <div
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button 
              onClick={() => setLightbox(null)} 
              className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors z-10"
            >
              <XCircle className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="max-w-6xl max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={swmcData.gallery[lightbox].src}
                alt={swmcData.gallery[lightbox].caption}
                className="max-w-full max-h-[90vh] object-contain rounded-lg border-2 border-primary/50 shadow-2xl"
              />
              <p className="text-center mt-4 text-muted-foreground font-mono text-sm">
                {swmcData.gallery[lightbox].caption}
              </p>
            </motion.div>
          </div>
        )}
      </div>
    );
  }

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