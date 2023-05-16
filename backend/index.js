const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')

//Connect to MongoDB database
mongoose
  .connect("mongodb://127.0.0.1:27017/testdb",{ useNewUrlParser: true})
  .then(() => {
    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use('/api', routes)
    
    app.listen(5000, () => {
      console.log('Server started')
    })  
  })

