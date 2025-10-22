import { motion } from "framer-motion";

export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.5,
  direction = "up",
  distance = 30,
  once = true,
  amount = 0.2,
}) => {
  let initial = { opacity: 0 };

  switch (direction) {
    case "up":
      initial.y = distance;
      break;
    case "down":
      initial.y = -distance;
      break;
    case "left":
      initial.x = distance;
      break;
    case "right":
      initial.x = -distance;
      break;
    default:
      initial.y = distance;
  }

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay, duration }}
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
};
