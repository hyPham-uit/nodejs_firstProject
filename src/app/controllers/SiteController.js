const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    //[GET] /
    index(req, res, next) {
        Course.find({}) //hàm lấy các document
            .then((courses) => {
                //handelbar không cho truy xuất trực tiếp object combine từ dtb lên giao diện do vấn đề bảo mật
                //nên chuyển object về dạng {} hay còn gọi là object literal
                //courses=courses.map((course)=>course.toObject());

                //ta tạo folder util và chứa các tool trong đó
                //ở đây ta sử dụng
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            }) //trả về đối tượng courses và render ra giao diện home
            .catch(next); //xử lí error ở middleware next
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
