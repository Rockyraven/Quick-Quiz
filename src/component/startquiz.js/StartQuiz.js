import { useQuestion } from 'context/questionContext'
import React from 'react'
import { Link, useParams } from 'react-router-dom';

export const StartQuiz = () => {
    const { fetchQuestion } = useQuestion();
    const param = useParams();
  return (
  <>
    <button className='btn-Start' onClick={fetchQuestion(param.guidelineID)}> <Link to='/quizpage'> Start Quiz</Link></button>
  </>
    )
}
