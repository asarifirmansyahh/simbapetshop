import { prismaClient } from "../application/database.js"
import { contactValidation } from "../validation/contact_validation.js"
import { validate } from "../validation/validation.js"


const contact = async (request) => {
    const user = validate(contactValidation, request)

    return prismaClient.contact.create({
        data: user,
        select: {
            name: true,
            email: true
        }
    })  
}

export default {contact}