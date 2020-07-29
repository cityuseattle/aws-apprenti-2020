const express = require('express');
const router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});

//module.exports = router;

// 1. require the main controller file. 
const ctrlMain = require('../controllers/main');
//2. Reference the index method of the controllers in the route definition.
router.get('/', ctrlMain.index);

module.exports = router;
