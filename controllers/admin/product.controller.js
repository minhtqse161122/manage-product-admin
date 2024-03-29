const Product = require("../../models/product.model");
const { objectTextSearch, capitalize } = require("../../utils/search-helper");
const { pagination } = require("../../utils/pagination-helper");

/**
 * Lấy ra list sản phẩm và filter
 * @method GET - /admin/products
 */
module.exports.index = async (req, res) => {
  try {
    let currentStatus;
    let sortByPosition = req.query.sortByPosition || "desc";
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
      .sort({ position: sortByPosition })
      .limit(objectPagination.limit)
      .skip(objectPagination.skip);

    res.render("admin/pages/product/index", {
      title: "List Products",
      products: data,
      currentStatus: currentStatus || "All",
      textSearch: objectSearch.textSearch,
      currentPage: objectPagination.currentPage,
      totalPage: objectPagination.totalPage,
      skipIndex: objectPagination.skip,
      textSortBy: sortByPosition,
    });
  } catch (error) {
    res.render("./admin/pages/not-found/index");
  }
};

/**
 * Thay đổi trạng thái của sản phẩm
 * @method PATCH - /admin/products/change-status/:status/:productId
 */
module.exports.changeStatus = async (req, res) => {
  try {
    const status = req.params.status;
    const productId = req.params.productId;

    const response = await Product.updateOne(
      { _id: productId },
      { status: status }
    );

    req.flash("success", "Product status have been changed.");
    res.redirect("back");
  } catch (error) {
    console.log(error);
  }
};

/**
 * Thay đổi trạng thái của nhiều sản phẩm
 * @method PATCH - /admin/products/change-multiple-status
 */
module.exports.changeMultiStatus = async (req, res) => {
  try {
    const ids = req.body.ids.split(",");
    const type = req.body.type;

    switch (type) {
      case "active":
        await Product.updateMany(
          {
            _id: { $in: ids },
          },
          {
            status: "active",
          }
        );
        break;

      case "inactive":
        await Product.updateMany(
          {
            _id: { $in: ids },
          },
          {
            status: "inactive",
          }
        );
        break;

      case "delete":
        await Product.updateMany(
          {
            _id: { $in: ids },
          },
          {
            deleted: true,
            deletedAt: new Date(),
          }
        );
        break;

      case "change-position":
        for (const item of ids) {
          const [productId, positionIndex] = item.split("-");
          await Product.updateOne(
            { _id: productId },
            { position: parseInt(positionIndex) }
          );
        }
        break;
      default:
        m;
        break;
    }
    req.flash("success", "Product position have been saved.");
    res.redirect("back");
  } catch (error) {}
};

/**
 * Xoá mềm - Thay đổi deleted = true
 * @method DELETE - /admin/products/delete-product/:productId
 */
module.exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    await Product.updateOne(
      { _id: productId },
      {
        deleted: true,
        deletedAt: new Date(),
      }
    );
    req.flash("success", "Product have been deleted.");
    res.redirect("back");
  } catch (error) {}
};
