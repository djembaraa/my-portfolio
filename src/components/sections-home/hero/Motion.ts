export const heroMotion = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.12 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  },
  imageWrap: {
    hidden: { opacity: 0, y: 18, rotate: 2, scale: 0.98, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      rotate: 2,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  },
  glow: {
    hidden: { opacity: 0 },
    show: {
      opacity: 0.5,
      transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] },
    },
  },
  pointer: {
    initial: { opacity: 0, y: 10, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
} as const;
