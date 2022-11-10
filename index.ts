import 'dotenv/config';
import express, {Application} from 'express';
import {router} from './src/routes/route';

const app: Application = express();
const port = 8001;

app.use('/', router);

app.listen(port, () => console.log(`Server is listening on port ${port}!`));
