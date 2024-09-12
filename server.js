import express from "express";
import serverConfig from "./src/config/server.config.js";
import apiRouter from "./src/routes/index.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
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
