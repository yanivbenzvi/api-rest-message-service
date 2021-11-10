import {Joi} from 'express-validation'

export const createMessage = {
    body: {
        message:   Joi.string().min(10).max(200).required(),
        recipient: Joi.string().required(),
        sender:    Joi.string().required(),
    },
}

export const getMessage = {
    params: Joi.object({
        recipient: Joi.string().required(),
    }),
}

