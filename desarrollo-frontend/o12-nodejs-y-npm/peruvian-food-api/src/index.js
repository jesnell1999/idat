import express from 'express';
import foodRouter from './routes/foodRoutes.js';

const app = express();
const PORT = 3000;

app.get('/', (_, res) => {
  res.json({
    message: 'Welcome to the Peruvian Food API',
    endpoints: {
      getAllFoods: '/api/foods'
    },
  });
});

app.use('/api/foods', foodRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});