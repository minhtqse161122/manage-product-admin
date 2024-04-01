const express = require("express");
const multer = require("multer");
const router = express.Router();

const storageMulter = require("../../utils/storageMulter");
const productController = require("../../controllers/admin/product.controller");
const validate = require("../../validates/admin/product.validates");
const upload = multer({ storage: storageMulter() });

/**
 * @method GET
 */
router.get("/", productController.index);

// [GET] - Return Create Product Page
router.get("/create", productController.create);

// [POST]
router.post(
  "/create",
  upload.single("thumbnail"),
  validate.createProduct,
  productController.createProduct
);

// [PATCH] - Update status of product
router.patch(
  "/change-status/:status/:productId",
  productController.changeStatus
);

// [PATCH] - Update status for multiple products
router.patch("/change-multiple-status", productController.changeMultiStatus);

// [DELETE] - Update delete field
router.delete("/delete-product/:productId", productController.deleteProduct);

module.exports = router;
