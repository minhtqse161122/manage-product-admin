const Product = require("../../models/product.model");

/**
 * @method GET - /admin/products
 *
 */
module.exports.index = async (req, res) => {
  try {
    let queryString = {
      deleted: false,
    };

    const data = await Product.find(queryString);

    res.render("./admin/pages/product/index", {
      title: "List Products",
      products: data,
    });
  } catch (error) {
    res.render("./admin/pages/not-found/index");
  }
};
