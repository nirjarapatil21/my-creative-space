import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "My Fit Studio – Custom Tailoring App",
    description: "A UX case study for a custom tailoring app focused on perfect fit, seamless measurements, and personalized styling.",
    tags: ["UX Case Study", "Mobile App"],
    image: "/case-studies/myfitstudio/01-section.png",
    slug: "my-fit-studio",
  },
  {
    title: "Meesho App Redesign",
    description: "Simplifying Meesho — A redesign focused on improving usability, visual clarity, and overall user experience.",
    tags: ["UX Research", "Mobile App"],
    image: "/case-studies/meesho/01-hero.png",
    slug: "meesho-app-redesign",
  },
  {
    title: "Kind Heart – Charity Website Design",
    description: "Designing a heartfelt charity website that inspires trust, encourages donations, and connects communities.",
    tags: ["Web Design", "UI Design"],
    image: "/case-studies/kindheart/01-section.png",
    slug: "kind-heart-charity",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const Projects = () => {
  const navigate = useNavigate();
  return (
    <section id="work" className="px-4 sm:px-6 md:px-12 py-12 md:py-16 relative">
      {/* Background decorative orbs */}
      <div className="absolute top-20 left-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-14"
        >
          <span className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-4">
            Selected Work
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            Explore My Projects
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mt-3 max-w-lg mx-auto">
            A selection of my UI/UX projects where I focused on solving real user problems through thoughtful design.
          </p>
        </motion.div>

        <div className="space-y-6 md:space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.015, y: -4 }}
              className="group cursor-pointer bg-card rounded-2xl overflow-hidden border border-border/60 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/8 transition-all duration-500"
              onClick={() => project.slug && navigate(`/project/${project.slug}`)}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-0">
                <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, ti) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.12 + ti * 0.05 + 0.2 }}
                        className="text-xs font-medium text-accent bg-accent/10 px-3 py-1.5 rounded-full"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl md:text-2xl text-foreground group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed max-w-sm">
                    {project.description}
                  </p>
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-accent transition-all duration-300"
                  >
                    View Case Study
                    <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </motion.button>
                </div>
                <div className="overflow-hidden bg-section-highlight flex items-center justify-center p-4 sm:p-6 order-1 md:order-2 h-52 sm:h-56 md:h-72 relative">
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain transition-all duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
