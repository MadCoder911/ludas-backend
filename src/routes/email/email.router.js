const express = require("express");
const emailRouter = express.Router();
const { postEmail, getEmails } = require("./email.controller");
//Get All Products
emailRouter.get("/subscription", getEmails);
//Post Product
emailRouter.post("/subscription", postEmail);
module.exports = emailRouter;
