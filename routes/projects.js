var express = require('express');
var router = express.Router();
var jsonFile = require('../data/projects.json');
var projectsData =
[
    {
      "title": "Calculator App",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "image": "calculator.jpeg",
      "tags": [
        "HTML",
        "CSS",
        "JavaScript",
        "ReactJS"
      ]
    },
    {
      "title": "Markdown Previewer",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "tags": [
        "HTML",
        "CSS",
        "JavaScript"
      ]
    },
    {
      "title": "Random Quote Generator",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "tags": [
        "HTML",
        "CSS",
        "JavaScript"
      ]
    },
    {
      "title": "Pomodoro Clock",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "tags": [
        "HTML",
        "CSS",
        "JavaScript"
      ]
    },
    {
      "title": "Drum Machine",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "tags": [
        "HTML",
        "CSS",
        "JavaScript"
      ]
    }
  ];

router.get('/', function(req, res, next) {
  res.render('pages/projects', {projectsData} );
});

module.exports = router;
