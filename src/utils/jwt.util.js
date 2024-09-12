import jwt from "jsonwebtoken";
import serverConfig from "../config/server.config.js";

export function generateToken(data) {
  const token = jwt.sign(data, serverConfig.JWT_SECRET, {
    expiresIn: "7d",
  });
  return token;
}

export function verifyToken(token) {
  const user = jwt.verify(token, serverConfig.JWT_SECRET, {
    expiresIn: "7d",
  });
  return user;
}
