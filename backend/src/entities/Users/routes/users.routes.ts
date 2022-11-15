import { Router } from "express";

import validateBodyCreateUser from "../../../middlewares/users/validateBodyCreateUser";

import usersController from "../controller/users.controller";

const routes = Router();

routes.post("/createUser", validateBodyCreateUser, usersController.create);

export default routes;
