const mongoose = require("mongoose");
const CartSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  size: {
    type: String,
  },
  price: {
    type: Number,
  },
  images: {
    type: String,
  },
});
const Cart = mongoose.model("CartSchema", CartSchema);
module.export = Cart;
