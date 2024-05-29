const error_middleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "BACKED ERROR";
  const extraDetails = err.extraDetails || "Error from backed";

  return res.status(status).json({ message, extraDetails });
};

module.exports = error_middleware;
