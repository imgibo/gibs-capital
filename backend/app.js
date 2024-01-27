import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import unknownEndpoint from './utils/unknownEndpoint.js';
import savingsRouter from './routes/savingsRouter.js';

const app = express();

morgan.token("body", function(req, res,) {
    return JSON.stringify(req.body);
});

app.use(cors());
app.use(express.json());
app.use(morgan(":method :url :status :body"));

app.use("/savings", savingsRouter);

app.use(unknownEndpoint);

export default app