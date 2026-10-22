const express = require('express');
const app = express();

app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.get('/add', (req, res) => {
  const { a, b } = req.query;
  res.json({ result: Number(a) + Number(b) });
});

module.exports = app;