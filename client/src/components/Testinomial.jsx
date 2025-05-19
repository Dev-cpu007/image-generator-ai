import React from "react";
import rateDisplay, { testimonialsData } from "../assets/assets";

const Testinomial = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* <!-- Section Header --> */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Customer testimonials
          </h2>
          <p className="text-blue-600 mt-2">What Our Users Are Saying</p>
        </div>

        {/* <!-- Testimonial Cards --> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="bg-white p-6 rounded-xl  border-gray-100 transition-all duration-300
             hover:shadow-xl hover:scale-105 hover:border-blue-500 hover:-translate-y-2
              cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt="Donald Jackman"
                  className="w-12 h-12 rounded-full object-cover mr-4 "
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-3 text-yellow-400">
                {rateDisplay(testimonial.stars)}
              </div>
              <p className="text-gray-600 italic">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testinomial;
