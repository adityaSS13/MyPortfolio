import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animation";
import { personalInfo, navLinks } from "@/lib/constants";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <Link href="/" className="text-2xl font-bold text-foreground flex items-center">
              <span className="text-primary">J</span>
              <span className="text-secondary">D</span>
              <span className="text-xs ml-1 text-muted-foreground">.dev</span>
            </Link>
            <p className="text-muted-foreground text-sm mt-2">Crafting digital experiences with code.</p>
          </motion.div>
          
          <motion.div 
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-6 text-center md:text-left"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-muted-foreground hover:text-foreground text-sm transition duration-300"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm"
        >
          <div className="mb-4 md:mb-0">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </div>
          
          <div>
            <p>Designed and built with ❤️ by {personalInfo.name}</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
