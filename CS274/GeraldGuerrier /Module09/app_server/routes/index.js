// var express = require('express');
// var router = express.Router();
const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// 1. Require the main controllers file.
// const ctrlMain = require('../controllers/main');
// 2. Reference the index method of the controllers i nthe route definition.
// router.get('/', ctrlMain.index);

/* Location pages */
router.get('/', ctrlLocations.homelist);
router.get('/location/:locationid', ctrlLocations.locationInfo);
router
    .route('/location/:locationid/review/new')
    .get(ctrlLocations.addReview)
    .post(ctrlLocations.doAddReview);

/* Other Pages */
router.get('/about', ctrlOthers.about);

module.exports = router;