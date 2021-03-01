const path=require('path');//đây là built-on của nodejs
const express = require('express');// đi vào folder node module để lấy thư viên express
const morgan = require('morgan');//thêm module morgan để xem được log mỗi khi load page
const handlebars  = require('express-handlebars');
const app = express()//đây là đối tượng xây dựng website

const port = 3000;//run web ở port 3000

//HTTP logger
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')))//kiểm tra các file tĩnh có trong public khi trình duyệt gọi đường dẫn
//nghĩa là coi localhost:3000 là thư mục public. Khi gọi http://localhost:3000 là gọi từ file public 

//template egine
app.engine('hbs', handlebars({
  extname: '.hbs'//đổi đuôi handlebars thành .hbs cho ngắn gọn
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));//cấu hình vị trí lưu file views
//dirname là vị trí hiện tại, tức là index.js và trỏ tới folder resources/views ngang cấp với file js

//định nghĩa route
//route tới page home
app.get('/', (req, res) => {
  res.render('home');// gọi giao diện homapage
})
//route tới page news
app.get('/news', (req, res) => {
  res.render('news');// gọi giao diện homapage
})

//127.0.0.1=>localhost
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})