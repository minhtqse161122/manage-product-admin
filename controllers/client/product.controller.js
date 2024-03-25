module.exports.index = async (req, res) => {
  try {
    res.render("client/pages/product/index", {
      title: "Products Page",
    });
  } catch (error) {}
};
