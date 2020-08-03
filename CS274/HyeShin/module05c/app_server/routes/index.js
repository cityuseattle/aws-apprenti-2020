//var express = require('express');
//var router = express.Router();
const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;

/* GET home page. */
// router.get('/', ctrlMain.index);
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
// });

// 1. Require the main controllers file.
// const ctrlMain = require('../controllers/main');
// 2. Reference the index method of the controllers in the route definition.
// router.get('/', ctrlMain.index);


