import express from "express";
import dotenv from "dotenv";
import serverConfig from "./src/config/server.config.js";

dotenv.config({});

const app = express();

app.listen(serverConfig.PORT, async () => {
  console.log(`Server started at Port ${serverConfig.PORT}`);
});
