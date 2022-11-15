import "dotenv/config";
import express from "express";
import routes from "../routes";
import cors from "cors";
import morgan from "morgan";
import errorMiddleware from "../middlewares/errorMiddleware";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use(routes);
app.use(errorMiddleware);

export default app;
