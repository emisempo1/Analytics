var path = require('path');
var fs = require('fs'); 

exports.generarTokenHolaMundo = async (req, res) => {
 
    return res.status(200).send({
    status :'sucess',
    message : 'Generando Tokens'
    });


}

exports.multiplicarTokenHolaMundo = async (req, res) => {
    
    var keys = Object.keys(req.body);
    console.log(keys[0] + '   ' + req.body.lindo * 10);
    
    return res.status(200).send({
    status :'sucess',
    message : 'multiplicando token'
    });


}