/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Calendar,
  Code,
  Server,
  Database,
  CreditCard,
  Cloud,
  GitBranch,
  Package,
  ArrowRight,
} from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dots, setDots] = useState<
    Array<{ left: string; top: string; delay: number; duration: number }>
  >([]);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Generate random positions and animations for dots on client side
    setDots(
      Array(50)
        .fill(0)
        .map(() => ({
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          delay: Math.random() * 2,
          duration: 3 + Math.random() * 2,
        }))
    );
  }, []);

  // Close menu when a nav item is clicked (for mobile)
  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "Date Crew",
      description:
        "A sophisticated matchmaking application that connects people through intelligent matching algorithms and seamless user experience.",
      tech: [
        { name: "React", icon: <Code className="w-4 h-4" /> },
        { name: "Node JS", icon: <Server className="w-4 h-4" /> },
        { name: "Mongo DB", icon: <Database className="w-4 h-4" /> },
        { name: "Payment Gateway", icon: <CreditCard className="w-4 h-4" /> },
        { name: "Digital Ocean", icon: <Cloud className="w-4 h-4" /> },
        { name: "Git", icon: <GitBranch className="w-4 h-4" /> },
        { name: "Monorepo", icon: <Package className="w-4 h-4" /> },
        { name: "Docker", icon: <Package className="w-4 h-4" /> },
      ],
      gradient: "from-pink-500/20 to-purple-600/20",
      link: "https://findlove.thedatecrew.com/",
    },
    {
      title: "WealthMap",
      description:
        "An advanced property searching application that helps users discover and analyze real estate opportunities with comprehensive market insights.",
      tech: [
        { name: "React", icon: <Code className="w-4 h-4" /> },
        { name: "Node JS", icon: <Server className="w-4 h-4" /> },
        { name: "Mongo DB", icon: <Database className="w-4 h-4" /> },
        { name: "Payment Gateway", icon: <CreditCard className="w-4 h-4" /> },
        { name: "GCP", icon: <Cloud className="w-4 h-4" /> },
        { name: "Git", icon: <GitBranch className="w-4 h-4" /> },
      ],
      gradient: "from-blue-500/20 to-cyan-600/20",
      link: "https://wealth-map.netlify.app/",
    },
  ];

  const experiences = [
    {
      title: "Software Engineer",
      company: "NorthLadder",
      period: "2023 - Present",
      description:
        "Development of scalable web & mobile applications using modern JavaScript frameworks",
      achievements: [
        "Built various web & mobile applications",
        "Mentored junior developers",
        "Implemented CI/CD pipelines",
      ],
    },
    {
      title: "System Engineer",
      company: "TCS",
      period: "2021 - 2023",
      description:
        "Developed and maintained multiple client projects focusing on performance optimization and user experience.",
      achievements: [
        "Feature development, Defect fixing",
        "Deployed on cloud platforms",
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "projects", "experience", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-x-hidden pt-16 md:pt-0">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-indigo-500/5 to-violet-500/10"
        />
        {dots.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: dot.left,
              top: dot.top,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              delay: dot.delay,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6"
        ref={menuRef}
      >
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-4 py-2 md:px-6 md:py-3 shadow-2xl">
            <div className="flex justify-between items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
              >
                Yatendra
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-4">
                {["Hero", "Projects", "Experience", "Contact"].map((item) => (
                  <motion.button
                    key={item}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition-all duration-300 ${
                      activeSection === item.toLowerCase()
                        ? "bg-gradient-to-r from-purple-600/30 to-violet-700/30 text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item}
                  </motion.button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="md:hidden overflow-hidden"
                >
                  <div className="flex flex-col space-y-2 py-4">
                    {["Hero", "Projects", "Experience", "Contact"].map(
                      (item) => (
                        <motion.button
                          key={item}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleNavClick(item.toLowerCase())}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                            activeSection === item.toLowerCase()
                              ? "bg-gradient-to-r from-purple-600/30 to-violet-700/30 text-white"
                              : "text-gray-300 hover:bg-white/10"
                          }`}
                        >
                          {item}
                        </motion.button>
                      )
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center px-6 pt-20"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Yatendra Sharma
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Software engineer crafting exceptional digital experiences with
              modern technologies and innovative solutions
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex justify-center"
            >
              <motion.a
                href="https://drive.google.com/file/d/1FMexexZ5ZCvCatZJ0kFP_R2LZQVPPWUS/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-xl font-semibold hover:bg-purple-400/10 transition-all duration-300 flex items-center space-x-2"
              >
                <span>View Resume</span>
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projects")}
              className="mt-12 px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-700 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center mx-auto group"
            >
              View My Work
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Showcasing innovative solutions built with cutting-edge
              technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative block"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      className="p-2 bg-white/10 rounded-lg"
                    >
                      <ExternalLink className="w-5 h-5 text-purple-400" />
                    </motion.div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                      Tech Stack
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {project.tech.map((tech, techIndex) => (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + techIndex * 0.1 }}
                          className="flex items-center space-x-2 p-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
                        >
                          <div className="text-purple-400">{tech.icon}</div>
                          <span className="text-sm text-gray-300">
                            {tech.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Work Experience
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Building impactful solutions across diverse industries
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-purple-400 text-lg font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center text-gray-400 mt-2 md:mt-0">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                    Key Achievements
                  </h4>
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <motion.div
                        key={achievementIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.2 + achievementIndex * 0.1,
                        }}
                        className="flex items-center text-gray-300"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mr-3" />
                        <span>{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Let's connect and discuss how I can help with your next project
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto"
          >
            <div className="space-y-6">
              {[
                {
                  icon: <Mail className="w-5 h-5" />,
                  label: "Email",
                  value: "yatendra948@gmail.com",
                  href: "mailto:yatendra948@gmail.com",
                },
                {
                  icon: <Linkedin className="w-5 h-5" />,
                  label: "LinkedIn",
                  value: "linkedin.com/in/yatendra-sharma",
                  href: "https://www.linkedin.com/in/yatendra-sharma-5177091aa/",
                  target: "_blank",
                },
                {
                  icon: <Github className="w-5 h-5" />,
                  label: "GitHub",
                  value: "github.com/sharmayatendra",
                  href: "https://github.com/sharmayatendra",
                  target: "_blank",
                },
              ].map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.target || "_self"}
                  rel={contact.target ? "noopener noreferrer" : ""}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-start sm:items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors ${
                    contact.href ? "cursor-pointer" : "cursor-default"
                  }`}
                >
                  <div className="text-purple-400 mt-1 sm:mt-0">
                    {contact.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400">{contact.label}</p>
                    <p className="text-white">{contact.value}</p>
                  </div>
                  {contact.href && (
                    <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm sm:text-base text-gray-400">
            © {new Date().getFullYear()} Yatendra. Crafted with passion and
            code.
          </p>
        </div>
      </footer>
    </div>
  );
}
