class NewsController {

    //[GET] /news
    index(req, res){
        res.render('news');
    }

    //slug: là một param bất kỳ khi trỏ vào /news trên url
    //nếu param đó không được cấu hình trong news.js sẽ nhảy vào
    //function này
    //[GET] /news/:slug
    show(req, res){
        res.send('NEWS DETAIL')
    }
}

module.exports=new NewsController;
