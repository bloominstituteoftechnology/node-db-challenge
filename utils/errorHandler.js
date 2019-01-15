const errorHandler = (res, code, message, error) => {
    return res.status(code).json({ message, error });
  };