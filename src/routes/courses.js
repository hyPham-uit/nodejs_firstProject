const express = require('express');
const router = express.Router();

//declare course controller
const courseController = require('../app/controllers/CourseController');

//GET
router.get(
    '/create',
    function (req, res, next) {
        if (req.query.ticket === 'ticketVip') return next();
        res.status(403).json({ message: 'Access denied' });
    },
    courseController.create,
);
router.get('/:slug', courseController.show);

//POST
router.post('/store', courseController.store);

//PATCH
router.patch('/:id/restore', courseController.restore);

//PUT
router.put('/:id', courseController.update);

//DELETE
router.delete('/:id/force', courseController.forceDelete);
router.delete('/:id', courseController.delete);

//USE
router.use('/:id/edit', courseController.edit);

module.exports = router;
