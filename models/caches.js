const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CacheSchema = new Schema({
    cached_key: {
        type: String,
        required: true
    },
    random_string: {
        type: String,
        required: true,
    },
    expiry_time: {
        type : Date, 
        default: Date.now,
        
    },
    offset:{

    },
    count:{
        type:Number
    },
    updated_on:{
        type : Date, 
        default: Date.now
    }
});




module.exports = mongoose.model('Cache', CacheSchema);