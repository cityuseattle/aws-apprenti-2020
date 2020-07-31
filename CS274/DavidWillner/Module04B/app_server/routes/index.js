const express = require('express');
const router = express.Router();

const ctrlOthers = require ('../controllers/others')
const ctrlLocations = require('../controllers/locations');

/* GET home page. by referencing the index method in ctrlMain*/
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);


router.get('/about', ctrlOthers.about);

module.exports = router;
