var express = require('express');
var router = express.Router();
var projectsData = require('../data/projects.json');


router.get('/', function(req, res, next) {
  res.render('index', { pageTitle: 'Projects | Ross Keeley Portfolio', template: 'projects', projectsData });
});

module.exports = router;
