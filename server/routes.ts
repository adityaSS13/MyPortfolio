import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for the portfolio site
  app.get("/api/portfolio", (_req, res) => {
    res.json({
      status: "success",
      message: "Portfolio API is working!"
    });
  });

  // Handle contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !subject || !message) {
        return res.status(400).json({
          status: "error",
          message: "All fields are required"
        });
      }
      
      // In a real application, you would store this in a database
      // or send an email using a service like SendGrid/Mailgun
      
      // For now, just log the message
      console.log("Contact form submission:", { name, email, subject, message });
      
      res.json({
        status: "success",
        message: "Thank you for your message. I'll get back to you soon."
      });
    } catch (error) {
      console.error("Error in contact form submission:", error);
      res.status(500).json({
        status: "error",
        message: "There was a problem sending your message. Please try again."
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
