import { useQuestion } from "context/questionContext";
import React from "react";
import '../quizpage/quizpage.css'
import './result.css'

export const ResultPage = () => {
  const { resultInfo, score, questionCategoryList } = useQuestion();

  const handleSelect = (option, selected, qNo) => {
    if (
      selected === option &&
      option === questionCategoryList[qNo].correct_answer
    ) {
      return "correct";
    }
    if (
      selected === option &&
      option !== questionCategoryList[qNo].correct_answer
    ) {
      return "wrong";
    }
    if (option === questionCategoryList[qNo].correct_answer) {
      return "correct";
    }
  };

  return (
    <>
      <div className="final-score">You score {score}/10</div>
      {resultInfo.map(({ question, options, selectedOption }, index) => (
        <div className="question-container">
          <div className="question-listing">
            <div className="heading"></div>
            <hr />

            <div className="option-container">
              <h2 className="question"> {question}</h2>
              <hr />
              {options.map((i, j) => (
                <div key={j}>
                  <button
                     
                    className={`singleOption  ${selectedOption && handleSelect(i, selectedOption, index)}`}
                  >
                    {i}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
