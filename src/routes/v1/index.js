import express from "express";
import postRouter from "./post.route.js";

const v1Router = express.Router();

v1Router.use("/posts", postRouter);

export default v1Router;
