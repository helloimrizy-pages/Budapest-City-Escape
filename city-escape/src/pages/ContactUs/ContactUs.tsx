const ContactUs = () => {
  return (
    <div className="py-16 bg-[#0d1321]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-5xl font-bold  text-white mb-10 mt-10 text-center">
          Contact Us
        </h1>
        <p className="text-xl text-white text-center mb-16">
          Have questions, feedback, or just want to say hello? We'd love to hear
          from you! Reach out to us through any of the options below, and we'll
          get back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold  text-black mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-black mb-4">
              Our team is here to assist you with any questions or concerns. You
              can contact us through the following channels:
            </p>
            <ul className="space-y-4 text-lg text-black">
              <li>
                <span className="font-bold">Email:</span>{" "}
                <a
                  href="mailto:support@cityescapegames.com"
                  className=" text-black underline"
                >
                  support@travelogues.com
                </a>
              </li>
              <li>
                <span className="font-bold">Phone:</span>{" "}
                <a href="tel:+1234567890" className=" text-black underline">
                  +1 234 567 890
                </a>
              </li>
              <li>
                <span className="font-bold">Address:</span> Travelogues HQ,
                Múzeum krt. 2, Budapest, Hungary
              </li>
            </ul>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold  text-black mb-6">
              Send Us a Message
            </h2>
            <form>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-black mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-white-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-black mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-white-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-black mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-3 border border-white-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black border border-black p-4 rounded-lg shadow-md hover:bg-gray-200 transition"
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

export default ContactUs;
