import express                     from 'express'
import {validate}                  from 'express-validation'
import {getMessage, createMessage} from '../../validation/message.validation'

const router = express.Router()

router.route('/')
      .get(validate(getMessage), (req, res) => {


          res.send('not build yet :(')
      })
    .post(validate(createMessage), (req, res) => {

          res.send('not build yet :(')
    })


export default router
