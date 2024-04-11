import express from 'express';
import routes from './routes/index.routes';
import { errorHandler } from './middlewares/error.middleware';
import { mongoDB } from './data/mongo';
import { envs } from './config/envs';

mongoDB.connect({ mongoUrl: envs.MONGO_URL, dbName: envs.MONGO_DB_NAME });

const app = express();

app.use(express.json());

app.use('/api/v1', routes);

app.use(errorHandler);

export default app;
