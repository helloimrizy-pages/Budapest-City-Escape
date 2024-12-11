import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h3
        className="text-2xl text-white mb-2 cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className="ml-4">{isOpen ? "▲" : "▼"}</span>
      </h3>
      {isOpen && <p className="text-lg text-white">{answer}</p>}
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="bg-[#0d1321] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-white mb-10 mt-10 text-center">
          Frequently Asked Questions
        </h1>

        {/* General Questions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">General</h2>
          <div className="space-y-6">
            <FAQItem
              question="What is Travelogues?"
              answer="Travelogues is an interactive outdoor city escape
              game where you solve riddles, find clues, and uncover fascinating city
              secrets of Budapest City Walls. It’s a fun and educational experience for all ages."
            />
            <FAQItem
              question="How long does the game take?"
              answer="The game takes approximately 2 hours of active playtime.
              However, you can take breaks and play at your own pace."
            />
            <FAQItem
              question="Can I pause the game and resume later?"
              answer="Yes, you can pause the game anytime and resume later."
            />
          </div>
        </section>

        <hr className="border-t-2 border-white-300 mb-16" />

        {/* Gameplay Questions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Gameplay</h2>
          <div className="space-y-6">
            <FAQItem
              question="How do I start the game?"
              answer="After purchasing, you will receive a
              passcode. Use this passcode to unlock the game on the map and
              start your adventure."
            />
            <FAQItem
              question="What happens if I answer a question incorrectly?"
              answer="You need to answer all of the questions correctly in order to get a passcode to the next location.
              You can attempt the question again many times."
            />
            <FAQItem
              question="Do I need to download an app to play?"
              answer="No additional apps are required. The game runs directly from our
              web application, accessible on any smartphone or tablet with
              internet access and browser."
            />
          </div>
        </section>

        <hr className="border-t-2 border-white-300 mb-16" />

        {/* Teams and Participation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">
            Teams and Participation
          </h2>
          <div className="space-y-6">
            <FAQItem
              question="Can I play with my friends or family?"
              answer="Yes! The game is designed for groups of all sizes. You can play
              solo or collaborate with friends and family to solve the
              challenges."
            />
            <FAQItem
              question="Can multiple teams compete against each other?"
              answer="Not yet, but we are working on a multiplayer version of the game."
            />
            <FAQItem
              question="Is the game suitable for children?"
              answer="The game is suitable for players aged 15 and above. Younger
              children can join with assistance from adults and still have fun
              navigating and solving clues."
            />
          </div>
        </section>

        <hr className="border-t-2 border-white-300 mb-16" />

        {/* Technical Support */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            Technical Support
          </h2>
          <div className="space-y-6">
            <FAQItem
              question="What do I do if I experience technical issues?"
              answer="If you encounter any issues, please contact our support team via
              email or through the 'Contact Us' page. We’ll assist you as
              quickly as possible."
            />
            <FAQItem
              question="Do I need an internet connection to play?"
              answer="Yes, an internet connection is required to access the map,
              clues, and other interactive features during the game."
            />
            <FAQItem
              question="Can I play on any device?"
              answer="You can play on any smartphone or tablet with an updated browser
              and internet connection. For the best experience, use a modern
              device."
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQ;
