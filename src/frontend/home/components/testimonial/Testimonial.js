import React from "react";
import { testimonials } from "../../../../data/data";
const Testimonial = () => {
  return (
    <>
      <div className="testimonils">
        <div
          className="testimonils__bg-image"
          style={{ backgroundImage: 'url("/images/testimonils.jpg")' }}
        >
          {testimonials.map((testimonial, index) => (
            <div className="testimonils__content" key={index}>
              <i className="ri-double-quotes-l"></i>
              <p>{testimonial.description}</p>
              <div className="testimonils__name">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.post}.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
