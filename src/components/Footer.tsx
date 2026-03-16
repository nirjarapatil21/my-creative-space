import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/60 py-6 sm:py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs sm:text-sm text-muted-foreground">
          © 2026 Nirjara. All rights reserved.
        </p>
        <a
          href="mailto:nirjarapatil21@gmail.com?subject=Let's%20Work%20Together"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground hover:text-accent transition-colors duration-300"
        >
          <Mail size={14} /> Contact Me
        </a>
      </div>
    </footer>
  );
};

export default Footer;
