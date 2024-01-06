const express = require("express");
const productsRouter = require("./routes/products/products.router");
const cors = require("cors");
const emailRouter = require("./routes/email/email.router");
const messagesRouter = require("./routes/message/message.router");
const authRouter = require("./routes/auth/auth.router");
const cookieParser = require("cookie-parser");
const app = express();
app.use(
  cors({
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "X-Access-Token",
      "Authorization",
    ],
    origin: ["http://localhost:3000", "https://ludas-icecream.vercel.app"],
    credentials: true, //i
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(emailRouter);
app.use(productsRouter);
app.use(messagesRouter);
app.use(authRouter);
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong !";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

module.exports = app;
