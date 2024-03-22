const {loginUser} = require ("../models")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


// Login
const login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await loginUser.findOne({ where: { email } });
      if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
  
      const isValidPassword = await (password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
  
      const token = jwt.sign({ id: user.id }, 'your_secret_key', { expiresIn: '1h' });
  
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
  //Get
const getLogin = async (req, res) => {
      try {
          const loginuser = await loginUser.findAll()
          res.json(loginuser);
      } catch (error) {
          console.log(error);
          res.status(500).json({ error: error.message });
       }
   };

  // POST 
  const postLogin = async (req, res) => {
      try {
          const newLogin = await loginUser.create(req.body);
          res.status(201).json(newLogin);
      } catch (error) {
          res.status(400).json({ message: error.message });
      }
  };
  
  // PUT berdasarkan name
  const putLogin = async (req, res) => {
      try {
          const { id } = req.params;
          const updatedAttendance = await loginUser.update(req.body, {
              where: { id: id }
          });
          if (updatedAttendance[0] === 1) {
              res.json({ message: "Data login berhasil diperbarui" });
          } else {
              res.status(404).json({ message: "Data login tidak ditemukan" });
          }
      } catch (error) {
          res.status(400).json({ message: error.message });
      }
  };
  
  // DELETE endpoint untuk menghapus data absensi berdasarkan ID
  const deleteLogin = async (req, res) => {
      try {
          const { id } = req.params;
          const deletedRows = await loginUser.destroy({
              where: { id: id }
          });
          if (deletedRows === 1) {
              res.json({ message: "Data login berhasil dihapus" });
          } else {
              res.status(404).json({ message: "Data login tidak ditemukan" });
          }
      } catch (error) {
          res.status(400).json({ message: error.message });
      }
  };

  module.exports = {
    getLogin, postLogin, putLogin, deleteLogin, login
  }
  
//   postLogin, putLogin, deleteLogin 