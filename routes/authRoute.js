import express from "express";
const router = express.Router();

import login from "../controllers/loginController.js";
import register from "../controllers/registerController.js";

router.post("/login", login);
router.post("/register", register);

export default router;