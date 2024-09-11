import express from "express";
import {
  create,
  deletePost,
  find,
  findAll,
  update,
} from "../../controllers/post.controller.js";

const postRouter = express.Router();

postRouter.get("/", findAll);
postRouter.get("/:postId", find);
postRouter.post("/", create);
postRouter.patch("/:postId", update);
postRouter.delete("/:postId", deletePost);

export default postRouter;
