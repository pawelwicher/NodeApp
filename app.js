const express = require('express');
const lib = require('./src/lib');
const db = require('./src/db');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (_req, res) => {
  res.contentType('html');
  res.send('<h1>Hello World</h1>');
});

app.get('/hello', (_req, res) => {
  res.contentType('text');
  res.send('Hello World');
});

app.get('/fib/:n', (req, res) => {
  res.json({ value: lib.fib(req.params.n) });
});

app.get('/registers', async (_req, res) => {
  const result = await db.selectAllRegisters();
  res.json(result);
});

app.use((_req, res) => {
  res.status(404);
  res.send('Not Found');
});

app.listen(port, () => console.log('Ctrl-C to stop'));
