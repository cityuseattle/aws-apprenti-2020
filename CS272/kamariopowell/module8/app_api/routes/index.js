const express= require('express');
const router = express.Router();
const ctrlReviews = require('../controllers/reviews');
const ctrlLocations = require('..controllers/locations');
const ctrlAuth = require('../controllers/authentication');

router
    .route('/locations/:locationid/reviews')
    .post(ctrlReviews.reviewsCreate);

router
    .route('/locations/:locationid/reviews/:reviewid')
    .get(ctrlReviews.reviewReadOne)
    .put(ctrlReviews.reviewsUpdateOne)
    .delete(ctrlReviews.reviewDeleteOne);
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);  

module.exports = router;