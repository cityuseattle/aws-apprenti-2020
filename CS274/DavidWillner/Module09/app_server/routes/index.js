const express = require('express');
const router = express.Router();

const ctrlOthers = require ('../controllers/others')
const ctrlLocations = require('../controllers/locations');

/* GET home page. by referencing the index method in ctrlMain*/
router.get('/', ctrlLocations.homelist);
router.get('/location/:locationid', ctrlLocations.locationInfo);
router
  .route('/location/:locationid/review/new')
  .get(ctrlLocations.addReview)
  .post(ctrlLocations.doAddReview);


router.get('/about', ctrlOthers.about);

module.exports = router;
