import express from "express";
import {
  create,
  deletePost,
  find,
  findAll,
  update,
} from "../../controllers/post.controller.js";
import { authenticate } from "../../middlewares/auth.middleware.js";

const postRouter = express.Router();

postRouter.get("/", findAll);
postRouter.get("/:postId", find);
postRouter.post("/", authenticate, create);
postRouter.patch("/:postId", authenticate, update);
postRouter.delete("/:postId", authenticate, deletePost);

export default postRouter;
