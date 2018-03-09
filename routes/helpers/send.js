module.exports = (res, code, payload) => {
  res.status(code).json(payload);
};
