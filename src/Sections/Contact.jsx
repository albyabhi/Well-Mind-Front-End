import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#fce8f3]  py-12 px-6 md:px-20 rounded-3xl shadow-md text-center md:text-left"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1c2e61] mb-4">
          Get in Touch
        </h2>
        <p className="text-[#4b4f5a] text-lg mb-8">
          Contact me to book a session or to learn more.
        </p>

        <div className="flex flex-col md:flex-row items-center md:justify-start gap-6">
          {/* Phone Number */}
          <a
            href="tel:9061447641"
            className="text-lg font-semibold text-[#1c2e61] bg-white px-6 py-3 rounded-full shadow-sm hover:underline"
          >
            📞 90614 47641
          </a>

          {/* WhatsApp Button */}
<a
  href="https://wa.me/9061447641"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#25D366] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#1EBE54] transition-all"
>
  Message on WhatsApp
</a>

{/* Instagram Button */}
<a
  href="https://www.instagram.com/wellmind9?igsh=MWkxb29mY3dnaTkxcw=="
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-6 py-3 rounded-full shadow-md hover:opacity-90 transition-all"
>
  Follow on Instagram
</a>

        </div>
      </div>
    </section>
  );
};

export default Contact;
