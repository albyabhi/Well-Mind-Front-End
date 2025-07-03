import React, { useState } from "react";

const Appointment = () => {
  const today = new Date().toISOString().split("T")[0];
  const API_URL = import.meta.env.VITE_API_URL;

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // ✅ loading state

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = {
      name: form.name.value,
      contact: form.contact.value,
      help: form.help.value,
      date: form.date.value,
    };

    try {
      setLoading(true); // ✅ start loading

      const res = await fetch(`${API_URL}/api/appointments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      console.log("Server response:", result);

      if (res.ok) {
        form.reset();
        setSubmitted(true);
      } else {
        alert("⚠️ " + result.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("❌ Failed to connect to server. Please try again later.");
    } finally {
      setLoading(false); // ✅ stop loading
    }
  };

  return (
    <div className="flex justify-center items-center px-4 bg-[#fdf5f9] min-h-screen">
      <section id="book" className="w-full max-w-4xl px-6 md:px-16 rounded-xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#2c2c5e] mb-6">
          Book an Appointment
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
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
            <label className="block text-[#2c2c5e] font-medium mb-2">
              Contact Number
            </label>
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
            <label className="block text-[#2c2c5e] font-medium mb-2">
              What help do you need?
            </label>
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
            <label className="block text-[#2c2c5e] font-medium mb-2">
              Preferred Appointment Date
            </label>
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
              disabled={loading}
              className={`w-full py-3 cursor-pointer rounded-lg font-semibold transition-all duration-300 ${
                submitted
                  ? "bg-green-500 hover:bg-green-600 text-white"
                  : "bg-pink-500 hover:bg-pink-600 text-white"
              }`}
            >
              {loading ? (
                <div className="flex justify-center items-center gap-2">
                  <span className="loader border-t-2 border-white border-solid rounded-full w-5 h-5 animate-spin"></span>
                  Saving...
                </div>
              ) : submitted ? (
                "Book another Appointment"
              ) : (
                "Book Appointment"
              )}
            </button>
          </div>
        </form>
      </section>

      {/* Inline spinner styles */}
      <style>{`
        .loader {
          border-right-color: transparent;
          border-bottom-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default Appointment;
