const PORT = 5000
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')



app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cookieParser())


app.listen(PORT, ()=>{
    console.log(`Server Listening on ${PORT}`)
})