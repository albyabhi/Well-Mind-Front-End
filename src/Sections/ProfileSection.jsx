import React, { useEffect } from "react";
import { FaBrain, FaComments, FaChild, FaRing, FaBalanceScale, FaGlobe, FaLaptopHouse } from "react-icons/fa";
import IMG1 from "./Assets/IMG1.jpg";

const ProfileSection = () => {
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey && ['c', 'u', 's', 'p', 'x'].includes(e.key)) ||
        (e.metaKey && e.key === 's') ||
        e.key === 'F12'
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section
      id="about"
      className="bg-gradient-to-b from-[#fdf5f9] to-[#fce8f3] py-10 px-6 md:px-20"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Profile Image */}
        <div className="w-64 h-72 rounded-[50%/50%] bg-pink-100 overflow-hidden shadow-xl border-4 border-white transition-transform duration-300 hover:scale-105">
          <img
            src={IMG1}
            alt="Shahina Kariyezhath"
            className="w-full h-full object-cover pointer-events-none"
            draggable="false"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left space-y-4">
          <h2 className="text-3xl font-bold text-[#2e2e87]">
            Shahina Kariyezhath
          </h2>
          <p className="text-lg font-semibold text-[#444]">
            Consultant Psychologist & Therapist
          </p>
          <div className="text-sm md:text-base text-gray-700 space-y-2">
            <p className="flex items-center gap-2">
              <FaBrain className="text-pink-500" /> Cognitive Behavioral Therapy (CBT)
            </p>
            <p className="flex items-center gap-2">
              <FaBalanceScale className="text-pink-500" /> Rational Emotive Behavior Therapy (REBT)
            </p>
            <p className="flex items-center gap-2">
              <FaComments className="text-pink-500" /> Dialectical Behavior Therapy (DBT)
            </p>
            <p className="flex items-center gap-2">
              <FaChild className="text-pink-500" /> Child & Adolescent Counselling
            </p>
            <p className="flex items-center gap-2">
              <FaRing className="text-pink-500" /> Premarital & Couple Therapy
            </p>
             <p className="flex items-center gap-2">
              <FaLaptopHouse className="text-pink-500" /> Sessions Available: Online & Offline
            </p>
            <p className="flex items-center gap-2">
              <FaGlobe className="text-pink-500" /> Languages: Malayalam, English, Hindi, Dhivehi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
