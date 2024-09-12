import express from "express";
import v1Router from "./v1/index.js";
import authRouter from "./auth.route.js";

const apiRouter = express.Router();

apiRouter.use("/v1", v1Router);
apiRouter.use("/auth", authRouter);

export default apiRouter;
