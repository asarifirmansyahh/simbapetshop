import Joi from "joi"

const contactValidation = Joi.object({
    name: Joi.string().max(100).required(),
    email: Joi.string().max(225).email({minDomainSegments: 1, tlds: {allow: ['com']}}).required(),
    message: Joi.string().min(3).required()
})

export {contactValidation}