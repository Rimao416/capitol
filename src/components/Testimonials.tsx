import React from "react";
import { TestimonialDataInterface } from "../constant/TestimonialsData";

const Testimonials: React.FC<TestimonialDataInterface> = ({
  name,
  job,
  image,
}) => {
  return (
    <div className="team__element">
      <div className="team__element--wrapper">
        <img src={image} alt="" className="team__image" />
        <div className="team__info">
          <h3 className="team__name">{name}</h3>
          <p className="team__job">{job}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
