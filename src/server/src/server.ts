import * as express from 'express';
import { ROOT } from './constants';

const app = express();

app.use(express.static(ROOT));

app.get('*', function (req, res) {
  res.sendFile(ROOT + '/index.html');
});

app.listen(3000);
