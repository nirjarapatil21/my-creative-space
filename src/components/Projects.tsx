import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Meesho App Redesign",
    description: "Simplifying Meesho — A redesign focused on improving usability, visual clarity, and overall user experience.",
    tags: ["UX Research", "Mobile App"],
    image: "/case-studies/meesho/01-hero.png",
    slug: "meesho-app-redesign",
  },
  {
    title: "My Fit Studio – Custom Tailoring App",
    description: "A UX case study for a custom tailoring app focused on perfect fit, seamless measurements, and personalized styling.",
    tags: ["UX Case Study", "Mobile App"],
    image: "/case-studies/myfitstudio/01-section.png",
    slug: "my-fit-studio",
  },
  {
    title: "Kind Heart – Charity Website Design",
    description: "Designing a heartfelt charity website that inspires trust, encourages donations, and connects communities.",
    tags: ["Web Design", "UI Design"],
    image: "/case-studies/kindheart/01-section.png",
    slug: "kind-heart-charity",
  },
];

const Projects = () => {
  const navigate = useNavigate();
  return (
    <section id="work" className="px-6 md:px-12 py-16">
      <div className="max-w-7xl mx-auto border border-border rounded-3xl p-8 md:p-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            Explore My Projects
          </h2>
          <p className="text-muted-foreground text-base mt-3 max-w-lg mx-auto">
            A selection of my UI/UX projects where I focused on solving real user problems through thoughtful design.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group cursor-pointer bg-section-highlight rounded-2xl overflow-hidden"
              onClick={() => project.slug && navigate(`/project/${project.slug}`)}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-0">
                <div className="p-8 md:p-10">
                  <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground group-hover:opacity-80 transition-opacity">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed max-w-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-foreground bg-background px-3 py-1.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:gap-3 transition-all duration-300">
                    View Project
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </button>
                </div>
                <div className="overflow-hidden h-56 md:h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
