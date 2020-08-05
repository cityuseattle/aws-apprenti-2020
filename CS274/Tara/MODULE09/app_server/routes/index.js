const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
const { route } = require('../../app_api/routes');
/* Locations pages */
router.get('/',ctrlLocations.homelist);
router.get('/location/:locationid', ctrlLocations.locationInfo);
router
    .route('/location/:locationid/review/new')
    .get(ctrlLocations.addReview)
    .post(ctrlLocations.doAddReview);
router.get('/location/review/new',ctrlLocations.addReview);
/* Other pages */
router.get('/about',ctrlOthers.about);

module.exports = router;
