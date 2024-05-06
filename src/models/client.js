const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");

const clientSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        max: 255,
        min: 6,
    },
    lastName: {
        type: String,
        required: true,
        max: 255,
        min: 6,
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    message: {
        type: String,
        required: false,
        max: 255,
        min: 6
    }
})

const Client = mongoose.model('client', clientSchema);
module.exports = Client;