import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FeedbackMessage from "../Shared/FeedbackMessage";
import Button from "../Shared/Button";
import styles from "./RiddlePage.module.css";

const RiddlePage = () => {
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  const correctAnswer = "Bástya Street";

  const handleAnswer = () => {
    if (selectedAnswer === correctAnswer) {
      setFeedback("Correct! Great job!");
    } else {
      setFeedback("Incorrect. Try again!");
    }
  };

  const handleClose = () => {
    setFeedback(null);
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Discover the Hidden Ruins of Budapest’s Medieval City Wall</h1>
      </div>
      <div className={styles.content}>
        <img
          src="https://pestbuda.hu/uploads/media/news/0001/03/thumb_2956_news_big.jpg"
          alt="City Wall Budapest"
          className={styles.image}
        />
        <p className={styles.text}>
          Archaeologists have carried out excavations in Bástya Street in the
          Pest city centre, where part of Pest's city wall once stood. The dig
          led to finds from the 13th century to the Ottoman Period, including
          the remains of houses, kilns and ditches. The Budapest History Museum
          carried out a preliminary excavation of 1–11 Bástya street in
          preparation of the park and community centre planned for the area by
          the 5th District Council. The dig was completed between 6 July 2020
          and 3 September on the northern area of the plot, writes the report by
          the participating archaeologist Anikó Tóth on regeszet.aquincum.hu.
        </p>
      </div>
      <div className={styles.quiz}>
        <p>Where is this city wall located?</p>
        {["Bástya Street", "Ráday Street", "Üllői Street", "Kinizsi utca"].map(
          (option) => (
            <label key={option} className={styles.label}>
              <input
                type="radio"
                name="answer"
                value={option}
                onChange={() => setSelectedAnswer(option)}
              />
              {option}
            </label>
          )
        )}
        <div className="styles.buttonContainer">
          <Button onClick={handleAnswer}>Submit Answer</Button>
        </div>
      </div>
      {feedback && (
        <FeedbackMessage
          message={feedback}
          type={feedback === "Correct! Great job!" ? "success" : "error"}
          onClose={feedback === "Correct! Great job!" ? handleClose : undefined}
        />
      )}
    </div>
  );
};

export default RiddlePage;
