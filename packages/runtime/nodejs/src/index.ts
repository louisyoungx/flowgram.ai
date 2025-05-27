import { createServer } from '@server/index';
import { SERVER_PARAMS } from '@config/index';

const server = createServer(SERVER_PARAMS);

void server.start();
