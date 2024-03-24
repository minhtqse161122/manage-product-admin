const express = require("express");
const router = express.Router();

const homeController = require("../../controllers/client/home.controllers");

router.get("/", homeController.index);

module.exports = router;
