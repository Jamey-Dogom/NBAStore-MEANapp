const mongoose = require('mongoose');

const JerseySchema = new mongoose.Schema({
    title: { type: String, required: [true, "your product must have a title"], minlength: [4, "title must be at least four letters"] ,unique: true},
    image: { type: String, unique: true},
    price: {type : Number, required: true, min : [1, "minimum of 1 dollar for all products"]},
}, {timestamps : true});
// create an object to that contains methods for mongoose to interface with MongoDB
const Jersey = mongoose.model('Jersey', JerseySchema);