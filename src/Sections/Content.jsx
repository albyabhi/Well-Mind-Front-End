import React from "react";
import IMG1 from "./Assets/IMG1.jpg";


const Content = () => {
  return (
<section className="bg-[#fdf5f9] py-16 md:py-40 px-6 md:px-20 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-10">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a4e]">
          Your Journey to a Healthier Mind Begins Here
        </h1>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
  <a href="#book" className="bg-[#f57ac0] hover:bg-[#e568af] text-white font-semibold py-3 px-6 rounded-full shadow-md text-center">
    Book a Session
  </a>
</div>


        {/* Paragraph */}
         <p className="text-lg text-[#3f3f63] max-w-xl">
          Therapy tailored for every stage of life.  a compassionate space for healing through active listening and an empathetic approach, helping you feel truly heard and supported.
        </p>

        {/* Image */}
       
      </div>
    </section>
  );
};

export default Content;
