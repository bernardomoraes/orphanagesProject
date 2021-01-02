import express from 'express';
import './database/connection'

import routes from './routes';

const app = express();

app.use(express.json()) /*  O express não entende o JSON para isso a gente vai usar o express.json */
app.use(routes) // Importante que venha depois do express.json


app.listen(3333); // localhost:3333

