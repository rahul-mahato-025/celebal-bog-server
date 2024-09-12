import { PostService } from "../services/index.js";
import { StatusCodes } from "http-status-codes";

const postService = new PostService();

export async function create(req, res, next) {
  try {
    const { title, content, images } = req.body;
    const postId = await postService.create({
      title,
      content,
      images,
      user_id: req.user.id,
    });

    return res.status(StatusCodes.CREATED).json({
      data: { postId },
      success: true,
      error: {},
      message: `Post with id: ${postId} created`,
    });
  } catch (error) {
    next(error);
  }
}

export async function find(req, res, next) {
  try {
    const { postId } = req.params;
    const post = await postService.findById(postId);
    return res.status(StatusCodes.OK).json({
      data: post,
      success: true,
      error: {},
      message: `Post with id: ${postId} fetched`,
    });
  } catch (error) {
    next(error);
  }
}

export async function findAll(req, res, next) {
  try {
    const posts = await postService.findAll();
    return res.status(StatusCodes.OK).json({
      data: posts,
      success: true,
      error: {},
      message: `All Posts fetched`,
    });
  } catch (error) {
    next(error);
  }
}

export async function update(req, res, next) {
  try {
    const { postId } = req.params;
    const { title, content, images } = req.body;
    const resp = await postService.update(postId, { title, content, images });
    return res.status(StatusCodes.OK).json({
      data: resp,
      success: true,
      error: {},
      message: `Post updated`,
    });
  } catch (error) {
    next(error);
  }
}

export async function deletePost(req, res, next) {
  try {
    const { postId } = req.params;
    const resp = await postService.delete(postId);
    return res.status(StatusCodes.OK).json({
      data: resp,
      success: true,
      error: {},
      message: `Post with id: ${postId} deleted`,
    });
  } catch (error) {
    next(error);
  }
}
