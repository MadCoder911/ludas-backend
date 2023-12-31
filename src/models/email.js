const mongoose = require("mongoose");
const { Schema } = mongoose;
const EmailSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Email", EmailSchema);
