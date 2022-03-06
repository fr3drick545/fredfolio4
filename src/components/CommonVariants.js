export const titleVariants = {
  visibleAbout: (delayAnim) => ({
    opacity: 1,
    transition: { duration: 1, delay: delayAnim },
  }),
  hiddenTitle: { opacity: 0 },
};
