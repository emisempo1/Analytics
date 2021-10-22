var express = require('express');
const router = express.Router();

const holamundo_controller = require
('../controllers/holamundo.controller');


module.exports = function(){  
    router.post('/mediciones', holamundo_controller.publishMeasurements);
    return router;
}