import express = require('express');

export default class AppServer {

  private server: express.Application;
  environment: Record<string, unknown>
  private port: number;

  constructor(port: number, environment) {
    this.port = port;
    this.server = express();
    this.environment = environment
  }

  getApplication() {
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