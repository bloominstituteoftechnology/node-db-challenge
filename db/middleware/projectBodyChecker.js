function projectBodyChecker(req, res, next) {
  console.log(req.body.completed)
  if (req.body.completed === undefined) {
    res.status(406).json({
      error:
        "The completed column is required, yet missing therefore your request is not acceptable"
    });
  }
  if (!req.body.name) {
    res.status(406).json({
      error:
        "The name column is required, yet missing therefore your request is not acceptable"
    });
  }
  next();
}

module.exports = projectBodyChecker;
