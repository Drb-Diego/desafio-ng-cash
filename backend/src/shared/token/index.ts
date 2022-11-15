import jwt from "jsonwebtoken";

const { SECRET_TOKEN } = process.env;

import { Users } from "@prisma/client";

export const createToken = (payload: Users) => {
  const payloadToken = {
    id: payload.id,
    username: payload.username,
    accountId: payload.accountId,
  };

  const token = jwt.sign(payloadToken, SECRET_TOKEN as string, {
    expiresIn: "1d",
  });

  return token;
};

export const validateToken = (token: string) => {
  try {
    const tokenIsValid = jwt.verify(token, SECRET_TOKEN as string);

    return tokenIsValid;
  } catch (error) {
    return error;
  }
};
