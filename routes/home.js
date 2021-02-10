var express = require('express');
var router = express.Router();
var projectsData = require('../data/projects.json');
var skillsData = require('../data/skills.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { pageTitle: 'Home | Ross Keeley Portfolio', style: '', template: 'home', projectsData, skillsData, javascript: 'index' });
});

module.exports = router;
