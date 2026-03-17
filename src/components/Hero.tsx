import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="px-4 sm:px-6 md:px-12 py-6 md:py-8">
      <div className="max-w-7xl mx-auto bg-card rounded-3xl overflow-hidden relative grain-overlay">
        {/* Animated decorative elements */}
        <motion.div
          className="absolute top-6 right-6 w-16 h-16 rounded-full border-2 border-accent/20 hidden md:block"
          animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-8 h-8 bg-accent/10 rounded-lg hidden md:block"
          animate={{ y: [0, -6, 0], rotate: [12, -12, 12] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/3 right-12 w-3 h-3 rounded-full bg-accent/30 hidden md:block"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-20 h-20 rounded-full bg-accent/5 blur-xl hidden md:block"
          animate={{ scale: [1, 1.3, 1], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-12 left-1/3 w-1.5 h-1.5 rounded-full bg-accent/40 hidden md:block"
          animate={{ y: [0, -12, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Left - Text */}
          <div className="p-8 sm:p-10 md:p-16 lg:p-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-6"
            >
              <motion.span
                className="inline-block w-2 h-2 rounded-full bg-accent mr-2 align-middle"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Available for work
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="font-heading font-extrabold text-foreground leading-[1.1] tracking-tight"
            >
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Hi, I'm Nirjara Patil</span>
              <br />
              <span className="block mt-4 text-[calc(2rem-2px)] sm:text-[calc(2.25rem-3px)] md:text-[calc(3rem-5px)] lg:text-[calc(3.75rem-6px)]">
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  UI/UX Designer
                </motion.span>
                <motion.span
                  className="inline-block w-2.5 h-2.5 bg-accent rounded-full ml-2 align-middle"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="text-muted-foreground text-sm sm:text-base md:text-lg mt-5 max-w-md leading-relaxed"
            >
              A passionate UI/UX designer crafting intuitive, user-centered digital experiences that solve real problems.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
              className="flex flex-wrap items-center gap-3 mt-8"
            >
              <motion.a
                href="#work"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-accent text-accent-foreground px-7 py-3 rounded-full font-heading font-semibold text-sm hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
              >
                View Work
              </motion.a>
              <motion.a
                href="mailto:nirjarapatil21@gmail.com?subject=Let's%20Work%20Together"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="border border-foreground/20 text-foreground px-7 py-3 rounded-full font-heading font-semibold text-sm hover:bg-foreground hover:text-primary-foreground transition-all duration-300"
              >
                Contact Me
              </motion.a>
            </motion.div>
          </div>

          {/* Right - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
            className="relative flex items-center justify-center p-4 sm:p-6"
          >
            {/* Glow behind image */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-accent/10 blur-3xl"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <img
              alt="Profile photo"
              className="w-full max-w-[320px] md:max-w-[400px] rounded-2xl object-contain relative z-10"
              src="/lovable-uploads/a218a0d9-6e4d-478b-b75d-0aaec75ec5a4.jpg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
