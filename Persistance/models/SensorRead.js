const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    ESN: {
        type: String,
        unique: true,
        required: true
    },
    Property: String,
    Value: Number,
    Date: {
        type: Date,
        default: new Date()
    }
});

module.exports = new model('SensorRead', userSchema);