const ErrorHandlerMiddleware = (error, request, response, next) => {
  console.log('Middleware Error Hadnling');
  const statusCode = error.statusCode || 500;
  const errorMessage = error.message || 'Something went wrong';
  response.status(statusCode).json({
    success: false,
    status: statusCode,
    message: errorMessage,
    stack: process.env.NODE_ENV === 'development' ? error.stack : {},
  });
};

module.exports = ErrorHandlerMiddleware;
