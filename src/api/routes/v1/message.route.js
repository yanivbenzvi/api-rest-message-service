import express                     from 'express'
import {validate}                  from 'express-validation'
import {getMessage, createMessage} from '../../validation/message.validation'
import * as controller             from '../../controllers/message.controller'

const router = express.Router()

router.route('/')
    /**
     * @api {get} /api/v1/message Get all messages of specific recipient.
     * @apiName GetMessages
     * @apiGroup MessageModel
     * @apiVersion 1.0.0
     * @apiPermission public
     * @apiDescription Get all messages
     * @apiParam {String} [recipient] MessageModel recipient
     */
      .get(validate(getMessage), controller.getMessage)
      /**
       * @api {post} /api/v1/message Create a new message.
       * @apiName CreateMessage
       * @apiGroup MessageModel
       * @apiVersion 1.0.0
       * @apiPermission public
       * @apiDescription Create a new message
       * @apiParam {String} [recipient] MessageModel recipient
       * @apiParam {String} [message] MessageModel content
       * @apiParam {String} [sender] MessageModel sender
       */
      .post(validate(createMessage), controller.createMessage)


export default router
