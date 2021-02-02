const express = require('express');
require('express-async-errors');
const lib = require('./src/lib');
const db = require('./src/db');
const astros = require('./src/astros');
const email = require('./src/email');
const file = require('./src/file');
const os = require('os');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (_req, res) => res.send('<h1>Hello World</h1>'));

app.get('/hello', (_req, res) => res.contentType('text/plain').send('Hello World'));

app.get('/fib/:n', (req, res) => res.json({ value: lib.fib(req.params.n) }));

app.get('/registers', async (_req, res) => res.json(await db.selectAllRegisters()));

app.get('/registers/text', async (_req, res) => res.contentType('text/plain').send(await db.selectAllRegistersAsText()));

app.get('/astros', async (_req, res) => res.contentType('text/plain').send(await astros.getAstros()));

app.get('/email', async (_req, res) => res.contentType('text/plain').send(await email.send()));

app.get('/cpus', (_req, res) => res.contentType('text/plain').send(JSON.stringify(os.cpus())));

app.get('/file', async (_req, res) => res.contentType('text/plain').send(await file.getFileContent()));

app.use((_req, res) => res.status(404).contentType('text/plain').send('Not Found'));

app.use((err, _req, res, _next) => res.status(500).contentType('text/plain').json({ error: err.message }));

app.listen(port, () => console.log('Ctrl-C to stop'));
