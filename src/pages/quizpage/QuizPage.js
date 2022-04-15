import React, { useEffect, useState } from "react";
import { useQuestion } from "context/questionContext";
import './quizpage.css'

export const QuizPage = () => {
  const [qNo, setQNo] = useState(0);
  const [score, setScore] = useState(0);
  const [quest, setQuestion] = useState();
  const [option, setOption] = useState();
  const [selected, setSelected] = useState(null);
  const getNextQuestion = () => {
      setQNo(qNo + 1);
      setSelected(null)
  };

  useEffect(()=> {
    setQuestion(questionCategoryList[qNo].question);
  },[qNo])


  useEffect(() => {
    setOption(
      questionCategoryList &&
        handleShuffle([
          questionCategoryList[qNo]?.correct_answer,
          ...questionCategoryList[qNo]?.incorrect_answers,
          console.log(option),
        ])
    );
  }, [qNo]);

  const handleShuffle = (option) => {
    return option.sort(() => Math.random() - 0.5);
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === questionCategoryList[qNo]?.correct_answer) setScore(score + 1);
  };

  const handleSelect = (option) => {
    if (
      selected === option &&
      option === questionCategoryList[qNo]?.correct_answer
    ) {
      return "correct";
    }
    if (
      selected === option &&
      option !== questionCategoryList[qNo]?.correct_answer
    ) {
      return "wrong";
    }
    if (option === questionCategoryList[qNo]?.correct_answer) {
      return "correct";
    }
  };
  const { questionCategoryList } = useQuestion();
  return (
    <>
    <div className="question-container">
      <div className="question-listing">
      <div className="heading">
          <h1> Question {qNo + 1}</h1>
          <div className="score">score: {score}</div>
        </div>
        <hr />
      
      <div className="option-container">
          <h2 className="question"> {quest}</h2>
          <hr />
          {option &&
            option.map((i,j) => (
              <div>
                <button
                  className={`singleOption  ${selected && handleSelect(i)}`}
                  key={j}
                  onClick={() => handleCheck(i)}
                  disabled={selected}
                >
                  {i}
                </button>
              </div>
            ))}
        </div>
        <button onClick={getNextQuestion} className="next-button">
          NEXT
        </button>
        </div>
        </div>
    </>
  );
};

