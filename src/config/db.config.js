import mysql from "mysql2/promise";
import serverConfig from "./server.config.js";

export let pool = "";

if (serverConfig.ENV === "PROD") {
  const dbURL = `mysql://${process.env.MYSQLUSER}:${process.env.MYSQL_ROOT_PASSWORD}@${process.env.MYSQLHOST}:3306/${process.env.MYSQL_DATABASE}`;

  pool = mysql.createPool(dbURL);
} else {
  pool = mysql.createPool({
    host: serverConfig.DB_HOST,
    user: serverConfig.DB_USER,
    password: serverConfig.DB_PWD,
    database: serverConfig.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    port: serverConfig.DB_PORT,
  });
}
