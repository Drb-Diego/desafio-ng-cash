import { Router } from "express";

import validateTokenMiddleware from "../../../middlewares/validateTokenMiddleware";
import transactionController from "../controller/transaction.controller";

const routes = Router();

routes.post("/cashOut", validateTokenMiddleware, transactionController.cashOut);

export default routes;
