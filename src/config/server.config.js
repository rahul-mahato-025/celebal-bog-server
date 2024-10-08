import dotenv from "dotenv";
dotenv.config({});

export default {
  PORT: process.env.PORT || 3001,
  DB_USER: process.env.DB_USER,
  DB_PWD: process.env.DB_PWD,
  DB_NAME: process.env.DB_NAME,
  JWT_SECRET: process.env.JWT_SECRET,
  DB_PORT: process.env.DB_PORT,
  ENV: process.env.ENV,
};
