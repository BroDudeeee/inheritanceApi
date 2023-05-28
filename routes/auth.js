import express from "express";
import { getUsers, login, register } from "../controllers/auth.js";
const router = express.Router();

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/").get(getUsers);

export default router;
