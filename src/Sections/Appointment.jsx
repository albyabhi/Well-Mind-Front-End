import React from 'react';

const Appointment = () => {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="flex justify-center items-center px-4 bg-[#fdf5f9] min-h-screen">
      <section id="book" className="w-full max-w-4xl px-6 md:px-16 rounded-xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#2c2c5e] mb-6">
          Book an Appointment
        </h2>

        <form className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-[#2c2c5e] font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>

          {/* Contact Number */}
          <div>
            <label className="block text-[#2c2c5e] font-medium mb-2">Contact Number</label>
            <input
              type="tel"
              name="contact"
              placeholder="Enter your phone number"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>

          {/* Help Needed */}
          <div>
            <label className="block text-[#2c2c5e] font-medium mb-2">What help do you need?</label>
            <textarea
              name="help"
              rows="4"
              placeholder="Briefly describe your concern"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
            ></textarea>
          </div>

          {/* Appointment Date */}
          <div>
            <label className="block text-[#2c2c5e] font-medium mb-2">Preferred Appointment Date</label>
            <input
              type="date"
              name="date"
              min={today}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition-all duration-200"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Appointment;
