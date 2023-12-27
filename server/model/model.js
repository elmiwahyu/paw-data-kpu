var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: String,
    status: String,
    
    
    ttl: String,
    nik: String,
    alamat: String
});

var User = mongoose.model('User', schema);

module.exports = User;
