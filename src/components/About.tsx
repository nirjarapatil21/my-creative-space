import { motion } from "framer-motion";

const skills = ["Figma", "User Research", "User Flow", "Wireframing", "Prototyping", "Usability Principles", "Information Architecture", "Interaction Design"];

const About = () => {
  return (
    <section id="about" className="px-4 sm:px-6 md:px-12 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-3xl p-6 sm:p-8 md:p-14 border border-border/60 relative grain-overlay"
        >
          {/* Decorative accent line */}
          <div className="absolute top-0 left-8 md:left-14 w-12 h-1 bg-accent rounded-b-full" />
          
          <span className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-4">
            About
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-foreground mb-6 md:mb-8">A little about me</h2>
          <div className="space-y-5 text-muted-foreground leading-[1.8] text-sm sm:text-base max-w-2xl">
            <p>
              Hi, I'm Nirjara, a UI/UX designer who enjoys creating simple, intuitive, and user-centered digital experiences. With a background in Mass Media and Communication, I bring strong research and storytelling skills into my design process. I focus on understanding user problems and turning them into clean, functional interface solutions. Currently, I'm looking for opportunities to grow, learn, and contribute as a UI/UX designer.
            </p>
          </div>
          <div className="mt-8 md:mt-10">
            <h3 className="font-heading font-semibold text-base sm:text-lg text-foreground mb-4">Tools & Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="text-xs sm:text-sm font-medium text-foreground bg-section-highlight px-4 py-2 rounded-full border border-border/60 hover:border-accent/40 hover:bg-accent/5 transition-colors duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
