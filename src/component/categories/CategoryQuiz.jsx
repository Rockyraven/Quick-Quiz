import React from 'react'
import { categories } from 'db/category-db'
import { QuizCard } from 'component/card/QuizCard'

export const CategoryQuiz = () => {
  return (
  <>
      {categories.map(category => <QuizCard key={category._id} title={category.name} _id={category._id} image={category.image}/>)}
  </>
  )
}
