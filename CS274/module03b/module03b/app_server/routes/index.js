//var express = require('express');
//var router = express.Router();
const express =require('express');
const router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
//});

//1. Require the Main COntrollers file.
const ctrlMain = require('../controllers/main');
// 2. referene the index method of the controllers in the route definition.
router.get('/', ctrlMain.index);


module.exports = router;
