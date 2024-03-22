import { useState } from 'react';

// Create the EmployeeManagement component
const EmployeeManagement = () => {
  // Define state variables
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    id: '',
    nik: '',
    name: '',
    jenkes: '',
    alamat: '',
    status: '',
  });
  const [editEmployee, setEditEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Define functions for handling modal
  const openModal = () => {
    setNewEmployee({
      id: '',
      nik: '',
      name: '',
      jenkes: '',
      alamat: '',
      status: '',
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditEmployee(null);
  };

  // Define function for handling input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  // Define function for adding a new employee
  const addEmployee = () => {
    // Correct the condition to check for the correct properties
    if (newEmployee.nik && newEmployee.name) {
      setEmployees([...employees, { ...newEmployee, id: Date.now() }]);
      closeModal();
    }
  }

  // Define function for editing an employee's data
  const editEmployeeData = (employee) => {
    setEditEmployee(employee);
    setNewEmployee({
      id: employee.id,
      nik: employee.nik,
      name: employee.name,
      jenkes: employee.jenkes,
      alamat: employee.alamat,
      status: employee.status,
    });
    setIsModalOpen(true);
  };

  // Define function for updating an employee
  const updateEmployee = () => {
    if (newEmployee.name && newEmployee.position) {
      setEmployees((prevEmployees) =>
        prevEmployees.map((employee) =>
          employee.id === editEmployee.id ? newEmployee : employee
        )
      );
      closeModal();
    }
  };

  // Define function for deleting an employee
  const deleteEmployee = (id) => {
    setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== id));
  };

  return (
    <div className="container mx-auto  p-5 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Data Karyawan</h2>
      <button
        onClick={openModal}
        className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-300 ease-in-out"
      >
        Tambah Data Karyawan
      </button>

      <h3 className="text-lg font-bold mt-4">List Data Karyaawan:</h3>
      <table className="table-auto w-full mt-4">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Nik</th>
            <th className="border px-4 py-2">Nama</th>
            <th className="border px-4 py-2">Jenis Kelamin</th>
            <th className="border px-4 py-2">Alamat</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td className="border px-4 py-2">{employee.id}</td>
              <td className="border px-4 py-2">{employee.nik}</td>
              <td className="border px-4 py-2">{employee.name}</td>
              <td className="border px-4 py-2">{employee.jenkes}</td>
              <td className="border px-4 py-2">{employee.alamat}</td>
              <td className="border px-4 py-2">{employee.status}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => editEmployeeData(employee)}
                  className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteEmployee(employee.id)}
                  className="ml-2 text-red-500 hover:text-red-700 transition duration-300 ease-in-out"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-5 rounded shadow-md">
          <label className="block mb-2">
            NIK:
            <input
              type="string"
              name="nik"
              value={newEmployee.nik}
              onChange={handleInputChange}
              className="block w-full border border-gray-300 p-2 rounded"
            />
          </label>
            <label className="block mb-2">
              Nama:
              <input
                type="text"
                name="name"
                value={newEmployee.name}
                onChange={handleInputChange}
                className="block w-full border border-gray-300 p-2 rounded"
              />
            </label>
            <label className="block mb-2">
              Jenis Kelamin:
              <input
                type="text"
                name="Jenis Kelamin"
                value={newEmployee.jenkes}
                onChange={handleInputChange}
                className="block w-full border border-gray-300 p-2 rounded"
              />
            </label>
            <label className="block mb-2">
              Alamat:
              <input
                type="text"
                name="Alamat"
                value={newEmployee.alamat}
                onChange={handleInputChange}
                className="block w-full border border-gray-300 p-2 rounded"
              />
            </label>
            <label className="block mb-2">
              Status:
              <input
                type="text"
                name="Status"
                value={newEmployee.status}
                onChange={handleInputChange}
                className="block w-full border border-gray-300 p-2 rounded"
              />
            </label>
            {editEmployee ? (
              <button
                onClick={updateEmployee}
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
              >
                Update
              </button>
            ) : (
              <button
                onClick={addEmployee}
                className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-300 ease-in-out"
              >
                Tambah Karyawan
              </button>
            )}
            <button
              onClick={closeModal}
              className="ml-2 bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-300 ease-in-out"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeManagement;
