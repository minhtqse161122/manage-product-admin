const express = require("express");
const router = express.Router();
const productController = require("../../controllers/admin/product.controller");

router.get("/", productController.index);

router.patch(
  "/change-status/:status/:productId",
  productController.changeStatus
);

module.exports = router;
