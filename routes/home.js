var express = require('express');
var router = express.Router();
var projectsData = require('../data/projects.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { pageTitle: 'Home | Ross Keeley Portfolio', style: '', template: 'home', projectsData, javascript: 'index' });
});

module.exports = router;
