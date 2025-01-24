import { logger } from "../application/logger.js"
import { ResponseError } from "../Error/ResponseError.js"
logger

const validate = (schema, request) => {
    const result = schema.validate(request, {
        abortEarly: false,
        allowUnknown: false
    })

    if(result.error) {
        logger.error(`error details ${JSON.stringify(result.error.details)}`)
        throw new ResponseError(400, result.error.message)
    } else {
        return result.value
    }
}

export {validate}