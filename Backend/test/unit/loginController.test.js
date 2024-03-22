// loginController.test.js
const { login, getLogin, postLogin, putLogin, deleteLogin } = require('../../controller/loginController.js');
const { loginUser } = require('../../models/index.js');
const jwt = require('jsonwebtoken');

// Mocking loginUser.findOne function
jest.mock('../../models', () => ({
  loginUser: {
    findOne: jest.fn(),
    findAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    destroy: jest.fn()
  }
}));

describe('login', () => {
  test('should return JWT token for valid credentials', async () => {
    const mockUser = { id: 1, email: 'test@example.com', password: '$2b$10$5Y5Dwghyf9k8t4oB2EsM5eVfwZfGt8ZerwSxwTEkpiCjptgRD/54m' }; // Mock user with hashed password
    loginUser.findOne.mockResolvedValue(mockUser);
    const req = { body: { email: 'test@example.com', password: 'password' } };
    const res = { json: jest.fn() };
    // Mocking jwt.sign function
    jwt.sign = jest.fn(() => 'mocked_token');
    await login(req, res);
    expect(res.json).toHaveBeenCalledWith({ token: 'mocked_token' });
  });

  test('should handle invalid credentials with status code 401', async () => {
    loginUser.findOne.mockResolvedValue(null); // No user found
    const req = { body: { email: 'invalid@example.com', password: 'password' } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await login(req, res);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: 'Invalid username or password' });
  });

  test('should handle server error with status code 500', async () => {
    const errorMessage = 'Database error';
    loginUser.findOne.mockRejectedValue(new Error(errorMessage));
    const req = { body: { email: 'test@example.com', password: 'password' } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await login(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: 'Server Error' });
  });
});

describe('getLogin', () => {
  test('should return login data with status code 200', async () => {
    const mockLoginData = [{ id: 1, email: 'test@example.com' }];
    loginUser.findAll.mockResolvedValue(mockLoginData);
    const req = {};
    const res = { json: jest.fn() };
    await getLogin(req, res);
    expect(res.json).toHaveBeenCalledWith(mockLoginData);
  });

  test('should handle error with status code 500', async () => {
    const errorMessage = 'Database error';
    loginUser.findAll.mockRejectedValue(new Error(errorMessage));
    const req = {};
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await getLogin(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
  });
});

describe('postLogin', () => {
  test('should create a new login with status code 201', async () => {
    const mockLoginInput = { email: 'test@example.com', password: 'password' };
    loginUser.create.mockResolvedValue(mockLoginInput);
    const req = { body: mockLoginInput };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await postLogin(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockLoginInput);
  });

  test('should handle error with status code 400', async () => {
    const errorMessage = 'Validation error';
    loginUser.create.mockRejectedValue(new Error(errorMessage));
    const req = { body: {} };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await postLogin(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: errorMessage });
  });
});

describe('putLogin', () => {
  test('should update an existing login with status code 200', async () => {
    const loginId = 1;
    const mockLoginInput = { email: 'test@example.com', password: 'new_password' };
    loginUser.update.mockResolvedValue([1]);
    const req = { params: { id: loginId }, body: mockLoginInput };
    const res = { json: jest.fn() };
    await putLogin(req, res);
    expect(res.json).toHaveBeenCalledWith({ message: "Data login berhasil diperbarui" });
  });

  test('should handle error with status code 400', async () => {
    const errorMessage = 'Validation error';
    loginUser.update.mockRejectedValue(new Error(errorMessage));
    const req = { params: { id: 1 }, body: {} };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await putLogin(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: errorMessage });
  });
});

describe('deleteLogin', () => {
  test('should delete an existing login with status code 200', async () => {
    const loginId = 1;
    loginUser.destroy.mockResolvedValue(1);
    const req = { params: { id: loginId } };
    const res = { json: jest.fn() };
    await deleteLogin(req, res);
    expect(res.json).toHaveBeenCalledWith({ message: "Data login berhasil dihapus" });
  });

  test('should handle error with status code 400', async () => {
    const errorMessage = 'Database error';
    loginUser.destroy.mockRejectedValue(new Error(errorMessage));
    const req = { params: { id: 1 } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await deleteLogin(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: errorMessage });
  });
});
