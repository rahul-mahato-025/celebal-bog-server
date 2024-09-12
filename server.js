import express from "express";
import serverConfig from "./src/config/server.config.js";
import apiRouter from "./src/routes/index.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://celebal-blog-client.vercel.app/",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use("/api", apiRouter);
app.get("/ping", (req, res) => {
  return res.send("Server is up");
});

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
