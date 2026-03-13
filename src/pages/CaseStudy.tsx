import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies: Record<string, {
  title: string;
  subtitle: string;
  tags: string[];
  images: string[];
}> = {
  "meesho-app-redesign": {
    title: "Meesho App Redesign",
    subtitle: "Simplifying Meesho — A Redesign for Better Usability",
    tags: ["UX Research", "Mobile App", "UI Design", "Figma"],
    images: Array.from({ length: 13 }, (_, i) =>
      `/case-studies/meesho/${String(i + 1).padStart(2, "0")}-${i === 0 ? "hero" : i === 1 ? "overview" : "section"}.png`
    ),
  },
};

const CaseStudy = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const study = slug ? caseStudies[slug] : null;

  if (!study) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold text-foreground mb-4">
            Case study not found
          </h1>
          <Button variant="outline" onClick={() => navigate("/")}>
            Go Back Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky back nav */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border"
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </button>
          <span className="text-sm font-heading font-semibold text-foreground hidden sm:block">
            {study.title}
          </span>
        </div>
      </motion.nav>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-5xl mx-auto px-6 pt-12 pb-8"
      >
        <h1 className="font-heading font-bold text-3xl md:text-5xl text-foreground leading-tight">
          {study.title}
        </h1>
        <p className="text-muted-foreground text-lg mt-3 max-w-2xl">
          {study.subtitle}
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium text-foreground bg-section-highlight px-3 py-1.5 rounded-full border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.header>

      {/* Case Study Images */}
      <div className="max-w-5xl mx-auto px-6 pb-20 space-y-1">
        {study.images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i < 3 ? i * 0.1 : 0 }}
          >
            <img
              src={src}
              alt={`${study.title} — Section ${i + 1}`}
              className="w-full rounded-sm"
              loading={i < 2 ? "eager" : "lazy"}
            />
          </motion.div>
        ))}
      </div>

      {/* Back to projects CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 pb-16 text-center"
      >
        <Button
          variant="outline"
          size="lg"
          onClick={() => navigate("/")}
          className="rounded-full"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to All Projects
        </Button>
      </motion.div>
    </div>
  );
};

export default CaseStudy;
