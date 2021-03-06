import React from 'react'
import { Footer, Navbar, StartQuiz } from 'component'
import {  GuidLine, Homepage, QuizPage, ResultPage } from 'pages'
import { Route, Routes } from 'react-router-dom'


export const App = () => {
  return (
    <>
     
          <Navbar />
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/quizpage' element={<QuizPage/>} />
              <Route path='/guideline' element={<GuidLine/>} >
              <Route path=":guidelineID" element = {<StartQuiz/>}/>
              </Route>
              <Route path='/result' element = {<ResultPage/>} />
            </Routes>
          <Footer />
    </>
  )
}
