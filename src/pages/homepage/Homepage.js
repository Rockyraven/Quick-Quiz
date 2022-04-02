import { QuizCard } from 'component'
import React from 'react'
import '../../component/card/quizcard.css'


export const Homepage = () => {
  return (
    <div className="category-card">

    <QuizCard heading="Mathmatics"
              about= "Challenge yourself to take this quiz on Indian History??? I bet you cannot get more than an average child."   />
    <QuizCard heading="Mathmatics"
              about= "Challenge yourself to take this quiz on Indian History??? I bet you cannot get more than an average child."   />
    <QuizCard heading="Mathmatics"
              about= "Challenge yourself to take this quiz on Indian History??? I bet you cannot get more than an average child."   />
              </div>
  )
}
