
import { Request, Response } from 'express'
import { AppLogger } from "@ccl-dopz-api/logger";

type AppRequest = Request & {
  logger: AppLogger,
}

type AppResponse = Response & {
  logger: AppLogger
}

export { AppRequest, AppResponse }
