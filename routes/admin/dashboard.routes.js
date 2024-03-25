const express = require("express");
const router = express.Router();

const dashboardController = require("../../controllers/admin/dashboard.controllers");

router.get("/", dashboardController.dashboard);

module.exports = router;
