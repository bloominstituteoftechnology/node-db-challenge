module.exports = (res, code = 200, payload) => {
  res.status(code).json(payload);
};
