import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animation";
import { skillCategories } from "@/lib/constants";
import * as SiIcons from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-background">
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
            My Skills
          </motion.h2>
          <motion.h3 
            variants={fadeIn("up", 0.2)}
            className="text-3xl font-bold"
          >
            Skills
          </motion.h3>
        </motion.div>
        
        {/* Skill Categories */}
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            variants={fadeIn("up", 0.3 + (0.1 * categoryIndex))}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="mb-16"
          >
            <h4 className="text-xl font-semibold mb-8 text-center">
              {category.title}
            </h4>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {category.skills.map((skill, index) => {
                // Dynamically get the icon from react-icons/si
                const IconComponent = SiIcons[skill.icon as keyof typeof SiIcons];
                
                return (
                  <motion.div
                    key={skill.name}
                    variants={fadeIn("up", 0.1 * (index + 1))}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-full bg-card hover:bg-card/50 border border-border hover:border-primary/30 transition-all duration-300">
                      <CardContent className="p-6 flex flex-col items-center justify-center gap-3">
                        {IconComponent && (
                          <div className="text-4xl text-primary">
                            <IconComponent />
                          </div>
                        )}
                        <p className="text-sm font-medium text-center">{skill.name}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
