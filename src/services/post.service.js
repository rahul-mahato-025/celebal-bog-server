import { PostRepository } from "../repositories/index.js";
import { pool } from "../config/db.config.js";

class PostService {
  constructor() {
    this.postRepository = new PostRepository(pool);
  }
  async create({ title, content, images, user_id }) {
    try {
      const postId = await this.postRepository.create({
        title,
        content,
        images,
        user_id,
      });
      return postId;
    } catch (error) {
      throw error;
    }
  }

  async update(postId, data) {
    try {
      const resp = await this.postRepository.update(postId, data);
      return resp;
    } catch (error) {
      throw error;
    }
  }

  async findById(postId) {
    try {
      const post = await this.postRepository.findById(postId);
      return post;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      const posts = await this.postRepository.findAll();
      return posts;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async delete(postId) {
    try {
      const resp = await this.postRepository.delete(postId);
      return resp;
    } catch (error) {
      throw error;
    }
  }
}

export default PostService;
