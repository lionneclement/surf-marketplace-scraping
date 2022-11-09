import 'dotenv/config';
import express, {Application} from 'express';
import {facebookRoute} from './src/routes/facebook.route';

const app: Application = express();
const port = 8001;

app.use('/facebook', facebookRoute);

app.listen(port, () => console.log(`Server is listening on port ${port}!`));
