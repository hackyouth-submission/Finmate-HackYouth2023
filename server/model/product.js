const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    description: {
        type: String,
        required: true,
    },
    like: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        required: true
    },
    images: {
        type: Array
    },
    closedAt: {
        type: Date,
        require: true
    }
}, {
    timestamps: true
});

//Export the model
module.exports = mongoose.model('Product', productSchema);