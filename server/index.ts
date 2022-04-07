import 'module-alias/register';
import logger from '@server/config/pino';
import server from './server';

require('dotenv').config();

const port = process.env.PORT || 8000;

const app = server.create();
app.listen(port, () => {
  logger.info(`\nServer has started on http://localhost:${port} !\n`);
});