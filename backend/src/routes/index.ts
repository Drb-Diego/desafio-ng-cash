import { Router } from "express";

import usersRoutes from "../entities/Users/routes/users.routes";

const routes = Router();

routes.get("/", (request, response) =>
  response.status(200).json({ message: "Olá mundo !" })
);

routes.use("/user", usersRoutes);

export default routes;
