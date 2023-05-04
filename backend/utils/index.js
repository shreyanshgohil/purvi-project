import { genSalt, hash, compare } from 'bcrypt';
export const createEncryptedPassword = async (password) => {
  const salt = await genSalt(10);
  const hashedPassword = await hash(password, salt);
  return hashedPassword;
};

export const comparePasswordHandler = async (password, hashedPassword) => {
  return await compare(password, hashedPassword);
};
