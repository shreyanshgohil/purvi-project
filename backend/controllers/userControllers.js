import User from '../models/User.js';
import {
  comparePasswordHandler,
  createEncryptedPassword,
} from '../utils/index.js';

//For get a single user
const getUser = async (req, res) => {
  try {
    const { userEmail } = req.params;
    const emailRegex = new RegExp(userEmail, 'gi');
    const users = await User.find({
      email: { $regex: emailRegex },
    });

    res.status(200).json({ message: 'Success', user: users });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: 'Failed', user: null });
  }
};

// For add a user
const registerUser = async (req, res) => {
  try {
    const { password, ...otherUserDetails } = req.body;
    const hashedPassword = await createEncryptedPassword(password);
    const userData = {
      ...otherUserDetails,
      password: hashedPassword,
    };
    const user = await User.create(userData);
    res.status(200).json({ message: 'Success' });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: 'Failed' });
  }
};

// For update a user
const updateUser = (req, res) => {};

// For delete a user
const deleteUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await comparePasswordHandler();
};

export { getUser, registerUser, updateUser, deleteUser };
