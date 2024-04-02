module.exports.createProduct = (req, res, next) => {
  if (!req.body.title) {
    req.flash("error", "Please do not let title blank");
    res.redirect("back");
    return;
  }
  if (req.body.title.length < 8) {
    req.flash("error", "Please input more than 8 symbols");
    res.redirect("back");
    return;
  }

  next();
};
