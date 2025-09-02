import express from 'express';
import foods from '../data/foods.js';

const foodRouter = express.Router();

foodRouter.get('/', (req, res) => {
  const { search, category, isSpicy } = req.query;
  let filteredFoods = foods;

  if (search) {
    filteredFoods = filteredFoods.filter(food => food.name.toLowerCase().includes(search.toLowerCase()));
  }

  if (category) {
    filteredFoods = filteredFoods.filter(food => food.category === category);
  }

  if (isSpicy !== undefined) {
    filteredFoods = filteredFoods.filter(food => food.isSpicy === (isSpicy === 'true'));
  }

  res.json(filteredFoods);
});

export default foodRouter;