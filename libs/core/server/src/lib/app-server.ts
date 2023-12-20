import express = require('express');

import {AppLogger} from '@ccl-dopz-api/logger';

import {AppRequest,AppResponse} from '@ccl-dopz-api/app-interface';

export default class AppServer {

  private server: express.Application;
  environment: Record<string, unknown>;
  private port: number;
  logger: AppLogger;

  constructor(port: number, environment) {
    
    this.port = port;
    this.server = express();
    this.environment = environment;
    this.logger = new AppLogger('server', '', environment);
  }

  getApplication() {
    this.server.use((req: AppRequest, res: AppResponse, next) => {
      const tokenKey = req.headers["Authorization"] as string;
      req.logger = new AppLogger('request', tokenKey, this.environment);
      next();
    });
    return this.server;
  }

  startApp() {
    if (this.environment.SENTRY_LOGGING && this.environment.SENTRY_LOGGING != undefined) {
      // Sentry.init({
      //   dsn:
      //     "",
      // });
      // this.server.use(Sentry.Handlers.errorHandler());
    }
    this.server.listen(this.port, () => {
      console.log('App server running on port: ' + this.port);
    });
  }





}