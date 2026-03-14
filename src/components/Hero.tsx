import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section id="hero" className="px-6 md:px-12 py-8">
      <div className="max-w-7xl mx-auto bg-hero-bg rounded-3xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Left - Text */}
          <div className="p-10 md:p-16 lg:p-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] tracking-tight">
              
              Hi, I'm Nirjara Patil
              <br />
              UI/UX Designer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-muted-foreground text-base md:text-lg mt-5 max-w-md leading-relaxed">
              
              A passionate UI/UX designer crafting intuitive, user-centered digital experiences that solve real problems.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 mt-8">
              
              <a
                href="#work"
                className="bg-primary text-primary-foreground px-7 py-3 rounded-full font-heading font-semibold text-sm hover:opacity-90 transition-opacity">
                
                View Work →
              </a>
              <a
                href="#contact"
                className="border border-foreground text-foreground px-7 py-3 rounded-full font-heading font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
                
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Right - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-52 md:h-auto md:max-h-[350px] flex items-center justify-center p-6">
            
            <img

              alt="Profile photo"
              className="w-full rounded-2xl object-contain" src="/lovable-uploads/a218a0d9-6e4d-478b-b75d-0aaec75ec5a4.jpg" />
            
          </motion.div>
        </div>
      </div>
    </section>);

};

export default Hero;