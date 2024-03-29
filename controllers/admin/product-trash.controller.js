const Product = require("../../models/product.model");

/**
 * Lấy ra các product đã bị xoá
 * @method GET
 */
module.exports.index = async (req, res) => {
  try {
    let queryString = {
      deleted: true,
    };

    const data = await Product.find(queryString);

    res.render("./admin/pages/product-trash/index", {
      title: "Garbage",
      products: data,
    });
  } catch (error) {}
};

/**
 * Khôi phục sản phẩm
 * @method PATCH
 */
module.exports.recoveryProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    await Product.updateOne(
      {
        _id: productId,
      },
      {
        deleted: false,
      }
    );
    res.redirect("back");
  } catch (error) {
    console.log(error);
  }
};

module.exports.recoveryAllProduct = async (req, res) => {
  try {
    const ids = req.body.list_ids.split(",");
    await Product.updateMany(
      {
        _id: { $in: ids },
      },
      {
        deleted: false,
      }
    );
    res.redirect("back");
  } catch (error) {}
};

/**
 * Xoá hẳn sản phẩm
 * @method DELETE
 */
module.exports.permanentlyDeletedProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    await Product.deleteOne({
      _id: productId,
    });
    res.redirect("back");
  } catch (error) {
    console.log(error);
  }
};
