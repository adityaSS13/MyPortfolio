import { motion } from "framer-motion";
import { fadeIn, slideIn, typing } from "@/lib/animation";
import { personalInfo } from "@/lib/constants";
import { ChevronDown, ArrowRight, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-info/5 opacity-20"></div>
      <div className="absolute top-0 left-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-secondary/10 rounded-full blur-3xl"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 py-12 relative z-10">
        <motion.div
          variants={fadeIn("up")}
          initial="hidden"
          animate="show"
          className="max-w-3xl mx-auto text-center"
        >
          <div className="mb-6 inline-block">
            <motion.p 
              variants={fadeIn("up", 0.1)}
              className="text-muted-foreground uppercase tracking-wider text-sm mb-1"
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1 
              variants={fadeIn("up", 0.2)}
              className="text-4xl md:text-6xl font-bold mb-2"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-info bg-size-200 animate-gradient-x">
                {personalInfo.name}
              </span>
            </motion.h1>
            
            <motion.div 
              variants={typing}
              initial="hidden"
              animate="visible"
              className="h-8 inline-block overflow-hidden border-r-2 border-primary"
            >
              <p className="text-xl md:text-2xl text-foreground font-mono">
                {personalInfo.role}
              </p>
            </motion.div>
          </div>
          
          <motion.p 
            variants={fadeIn("up", 0.3)}
            className="text-muted-foreground text-lg md:text-xl mb-8 leading-relaxed"
          >
            {personalInfo.description}
          </motion.p>
          
          <motion.div 
            variants={fadeIn("up", 0.4)}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              asChild
              className="gap-2 bg-primary hover:bg-primary/90 px-8 py-6"
              size="lg"
            >
              <a href="#projects">
                <span>View Projects</span>
                <ArrowRight size={16} />
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              className="gap-2 border-border hover:border-primary/50 hover:bg-card px-8 py-6"
              size="lg"
            >
              <a href="#contact">
                <span>Contact Me</span>
                <Mail size={16} />
              </a>
            </Button>
          </motion.div>
          
          <motion.div 
            variants={fadeIn("up", 0.5)}
            className="mt-12"
          >
            <div className="flex justify-center space-x-6">
              <a 
                href={personalInfo.socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-xl"
              >
                <Github size={24} />
              </a>
              <a 
                href={personalInfo.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-xl"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href={personalInfo.socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-xl"
              >
                <Twitter size={24} />
              </a>
              <a 
                href={personalInfo.socialLinks.email} 
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-xl"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        variants={slideIn("up", "spring", 0.8, 1)}
        initial="hidden"
        animate="show"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-muted-foreground animate-bounce"
      >
        <a href="#about" className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-wider">Scroll Down</span>
          <ChevronDown size={16} />
        </a>
      </motion.div>
    </section>
  );
}
