import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="px-4 sm:px-6 md:px-12 py-12 md:py-16">
      <div className="max-w-7xl mx-auto text-center relative">
        <div className="absolute inset-0 dot-pattern rounded-3xl opacity-40 pointer-events-none" />

        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-4 left-8 w-3 h-3 rounded-full bg-accent/30 hidden md:block"
          animate={{ y: [0, -10, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-8 right-12 w-5 h-5 rounded-full border border-accent/20 hidden md:block"
          animate={{ y: [0, -8, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-8 w-16 h-16 bg-accent/5 rounded-full blur-xl hidden md:block"
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 py-8 md:py-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-4"
          >
            Get in Touch
          </motion.span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-5xl text-foreground mb-5">
            Let's work together
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto mb-8 md:mb-10">
            I'm currently seeking a UI/UX design role where I can contribute, learn, and grow while creating thoughtful user experiences.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <motion.a
              href="mailto:nirjarapatil21@gmail.com?subject=Let's%20Work%20Together"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-full font-heading font-semibold text-sm hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
            >
              <Mail size={18} /> Contact Me <ArrowUpRight size={16} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/nirjara-patil-a7928035b/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 border border-foreground/20 text-foreground px-8 py-3 rounded-full font-heading font-semibold text-sm hover:bg-foreground hover:text-primary-foreground transition-all duration-300"
            >
              <Linkedin size={18} /> LinkedIn
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
