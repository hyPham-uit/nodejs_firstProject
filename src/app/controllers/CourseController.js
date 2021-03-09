const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
    //[GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) =>
                res.render('courses/show', {
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }

    //GET
    create(req, res, next) {
        res.render('courses/create');
    }

    //POST
    store(req, res, next) {
        const formData = req.body;
        formData.thumbnail = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(req.body);
        course
            .save() //lưu vào database
            .then(() => res.redirect(`/`))
            .catch(next);
    }

    //[GET] /:id/edit
    edit(req, res, next) {
        Course.findOne({ _id: req.params.id })
            .then((course) =>
                res.render('courses/edit', {
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }

    //[PUT] /course/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/user/stored/course'))
            .catch(next);
    }

    // DELETE /course/:id
    delete(req, res, next) {
        Course.delete({ _id: req.params.id }, req.body) //hàm delete là của mongoose-delete, vì vậy ở đây là xóa mềm
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // DELETE /course/:id/force
    forceDelete(req, res, next) {
        Course.deleteOne({ _id: req.params.id }, req.body) //hàm delete là của mongoose-delete, vì vậy ở đây là xóa mềm
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // patch /course/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id }, () =>
            res.redirect('back'),
        ).catch(next);
    }
}

module.exports = new CourseController();
