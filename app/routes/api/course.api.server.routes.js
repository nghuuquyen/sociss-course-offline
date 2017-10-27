/**
* @author Quyen Nguyen Huu
* @module routes.api
* @name   course.api.server.routes
*/
"user strict";

let CourseAPICtrl = require('../../controllers').CourseAPI;
let router = require('express').Router();

router.route('/:courseCode').post(CourseAPICtrl.getCourseByCode);

module.exports = router;
