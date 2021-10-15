var express = require('express');
const router = express.Router();

const holamundo_controller = require
('../controllers/holamundo.controller');


module.exports = function(){  
    router.get('/holamundotoken', holamundo_controller.generarTokenHolaMundo);
    return router;
}

module.exports = function(){  
    router.post('/holamundotoken', holamundo_controller.multiplicarTokenHolaMundo);
    return router;
}