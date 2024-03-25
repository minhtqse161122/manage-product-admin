//Các route con của đường dẫn có tiền tố là [/admin/dashboard]
const dashboardRoutes = require("./dashboard.routes");
const productRoutes = require("./product.routes");

const systemConfig = require("../../config/system");

/**
 * Định nghĩa các route cho các trang của admin.
 * @description Base url: http://localhost:3000/admin
 * @param {Object} app - Ứng dụng Express.
 */

module.exports = (app) => {
  const PATH_ADMIN = systemConfig.prefixAdmin;

  app.use(PATH_ADMIN + "/dashboard", dashboardRoutes);

  app.use(PATH_ADMIN + "/products", productRoutes);
};
