const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/UserController');

router.use('/stored/course', userController.storedCourse);
router.use('/stored/post', userController.storedPost);
router.use('/trash/course', userController.trashCourse);

//export ra để index.js trong folder routes có thể import
module.exports = router;
