module.exports = class CustomError extends Error {
  statusCode;
  message;

  constructor(statusCode, message){
    super();
    
    this.statusCode = statusCode;
    this.message = message
  }

  formatError(){
    return {
      error: {
        statusCode: this.statusCode,
        message: this.message,
      }
    }
  }
}