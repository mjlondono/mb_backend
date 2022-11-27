var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Variable añadidas
var database = require('./config/database');

var usuariosRouter = require('./routes/usuarios.router');

var auth = require('./auth/main_auth');
var cors = require('cors');

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

//Enrutadores

var comerciantesRouter = require('./routes/comerciantes.router');
var productosRouter = require('./routes/productos.router');


var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

// Mongo Connection

database.mongoConnect();
app.use('/usuarios', usuariosRouter);
app.use(auth);


// ROUTER

//app.use('/', indexRouter);
//app.use('/users', usersRouter);

app.use('/comerciantes', comerciantesRouter);
app.use('/productos', productosRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
