const mongose = require("mongoose");
const itemSchema = new mongose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      min: 5,
      max: 20,
      default: "guest",
    },
    description: {
      type: String,
      default: "",
      trim: true,
      min: 5,
      max: 20,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const itemModel = mongose.model("items", itemSchema);
module.exports = itemModel;
