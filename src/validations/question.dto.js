const Joi = require("joi");

const questionDto = Joi.object({
    question : Joi.string().trim().required().messages({
        "string.empty": `question can be an empty field`,
        "any.required": `question is a required field`,
    })
})

module.exports = questionDto