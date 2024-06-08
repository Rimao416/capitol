import { ElevateDataInterface } from "../constant/ElevateData";
import { motion } from "framer-motion";
const Elevate: React.FC<ElevateDataInterface> = ({
  title,
  description,
  number,
}) => {
    const easing = [0.175, 0.85, 0.42, 0.96];
    const fadeDown = {
        initial: {
          opacity: 0,
          y: -50,
        },
        animate: {
          opacity: 1,
          y: 0,
          transition: {
            ease: easing,
            duration: 0.7,
          },
        },
      };
  return (
    <motion.div className="elevates" variants={fadeDown}>
      <h1 className="elevates__title">{number}. {title}</h1>
      <p className="elevates__description">{description}</p>
    </motion.div>
  );
};

export default Elevate;
