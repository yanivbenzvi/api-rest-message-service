import express    from 'express'
import router     from '../api/routes/v1'


// Create express app
const app = express()

app.use("/v1", router)



export default app
