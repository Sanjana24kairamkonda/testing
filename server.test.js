// server.test.js
const request = require('supertest');
const app = require('./server');

test('GET /ping should return pong', async () => {
  const response = await request(app).get('/ping');
  expect(response.status).toBe(200);
  expect(response.body.message).toBe('pong');
});

