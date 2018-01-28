const functions = require('firebase-functions')
const express = require('express')
const app = express()
const router = express.Router()
const controller = require('./app/controller/distance.controller')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use('/api', controller)
app.get('/', function (req, res) {
    res.send('Birds home page')
  })
app.listen(3000, () =>
  console.log('Example app listening on port 3000!')
)

exports.helloWorld = functions.https.onRequest((request, response) => {

    response.send(request.body)
})

exports.eiei = functions.https.onRequest(app)


