import React, { useContext } from 'react'
import MealsProvider, { MealContext } from '../Contexts/MealsProvider'
import ShowFoods from './ShowFoods'
const Breakfast = () => {
  const mealItems = useContext(MealContext)
  const breakfastItems = mealItems.breakfast.map((item) => item)
  console.log(breakfastItems)
  return <ShowFoods breakfastItems={breakfastItems} />
}

export default Breakfast
