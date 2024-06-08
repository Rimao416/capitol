import React from "react";
import { TestimonialDataInterface } from "../constant/TestimonialsData";
import {motion} from "framer-motion"
const Testimonials: React.FC<TestimonialDataInterface> = ({
  name,
  job,
  image,
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
    <motion.div className="team__element" variants={fadeDown}>
      <div className="team__element--wrapper">
        <img src={image} alt="" className="team__image" />
        <div className="team__info">
          <h3 className="team__name">{name}</h3>
          <p className="team__job">{job}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
