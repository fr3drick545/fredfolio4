export const titleVariants = {
  visibleTitle: (delayAnim) => ({
    opacity: 1,
    transition: { duration: 1, delay: delayAnim },
  }),
  hiddenTitle: { opacity: 0 },
};
