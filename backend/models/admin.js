const mongose = require("mongoose");
const adminSchema = new mongose.Schema(
  {
    username: {
      type: String,
      default: "",
      unique: true,
      trim: true,
      min: 5,
      max: 20,
    },
    password: {
      type: String,
      default: "",
      trim: true,
      min: 5,
      max: 20,
    },
    mail: {
      type: String,
      default: "",
      unique: true,
      trim: true,
      min: 5,
      max: 20,
    },
  },
  { timestamps: true }
);

const adminModel = mongose.model("admins", adminSchema);
module.exports = adminModel;
