const express = require('express');
const router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
// });

const ctrlMain = require('../controllers/main');

router.get('/', ctrlMain.index);

module.exports = router;
