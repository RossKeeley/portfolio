var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var homepageRouter = require('./routes/homepage');
var aboutRouter = require('./routes/about');
var projectsRouter = require('./routes/projects');
var resumeRouter = require('./routes/resume');
var contactRouter = require('./routes/contact');
var calculatorRouter = require('./routes/calculator');
var markdownRouter = require('./routes/markdown-previewer');
var pomodoroRouter = require('./routes/pomodoro-clock');
var React = require('react');
var ReactDOMServer = require('react-dom/server');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homepageRouter);
app.use('/about', aboutRouter);
app.use('/projects', projectsRouter);
app.use('/resume', resumeRouter);
app.use('/contact', contactRouter);
app.use('/calculator', calculatorRouter);
app.use('/markdown-previewer', markdownRouter);
app.use('/pomodoro-clock', pomodoroRouter);

// app.get('/projects/:title', (req, res) => {
//   res.send('Title is ' + req.params.title);
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
