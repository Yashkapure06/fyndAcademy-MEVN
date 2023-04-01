const mongoose = require('mongoose');

const cricketSchema = new mongoose.Schema({
    ranking:{
        type: Number,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true,
        trim:true
    },
    runs:{
        type: Number,
        required: true
    },
    balls:{
        type: Number,
        required: true
    },
    fours:{
        type: Number,
        required: true
    },
    sixes:{
        type: Number,
        required: true
    },
    sr:{
        type: Number,
        required: true
    },
    team:{
        type: String,
        required: true
    },
    opposition:{
        type: String,
        required: true
    },
    matchDate:{
        type: Date,
        required: true
    }
})

const mensRanking =  new mongoose.model('mensRanking', cricketSchema);

module.exports = mensRanking;