var express = require('express');
var router = express.Router();
const controller = require('../controllers/mainPage');

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/
router.get('/', controller.mainPage);
router.get('/index', controller.mainPage);

module.exports = router;
