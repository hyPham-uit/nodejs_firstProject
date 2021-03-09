const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete'); //thư viện delete của mongoose
const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, maxLength: 255, required: true },
        description: { type: String, maxLength: 600 },
        thumbnail: { type: String, maxLength: 255 },
        videoId: { type: String, maxLength: 255, required: true },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true, // hỗ trợ tạo ra thời gian tạo và thời gian update model
    },
);

//add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
}); //override lại các phương thức

module.exports = mongoose.model('Course', Course);
