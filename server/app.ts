require('dotenv').config();
import {Server} from './models/models.server';

const server = new Server();

server.listen();