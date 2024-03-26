const Product = require("../../models/product.model");
const { objectTextSearch, capitalize } = require("../../utils/search-helper");
const { objectStatusFilter } = require("../../utils/helper");

/**
 * @method GET - /admin/products
 */

module.exports.index = async (req, res) => {
  try {
    let currentStatus;

    let queryString = {
      deleted: false,
    };

    const objectSearch = objectTextSearch(req.query);

    if (req.query.status) {
      queryString.status = req.query.status;
      currentStatus = capitalize(req.query.status);
    }

    if (objectSearch.title) {
      queryString.title = objectSearch.title;
    }

    // query data from Database
    const data = await Product.find(queryString);

    res.render("./admin/pages/product/index", {
      title: "List Products",
      products: data,
      currentStatus: currentStatus || "All",
      textSearch: objectSearch.textSearch,
    });
  } catch (error) {
    res.render("./admin/pages/not-found/index");
  }
};
