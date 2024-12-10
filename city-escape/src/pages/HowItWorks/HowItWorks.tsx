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
        <div className="flex-1 max-w-2xl mx-auto ml-12 mr-9 text-center">
          <h1 className="text-5xl font-bold text-white text-left mb-8 pt-8">
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
      <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-[#1d2d44]">
        {/* Left Section */}
        <div className="flex-1 max-w-2xl mx-auto ml-12 mr-9 text-center">
          <h1 className="text-5xl font-bold text-white text-left mb-8 pt-8">
            What Do You Need?
          </h1>
          <ul className="list-disc list-inside space-y-4 text-xl text-white text-left mb-0 pb-8">
            <li className="m-0 p-0">
              A smartphone or tablet with internet access: This is essential for
              accessing the game, solving riddles, and navigating the city
              during your adventure. Make sure your device is fully charged or
              carry a power bank to avoid interruptions.
            </li>
            <li className="m-0 p-0">
              Comfortable shoes for walking around the city: Be prepared to
              explore various landmarks, streets, and hidden spots on foot. A
              comfortable pair of shoes will ensure you enjoy the experience
              without any discomfort.
            </li>
            <li className="m-0 p-0">
              A team name if you’re competing with others: If you’re playing as
              a group, come up with a fun and creative team name to add
              excitement to the challenge and leave your mark on the
              leaderboard.
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={WhatDoYouNeedLogo}
            alt="Placeholder"
            className="w-1/2 h-auto object-contain p-8"
          />
        </div>
      </div>
      {/* Who Can Play? Section */}
      <section className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-[#0d1321]">
        {/* Left Section */}
        <div className="flex-1 max-w-2xl mx-auto ml-12 mr-9 text-center md:text-left">
          <h2 className="text-3xl font-bold text-white text-left mb-6 pt-8">
            Who Can Play?
          </h2>
          <p className="text-xl text-white text-left leading-relaxed">
            The game is designed for players aged 15 and above, making it
            perfect for teenagers, young adults, and even seasoned puzzle
            enthusiasts. Younger players are more than welcome to join in on the
            fun, especially with some guidance and support from adults. Whether
            you’re a group of friends, a family looking for a unique bonding
            experience, or colleagues on a team-building mission, this game
            offers an exciting and inclusive challenge for everyone!
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
        <div className="flex-1 max-w-2xl mx-auto ml-12 mr-9 text-center">
          <h2 className="text-3xl font-bold text-white text-left mb-6 pt-8">
            Safety and Guidelines
          </h2>
          <ul className="list-disc list-inside space-y-4 text-xl text-white text-left pb-8">
            <li>
              Respect local laws and regulations while playing: Ensure you
              follow all city rules and guidelines as you explore. This includes
              adhering to park hours, avoiding restricted areas, and being
              mindful of public behavior to ensure a safe and enjoyable
              experience for everyone.
            </li>
            <li>
              Be cautious in traffic and aware of your surroundings: While
              navigating the city, always prioritize your safety. Pay attention
              to traffic signals, cross streets carefully, and stay alert in
              busy areas to avoid accidents or disruptions.
            </li>
            <li>
              Avoid trespassing or disturbing private property: Remember that
              some locations might be private or restricted. Always stick to
              public areas, respect boundaries, and avoid entering spaces
              without proper authorization.
            </li>
            <li>
              Take breaks when needed, but keep an eye on the leaderboard!: The
              game is meant to be fun and engaging, but don’t forget to pace
              yourself. Take short breaks to recharge, hydrate, or grab a snack,
              and then jump back in with renewed energy to maintain your
              competitive edge.
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center items-center pb-8">
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
        <div className="flex-1 max-w-2xl mx-auto ml-12 mr-9 text-center">
          <h2 className="text-3xl font-bold text-white text-left mb-6 pt-8">
            Ready to Begin?
          </h2>
          <p className="text-xl text-white text-left leading-relaxed pb-8">
            Select your city from the homepage and dive into an unforgettable
            adventure. Start your journey by solving clever riddles and
            unraveling thought-provoking puzzles, each designed to challenge
            your wit and creativity. Along the way, you'll uncover hidden gems
            and iconic landmarks, immersing yourself in the rich history and
            culture of the city. Whether you prefer to take your time exploring
            or race against the clock to climb the leaderboard, the experience
            is entirely yours to shape. Gather your team, put on your thinking
            caps, and get ready to embark on a thrilling quest filled with
            surprises at every turn. Your next escape awaits—are you ready to
            begin?
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
