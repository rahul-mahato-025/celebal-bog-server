class PostImageRepository {
  constructor(pool) {
    this.pool = pool;
  }

  async create({ img_url, post_id }) {
    try {
      const [result] = await this.pool.execute(
        "INSERT INTO Post_Images(img_url, post_id) VALUES(?, ?)",
        [img_url, post_id]
      );
      return result.insertedId;
    } catch (error) {
      throw error;
    }
  }
}
