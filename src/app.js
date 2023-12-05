const express = require("express");
const productsRouter = require("./routes/products/products.router");
const cors = require("cors");
// app.use(
//     cors({
//       origin: [
//         "http://localhost:3000",
//         "https://booking-mern.vercel.app/",
//         "https://booking-mern.vercel.app",
//         "http://localhost:3001",
//       ],

//       credentials: true, //i
//     })
//   );
const app = express();
app.use(express.json());
app.use(productsRouter);

module.exports = app;
