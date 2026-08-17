var express = require('express');
var router = express.Router();
var controller = require('../controllers/about.js');

/* GET rooms page */
router.get('/', controller.about);

module.exports = router;