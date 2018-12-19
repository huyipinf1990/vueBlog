var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var testRouter = require('./routes/test');
var userRouter = require('./routes/blogUse');
var menuRouter = require('./routes/menu');
var musicRouter = require('./routes/music');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// 路由拦截
app.use(function(req, res, next) {
  var url=req.originalUrl;
  var cooiesName = req.cookies.username;
  console.log(cooiesName, 'cooiesNamecooiesNamecooiesNamecooiesName');
  console.log(url, 'urlurlurlurl');
  next();
});
app.use('/test', testRouter);
app.use('/music', musicRouter);
app.use('/blogUsers', userRouter);
app.use('/menu', menuRouter);
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