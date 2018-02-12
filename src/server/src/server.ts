import * as express from 'express';
import * as bodyParser from 'body-parser';
import { ROOT } from './constants';

const app = express();

let messagesId = 0;
const messages = [];

app.use(express.static(ROOT));
app.use(bodyParser.json());

app.get('/api/rooms', function (req, res) {
  res.json([{
    id: 1,
    title: 'Monday',
    totalUsers: 5
  }]);
});

app.get('/api/rooms/:roomId/users', function (req, res) {
  res.json([{
    id: 2,
    username: 'Mishka'
  }]);
});

app.get('/api/rooms/:roomId/messages', function (req, res) {
  res.json(messages);
});

app.post('/api/rooms/:roomId/messages', function (req, res) {
  let message = {
    id: ++messagesId,
    authorId: req.body.authorId,
    roomId: req.params.roomId,
    content: req.body.content
  };

  messages.push(message);
  res.json(message);
});

app.get('*', function (req, res) {
  res.sendFile(ROOT + '/index.html');
});

app.listen(3000);
