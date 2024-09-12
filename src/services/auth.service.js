import { pool } from "../config/db.config.js";
import { UserRepository } from "../repositories/index.js";
import { comparePassword } from "../utils/bcrypt.util.js";
import { generateToken } from "../utils/jwt.util.js";

class AuthService {
  constructor() {
    this.userRepository = new UserRepository(pool);
  }

  async register({ firstName, lastName, email, password }) {
    try {
      const userExists = await this.userRepository.findByEmail(email);

      if (userExists.length !== 0)
        throw new Error(`User with email ${email} already exists`);

      const userId = await this.userRepository.create({
        firstName,
        lastName,
        email,
        password,
      });
      const token = generateToken({
        id: userId,
        email,
        firstName,
        lastName,
      });

      const user = await this.userRepository.findById(userId);
      console.log(user);

      return { user, token };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      const users = await this.userRepository.findByEmail(email);

      if (users.length === 0) throw new Error(`Invalid Credentials`);

      const validPassword = comparePassword(password, users[0].password);

      if (!validPassword === 0) throw new Error(`Invalid Credentials`);

      const token = generateToken({
        id: users[0].id,
        email,
        firstName: users[0].firstName,
        lastName: users[0].lastName,
      });
      return { user: users[0], token };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default AuthService;
