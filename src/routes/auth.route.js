import express from "express";
import { create, login, logout } from "../controllers/auth.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const authRouter = express.Router();

authRouter.post("/register", create);
authRouter.post("/login", login);
authRouter.get("/logout", authenticate, logout);

export default authRouter;
