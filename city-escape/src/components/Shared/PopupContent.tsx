import React from "react";
import Button from "../Shared/Button";

interface Question {
  question: string;
  answers: string[];
  correctAnswer: string;
}

interface PopupContentProps {
  title: string;
  imgSrc: string;
  description: React.ReactNode;
  questions: Question[];
  coords: [number, number];
  password: string;
  onProceed: (password: string, questionData: Question[]) => void;
}

const PopupContent: React.FC<PopupContentProps> = ({
  title,
  imgSrc,
  description,
  questions,
  coords,
  password,
  onProceed,
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <img src={imgSrc} alt={title} className="w-full h-auto rounded-lg mb-2" />
      <div>{description}</div>
      <p>
        <em>
          <strong>
            Please scan the QR code at this location to reveal the passcode and
            proceed to the riddle.
          </strong>
        </em>
      </p>
      <div className="flex gap-2 justify-center">
        <Button
          onClick={() => onProceed(password, questions)}
          className="bg-white text-black border border-gray-300 shadow px-4 py-2 rounded hover:bg-gray-100 transition-colors duration-150"
        >
          Proceed
        </Button>
        <Button
          onClick={() => {
            const [lat, lng] = coords;
            const mapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
            window.open(mapsUrl, "_blank");
          }}
          className="bg-white text-black border border-gray-300 shadow px-4 py-2 rounded hover:bg-gray-100 transition-colors duration-150"
        >
          Navigate
        </Button>
      </div>
    </div>
  );
};

export default PopupContent;
