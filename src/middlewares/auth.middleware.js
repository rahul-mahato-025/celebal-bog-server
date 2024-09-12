import { verifyToken } from "../utils/jwt.util.js";

export async function authenticate(req, res, next) {
  try {
    const { token } = req.cookies;
    if (!token) throw new Error("Unauthorized");
    const user = verifyToken(token);
    if (!user) throw new Error("Unauthorized");
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
}
