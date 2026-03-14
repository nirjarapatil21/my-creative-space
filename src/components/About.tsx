import { motion } from "framer-motion";

const skills = ["Figma", "User Research", "User Flow", "Wireframing", "Prototyping", "Usability Principles", "Information Architecture", "Interaction Design"];

const About = () => {
  return (
    <section id="about" className="px-6 md:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-hero-bg rounded-3xl p-8 md:p-14"
        >
          <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase mb-2">About</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-8">A little about me</h2>
          <div className="space-y-5 text-muted-foreground leading-[1.8] text-base max-w-2xl">
            <p>
              Hi, I'm Nirjara, a UI/UX designer who enjoys creating simple, intuitive, and user-centered digital experiences. With a background in Mass Media and Communication, I bring strong research and storytelling skills into my design process. I focus on understanding user problems and turning them into clean, functional interface solutions. Currently, I'm looking for opportunities to grow, learn, and contribute as a UI/UX designer.
            </p>
          </div>
          <div className="mt-10">
            <h3 className="font-heading font-semibold text-lg text-foreground mb-4">Tools & Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="text-sm font-medium text-foreground bg-background px-4 py-2 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
