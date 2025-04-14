import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animation";
import { achievements } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 bg-background">
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
            My Accomplishments
          </motion.h2>
          <motion.h3
            variants={fadeIn("up", 0.2)}
            className="text-3xl font-bold"
          >
            Achievements
          </motion.h3>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("up", 0.1 * (index + 1))}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-card border border-border hover:border-secondary/30 transition-all duration-300 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 text-secondary">
                          <Award size={24} />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h5 className="text-lg font-semibold text-foreground">
                              {achievement.title}
                            </h5>
                            <span className="text-muted-foreground text-sm">
                              {achievement.year}
                            </span>
                          </div>
                          <h6 className="text-white mb-3 text-sm">
                            {achievement.organization}
                          </h6>
                          <p className="text-muted-foreground text-sm">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
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
