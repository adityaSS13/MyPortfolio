import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter"; // Import useLocation
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, personalInfo } from "@/lib/constants";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [, setLocation] = useLocation(); // Destructure setLocation from useLocation

  // Handle scroll events to update active section and navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      // Change navbar background on scroll
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when clicking a link
  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault(); // Prevent default anchor behavior
    setActiveSection(sectionId);
    setLocation(`#${sectionId}`); // Update the URL hash
    if (mobileMenuOpen) setMobileMenuOpen(false);

    // Delay smooth scrolling to ensure URL hash is updated
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Adjust timeout as needed
  };

  // Get first name and last initial
  const nameInitials = personalInfo.name.split(" ");
  const firstNameInitial = nameInitials[0][0];
  const lastNameInitial = nameInitials.length > 1 ? nameInitials[1][0] : "";

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold flex items-center">
          <span className="text-primary">{firstNameInitial}</span>
          <span className="text-secondary">{lastNameInitial}</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`${
                activeSection === link.href.substring(1)
                  ? "text-foreground"
                  : "text-muted-foreground"
              } hover:text-primary transition duration-300`}
              onClick={(event) =>
                handleLinkClick(event, link.href.substring(1))
              }
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-muted-foreground hover:text-primary transition-colors duration-300"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-card border-b border-border"
          >
            <div className="container mx-auto px-6 py-3 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`${
                    activeSection === link.href.substring(1)
                      ? "text-foreground"
                      : "text-muted-foreground"
                  } hover:text-primary py-2 transition duration-300`}
                  onClick={(event) =>
                    handleLinkClick(event, link.href.substring(1))
                  }
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
