import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animation";
import { personalInfo } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-col md:flex-row gap-12 items-center"
        >
          {/* Profile Image */}
          <motion.div 
            variants={fadeIn("right", 0.2)}
            className="md:w-1/2"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden mx-auto">
                <Avatar className="w-full h-full">
                  <AvatarImage 
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800&h=800" 
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                  <AvatarFallback className="text-4xl">{personalInfo.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-background px-4 py-2 rounded-lg border border-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground text-sm">{personalInfo.availability}</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* About Content */}
          <motion.div 
            variants={fadeIn("left", 0.2)}
            className="md:w-1/2"
          >
            <div className="mb-6">
              <h2 className="text-sm uppercase tracking-wider text-primary mb-2">About Me</h2>
              <h3 className="text-3xl font-bold mb-4">A passionate Full Stack Developer based in {personalInfo.location}</h3>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a dedicated full-stack developer with over 5 years of experience building 
                intuitive web applications. I'm passionate about creating clean, efficient code 
                and delivering exceptional user experiences.
              </p>
              <p>
                My expertise spans the entire development lifecycle, from planning and design 
                to implementation and maintenance. I enjoy tackling complex problems and finding 
                elegant solutions that balance technical requirements with user needs.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or sharing my knowledge through writing and mentoring.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-foreground font-medium mb-2">Name</h4>
                <p className="text-muted-foreground">{personalInfo.name}</p>
              </div>
              <div>
                <h4 className="text-foreground font-medium mb-2">Email</h4>
                <p className="text-muted-foreground">{personalInfo.email}</p>
              </div>
              <div>
                <h4 className="text-foreground font-medium mb-2">Location</h4>
                <p className="text-muted-foreground">{personalInfo.location}</p>
              </div>
              <div>
                <h4 className="text-foreground font-medium mb-2">Experience</h4>
                <p className="text-muted-foreground">{personalInfo.experience}</p>
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
