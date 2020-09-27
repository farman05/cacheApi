const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CacheSchema = new Schema({
    key: {
        type: String,
        required: true
    },
    random_string: {
        type: String,
        required: true,
    },
    expiry_time: {
        type : Date, 
        default: Date.now
    },
    updated_on:{
        type : Date, 
        default: Date.now
    }
});




module.exports = mongoose.model('Cache', CacheSchema);