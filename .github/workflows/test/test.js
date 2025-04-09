const request = require('supertest');
const app = require("../../../app"); 

describe('Login API', () => {
  it('should return 200 and a token for valid credentials', async () => {
    const res = await request(app)
      .post('/login')
      .send({ userId: 'testuser', password: 'password123' });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });

  it('should return 401 for invalid credentials', async () => {
    const res = await request(app)
      .post('/login')
      .send({ userId: 'wronguser', password: 'wrongpass' });

    expect(res.statusCode).toBe(401);
    expect(res.body.message).toBe('Invalid credentials');
  });
});
