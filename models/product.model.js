const mongoose = require("mongoose");

// Tạo Schema cho Product Model
const productSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    stock: Number,
    thumbnail: String,
    status: String,
    position: Number,
    deleted: Boolean,
    deletedAt: Date,
  },
  { timestamps: true }
);

//Tạo Model từ Product Schema
const Product = mongoose.model("Product", productSchema, "products");

module.exports = Product;
