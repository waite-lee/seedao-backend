import express, { Express, Response, Request } from 'express';

import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import expressPino from 'express-pino-logger';
import pino from 'pino';

import apiV1Route from './v1';
import { ignoreFavicon } from './utils';

/**
 * Function to create create Express server
 */
function create(): Express {
  // server
  const app = express();

  // Middleware
  app.use(bodyParser.json());

  app.use(cors());

  // Logger
  const logger = pino({ level: process.env.LOG_LEVEL || 'info' });
  const expressLogger = expressPino({ logger });
  app.use(expressLogger);

  // API 
  app.use('/api/v1', apiV1Route);

  // configure nonFeature
  app.use(ignoreFavicon);

  // root route - serve static file
  app.use(express.static(path.join(__dirname, '../public/')));

  app.get(/.*/, (req: Request, res: Response) => {
    return res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  return app;
}

export default {
  create,
};
