import React from "react";
import BudapestLogo from "../../assets/logo.png";
import WhatDoYouNeedLogo from "../../assets/need.png";
import WhoCanPlayLogo from "../../assets/people.png";
import SafetyAndGuidelinesLogo from "../../assets/rules.png";
import ReadyToBeginLogo from "../../assets/ready.png";

const HowItWorks = () => {
  return (
    <div className="bg-white-100 text-white w-full">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-[#0d1321]">
        {/* Left Section */}
        <div className="flex-1 max-w-2xl mx-auto ml-20 mr-9 text-center">
          <h1 className="text-5xl font-bold text-white text-left mb-8">
            How It Works
          </h1>
          <p className="text-xl text-white leading-relaxed text-left mb-6">
            City Escape Games is a collection of interactive outdoor escape
            games where you solve riddles, find clues, and uncover fascinating
            city secrets. Your journey will take you to iconic landmarks and
            hidden gems while testing your knowledge and puzzle-solving skills.
          </p>
          <ul className="list-disc list-inside space-y-4 text-left text-lg text-white">
            <li>Solving trivia puzzles and entertaining missions.</li>
            <li>Discovering historical landmarks and hidden locations.</li>
            <li>Facing time penalties for incorrect answers.</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={BudapestLogo}
            alt="City Escape Games Logo"
            className="w-1/2 h-auto object-contain"
          />
        </div>
      </div>

      {/* What Do You Need? Section */}
      <section className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-[#1d2d44]">
        {/* Left Section */}
        <div className="flex-1 max-w-2xl mx-auto ml-20 mr-9 text-center">
          <h2 className="text-3xl font-bold text-white text-left mb-6">
            What Do You Need?
          </h2>
          <ul className="list-disc list-inside space-y-4 text-xl text-white text-left ">
            <li>A smartphone or tablet with internet access.</li>
            <li>Comfortable shoes for walking around the city.</li>
            <li>A team name if you’re competing with others.</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={WhatDoYouNeedLogo}
            alt="Placeholder"
            className="w-1/2 h-auto object-contain"
          />
        </div>
      </section>

      {/* Who Can Play? Section */}
      <section className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-[#0d1321]">
        {/* Left Section */}
        <div className="flex-1 max-w-2xl mx-auto ml-20 mr-9 text-center">
          <h2 className="text-3xl font-bold text-white text-left mb-6">
            Who Can Play?
          </h2>
          <p className="text-xl text-white text-left leading-relaxed">
            The game is suitable for players aged 15 and above. Younger players
            can join with a little help from adults.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={WhoCanPlayLogo}
            alt="Placeholder"
            className="w-1/2 h-auto object-contain"
          />
        </div>
      </section>

      {/* Safety and Guidelines Section */}
      <section className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-[#1d2d44]">
        {/* Left Section */}
        <div className="flex-1 max-w-2xl mx-auto ml-20 mr-9 text-center">
          <h2 className="text-3xl font-bold text-white text-left mb-6">
            Safety and Guidelines
          </h2>
          <ul className="list-disc list-inside space-y-4 text-xl text-white text-left">
            <li>Respect local laws and regulations while playing.</li>
            <li>Be cautious in traffic and aware of your surroundings.</li>
            <li>Avoid trespassing or disturbing private property.</li>
            <li>
              Take breaks when needed, but keep an eye on the leaderboard!
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={SafetyAndGuidelinesLogo}
            alt="Placeholder"
            className="w-1/2 h-auto object-contain"
          />
        </div>
      </section>

      {/* Ready to Begin? Section */}
      <section className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-[#0d1321]">
        {/* Left Section */}
        <div className="flex-1 max-w-2xl mx-auto ml-20 mr-9 text-center">
          <h2 className="text-3xl font-bold text-white text-left mb-6">
            Ready to Begin?
          </h2>
          <p className="text-xl text-white text-left leading-relaxed">
            Select your city and start your game from the homepage. Solve
            riddles, explore hidden spots, and enjoy the adventure at your own
            pace. Your next escape awaits!
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={ReadyToBeginLogo}
            alt="Placeholder"
            className="w-1/2 h-auto object-contain"
          />
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
