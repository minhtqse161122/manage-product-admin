//Các route con của đường dẫn có tiền tố là [/products]
const productRoutes = require("./product.routes");

//Các route con của đường dẫn có tiền tố là [/]
const homeRoutes = require("./home.routes");

/**
 * Định nghĩa các route cho các trang của client.
 * @description Base url: http://localhost:3000/
 * @param {Object} app - Ứng dụng Express.
 */
module.exports = (app) => {
  app.use("/", homeRoutes);

  app.use("/products", productRoutes);
};
