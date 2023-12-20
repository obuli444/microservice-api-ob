import express from 'express';
const cors = require('cors');
import { environment } from './environment/environment';

import * as bodyParser from 'body-parser';
import bindRoutes from './app/routes';
const port = environment.PORT;

const app = express();
app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": true,
}));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true })); 
bindRoutes(app);
app.listen(port, () => {
  console.log(`Auth application running on port:${port}`);
});
