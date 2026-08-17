var express = require('express');
var router = express.Router();
var controller = require('../controllers/meals.js');

/* GET rooms page */
router.get('/', controller.meals);

module.exports = router;