import { Router } from "express";

import userRoutes from "../entities/User/routes/user.routes";
import transactionRoutes from "../entities/Transaction/routes/transaction.routes";

const routes = Router();

routes.get("/", (request, response) =>
  response.status(200).json({ message: "Olá mundo !" })
);

routes.use("/user", userRoutes);
routes.use("/transaction", transactionRoutes);

export default routes;
