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
          viewport={{ once: false, amount: 0.25 }}
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

        <div className="space-y-12">
          {experiences.map((experience, index) => {
            const colorClasses = {
              primary: "hover:border-primary/30 hover:shadow-primary/5",
              secondary: "hover:border-secondary/30 hover:shadow-secondary/5",
              info: "hover:border-info/30 hover:shadow-info/5",
              success: "hover:border-success/30 hover:shadow-success/5",
            };

            const badgeClasses = {
              primary: "bg-primary/10 text-primary",
              secondary: "bg-secondary/10 text-secondary",
              info: "bg-info/10 text-info",
              success: "bg-success/10 text-success",
            };

            const bracketColor = {
              primary: "text-primary",
              secondary: "text-secondary",
              info: "text-info",
              success: "text-success",
            };

            return (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.2 * (index + 1))}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="relative flex flex-col md:flex-row gap-4"
              >
                {/* Duration with Curly Bracket Graphic */}
                <div className="hidden md:flex flex-col items-center justify-center w-48 shrink-0">
                  <div
                    className={`font-mono text-sm ${
                      bracketColor[
                        experience.color as keyof typeof bracketColor
                      ]
                    }`}
                  >
                    <div className="flex items-center">
                      <span>{experience.period}</span>
                      <span className="text-3xl mr-3">{`}`}</span>
                    </div>
                  </div>
                </div>

                {/* Experience Card */}
                <div className="flex-1">
                  <Card
                    className={`bg-background p-6 border border-border ${
                      colorClasses[
                        experience.color as keyof typeof colorClasses
                      ]
                    } transition-all duration-300 shadow-lg`}
                  >
                    <CardContent className="p-0">
                      <div className="md:hidden text-sm text-muted-foreground mb-2">
                        {experience.period}
                      </div>
                      <h4 className="text-xl font-semibold mb-1">
                        {experience.title}
                      </h4>
                      <h5
                        className={`text-${experience.color} font-medium mb-3`}
                      >
                        {experience.company}
                      </h5>
                      <p className="text-muted-foreground mb-4">
                        {experience.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className={`px-2 py-1 ${
                              badgeClasses[
                                experience.color as keyof typeof badgeClasses
                              ]
                            } rounded text-xs`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
