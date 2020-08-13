const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

/* Locations Pages */
router.get('/', ctrlLocations.homelist);
router.get('/location/:locationid', ctrlLocations.locationInfo);
// router.get('/location/review/new', ctrlLocations.addReview);
router
    .route('/location/:locationid/review/new')
    .get(ctrlLocations.addReview)
    .post(ctrlLocations.doAddReview);

/* Other Pages */
router.get('/about', ctrlOthers.about);

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// 1. Require the main controllers file.
// const ctrlMain = require('../controllers/main'); deleted in step 1
// 2.Reference the index method of the controllers in the route definition.
// router.get('/', ctrlMain.index);

module.exports = router;