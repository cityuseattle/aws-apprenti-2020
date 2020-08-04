const express = require('express');
const router = express.Router();
const ctrlReviews = require('../controllers/reviews');

// reviews
router
    .route('/locations/:locationid/reviews')
    .post(ctrlReviews.reviewsCreate);

router
    .route('/locations/:locationid/reviews/:reviewid')
    .get(ctrlReviews.reviewsDeadOne)
    .put(ctrlReviews.reviewsUpdateOne)
    .delete(ctrlReviews.reviewsDeleteOne);

module.exports = router;