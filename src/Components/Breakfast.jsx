import React, { useContext } from 'react'
import { MealContext } from '../Contexts/MealsProvider'
import ShowFoods from './ShowFoods'

const Breakfast = () => {
  const mealItems = useContext(MealContext)
  const breakfastItems = mealItems.breakfast

  return (
    <>
      <ShowFoods key={Math.random()} food={breakfastItems} />
    </>
  )
}

// ;
export default Breakfast
