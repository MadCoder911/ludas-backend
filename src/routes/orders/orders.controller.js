const Orders = require("../../models/orders");
const postOrder = async (req, res, next) => {
  const newOrder = new Orders(req.body);
  try {
    const savedOrder = await newOrder.save();
    res.status(200).json({ message: "Order has been placed !" });
  } catch (error) {
    next(error);
  }
};
const getOrder = async (req, res, next) => {
  try {
    const orders = await Orders.find({});

    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};
const putOrder = async (req, res, next) => {};
const deleteOrder = async (req, res, next) => {};

module.exports = { postOrder, putOrder, getOrder, deleteOrder };
