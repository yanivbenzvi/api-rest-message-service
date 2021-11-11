import {CREATED, OK} from 'http-status'
import MessageModel  from '../models/message.model'
import {next}        from 'lodash/seq'

/**
 * @description Controller for get all messages of a specific recipient
 * @param req
 * @param res
 * @param next
 */
export const getMessage = (req, res, next) => {
    try{
        const messages = MessageModel.findAll(item => item["rec"] === req.params.recipient)

        res.status(OK).json({
            messages
        })
    } catch(err){
        res.status(OK).json({
            messages: []
        })
    }
    res.status(OK).json()
}

/**
 * @description Controller for create a new message
 * @param req
 * @param res
 * @param next
 */
export const createMessage = (req, res, next) => {
    try {
        const message = new MessageModel(req.body)

        message.save()
        res.status(CREATED).json({
            message: message,
        })
    } catch (err) {
        next(err)
    }
}
