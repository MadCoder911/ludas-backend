const express = require("express");
const productsRouter = require("./routes/products/products.router");
const cors = require("cors");
const emailRouter = require("./routes/email/email.router");
const messagesRouter = require("./routes/message/message.router");
const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000", "https://ludas-icecream.vercel.app"],

    credentials: true, //i
  })
);
app.use(express.json());
app.use(emailRouter);
app.use(productsRouter);
app.use(messagesRouter);

module.exports = app;
