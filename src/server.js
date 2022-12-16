import express from "express"
import signale from "signale"
import bodyParser from "body-parser"
import {router} from "./routes/route.1.js"

const port = 3000
const app = express()




app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', router)


  app.listen( port, ()=>{
    signale.success(`Server listen on port ${port}`)
  })


