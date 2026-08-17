var express = require('express');
var router = express.Router();
var controller = require('../controllers/contact.js');

/* GET rooms page */
router.get('/', controller.contact);

module.exports = router;