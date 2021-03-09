const express = require('express');
const router = express.Router();

//lấy ra newsController
const courseController = require('../app/controllers/CourseController');

router.patch('/:id/restore', courseController.restore);
router.put('/:id', courseController.update);

router.use('/:id/edit', courseController.edit);
router.delete('/:id', courseController.delete);
router.delete('/:id/force', courseController.forceDelete);
router.get('/create', courseController.create);
router.post('/store', courseController.store);
//nên để slug lên trước vì đây là ngôn ngữ script,
//nếu ko lên trước, nó sẽ vào '/' và '/:slug' ko được vào
router.get('/:slug', courseController.show);

//router.use('/:slug', newsController.show)

//export ra để index.js trong folder routes có thể import
module.exports = router;
