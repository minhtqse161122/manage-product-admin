const express = require("express");
const router = express.Router();

const productTrashController = require("../../controllers/admin/product-trash.controller");

router.get("/", productTrashController.index);

router.patch(
  "/recovery-product/:productId",
  productTrashController.recoveryProduct
);

router.delete(
  "/delete-permanently-product/:productId",
  productTrashController.permanentlyDeletedProduct
);

module.exports = router;
