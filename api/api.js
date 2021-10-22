var express = require('express');
var routes = require('./routes');
var path = require('path');
var app = express();

function ejecutarServidor(){
  
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
  });


app.use('/api/', routes());

app.listen(3000);
}

module.exports = {
ejecutarServidor
}
