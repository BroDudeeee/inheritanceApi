import express from "express";
import { compare } from "../controllers/compare.js";
const router = express.Router();

router.route("/").post(compare);

export default router;
