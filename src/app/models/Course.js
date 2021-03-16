const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator'); //use to generator code slug when name of object is the same
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

const Course = new Schema( //create schema for document Course
    {
        name: { type: String, maxLength: 255, required: true },
        description: { type: String, maxLength: 600 },
        thumbnail: { type: String, maxLength: 255 },
        videoId: { type: String, maxLength: 255, required: true },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true, //create and set attribute timeCreate and timeUpdate in document
    },
);

//add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
}); //override lại các phương thức

module.exports = mongoose.model('Course', Course);
