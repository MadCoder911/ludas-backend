const mongoose = require("mongoose");
const { Schema } = mongoose;
const MessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String | Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  contacted: {
    type: boolean,
    default: false,
  },
});
module.exports = mongoose.model("Message", MessageSchema);
