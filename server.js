import express from "express";
import serverConfig from "./src/config/server.config.js";
import apiRouter from "./src/routes/index.js";

const app = express();

app.use(express.json());
app.use("/api", apiRouter);

app.use((error, req, res, next) => {
  return res.status(500).json({
    data: {},
    success: false,
    error: error.message,
  });
});

app.listen(serverConfig.PORT, async () => {
  console.log(`Server started at Port ${serverConfig.PORT}`);
});
