const Product = require("../../models/product.model");
const { objectTextSearch, capitalize } = require("../../utils/search-helper");
const { pagination } = require("../../utils/pagination-helper");

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

    let objectPagination = pagination(req.query, { limit: 5, skip: 0 });

    if (req.query.status) {
      queryString.status = req.query.status;
      currentStatus = capitalize(req.query.status);
    }

    if (objectSearch.title) {
      queryString.title = objectSearch.title;
    }

    // count of total document of collection
    const countData = await Product.countDocuments(queryString);
    const totalPage = Math.ceil(countData / objectPagination.limit);
    objectPagination.totalPage = totalPage;

    // query data from Database
    const data = await Product.find(queryString)
      .limit(objectPagination.limit)
      .skip(objectPagination.skip);

    res.render("./admin/pages/product/index", {
      title: "List Products",
      products: data,
      currentStatus: currentStatus || "All",
      textSearch: objectSearch.textSearch,
      currentPage: objectPagination.currentPage,
      totalPage: objectPagination.totalPage,
      skipIndex: objectPagination.skip,
    });
  } catch (error) {
    res.render("./admin/pages/not-found/index");
  }
};
