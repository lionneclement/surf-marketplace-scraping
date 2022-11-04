import express, {Application, Request, Response} from 'express';

const app: Application = express();
const port = 3000;

app.use('/', (req: Request, res: Response) => {
  res.status(200).send({data: 'Hello World'});
});

app.listen(port, () => console.log(`Server is listening on port ${port}!`));
