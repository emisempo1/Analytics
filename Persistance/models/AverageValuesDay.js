const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    ESN: {
        type: String,
        required: true
    },
    Property: {
        type: String,
        required: true
    },
    AverageValue: {
        type: Number,
        required: true
    },
    Day:{
        type: Number,
        required: true
    },
    Month:{
        type: Number,
        required: true
    },
    Age:{
        type: Number,
        required: true
    },   
});

userSchema.index({ESN:1,Property:1, Day:1, Month: 1, Age: 1}, { unique: true });

module.exports = new model('SensorRead', AverageValueDay);