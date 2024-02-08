const express = require("express");
const { putOrder, getOrder, postOrder } = require("./orders.controller");
const { verifyUser, verifyAdmin } = require("../../utils/verifyToken");
const ordersRouter = express.Router();

ordersRouter.post("/orders", postOrder);
ordersRouter.get("/orders", verifyAdmin, getOrder);
ordersRouter.put("/orders", verifyAdmin, putOrder);
ordersRouter.delete("orders");

module.exports = ordersRouter;
