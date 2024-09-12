import { hashPassword } from "../utils/bcrypt.util.js";

class UserRepository {
  constructor(pool) {
    this.pool = pool;
  }

  async create({ firstName, lastName, email, password }) {
    try {
      password = await hashPassword(password);
      const [response] = await this.pool.execute(
        `INSERT INTO Users (firstname, lastName, email, password) VALUES(?, ?, ?, ?)`,
        [firstName, lastName, email, password]
      );

      return response.insertId;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async findById(userId) {
    try {
      const [user] = await this.pool.execute(
        `SELECT id, firstName, lastName, email FROM Users WHERE id = ?`,
        [userId]
      );
      return user;
    } catch (error) {}
  }

  async findByEmail(emailId) {
    try {
      const [user] = await this.pool.execute(
        `SELECT id, firstName, lastName, email, password FROM Users WHERE email = ?`,
        [emailId]
      );
      return user;
    } catch (error) {}
  }
}

export default UserRepository;
