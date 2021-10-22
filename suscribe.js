const redis = require("redis");
const SensorRead = require('./Persistance/models/SensorRead');


require('./Persistance/connection');

const subscriber = redis.createClient();

function receiveReads(){

subscriber.subscribe("a channel");

subscriber.on("message", function(channel, message) {
    console.log("Subscriber received message in channel '" + channel + "': " + message);
  });
  
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


}


module.exports = {
    receiveReads
}
    



