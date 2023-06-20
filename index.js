import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./connectDB.js";
import authRouter from "./routes/auth.js";
import cardRouter from "./routes/cards.js";
import referenceRouter from "./routes/references.js";
import QuestionRouter from "./routes/questions.js";
import compareRouter from "./routes/compare.js";

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/auth", authRouter);
app.use("/api/cards", cardRouter);
app.use("/api/references", referenceRouter);
app.use("/api/questions", QuestionRouter);
app.use("/api/compare", compareRouter);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Backend Running on Port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
