const express = require('express');
const router = express.Router();

//lấy ra newsController
const newsController = require('../app/controllers/NewsController');

//nên để slug lên trước vì đây là ngôn ngữ script,
//nếu ko lên trước, nó sẽ vào '/' và '/:slug' ko được vào
router.get('/:slug', newsController.show);
//cấu hình khi vào /news/ sẽ sử dụng function index của newsController
router.get('/', newsController.index);
//router.use('/:slug', newsController.show)

//export ra để index.js trong folder routes có thể import
module.exports = router;
