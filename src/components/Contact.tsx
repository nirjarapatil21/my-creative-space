import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="px-4 sm:px-6 md:px-12 py-12 md:py-16">
      <div className="max-w-7xl mx-auto text-center relative">
        <div className="absolute inset-0 dot-pattern rounded-3xl opacity-40 pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 py-8 md:py-12"
        >
          <span className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-4">
            Get in Touch
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-5xl text-foreground mb-5">
            Let's work together
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto mb-8 md:mb-10">
            I'm currently seeking a UI/UX design role where I can contribute, learn, and grow while creating thoughtful user experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a href="mailto:nirjarapatil21@gmail.com?subject=Let's%20Work%20Together"
              className="flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-full font-heading font-semibold text-sm hover:opacity-90 hover:scale-[1.03] transition-all duration-300 hover:shadow-lg hover:shadow-accent/25">
              <Mail size={18} /> Contact Me <ArrowUpRight size={16} />
            </a>
            <a href="https://www.linkedin.com/in/nirjara-patil-a7928035b/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 border border-foreground/20 text-foreground px-8 py-3 rounded-full font-heading font-semibold text-sm hover:bg-foreground hover:text-primary-foreground hover:scale-[1.03] transition-all duration-300">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
