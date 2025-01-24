import { logger } from "../application/logger.js"
import contactService from "../service/contact-service.js"


const contact = async (req, res, next) => {
    try {
        const result = await contactService.contact(req.body)
        res.
        status(200)
        .json({
            data: result
        })
    } catch (e) {
        next(e)
    }    
}

export default {contact}