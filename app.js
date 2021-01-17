const express = require('express');
const lib = require('./src/lib');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(lib.hello);
});

app.get('/data', (req, res) => {
  res.json(lib.foo);
});

app.use((req, res) => {
  res.status(404);
  res.send('Not Found');
});

app.listen(port, () => console.log('Ctrl-C to stop'));
