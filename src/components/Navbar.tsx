import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#work" },
  { label: "About", href: "#about" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between h-14 sm:h-16">
        <a href="#" className="font-heading font-bold text-lg text-foreground tracking-tight">
          Nirjara<motion.span
            className="text-accent"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          >.</motion.span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href="mailto:nirjarapatil21@gmail.com"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="text-sm font-medium bg-accent text-accent-foreground px-5 py-2.5 rounded-full hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
          >
            Contact me
          </motion.a>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-md px-4 sm:px-6 pb-6 space-y-4 overflow-hidden"
          >
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
              }}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-1">
                {link.label}
              </a>
            ))}
            <a href="mailto:nirjarapatil21@gmail.com"
              className="block text-sm font-medium bg-accent text-accent-foreground px-5 py-2.5 rounded-full text-center">
              Contact me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
