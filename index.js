const express = require('express')
const app = express()
const router = express.Router()
const controller = require('./app/controller/distance.controller')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use('/api', controller)

app.listen(3000, () =>
  console.log('Example app listening on port 3000!')
)
