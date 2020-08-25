const express= require('express');
const router = express.Router();
const ctrlReviews = require('../controllers/reviews');
const ctrlLocations = require('../controllers/locations');

// reviews
router
    .route('/locations/:locationid/reviews')
    .post(ctrlReviews.reviewsCreate);

router
    .route('/locations/:locationid/reviews/:reviewid')
    .get(ctrlReviews.reviewReadOne)
    .put(ctrlReviews.reviewsUpdateOne)
    .delete(ctrlReviews.reviewDeleteOne);

// locations
router  
    .route('/locations')
    .get(ctrlLocations.locationsListByDistance)
    .post(ctrlLocations.locationsCreate);

router
    .route('/locations/:locationid')
    .get(ctrlLocations.locationsReadOne)
    .put(ctrlLocations.locationsUpdateOne)
    .delete(ctrlLocationslocationsDeleteOne);

module.exports = router;