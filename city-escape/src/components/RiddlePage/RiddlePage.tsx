// RiddlePage.tsx

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FeedbackMessage from "../Shared/FeedbackMessage";
import Button from "../Shared/Button";
import styles from "./RiddlePage.module.css";
import berlinGate from "../../assets/berlin_gate.png";
import pragueWall from "../../assets/prague_wall.png";
import englandWall from "../../assets/england_wall.png";
import residentialImage from "../../assets/residential_image.png";
import poemImage from "../../assets/poem.png";

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  image?: string; // Optional field for question-specific images
  explanation?: string; // Optional field for explanations
}

interface Riddle {
  title: string;
  questions: Question[];
  images: string[]; // Array of image URLs
  description: string[];
  successFeedback: string[]; // Specific feedback for each riddle
}

const riddles: Record<string, Riddle> = {
  "1": {
    title: "Kálvin Square (Former Gate)",
    questions: [
      {
        question:
          "To continue the tour, you need to find out what the first stop symbolises! The building you are looking for is named after a small planet. When you find it, face it and guess what the structure between the two buildings represents!",
        options: ["A bridge.", "A gate."],
        correctAnswer: "A gate.",
      },
    ],
    images: [berlinGate, pragueWall, englandWall],
    description: [
      "Which famous walls do you recognise in the pictures below? The pictures below show walls that shed light on several of their functions when used. In this way, a wall can often not only protect the area it encloses in a positive sense, but also separate people from each other.",
      "The city walls of Budapest serve a defensive function, as many nations have conquered Hungary over the centuries. The line along which the tour follows the footprint of the second city wall, built in the late medieval times. Within the semi-circle was the Old Town, which later outgrew itself and can now be found in only a few places, but this tour takes you to these points, and the line of the houses built on the Museum Boulevard is defined by the former city wall. ",
      "Kálvin Square, where bustling life now flourishes, holds beneath its surface the site where the old Kecskeméti Gate once stood. As an entryway to the city, this section of the city wall served as a major commercial hub. This gate played a crucial role in handling the flow of travellers and goods, shaping the prosperity and culture of the region. Carts carrying goods from the Alföld (Great Plain) entered the trading town through this gate, and their drivers rested and fed their horses in the old Széna Square. Over time, Széna Square was relocated to Buda, and the Pest city wall was demolished, making way for the development of today’s Kiskörút (“Little Boulevard”). The area, later renamed Kálvin Square, has remained an important gateway to the city ever since.",
      "If you chose the correct answers, you will get the password for the next station! You have to click on the pin „2” on the map, and then type the password in the order of the questions!  ",
    ],
    successFeedback: [
      "Great job! You've completed the riddle.",
      "Passcode for next location 'Playground at Bástya Street': ABA",
    ],
  },
  "2": {
    title: "Playground at Bástya Street",
    questions: [
      {
        question:
          "What is the passage called where you can walk along the wall?",
        options: ["Machicolation.", "Casemate.", "Tunnel."],
        correctAnswer: "Machicolation.",
        image:
          "https://scontent.xx.fbcdn.net/v/t1.15752-9/462577570_946877990656423_2428534327969417026_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=2umVfUOFZkAQ7kNvgGfqxXI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QEwfaNrKcNOh_XUiojqt0NqaOsYG0LUMQE8Tiit5MbzTA&oe=67801943",
        explanation:
          "Machicolation is a narrow passage that defenders were using during enemy attacks. It was placed in a way that only a small part were visible of the defenders between the battlements, so they were protected from enemy fire.",
      },
      {
        question:
          "Examine the wall! Can you guess what were those vertical tunnels were used for?",
        options: [
          "They are latrine slopes of the wall.",
          "They are stovepipe-tunnels built-in the wall.",
          "They are for the lumbers that fortify the wall.",
        ],
        correctAnswer: "They are stovepipe-tunnels built-in the wall.",
        image:
          "https://scontent.xx.fbcdn.net/v/t1.15752-9/462560475_563050979772361_4734082999267755239_n.jpg?stp=dst-jpg_s552x414_tt6&_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Wbh6bgAjF9cQ7kNvgE2N8op&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QEb4j2Hse689VjrRrjEY0gyyfV8Yky51xtnw3TvYn2G0g&oe=67800D5B",
        explanation:
          "Because of the continuity of Pest, during the centuries the city slowly outgrew the walls, having them incorporated into residential buildings. As households developed, people needed to make necessary modifications ont he built heritage to secure their comfort. This is the case with stovepipe-tunnels as well.",
      },
      {
        question:
          "Look for traces of the wall! Can you spot in what direction it continues?",
        options: [
          "Towards the river Danube.",
          "Towards Király Pál street.",
          "It ends at the playground.",
        ],
        correctAnswer: "Towards the river Danube.",
        image:
          "https://scontent.xx.fbcdn.net/v/t1.15752-9/462576745_1948548128990494_2805081667314914683_n.jpg?stp=dst-jpg_s552x414_tt6&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=SGUX6lKAIUgQ7kNvgF0WAQi&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QGFUGy8TKexxLJxll8Qyxke-wxYd4HRpCKQAnGtzuyzQg&oe=67802EF0",
        explanation:
          "The usage of paving blocks was common during the previous centuries in Hungarian Heritage Protection. You can find them many places along this tour. Expect some history when you see them!",
      },
    ],
    images: [
      "https://pestbuda.hu/uploads/media/news/0001/05/thumb_4140_news_big.jpg",
    ],
    description: [
      "The playground at Bástya utca, vibrant with the laughter of children today, contrasts sharply with its historical roots. Centuries ago, this area was bustling with life, situated near the medieval city wall of Pest. The wall, while offering protection from external threats, created both physical and social divisions within the community. Inside the wall, children played in limited, enclosed spaces, fostering creativity in how they interacted and used their surroundings. Meanwhile, outside the wall, life was different, often leading to curiosity and a longing to explore the unknown.",
      "As the city walls were demolished over time to accommodate urban growth, the area transformed into an open space. Today, the playground symbolizes freedom and connection, where children freely chase one another, invent games, and communicate without barriers. However, this openness is often in contrast to how adults engage with one another. Adults frequently construct emotional barriers—'invisible walls'—through habits like complaining or criticism. These intangible walls can stifle relationships, hinder communication, and limit understanding between generations.",
      "The playground reminds us that while physical walls can be torn down, the invisible barriers we create in our interactions often persist. It challenges us to reflect on how we build or break these walls in our daily lives, especially when interacting with children, whose natural openness and curiosity can inspire us to communicate more freely and authentically.",
    ],
    successFeedback: [
      "Great job! You've completed the riddle.",
      "Passcode for next location 'Residential Building on the Old Wall': abcd",
      "Go outside the walls and head towards the middle gate of the city. Also look for the numbers 31-33 on the Boulvard. Across the road you’ll see a building where all antiquites belong.",
    ],
  },
  "3": {
    title: "Residential Building on the Old Wall",
    questions: [
      {
        question:
          "What significance does the old city wall remnant hold at Museum Boulevard  31-33?",
        options: [
          "It marks the boundary of old Pest.",
          "It's part of a famous poet's residence.",
        ],
        correctAnswer: "It marks the boundary of old Pest.",
      },
      {
        question:
          "Now you are going to read a poem. Find out which word is missing from the gaps!",
        options: ["Key.", "Door.", "Floor."],
        correctAnswer: "Key.",
        image: poemImage,
      },
      {
        question: "How many shops does the building have?",
        options: ["0", "2", "3", "4"],
        correctAnswer: "0",
      },
      {
        question:
          "How many floors does the building have? (Not including the ground floor)",
        options: ["1", "2", "3", "4"],
        correctAnswer: "3",
      },
      {
        question:
          "In which direction should you proceed to find your way to the Danube from here?",
        options: ["East.", "North.", "South."],
        correctAnswer: "South.",
      },
      {
        question:
          "If you're standing in the right place, you can see the National Museum, which collects and exhibits artefacts from Hungarian history, across the street. The composition of the façade's tympanum was designed by sculptor Ludwig Schaller. How many corners does this tympanum have?",
        options: ["1", "2", "3"],
        correctAnswer: "3",
      },
    ],
    images: [residentialImage],
    description: [
      "Hidden among the buildings of Museum Boulevard lies a forgotten piece of history: one of the last remaining section of Pest’s old city wall. This quiet inner courtyard holds a wall remnant that once protected the bustling medieval city. During the devastation of the Second World War, the buildings along the Museum Boulevard were severely damaged and had to be demolished. In the process, an 18-meter-long segment of the city wall’s outer side was uncovered in the courtyard of Museum Boulevard 31-33, built into the fire wall of Magyar Street 42., offering a silent reminder of the city’s storied past.",
      "To get into the inner courtyard, you need to answer the following questions to get the code!",
    ],
    successFeedback: [
      "If you answered correctly, you got 5 numbers and a symbol! Find the device to enter pincode in the doorway! (In the order of the questions).",
      "Great job! You have finished the game!",
    ],
  },
};
const RiddlePage: React.FC = () => {
  const navigate = useNavigate();
  interface RouteParams extends Record<string, string | undefined> {
    riddleId: string;
  }
  const { riddleId } = useParams<RouteParams>();
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string | null>
  >({});
  const [feedback, setFeedback] = useState<string | null>(null);
  const [explanations, setExplanations] = useState<string[]>([]); // Array to hold explanations for questions

  const riddle = riddleId && riddles[riddleId] ? riddles[riddleId] : undefined;

  useEffect(() => {
    if (!riddle) {
      navigate("/");
    }
  }, [riddle, navigate]);

  if (!riddle) {
    return null;
  }

  const handleAnswer = () => {
    const newExplanations: string[] = [];

    riddle.questions.forEach((q, i) => {
      const isCorrect = selectedAnswers[i] === q.correctAnswer;
      if (isCorrect && q.explanation) {
        // Only add explanation if the answer is correct
        newExplanations[i] = q.explanation;
      }
    });

    // Check if there are any incorrect answers
    const hasIncorrectAnswers = riddle.questions.some(
      (q, i) => selectedAnswers[i] !== q.correctAnswer
    );

    if (hasIncorrectAnswers) {
      setFeedback("Incorrect. Try again!");
    } else {
      setFeedback(
        "Please proceed to the next location by clicking the 'close' button below."
      );
    }

    setExplanations(newExplanations); // Update explanations only for correct answers
  };

  const handleAnswerChange = (index: number, answer: string) => {
    if (
      feedback ===
      "Please proceed to the next location by clicking the 'close' button below."
    )
      return;
    setSelectedAnswers((prev) => ({ ...prev, [index]: answer }));
  };

  const handleClose = () => {
    setFeedback(null);
    setExplanations([]);
    navigate("/map");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{riddle.title}</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.images}>
          {riddle.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Riddle ${riddleId} Image ${index + 1}`}
              className={styles.image}
            />
          ))}
        </div>
        {riddle.description.map((paragraph, index) => (
          <p key={index} className={styles.text}>
            {paragraph}
          </p>
        ))}
      </div>

      <div className={styles.quiz}>
        {riddle.questions.map((q, index) => (
          <div key={index} className="mb-4">
            {q.image && (
              <img
                src={q.image}
                alt={`Question ${index + 1} Image`}
                className={styles.questionImage}
              />
            )}
            <p>{q.question}</p>
            {q.options.map((option) => (
              <label key={option} className={styles.label}>
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  disabled={
                    feedback ===
                    "Please proceed to the next location by clicking the 'close' button below."
                  }
                  onChange={() => handleAnswerChange(index, option)}
                />
                {option}
              </label>
            ))}
            {feedback && explanations[index] && (
              <div className={styles.explanation}>{explanations[index]}</div>
            )}
          </div>
        ))}
        {feedback !==
          "Please proceed to the next location by clicking the 'close' button below." && (
          <div className={styles.buttonContainer}>
            <Button onClick={handleAnswer}>Submit Answers</Button>
          </div>
        )}

        {feedback ===
          "Please proceed to the next location by clicking the 'close' button below." && (
          <div className={styles.successFeedback}>
            {riddle.successFeedback.map((feedbackParagraph, index) => (
              <p key={index}>{feedbackParagraph}</p>
            ))}
          </div>
        )}
      </div>

      {feedback && (
        <FeedbackMessage
          message={feedback}
          type={
            feedback ===
            "Please proceed to the next location by clicking the 'close' button below."
              ? "success"
              : "error"
          }
          onClose={
            feedback ===
            "Please proceed to the next location by clicking the 'close' button below."
              ? handleClose
              : undefined
          }
        />
      )}
    </div>
  );
};

export default RiddlePage;
