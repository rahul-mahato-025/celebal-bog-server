import mysql from "mysql2/promise";
import serverConfig from "./server.config.js";

export let pool = "";

if (serverConfig.ENV === "PROD") {
  const dbURL = `mysql://${MYSQLUSER}:${MYSQL_ROOT_PASSWORD}@${RAILWAY_PRIVATE_DOMAIN}:3306/${MYSQL_DATABASE}`;

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
