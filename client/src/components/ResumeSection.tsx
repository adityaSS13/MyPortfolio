import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animation";
import resumePDF from "./AdityaShahapureResume.pdf"; // Import the PDF file

const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="py-20 bg-background">
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
            Check out my resume
          </motion.h2>
          <motion.h3
            variants={fadeIn("up", 0.2)}
            className="text-3xl font-bold"
          >
            Resume
          </motion.h3>
        </motion.div>
        <iframe
          src={resumePDF} // Use the imported PDF as the source
          title="Aditya Shahapure Resume"
          className="resume-iframe mx-auto my-auto w-full max-w-4xl h-screen border-2 border-primary"
        ></iframe>
      </div>
    </section>
  );
};

export default ResumeSection;
