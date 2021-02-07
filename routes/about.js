var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { pageTitle: 'About | Ross Keeley Portfolio', style: 'master', template: 'about', javascript: 'index' });
});

module.exports = router;
