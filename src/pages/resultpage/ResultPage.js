import { useQuestion } from 'context/questionContext';
import React from 'react'

export const ResultPage = () => {
  const {  resultInfo, setResultInfo } = useQuestion();

    console.log(resultInfo);
  return (
      <>
        <h1>Reult paeg</h1>
      </>
  )
}
