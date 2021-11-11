import express                     from 'express'
import {validate}                  from 'express-validation'
import {getMessage, createMessage} from '../../validation/message.validation'
import * as controller             from '../../controllers/message.controller'

const router = express.Router()

router.route('/')
    /**
     * @api {get} /api/v1/message Get all messages of specific recipient.
     * @apiName GetMessages
     * @apiGroup Message
     * @apiVersion 1.0.0
     * @apiPermission public
     * @apiDescription Get all messages
     * @apiParam {String} [recipient] Message recipient
     */
      .get(validate(getMessage), controller.getMessage)
      /**
       * @api {post} /api/v1/message Create a new message.
       * @apiName CreateMessage
       * @apiGroup Message
       * @apiVersion 1.0.0
       * @apiPermission public
       * @apiDescription Create a new message
       * @apiParam {String} [recipient] Message recipient
       * @apiParam {String} [message] Message content
       * @apiParam {String} [sender] Message sender
       */
      .post(validate(createMessage), controller.createMessage)


export default router
