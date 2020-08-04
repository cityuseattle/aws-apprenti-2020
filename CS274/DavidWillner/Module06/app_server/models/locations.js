const mongoose = require('mongoose');

const openingTimesSchema = new mongoose.Schema({  //beginning bracket 1
days:{
    type:String,
    required: true  
},
opening: String,
closing: String,
closed: {
    type: Boolean,
    required: true
}
}); //end bracket 1

const reviewSchema = new mongoose.Schema({ //beginning bracket 2
author: String,
rating:{
    type: Number,
    requried: true,
    min: 0,
    max: 5
},
reviewText: String,
createdOn:{
    type: Date,
    'default': Date.now
}
}); //ending bracket 2

const locationSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    address: String,
    rating: {
        type: Number,
        'default': 0,
        min: 1,
        max: 5
    },
 facilities: [String],
 coords: {
     type:{type:String},
     index:[Number]
 },
 openingTimes:[openingTimesSchema],
 reviews:[reviewSchema]
});

locationSchema.index({coords:'2dsphere'});

mongoose.model('Location', locationSchema);