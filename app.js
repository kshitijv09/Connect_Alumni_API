const express = require("express");
const app = express();

const cors = require("cors");

require("dotenv").config();
require("express-async-errors");

const authenticateUser = require("./middleware/authentication");

const authRouter = require("./routes/auth");
const postRouter=require("./routes/posts");
const userRouter=require("./routes/user");
const alumniRouter=require("./routes/alumni")
const alumniFundRouter=require("./routes/alumniFund")

// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

const port = process.env.PORT || 3000;

const helmet = require("helmet");
const rateLimiter = require("express-rate-limit");
const xss = require("xss-clean");

app.use(express.json());
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);
app.use(cors());
app.use(helmet());
app.use(xss());

app.use("/auth", authRouter);
app.use("/post",postRouter);
app.use("/user",  userRouter);
app.use("/alumni",  alumniRouter);
app.use("/alumniFund",  alumniFundRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = () => {
  try {
    app.listen(port, console.log(`Server is running on port ${port}`));
  } catch (error) {
    console.log("Error is ",error);
  }
};

start();
