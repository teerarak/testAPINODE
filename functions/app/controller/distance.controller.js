const express = require('express')
const distanceController = express.Router()
const distanceService = require('../service/distance.service')

var firebase = require('firebase')

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCQ1E-pG7BCAGrfYOUsR1OPtiIJgKmYxtg",
  authDomain: "maphomework-1492870415908.firebaseapp.com",
  databaseURL: "https://maphomework-1492870415908.firebaseio.com",
  projectId: "maphomework-1492870415908",
  storageBucket: "maphomework-1492870415908.appspot.com",
  messagingSenderId: "41030793868"
}
firebase.initializeApp(config)
var database = firebase.database()
let amphur = []
database.ref('tambon').once('value').then(snapshot => {
    amphur = snapshot.val()
})

// define the home page route
distanceController.get('/', function (request, response) {
  response.send('Birds home page')
})
// define the about route
distanceController.get('/about', function (request, response) {
  response.send('About birds')
})
distanceController.post('/', (request, response) =>{
  let firstAmphur = amphur.find( element => {
      return element.district == request.body.firstAmphur
  })
  let secondAmphur = amphur.find( element => {
      return element.district == request.body.secondAmphur
  })
  let eiei = distanceService.calDistance(firstAmphur.lat,firstAmphur.lng,secondAmphur.lat,secondAmphur.lng)
  let data = {
    distance: eiei
  }
  response.send(data)
  response.end("yes")
})

distanceController.post('/test', (request, response) => {
  response.send(request.body)
})

module.exports = distanceController
