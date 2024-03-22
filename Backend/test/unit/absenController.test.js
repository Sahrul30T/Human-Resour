const { response } = require('express');
const { getAbsen, postAbsen, putAbsen, deleteAbsen } = require('../../controller/absenController');
const { dataAbsen, dataUser } = require('../../models');

// Mocking dataAbsen.findAll function
jest.mock('../../models', () => ({
  dataAbsen: {
    findAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    destroy: jest.fn()
  },
  dataUser: {


  }
}));

describe('getAbsen', () => {
  test('should return absen data with status code 200', async () => {
    const mockAbsenData = [{ idAbsen: 1, date: '2024-03-22', status: 'Hadir', user: { name: 'sahrul' } }];
    dataAbsen.findAll.mockResolvedValue(mockAbsenData);
    const req = {};
    const res = { json: jest.fn() };
    await getAbsen(req, res);
    expect(res.json).toHaveBeenCalledWith(mockAbsenData);
  });

  test('should handle error with status code 500', async () => {
    const errorMessage = 'Database error';
    dataAbsen.findAll.mockRejectedValue(new Error(errorMessage));
    const req = {};
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await getAbsen(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: errorMessage });

  });
});

describe('postAbsen', () => {
  test('should create a new absen with status code 201', async () => {
    const mockAbsenInput = { date: '2024-03-19', status: 'Hadir', userId: 1 };
    dataAbsen.create.mockResolvedValue(mockAbsenInput);
    const req = { body: mockAbsenInput };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await postAbsen(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockAbsenInput);
  });

  test('should handle error with status code 400', async () => {
    const errorMessage = 'Validation error';
    dataAbsen.create.mockRejectedValue(new Error(errorMessage));
    const req = { body: {} };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await postAbsen(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: errorMessage });
  });
});

describe('putAbsen', () => {
  test('should update an existing absen with status code 200', async () => {
    const absenId = 1;
    const mockAbsenInput = { date: '2024-03-19', status: 'Hadir', userId: 1 };
    dataAbsen.update.mockResolvedValue([1]);
    const req = { params: { id: absenId }, body: mockAbsenInput };
    const res = { json: jest.fn() };
    await putAbsen(req, res);
    expect(res.json).toHaveBeenCalledWith({ message: "Data absensi berhasil diperbarui" });
  });

  test('should handle error with status code 400', async () => {
    const errorMessage = 'Validation error';
    dataAbsen.update.mockRejectedValue(new Error(errorMessage));
    const req = { params: { id: 1 }, body: {} };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await putAbsen(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: errorMessage });
  });
});

describe('deleteAbsen', () => {
  test('should delete an existing absen with status code 200', async () => {
    const absenId = 1;
    dataAbsen.destroy.mockResolvedValue(1);
    const req = { params: { id: absenId } };
    const res = { json: jest.fn() };
    await deleteAbsen(req, res);
    expect(res.json).toHaveBeenCalledWith({ message: "Data absensi berhasil dihapus" });
  });

  test('should handle error with status code 400', async () => {
    const errorMessage = 'Database error';
    dataAbsen.destroy.mockRejectedValue(new Error(errorMessage));
    const req = { params: { id: 1 } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await deleteAbsen(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: errorMessage });
  });
});
