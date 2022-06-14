import 'reflect-metadata';
import Server from './server';
import config from './config/config';
import { routes } from './routes/index';

const server = new Server(config.PORT, [ ...routes ]);

server.start();