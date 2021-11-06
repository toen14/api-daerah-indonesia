const CustomError = require('../errors/custom-error');

module.exports = function errorHandler (err, res, res, next) {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json(err.formatError())
  }

  if (process.env.NODE_ENV != 'production') {
    console.log(err.stack);
    return res.send(err.stack);
  }

  res.status(400).send({
    errors: {
      statusCode: 400,
      message: 'Something went wrong' 
    }
  });
}