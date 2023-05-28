import express from "express";
import { createReferences, getReferences } from "../controllers/references.js";
const router = express.Router();

router.route("/").get(getReferences).post(createReferences);

export default router;
