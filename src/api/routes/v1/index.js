import express       from 'express'
import messageRouter from './message.route'
const router = express.Router()

router.get("/", (req,res) =>{
    res.send("Welcome Page!")
})

router.use("/message", messageRouter)

export default router
