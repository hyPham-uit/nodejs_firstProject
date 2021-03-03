//nạp file news vào để cấu hình route news
const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    //route tới page news
    app.use('/news', newsRouter);

    //route tới page home
    app.use('/', siteRouter);

    //route tới page search
    app.use('/search', siteRouter);
    app.post('/search', (req, res) => {
        console.log(req.body);
        res.send(''); // gọi giao diện homapage
    });
}

module.exports = route;
