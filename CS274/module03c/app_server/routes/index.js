const express = require('express');
const router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;

const ctrlMain = require('../controllers/main');
router.get('/', ctrlMain.index);
