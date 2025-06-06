import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animation";
import { education } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-card">
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
            My Background
          </motion.h2>
          <motion.h3 
            variants={fadeIn("up", 0.2)}
            className="text-3xl font-bold"
          >
            Education
          </motion.h3>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {/* Academic Education */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <h4 className="text-xl font-semibold mb-6 flex items-center">
              <GraduationCap className="text-primary mr-3" />
              Academic Education
            </h4>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("up", 0.1 * (index + 1))}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-background border border-border hover:border-primary/30 transition-all duration-300 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="text-lg font-semibold">{edu.degree}</h5>
                        <span className="text-muted-foreground text-sm">{edu.period}</span>
                      </div>
                      <h6 className="text-primary mb-3">{edu.institution}</h6>
                      <p className="text-muted-foreground text-sm">
                        {edu.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
