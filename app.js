const express = require('express');
const app = express();

app.use(express.json());

app.post('/login', (req, res) => {
  const { userId, password } = req.body;
  if (userId === 'testuser' && password === 'password123') {
    return res.status(200).json({ message: 'Login successful', token: 'abc123' });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = app;