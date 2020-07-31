//var express = require('express');
//var router = express.Router();
const express = require('express');
const router = express.Router();
const ctrlLocations = require ('../controllers/locations');
const ctrlOthers = require('../controllers/others');

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});

router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

//2. Reference the index method of the controllers in the route definition.
router.get('/about', ctrlOthers.about);
module.exports = router;
