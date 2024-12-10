// RiddlePage.tsx

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FeedbackMessage from "../Shared/FeedbackMessage";
import Button from "../Shared/Button";
import styles from "./RiddlePage.module.css";

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
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
          "How do you think the presence of physical walls, like the city wall, influenced children's play and social interactions in this area?",
        options: [
          "They restricted where children could play, forcing them to remain close to family and familiar faces.",
          "They encouraged children to creatively use limited space, finding new ways to interact despite barriers.",
          "They had no real effect; children’s play remained unchanged regardless of physical boundaries.",
          "They sparked curiosity about what lay beyond the walls, influencing children to imagine new worlds.",
        ],
        correctAnswer:
          "They encouraged children to creatively use limited space, finding new ways to interact despite barriers.",
      },
      {
        question:
          "In what ways do adults’ complaints create invisible walls in communication with children?",
        options: [
          "Complaints can make children feel misunderstood and hesitant to share their thoughts.",
          "Complaints serve as harmless expressions that don’t significantly affect children’s willingness to talk.",
          "Complaints can create an atmosphere of tension, limiting open and honest conversation.",
          "Complaints lead children to distrust adults, viewing them as constantly critical rather than supportive.",
        ],
        correctAnswer:
          "Complaints can make children feel misunderstood and hesitant to share their thoughts.",
      },
      {
        question:
          "Can you recall a time when a complaint disrupted a conversation or interaction? What was the outcome?",
        options: [
          "The complaint caused everyone to fall silent, halting the flow of the conversation.",
          "The complaint encouraged people to address the issue openly, ultimately improving understanding.",
          "The complaint was ignored, and the conversation continued smoothly without acknowledgment.",
          "The complaint led some participants to withdraw and others to speak more cautiously, altering the group’s dynamic.",
        ],
        correctAnswer:
          "The complaint led some participants to withdraw and others to speak more cautiously, altering the group’s dynamic.",
      },
    ],
    images: [
      "https://welovebudapest.com/i/9f/kalvin4.exact1980w.jpg",
      "https://welovebudapest.com/i/13/kalvin1844vagy1852.exact1980w.jpg",
    ],
    description: [
      "Long ago, the area around Bástya utca was marked by the presence of Pest’s old city wall—an imposing structure that once determined who could enter, leave, or linger. This defensive barrier, while offering safety from outside threats, also created subtle divisions within the community. Life thrived inside and outside its borders, but the wall’s presence encouraged certain patterns of behavior, shaping how residents interacted, moved, and played.",
      "Over time, as the city expanded and the old fortifications lost their purpose, these walls were removed or integrated into the urban fabric. Today, in place of that once formidable boundary, a playground stands—an open, welcoming space dedicated to children’s play. Here, laughter and imagination flow freely, unfettered by the physical restrictions that characterized this spot centuries ago. Kids chase each other, invent games, and communicate without the heavy weight of history. They cross “boundaries” made of chalk lines rather than stone, breaking down social barriers through simple acts of cooperation, curiosity, and kindness.",
      "However, while children generally approach the world with openness, adults sometimes construct their own invisible barriers through habits like complaining or criticizing. These intangible “walls” of negativity can limit understanding and discourage genuine connection. Within this playground setting, we’re reminded that human interactions—whether in childhood or adulthood—can be shaped by the presence or absence of both visible and invisible barriers. Overcoming these obstacles, whether physical stones or critical tones, leads to healthier, more vibrant communities.",
    ],
    successFeedback: [
      "Great job! You've completed the riddle.",
      "Passcode for next location 'Playground at Bástya Street': 1234",
    ],
  },
  "2": {
    title: "Playground at Bástya Street",
    questions: [
      {
        question:
          "How do you think the presence of physical walls, like the city wall, influenced children's play and social interactions in this area?",
        options: [
          "The walls restricted children’s access to open spaces, encouraging creativity in limited areas.",
          "The walls provided a sense of safety, allowing children to play freely without external threats.",
          "The walls created curiosity about what lay beyond, fostering imaginative play.",
          "All of the above.",
        ],
        correctAnswer: "All of the above.",
      },
      {
        question:
          "In what ways do adults' complaints create invisible walls in communication with children?",
        options: [
          "Complaints make children feel unheard or misunderstood, reducing their willingness to communicate openly.",
          "Complaints help children understand their mistakes and foster better behavior.",
          "Complaints create an atmosphere of tension, discouraging natural and honest interactions.",
          "Both A and C.",
        ],
        correctAnswer: "Both A and C.",
      },
      {
        question:
          "Can you recall a time when a complaint disrupted a conversation or interaction? What was the outcome?",
        options: [
          "The complaint led to silence, stopping the conversation altogether.",
          "The complaint encouraged reflection, leading to a constructive outcome.",
          "The complaint caused tension, resulting in misunderstanding or avoidance.",
          "Both A and C.",
        ],
        correctAnswer: "Both A and C.",
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
    ],
  },
  "3": {
    title: "Residential Building on the Old Wall",
    questions: [
      {
        question:
          "What challenges did residents face when the city wall was built or demolished in terms of their sense of community?",
        options: [
          "The city wall restricted communication, isolating residents within a small, close-knit group.",
          "The demolition of the wall brought unfamiliar people into the community, leading to tension.",
          "Residents struggled to adapt to new spaces, losing the sense of safety the wall provided.",
          "All of the above.",
        ],
        correctAnswer: "All of the above.",
      },
      {
        question:
          "How does complaining about neighbors or local issues contribute to a sense of division among residents?",
        options: [
          "Complaints can foster mistrust and tension, making residents hesitant to engage openly.",
          "Complaints encourage residents to work together to address shared concerns.",
          "Complaints are harmless and rarely affect the relationships between neighbors.",
          "Complaints create visible divisions, such as different groups avoiding one another.",
        ],
        correctAnswer:
          "Complaints can foster mistrust and tension, making residents hesitant to engage openly.",
      },
      {
        question:
          "Reflect on how you communicate your concerns about your living environment. Do you find it builds bridges or walls with your neighbors?",
        options: [
          "Sharing concerns constructively can lead to collaboration and mutual understanding.",
          "Expressing frustration without resolution often increases tension and divides the community.",
          "Avoiding communication altogether prevents conflict but also limits opportunities for unity.",
          "Both A and B.",
        ],
        correctAnswer: "Both A and B.",
      },
    ],
    images: [
      "https://welovebudapest.com/i/8e/varosfal_korosi-tamas_20160330.exact1980w.jpg",
      "https://welovebudapest.com/i/d5/varosfal_korosi-tamas_20160330.exact1980w.jpg",
    ],
    description: [
      "Nestled within the heart of Budapest, the residential garden of Múzeum körút 31-33 offers a quiet sanctuary away from the bustling streets. Historically, this area served as a boundary between the protected city and its surrounding countryside, where residents sought refuge behind the city wall. While the walls provided physical safety, they also created a psychological divide, limiting interactions between those inside and outside the walls.",
      "When the city wall was eventually demolished to make way for urban expansion, it symbolized the transition from isolation to integration. This shift was bittersweet for many residents—while it allowed for new connections and opportunities, it also brought challenges such as increased noise, loss of privacy, and a blending of diverse social classes that sometimes led to conflict.",
      "Today, the garden reflects these historical tensions. It is a private space where residents can retreat, offering a sense of calm and solitude. However, it also represents how urban spaces can inadvertently foster division. Complaints about noise, maintenance, or neighborly disputes are common and can create invisible walls between residents, discouraging a sense of unity. The garden reminds us that while physical barriers may disappear, emotional and social divides often linger. It challenges us to consider how we engage with our communities—do we use our words and actions to build bridges, or do we unintentionally create walls?",
    ],
    successFeedback: ["Great job! You have finished the game!"],
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
    const incorrectAnswers = riddle.questions.some(
      (q, i) => selectedAnswers[i] !== q.correctAnswer
    );

    if (incorrectAnswers) {
      setFeedback("Incorrect. Try again!");
    } else {
      setFeedback(
        "Please proceed to the next location by clicking the 'close' button below."
      );
    }
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
            {index < riddle.questions.length - 1 && (
              <hr className="my-4 border-t border-gray-300 mt-8" />
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
