import express from "express";
import { createCard, getCards } from "../controllers/cards.js";
const router = express.Router();

router.route("/").post(createCard).get(getCards);

export default router;
