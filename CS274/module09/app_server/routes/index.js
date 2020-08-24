//var express = require('express');
//var router = express.Router();
const express = require('express');
const router = express.Router();
const ctrlLocations = require ('../controllers/locations');
const ctrlOthers = require('../controllers/others');

router.get('/', ctrlLocations.homelist);
router.get('/location/:locationid', ctrlLocations.locationInfo);
router
.route('/location/review/new')
.get(ctrlLocations.addReview)
.post(ctrlLocations.doAddReview);

//2. Reference the index method of the controllers in the route definition.
router.get('/about', ctrlOthers.about);
module.exports = router;
