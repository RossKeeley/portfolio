var express = require('express');
var router = express.Router();
var projectsData = require('../data/projects.json');


router.get('/', function(req, res, next) {
  res.render('index', { pageTitle: 'Projects | Ross Keeley Portfolio', css: 'style', template: 'projects', projectsData, javascript: 'main' });
});

module.exports = router;
