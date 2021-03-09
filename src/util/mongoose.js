module.exports = {
    multipleMongooseToObject: function (mongoose) {
        return mongoose.map((object) => object.toObject());
    },
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
