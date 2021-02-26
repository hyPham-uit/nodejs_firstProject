const express = require('express')// đi vào folder node module để lấy thư viên express
const app = express()//đây là đối tượng xây dựng website
const port = 3000//run web ở port 3000

//định nghĩa route
app.get('/tin-tuc', (req, res) => {
    res.send('Hello World!')
})

//127.0.0.1=>localhost
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})