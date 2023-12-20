import express from 'express';
const cors = require('cors');
const winston = require('winston');
import { environment } from './environment/environment';
import * as bodyParser from 'body-parser';
import bindRoutes from './app/routes';

import {AppServer} from '@ccl-dopz-api/server'


// const logger = winston.createLogger({
//   level: 'info', // Set the minimum log level (error, warn, info, verbose, debug, silly)
//   format: winston.format.combine(
//     winston.format.timestamp(),
//     winston.format.json()
//   ),
//   transports: [
//     new winston.transports.Console(), // Log to the console
//   ]
// });

const port = environment.PORT;
const appserver = new AppServer(port,environment);
const app = appserver.getApplication();
app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": true,
}));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true })); 
bindRoutes(app);
appserver.startApp();
