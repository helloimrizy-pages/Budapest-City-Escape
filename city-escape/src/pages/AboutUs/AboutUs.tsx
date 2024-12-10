import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white-100 py-16 bg-[#0d1321]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-white mb-10 mt-10 text-center">
          About Us
        </h1>

        {/* Who We Are Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold  text-white mb-6">Who We Are</h2>
          <p className="text-xl text-white leading-relaxed">
            City Escape Games was founded with a mission to redefine how people
            explore cities by blending fun, adventure, and history into one
            interactive experience. We are passionate about creating memorable
            journeys for families, friends, and explorers of all kinds.
          </p>
        </section>

        <hr className="border-t-2 border-white-300 mb-16" />

        {/* What We Do Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold  text-white mb-6">What We Do</h2>
          <p className="text-xl text-white leading-relaxed">
            At City Escape Games, we design and develop engaging outdoor escape
            games that take you on a unique journey through your favorite
            cities. Each game combines puzzles, riddles, and city landmarks,
            giving you the perfect blend of entertainment and exploration.
          </p>
          <p className="text-xl text-white leading-relaxed mt-4">
            Our games are accessible via any smartphone or tablet, making it
            easy for anyone to start their adventure. We’re constantly working
            to add new challenges, cities, and features to keep the experience
            fresh and exciting.
          </p>
        </section>

        <hr className="border-t-2 border-white-300 mb-16" />

        {/* Our Vision Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold  text-white mb-6">Our Vision</h2>
          <p className="text-xl text-white leading-relaxed">
            Our vision is to make learning and exploration fun for everyone.
            Whether you’re a tourist discovering a city for the first time or a
            local looking for a new way to experience your hometown, we aim to
            bring people closer to history, culture, and each other through the
            power of games.
          </p>
          <p className="text-xl text-white leading-relaxed mt-4">
            We believe in creating experiences that are inclusive, educational,
            and entertaining while leaving players with unforgettable memories.
          </p>
        </section>

        <hr className="border-t-2 border-white-300 mb-16" />

        {/* Meet the Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold  text-white mb-6">Meet the Team</h2>
          <p className="text-xl text-white leading-relaxed">
            Behind City Escape Games is a team of passionate individuals who
            love adventure and storytelling. Our team includes game designers,
            developers, writers, and local experts who work together to craft
            immersive and exciting experiences for players around the world.
          </p>
          <p className="text-xl text-white leading-relaxed mt-4">
            We are driven by a shared love for discovery and innovation, and we
            strive to bring you the best outdoor escape game experience
            possible.
          </p>
        </section>

        <hr className="border-t-2 border-white-300 mb-16" />

        {/* Contact Us Section */}
        <section>
          <h2 className="text-3xl font-bold  text-white mb-6">Contact Us</h2>
          <p className="text-xl text-white leading-relaxed">
            Have questions or feedback? We’d love to hear from you! Reach out to
            us through our{" "}
            <a href="/contact" className=" text-white underline">
              Contact Us
            </a>{" "}
            page or email us at
            <span className="font-bold"> support@cityescapegames.com</span>.
            Let’s make your next adventure unforgettable!
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
