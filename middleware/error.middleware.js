// middleware/error.middleware.js
const { StatusCodes } = require("http-status-codes");

const errorMiddleware = (err, req, res, next) => {
    console.error(err.stack);
    const statusCode = err.status || StatusCodes.INTERNAL_SERVER_ERROR;
    const errorMessage = err.message || "Internal Server Error";

    res.status(statusCode).json({
       success: false,
       message: errorMessage,
       errorMessages: [
          {
             path: req.originalUrl,
             message: errorMessage,
          },
       ],
    });
 };

module.exports = errorMiddleware;
