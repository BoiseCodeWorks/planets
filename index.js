var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var sessions = require('./authentication/sessions')
var authRoutes = require('./authentication/auth-routes')
var galaxyRoutes = require('./routes/galaxy-routes')
var starRoutes = require('./routes/star-routes')
var server = express();
var port = 3000;


//MIDDLEWARE
server.use(express.static(__dirname + "/public"))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended:true}))
server.use(sessions)

server.use('/', authRoutes)

server.use('/api/galaxies', galaxyRoutes)
server.use('/api/stars', starRoutes)

server.listen(port, ()=>{
  console.log("starting up Node, on port 3000")
})

var dbConnect = require("./config/db/mlab-config");
