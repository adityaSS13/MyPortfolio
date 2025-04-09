import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animation";
import { projects } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
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
            
            // Use themed images related to each project
            const projectImages = [
              "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&q=80&w=600&h=400", // AI/Finance
              "https://images.unsplash.com/photo-1588693273928-92fa26159c82?auto=format&fit=crop&q=80&w=600&h=400", // Tree/Environment
              "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=600&h=400", // Data/Analytics
              "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600&h=400"     // Code/Portfolio
            ];
            
            return (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.1 * (index + 1))}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <Card className={`group bg-card overflow-hidden border border-border ${colorClasses[project.color as keyof typeof colorClasses]} transition-all duration-300 shadow-lg h-full cursor-pointer`}>
                    <div className="relative overflow-hidden h-48">
                      <motion.img 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                        src={projectImages[index % projectImages.length]} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                      <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm p-2 rounded-full">
                        <Github size={20} className="text-primary" />
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <h4 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${colorClasses[project.color as keyof typeof colorClasses]}`}>
                        {project.title}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-4">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="px-2 py-1 bg-background text-muted-foreground rounded text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="text-center mt-12"
        >
          <a 
            href="https://github.com/aditya-shahapure" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-lg border border-border hover:border-primary hover:bg-card text-foreground font-medium transition duration-300"
          >
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
