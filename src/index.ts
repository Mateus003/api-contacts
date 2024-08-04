import express from 'express';
import helmet from 'helmet';
import * as dotenv from 'dotenv'
import router from './routers/contactsRouter';

dotenv.config();

const server = express();

server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.use(helmet());

server.use(router);

server.listen(process.env.PORT);


