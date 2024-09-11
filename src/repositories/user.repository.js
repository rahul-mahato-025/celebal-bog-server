import { hashPassword } from "../utils/bcrypt.util.js";

class UserRepository {
  constructor(pool) {
    this.pool = pool;
  }

  async create({ firstName, lastName, email, password }) {
    try {
      password = await hashPassword(password);
      const [result] = await this.pool.execute(
        `INSERT INTO User (firstname, lastName, email, password) VALUES(?, ?, ?, ?)`,
        [firstName, lastName, email, password]
      );
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async findById(userId) {
    try {
      const [user] = await this.pool.execute(
        `SELECT id, firstName, lastName, email FROM User WHERE id = ?`,
        [userId]
      );
      return user;
    } catch (error) {}
  }

  async findByEmail(emailId) {
    try {
      const [user] = await this.pool.execute(
        `SELECT id, firstName, lastName, email FROM User WHERE email = ?`,
        [emailId]
      );
      return user;
    } catch (error) {}
  }
}

export default UserRepository;
