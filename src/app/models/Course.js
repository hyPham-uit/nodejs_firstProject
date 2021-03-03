const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    thumbnail: { type: String, maxLength: 255 },
    createTime: { type: Date, default: Date.now },
    updateTime: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);
