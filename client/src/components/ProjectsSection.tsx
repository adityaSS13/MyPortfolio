import { motion } from "framer-motion";
import { fadeIn, staggerContainer, hoverScale } from "@/lib/animation";
import { projects } from "@/lib/constants";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeIn("up", 0.1)}
            className="text-sm uppercase tracking-wider text-primary mb-2"
          >
            My Portfolio
          </motion.h2>
          <motion.h3 
            variants={fadeIn("up", 0.2)}
            className="text-3xl font-bold"
          >
            Featured Projects
          </motion.h3>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const colorClasses = {
              primary: "hover:border-primary/50 hover:shadow-primary/10 group-hover:text-primary",
              secondary: "hover:border-secondary/50 hover:shadow-secondary/10 group-hover:text-secondary",
              info: "hover:border-info/50 hover:shadow-info/10 group-hover:text-info",
              success: "hover:border-success/50 hover:shadow-success/10 group-hover:text-success"
            };
            
            const linkClasses = {
              primary: "text-primary hover:text-primary/80",
              secondary: "text-secondary hover:text-secondary/80",
              info: "text-info hover:text-info/80",
              success: "text-success hover:text-success/80"
            };
            
            // Use placeholder images from Unsplash
            const placeholderImages = [
              "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=600&h=400",
              "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=600&h=400",
              "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600&h=400",
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=400"
            ];
            
            return (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.1 * (index + 1))}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                whileHover="hover"
                variants={hoverScale}
              >
                <Card className={`group bg-card overflow-hidden border border-border ${colorClasses[project.color as keyof typeof colorClasses]} transition-all duration-300 shadow-lg h-full`}>
                  <div className="relative overflow-hidden h-48">
                    <motion.img 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      src={placeholderImages[index % placeholderImages.length]} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h4 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${colorClasses[project.color as keyof typeof colorClasses]}`}>
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="px-2 py-1 bg-background text-muted-foreground rounded text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="p-6 pt-0 flex justify-between items-center">
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${linkClasses[project.color as keyof typeof linkClasses]} text-sm transition-colors duration-300 flex items-center gap-1`}
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={12} />
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${linkClasses[project.color as keyof typeof linkClasses]} text-sm transition-colors duration-300 flex items-center gap-1`}
                    >
                      <span>GitHub</span>
                      <Github size={12} />
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mt-12"
        >
          <a 
            href="#" 
            className="inline-block px-6 py-3 rounded-lg border border-border hover:border-primary hover:bg-card text-foreground font-medium transition duration-300"
          >
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
