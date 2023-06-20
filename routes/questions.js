import express from "express";
import { createQuestion, getQuestions } from "../controllers/questions.js";

const router = express.Router();

router.route("/").post(createQuestion).get(getQuestions);

export default router;
