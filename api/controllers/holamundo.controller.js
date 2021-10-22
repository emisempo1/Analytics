var path = require('path');
var fs = require('fs'); 
const SensorRead = require(path.join(__dirname, '../../Persistance/models/SensorRead'));
const Publish = require(path.join(__dirname, '../../publish'));


exports.generarTokenHolaMundo = async (req, res) => {
    return res.status(200).send({
    status :'sucess',
    message : 'Generando Tokens'
    });
}

exports.publishMeasurements = async (req, res) => {
    var keys = Object.keys(req.body);

    const inicio = new Date(req.body.inicio);
    const fin = new Date(req.body.FechaFin);

    await SensorRead.find({created: {$gte: inicio, $lt: fin}})
    .then((resp) => {
      console.log(resp);
      return res.status(200).json({
        ok: true,
        resp
      });
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).json({
        ok: false,
        error
      });
    })
    
}

