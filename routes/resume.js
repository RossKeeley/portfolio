var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { pageTitle: 'Resume | Ross Keeley Portfolio', style: 'master', template: 'resume', javascript: 'index' });
});

module.exports = router;
