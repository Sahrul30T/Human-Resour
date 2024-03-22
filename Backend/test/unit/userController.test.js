// userController.test.js
const { getUser, createUser, putUser, deleteUser } = require('../../controller/userController');
const { dataUser } = require('../../models');

// Mocking dataUser.findAll function
jest.mock('../../models', () => ({
  dataUser: {
    findAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    destroy: jest.fn()
  }
}));

describe('getUser', () => {
  test('should return user data with status code 200', async () => {
    const mockUserData = [{ nik: 1, name: 'John Doe', email: 'john@example.com' }];
    dataUser.findAll.mockResolvedValue(mockUserData);
    const req = {};
    const res = { json: jest.fn() };
    await getUser(req, res);
    expect(res.json).toHaveBeenCalledWith(mockUserData);
  });

  test('should handle error with status code 500', async () => {
    const errorMessage = 'Database error';
    dataUser.findAll.mockRejectedValue(new Error(errorMessage));
    const req = {};
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await getUser(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
  });
});

describe('createUser', () => {
  test('should create a new user with status code 201', async () => {
    const mockUserInput = { nik: 1, name: 'John Doe', email: 'john@example.com' };
    dataUser.create.mockResolvedValue(mockUserInput);
    const req = { body: mockUserInput };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await createUser(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockUserInput);
  });

  test('should handle error with status code 400', async () => {
    const errorMessage = 'Validation error';
    dataUser.create.mockRejectedValue(new Error(errorMessage));
    const req = { body: {} };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await createUser(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: errorMessage });
  });
});

describe('putUser', () => {
  test('should update an existing user with status code 200', async () => {
    const userId = 1;
    const mockUserInput = { name: 'Updated Name', email: 'updated@example.com' };
    dataUser.update.mockResolvedValue([1]);
    const req = { params: { id: userId }, body: mockUserInput };
    const res = { json: jest.fn() };
    await putUser(req, res);
    expect(res.json).toHaveBeenCalledWith({ message: "Data user berhasil diperbarui" });
  });

  test('should handle error with status code 400', async () => {
    const errorMessage = 'Validation error';
    dataUser.update.mockRejectedValue(new Error(errorMessage));
    const req = { params: { id: 1 }, body: {} };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await putUser(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: errorMessage });
  });
});

describe('deleteUser', () => {
  test('should delete an existing user with status code 200', async () => {
    const userId = 1;
    dataUser.destroy.mockResolvedValue(1);
    const req = { params: { id: userId } };
    const res = { json: jest.fn() };
    await deleteUser(req, res);
    expect(res.json).toHaveBeenCalledWith({ message: "Data absensi berhasil dihapus" });
  });

  test('should handle error with status code 400', async () => {
    const errorMessage = 'Database error';
    dataUser.destroy.mockRejectedValue(new Error(errorMessage));
    const req = { params: { id: 1 } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await deleteUser(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: errorMessage });
  });
});
