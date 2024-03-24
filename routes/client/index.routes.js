/**
 * Định nghĩa các route cho các trang của client.
 * @description Base url: http://localhost:3000/
 * @param {Object} app - Ứng dụng Express.
 */

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.render("client/pages/home/index");
  });

  app.get("/products", (req, res) => {
    res.render("client/pages/product/index");
  });
};
