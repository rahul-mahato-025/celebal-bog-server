class PostRepository {
  constructor(pool) {
    this.pool = pool;
  }
  async create({ title, content, images, user_id }) {
    try {
      const [post] = await this.pool.execute(
        `INSERT INTO Posts(title, content, user_id) VALUES(?, ?, ?)`,
        [title, content, user_id]
      );

      return post.insertId;
    } catch (error) {
      throw error;
    }
  }

  async update(postId, { title, content, images }) {
    try {
      await this.pool.execute(
        `UPDATE Posts SET title = ?, content = ? WHERE ID = ?`,
        [title, content, postId]
      );
      return true;
    } catch (error) {
      throw error;
    }
  }

  async findById(postId) {
    try {
      const [post] = await this.pool.execute(
        `SELECT id, title, content, user_id FROM Posts WHERE id = ?`,
        [postId]
      );
      return post;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      const [posts] = await this.pool.execute(
        `SELECT id,title, content, user_id FROM Posts`
      );
      return posts;
    } catch (error) {
      throw error;
    }
  }

  async delete(postId) {
    try {
      await this.pool.execute(`DELETE FROM Posts WHERE id = ?`, [postId]);
      return true;
    } catch (error) {
      throw error;
    }
  }
}

export default PostRepository;
