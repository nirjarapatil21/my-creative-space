import { motion } from "framer-motion";

const skills = ["Figma", "Adobe XD", "Sketch", "Illustrator", "Photoshop", "Prototyping", "Wireframing", "User Research", "Usability Testing", "Design Systems"];

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
              I'm a fresher UI/UX designer with a deep passion for creating clean, intuitive, and user-friendly digital experiences. I believe great design is invisible — it just works.
            </p>
            <p>
              My approach combines user research, thoughtful wireframing, and pixel-perfect visual design to craft interfaces that delight users and meet business goals.
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
