import React from 'react';
import AvailableMeals from './AvailableMeals';
import MealsSummary from './MealItem/MealsSummary';

const Meals = () => {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />;
    </>
  );
};

export default Meals;
