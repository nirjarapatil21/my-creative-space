import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="px-4 sm:px-6 md:px-12 py-6 md:py-8">
      <div className="max-w-7xl mx-auto bg-card rounded-3xl overflow-hidden relative grain-overlay">
        {/* Decorative elements */}
        <div className="absolute top-6 right-6 w-16 h-16 rounded-full border-2 border-accent/20 animate-float hidden md:block" />
        <div className="absolute bottom-10 left-10 w-8 h-8 bg-accent/10 rounded-lg rotate-12 animate-float-delayed hidden md:block" />

        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Left - Text */}
          <div className="p-8 sm:p-10 md:p-16 lg:p-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-6"
            >
              Available for work
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-heading font-extrabold text-foreground leading-[1.1] tracking-tight"
            >
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Hi, I'm Nirjara Patil</span>
              <br />
              <span className="block mt-4 text-[calc(2rem-2px)] sm:text-[calc(2.25rem-3px)] md:text-[calc(3rem-5px)] lg:text-[calc(3.75rem-6px)]">
                UI/UX Designer
                <span className="inline-block w-2.5 h-2.5 bg-accent rounded-full ml-2 align-middle" />
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-muted-foreground text-sm sm:text-base md:text-lg mt-5 max-w-md leading-relaxed"
            >
              A passionate UI/UX designer crafting intuitive, user-centered digital experiences that solve real problems.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 mt-8"
            >
              <a
                href="#work"
                className="bg-accent text-accent-foreground px-7 py-3 rounded-full font-heading font-semibold text-sm hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
              >
                View Work
              </a>
              <a
                href="mailto:nirjarapatil21@gmail.com"
                className="border border-foreground/20 text-foreground px-7 py-3 rounded-full font-heading font-semibold text-sm hover:bg-foreground hover:text-primary-foreground transition-all duration-300"
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Right - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-40 sm:h-44 md:h-auto md:max-h-[250px] flex items-center justify-center p-4 sm:p-6"
          >
            <img
              alt="Profile photo"
              className="w-full max-w-[220px] md:max-w-[260px] rounded-2xl object-contain"
              src="/lovable-uploads/a218a0d9-6e4d-478b-b75d-0aaec75ec5a4.jpg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
