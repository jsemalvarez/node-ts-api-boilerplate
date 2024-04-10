import { compareSync, genSaltSync, hashSync } from 'bcryptjs';

export const hash = (password: string) => {
  const salt = genSaltSync();
  return hashSync(password, salt);
};

export const compare = (password: string, hashed: string) => {
  return compareSync(password, hashed);
};
