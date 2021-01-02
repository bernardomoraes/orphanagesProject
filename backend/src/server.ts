import express from 'express';
import path from 'path';
import cors from 'cors'

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors())
app.use(express.json()) /*  O express não entende o JSON para isso a gente vai usar o express.json */
app.use(routes) // Importante que venha depois do express.json
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

app.use(errorHandler);
app.listen(3333); // localhost:3333
