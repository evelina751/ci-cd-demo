const request = require('supertest');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ message: "CI/CD Demo Running 🚀" });
});

test('GET / returns message', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
});
