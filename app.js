const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
// app
const indexRouter = require('./routes/index');
const picTure = require('./routes/picture');
const Music = require('./routes/music');

// pc
const pcImg = require('./routes/pc/pcImg');

// control
const gitcontrol = require('./routes/gitcontrol/index');

const app = express();

// view engine setup
// 模板
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// 静态文件托管
// app.use(express.static(path.join(__dirname, 'public')));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
 
 // app
app.use('/', indexRouter);
app.use('/picture', picTure);
app.use("/music",Music)

// pc
app.use('/pcImg', pcImg);

// control
app.use('/gitcontrol', gitcontrol);

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
