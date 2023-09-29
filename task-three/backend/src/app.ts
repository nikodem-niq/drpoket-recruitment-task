import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import type { Request, Response, NextFunction, ErrorRequestHandler, Express } from 'express';
import { config } from './config/config';
const app : Express = express();

// Middlewares for parsing requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());

// Error handling middleware
const errorHandler: ErrorRequestHandler = (err, req: Request, res: Response, next: NextFunction) : void => {
    res.status(500).json(err).end();
}
app.use(errorHandler);

// Logging
if(config.env === 'development') {
    app.use(morgan('dev'));
}

export default app;