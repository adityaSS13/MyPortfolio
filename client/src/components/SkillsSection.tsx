import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animation";
import { frontendSkills, backendSkills, additionalSkills } from "@/lib/constants";
import { Code, Server } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-background">
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
            My Skills
          </motion.h2>
          <motion.h3 
            variants={fadeIn("up", 0.2)}
            className="text-3xl font-bold"
          >
            Technical Expertise
          </motion.h3>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Frontend Skills */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h4 className="text-xl font-semibold mb-6 flex items-center">
              <Code className="text-primary mr-3" />
              Frontend Development
            </h4>
            
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  variants={fadeIn("right", 0.1 * (index + 1))}
                  className="relative"
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.percentage}%</span>
                  </div>
                  <Progress value={skill.percentage} className="h-2" />
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Backend Skills */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h4 className="text-xl font-semibold mb-6 flex items-center">
              <Server className="text-secondary mr-3" />
              Backend Development
            </h4>
            
            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  variants={fadeIn("left", 0.1 * (index + 1))}
                  className="relative"
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.percentage}%</span>
                  </div>
                  <Progress value={skill.percentage} className="h-2 bg-card" 
                    indicatorClassName="bg-secondary" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Additional Skills */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-16"
        >
          <h4 className="text-xl font-semibold mb-6 text-center">Additional Skills</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill) => (
              <motion.div 
                key={skill}
                variants={fadeIn("up", 0.1)}
                whileHover={{ scale: 1.05 }}
              >
                <Badge 
                  variant="outline" 
                  className="px-4 py-2 bg-card text-muted-foreground rounded-full text-sm border border-border hover:border-primary/50 hover:text-primary transition duration-300"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
