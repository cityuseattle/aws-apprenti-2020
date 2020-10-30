const express = require('express');
const router = express.Router();


const ctrlMain = require('../controllers/main');

/* GET home page. by referencing the index method in ctrlMain*/
router.get('/', ctrlMain.index);

module.exports = router;
