const express = require('express');
const router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// 1. Require the main controller file
const ctrlMain = require('../controllers/main');
// 2. Reference the index method of the controller in the route definition
router.get('/', ctrlMain.index);

module.exports = router;
