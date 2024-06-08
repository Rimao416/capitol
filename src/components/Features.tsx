import React from "react";
import { FeatureDataInterface } from "../constant/FeatureData";
import { motion } from "framer-motion";

const FeatureFade = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const Features: React.FC<FeatureDataInterface> = ({
  icon,
  title,
  description,
  color,
}) => {
  return (
    <motion.div variants={FeatureFade} className="features__element">
      <div className={`features__icon features__icon--${color}`}>{icon}</div>
      <h3 className="features__title">{title}</h3>
      <p className="features__description">{description}</p>
      <h5 className="features__link">Voir Plus </h5>
    </motion.div>
  );
};

export default Features;
