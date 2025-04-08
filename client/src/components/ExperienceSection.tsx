import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animation";
import { experiences } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-card">
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
            My Journey
          </motion.h2>
          <motion.h3 
            variants={fadeIn("up", 0.2)}
            className="text-3xl font-bold"
          >
            Work Experience
          </motion.h3>
        </motion.div>
        
        <div className="relative">
          {/* Timeline center line (visible on md and larger screens) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border transform -translate-x-1/2"></div>
          
          {experiences.map((experience, index) => {
            const isEven = index % 2 === 0;
            const colorClasses = {
              primary: "hover:border-primary/30 hover:shadow-primary/5",
              secondary: "hover:border-secondary/30 hover:shadow-secondary/5",
              info: "hover:border-info/30 hover:shadow-info/5",
              success: "hover:border-success/30 hover:shadow-success/5"
            };
            
            const badgeClasses = {
              primary: "bg-primary/10 text-primary",
              secondary: "bg-secondary/10 text-secondary",
              info: "bg-info/10 text-info",
              success: "bg-success/10 text-success"
            };
            
            const dotClasses = {
              primary: "bg-primary",
              secondary: "bg-secondary",
              info: "bg-info",
              success: "bg-success"
            };
            
            return (
              <motion.div 
                key={index}
                variants={fadeIn(isEven ? "right" : "left", 0.2 * (index + 1))}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className={`relative flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} mb-12 md:mb-0`}
              >
                <div className={`md:w-1/2 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12"} md:mb-16`}>
                  <Card className={`bg-background p-6 border border-border ${colorClasses[experience.color as keyof typeof colorClasses]} transition-all duration-300 shadow-lg`}>
                    <CardContent className="p-0">
                      <h4 className="text-xl font-semibold mb-1">{experience.title}</h4>
                      <h5 className={`text-${experience.color} font-medium mb-3`}>{experience.company}</h5>
                      <p className="text-muted-foreground mb-4">
                        {experience.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className={`px-2 py-1 ${badgeClasses[experience.color as keyof typeof badgeClasses]} rounded text-xs`}>
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  <div className={`hidden md:block absolute ${isEven ? "right-0" : "left-0"} top-1/2 transform ${isEven ? "translate-x-1/2" : "-translate-x-1/2"} -translate-y-1/2 w-5 h-5 ${dotClasses[experience.color as keyof typeof dotClasses]} rounded-full border-4 border-card z-10`}></div>
                </div>
                <div className={`md:w-1/2 pl-8 ${isEven ? "md:pl-12" : "md:pr-12 md:text-right"} md:mt-8`}>
                  <div className="text-muted-foreground md:hidden mb-4">{experience.period}</div>
                  <div className="md:block hidden text-muted-foreground">{experience.period}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
