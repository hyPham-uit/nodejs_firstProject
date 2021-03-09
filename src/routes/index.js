//nạp file news vào để cấu hình route news
const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
const userRouter = require('./user');

function route(app) {
    //route tới page news
    app.use('/news', newsRouter);

    //route tới courses
    app.use('/courses', coursesRouter);

    //route tới page home
    app.use('/', siteRouter);

    app.use('/user', userRouter);

    //route tới page search
    app.use('/search', siteRouter);
    app.post('/search', (req, res) => {
        console.log(req.body.q);
        res.json(req.body); // gọi giao diện homapage
    });
}

module.exports = route;
