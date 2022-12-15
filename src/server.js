import express from "express"
import signale from "signale"
// import database from "./database/index.js"
import bodyParser from "body-parser"


const port = 3000
const app = express()


import routes from './routes'

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', routes)


  app.listen( port, ()=>{
    signale.success(`Server listen on port ${port}`)
  })


