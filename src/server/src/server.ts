import * as express from 'express';
import { ROOT } from './constants';

const app = express();

app.use(express.static(ROOT));

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
  res.json([{
    id: 1,
    authorId: 1,
    roomId: 1,
    content: 'Hello, world!'
  }, {
    id: 2,
    authorId: 2,
    roomId: 1,
    content: 'Muahahhaha!'
  }]);
});

app.get('*', function (req, res) {
  res.sendFile(ROOT + '/index.html');
});

app.listen(3000);
