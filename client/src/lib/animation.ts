import { Variants } from "framer-motion";

// Animation variants for use with framer-motion
export const fadeIn = (
  direction: "up" | "down" | "left" | "right" = "up",
  delay = 0.2
): Variants => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.8,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

export const slideIn = (
  direction: "up" | "down" | "left" | "right",
  type: string,
  delay: number,
  duration: number
): Variants => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

export const hoverScale: Variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
    },
  },
};

export const textVariant = (delay: number): Variants => {
  return {
    hidden: {
      y: 20,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.8,
        delay,
      },
    },
  };
};

export const typing: Variants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: {
      type: "spring",
      damping: 30,
      stiffness: 300,
      duration: 3.5,
    },
  },
};

export const blink = {
  "0%, 100%": { borderColor: "transparent" },
  "50%": { borderColor: "hsl(var(--primary))" },
};

export const gradientAnimation = {
  "0%, 100%": { backgroundPosition: "0% 50%" },
  "50%": { backgroundPosition: "100% 50%" },
};
