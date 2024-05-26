const validateRequest = (schema, property = "body") => {
    return (request, response, next) => {
      let validation = schema.validate(request[property], { allowUnknown: true });
      
      if (validation.error) {
        const error = validation.error.details.map((e) => e.message);
        return response.status(400).json({error})
      }
      request.validData = validation.value;
      
      next();
    };
  };
  
  module.exports = validateRequest;