import { NextFunction, Request, Response } from "express";
import joi from "joi";

const bodySchema = joi.object({
  username: joi.string().required().min(3),
  password: joi.string().required().min(8),
});

export default (request: Request, response: Response, next: NextFunction) => {
  const { username, password } = request.body;

  const bodyIsValid = bodySchema.validate({ username, password });

  if (bodyIsValid.error) {
    return response.status(400).json({ message: bodyIsValid.error.message });
  }

  next();
};
