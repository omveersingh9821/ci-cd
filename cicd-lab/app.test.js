const request = require('supertest');
const app = require('./app');

test('health check', async () => {
  const res = await request(app).get('/health');
  expect(res.body.status).toBe('ok');
});

test('adds numbers', async () => {
  const res = await request(app).get('/add?a=2&b=3');
  expect(res.body.result).toBe(5);
});