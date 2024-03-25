const Product = require("../../models/product.model");
const { capitalize } = require("../../utils/helper");
/**
 * @method GET - /admin/products
 *
 */
module.exports.index = async (req, res) => {
  try {
    let currentStatus;
    let queryString = {
      deleted: false,
    };

    if (req.query.status) {
      if (req.query.status !== "all") {
        queryString.status = req.query.status;
        currentStatus = capitalize(req.query.status);
      }
    }

    const data = await Product.find(queryString);

    res.render("./admin/pages/product/index", {
      title: "List Products",
      products: data,
      currentStatus: currentStatus || "All",
    });
  } catch (error) {
    res.render("./admin/pages/not-found/index");
  }
};
