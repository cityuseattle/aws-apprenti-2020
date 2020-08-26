const express = require('express');
const router = express.Router();
const ctrlReviews = require('../controllers/reviews');
const ctrlLocations = require('../controllers/locations');
const ctrlStatus = require('../controllers/status');

//reviews
router
    .route('/locations/:locationid/reviews')
    .post(ctrlReviews.reviewsCreate);

router
    .route('/locations/:locationid/reviews/:reviewid')
    .get(ctrlReviews.reviewsReadOne)
    .put(ctrlReviews.reviewsUpdateOne)
    .delete(ctrlReviews.reviewsDeleteOne);

router
    .route('/locations')
    .get(ctrlLocations.locationsListByDistance)
    .post(ctrlLocations.locationsCreate);

router
    .route('/locations/:locationid')
    .get(ctrlLocations.locationsReadOne)
    .put(ctrlLocations.locationsUpdateOne)
    .delete(ctrlLocations.locationsDeleteOne);

//routes to update and check status
router
    .route('/locations/:locationid/status')
    .get(ctrlStatus.locationStatus)
    .put(ctrlStatus.statusLocationUpdate);

module.exports = router;