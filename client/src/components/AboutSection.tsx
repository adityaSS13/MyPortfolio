import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animation";
import { personalInfo } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import myPhoto from "./myphoto.jpeg";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex flex-col md:flex-row gap-12 items-center"
        >
          {/* Profile Image */}
          <motion.div variants={fadeIn("right", 0.2)} className="md:w-1/2">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden mx-auto">
                <Avatar className="w-full h-full">
                  <AvatarImage
                    src={myPhoto}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                  <AvatarFallback className="text-4xl">
                    {personalInfo.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-background px-4 py-2 rounded-lg border border-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground text-sm">
                    {personalInfo.availability}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div variants={fadeIn("left", 0.2)} className="md:w-1/2">
            <div className="mb-6">
              <h2 className="text-sm uppercase tracking-wider text-primary mb-2">
                About Me
              </h2>
              <h3 className="text-3xl font-bold mb-4">
                Solving Problems, One Abstraction at a Time
              </h3>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                As a recent MS in Computer Science graduate from Indiana
                University Bloomington, I stand at the intersection of
                imagination and impact in the ever-evolving tech landscape,
                fueled by a passion for transforming ideas into innovative
                solutions.
              </p>
              <p>
                I thrive in diverse domains including software development,
                AI/ML, data analysis, and UI/UX design, constantly pushing the
                boundaries of what's possible through technology.
              </p>
              <p>
                Beyond the screen, I enjoy exploring how technology shapes the
                world around us. Whether it’s tinkering with prototypes,
                collaborating on meaningful projects, or having thoughtful
                conversations, I’m always up for learning and connecting.
              </p>
            </div>

            <div className="mt-8 grid gap-6">
              <div>
                <h4 className="text-foreground font-medium mb-2">Email</h4>
                <p className="text-muted-foreground">{personalInfo.email}</p>
              </div>
            </div>

            <Button asChild className="mt-8">
              <a href="#contact">Let's Connect</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
