import { Router } from "express";

import validateBodyCreateUser from "../../../middlewares/users/validateBodyCreateUser";
import validateTokenMiddleware from "../../../middlewares/validateTokenMiddleware";

import usersController from "../controller/users.controller";

const routes = Router();

routes.post("/createUser", validateBodyCreateUser, usersController.create);
routes.post("/login", validateBodyCreateUser, usersController.login);
routes.get("/getBalance", validateTokenMiddleware, usersController.getBalance);

export default routes;
