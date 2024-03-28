const express = require("express");
const router = express.Router();
const productController = require("../../controllers/admin/product.controller");

router.get("/", productController.index);

router.patch(
  "/change-status/:status/:productId",
  productController.changeStatus
);

router.patch("/change-multiple-status", productController.changeMultiStatus);

router.delete("/delete-product/:productId", productController.deleteProduct);

module.exports = router;
