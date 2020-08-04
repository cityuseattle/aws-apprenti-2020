const express = require('express');
const router = express.Router();
const ctrLocation = require('../controllers/location');
const ctrOthers = require('../controllers/others');


/*Location pages */
router.get('/', ctrLocation.homelist);
router.get('/location', ctrLocation.locationInfo);
router.get('/location/review/new', ctrLocation.addReview);

/*Other pages.*/
router.get('/about', ctrOthers.about);

module.exports = router;
