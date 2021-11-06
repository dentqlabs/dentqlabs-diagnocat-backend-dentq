require('dotenv').config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const passport = require('passport');

const indexRouter = require('./src/routes');
const diagnocatRouter = require('./src/routes/diagnocat');
const authRouter = require('./src/routes/auth');
const patientsRouter = require('./src/routes/patients');
const {passportConfig} = require('./src/config/passport');
const { checkAuth } = require('./src/middleware/auth');
require('./src/utils/database');
const app = express();

passportConfig();
app.use(passport.initialize());
app.use(cors());
app.use(logger('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/diagnocat', diagnocatRouter);
app.use('/auth', authRouter);
app.use('/patients', patientsRouter)

module.exports = app;
