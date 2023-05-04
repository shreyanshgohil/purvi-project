import express from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import { userRouter } from './routes/index.js';

// Inits
const app = express();
app.use(express.json());
config();

//Rotes
app.use('/user', userRouter);

//Server connections
mongoose
  .connect('mongodb://localhost:27017/purvi')
  .then(() => console.log('connected to the database'));

app.listen(5000, () => {
  console.log('server started on port 5000');
});
