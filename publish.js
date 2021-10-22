const redis = require("redis");
const SensorRead = require('./Persistance/models/SensorRead');


require('./Persistance/connection');

const publisher = redis.createClient();

function publicarCada5Segundos(){
setInterval(() => {
const sensor = new SensorRead({
    ESN: Math.trunc(Math.random() * (50000 - 1) + 1),
    Value: Math.trunc(Math.random() * (25 - 16) + 16),
    Property: 'Temperature',
    Date: Date.now()
});
sensor.save((err, document) => {
    if (err) console.log(err);
    console.log('saved:', document);
}); 
publisher.publish("a channel", JSON.stringify(sensor));
}, 5000);
}


function publicar(sensor){
    publisher.publish("a channel", JSON.stringify(sensor));
}


module.exports = {
    publicarCada5Segundos,
    publicar
}
    



