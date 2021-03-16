const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class CourseController {
    //[GET] /user/stored/course
    storedCourse(req, res, next) {
        let courseQuery = Course.find({});
        res.json(res.locals._sort);
        Promise.all([courseQuery, Course.countDocumentsDeleted()]) //hàm find ở đây là của mongoose-delete vì đã được override trong model Course
            .then(([courses, deletedCount]) => {
                res.render('user/storedCourse', {
                    deletedCount,
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    //GET /user/stored/post
    storedPost(req, res, next) {
        res.render('user/storedPost');
    }

    //GET /user/trash/course
    trashCourse(req, res, next) {
        Course.findDeleted({})
            .then((courses) => {
                res.render('user/trashCourse', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
}

module.exports = new CourseController();
