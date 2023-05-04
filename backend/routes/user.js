import { Router } from 'express';
import {
  registerUser,
  deleteUser,
  getUser,
  updateUser,
} from '../controllers/userControllers.js';

const userRouter = Router();

userRouter.get('/:userEmail', getUser);
userRouter.post('/register', registerUser);
userRouter.put('/update-user', updateUser);
userRouter.delete('/delete-user', deleteUser);

export default userRouter;
