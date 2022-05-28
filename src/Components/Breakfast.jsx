import React, { useContext } from 'react'
import { MealContext } from '../Contexts/MealsProvider'
import ShowFoods from './ShowFoods'

const Breakfast = () => {
  const allMealItems = useContext(MealContext)
  const breakfastItems = allMealItems.filter(
    (meal) => meal.type === 'breakfast'
  )

  return (
    <>
      <ShowFoods key={Math.random()} food={breakfastItems} />
    </>
  )
}

// ;
export default Breakfast
