import * as winston from 'winston';
import * as uuid from "uuid";
import * as os from "os";
import _ from 'lodash';


export default class AppLogger {

  logger: winston.Logger;
  key: string;
  environment: Record<string, unknown>
  constructor(type: 'request' | 'server', key?: string, environment?: Record<string, unknown>) {
    const logConfiguration = {
      transports: [
        new winston.transports.Console(),
      ],
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      )
    };
    this.environment = environment;
    if (!_.isNil(key) && !_.isEmpty(key)) {
      this.key = key;
    }

    if (type == 'request') {
      this.logger = winston.createLogger(logConfiguration).child({ requestId: uuid.v4() });
    } else {
      this.logger = winston.createLogger(logConfiguration);
    }
  }


  log(fileName: string, level: 'error' | 'warn' | 'info' | 'verbose' | 'debug' | 'silly' | 'http', message: string | Record<string, unknown> | void | Error | Array<Record<string, unknown>>) {
    this.logger.log({ message: typeof message == 'string' ? message : JSON.stringify(message), level: level, file: fileName });
  }
}