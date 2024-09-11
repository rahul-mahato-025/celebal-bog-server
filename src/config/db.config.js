import mysql from "mysql2/promise";
import serverConfig from "./server.config.js";

export const pool = mysql.createPool({
  host: "localhost",
  user: serverConfig.DB_USER,
  password: serverConfig.DB_PWD,
  database: serverConfig.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
