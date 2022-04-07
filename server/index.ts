import 'module-alias/register';
import '@server/config/dotenv';
import logger from '@server/config/pino';

import server from './server';

const port = process.env.PORT || 8000;

const app = server.create();
app.listen(port, () => {
  logger.info(`\nServer has started on http://localhost:${port} !\n`);
});