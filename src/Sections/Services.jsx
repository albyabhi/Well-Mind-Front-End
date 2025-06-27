import React from "react";

import Therapy from "./Assets/therapy1.png";
import Child from "./Assets/playtime.png";
import Couple from "./Assets/couple.png";
import Stress from "./Assets/headache.png";

const Services = () => {
  const services = [
    {
      icon: Therapy,
      title: "Individual Therapy",
    },
    {
      icon: Child,
      title: "Child & Adolescent Counselling",
    },
    {
      icon: Couple,
      title: "Couple & Premarital Therapy",
    },
    {
      icon: Stress,
      title: "Stress & Anxiety Management",
    },
  ];

  return (
    <section id="services" className="bg-[#fce8f3] py-12 px-6 md:px-20">
      <h2 className="text-3xl font-semibold text-[#3f3fc7] mb-8 text-center">Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#fdfbff] p-6 rounded-xl shadow-md text-center transition hover:shadow-lg"
          >
            <div className="mb-4 h-20 flex justify-center items-center">
              <img
                src={service.icon}
                alt={service.title}
                className="w-12 h-12 object-contain"
              />
            </div>
            <h3 className="text-md font-semibold text-[#333]">{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
