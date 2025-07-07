const Order = require("../models/Order");
const Cart = require("../models/Cart");

exports.createOrder = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id }).populate(
      "items.product"
    );
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const total = cart.items.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );

    const newOrder = await Order.create({
      user: req.user.id,
      items: cart.items,
      total,
    });

    // Clear the cart after order is placed
    cart.items = [];
    await cart.save();

    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate(
      "items.product"
    );
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
