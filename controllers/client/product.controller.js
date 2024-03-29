const Product = require("../../models/product.model");

/**
 * @method GET - /products
 */
module.exports.index = async (req, res) => {
  try {
    const data = await Product.find({
      status: "active",
      deleted: false,
    }).sort({ position: "desc" });

    // Add key [newPrice]
    const data_v2 = data.map((item) => {
      item.newPrice = Math.round(
        item.price - item.price * (item.discountPercentage * (1 / 100))
      );

      return item;
    });
    // End add key [newPrice]

    res.render("client/pages/product/index", {
      title: "Products Page",
      products: data_v2,
    });
  } catch (error) {
    res.render("client/pages/not-found/index");
  }
};
