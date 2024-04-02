module.exports.createValidate = (req, res, next) => {
  const { title } = req.body;
  if (title.trim().length <= 0) {
    req.flash("error", "Title can not be empty");
    res.redirect("back");
    return;
  }

  next();
};
