import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-[12vh]">
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Get in touch with us for any inquiries or assistance. We are here to
            help you with your real estate needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contact Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <i className="houzez-icon icon-phone-actions-ring text-[#9e9484]"></i>
                <span className="text-gray-600">+971502554533</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="houzez-icon icon-envelope text-[#9e9484]"></i>
                <span className="text-gray-600">info@royalpearls.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="houzez-icon icon-pin-3 text-[#9e9484]"></i>
                <span className="text-gray-600">Dubai, UAE</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Send us a Message
            </h2>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9e9484]"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9e9484]"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9e9484]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#9e9484] text-white py-3 rounded-lg font-semibold hover:bg-[#8a8274] transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
