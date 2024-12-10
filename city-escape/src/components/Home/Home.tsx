import { Link } from "react-router-dom";
import backgroundImage from "../../assets/budapest-background.jpg";

const Home = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat relative px-4 sm:px-6 md:px-8"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center top", // Adjust the background position to show more of the upper part
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          Welcome to Explore Budapest!
        </h1>
        <p className="text-xl text-white max-w-2xl mb-8">
          Discover the hidden treasures of Budapest while solving fun riddles. A
          perfect blend of history, exploration, and entertainment awaits!
        </p>
        <Link
          to="/map"
          className="px-6 py-3 bg-white bg-opacity-30 text-white rounded-md shadow-md hover:bg-opacity-40 transition"
        >
          Start the Game
        </Link>
      </div>
    </div>
  );
};

export default Home;
