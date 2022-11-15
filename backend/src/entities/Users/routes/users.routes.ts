import { Router } from "express";

import usersController from "../controller/users.controller";

const routes = Router();

routes.post("/createUser", usersController.create);

export default routes;
