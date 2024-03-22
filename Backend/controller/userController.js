const {dataUser} = require ('../models')  
// Get
const getUser =  async (req, res) => {
    try {
        const datauser = await dataUser.findAll({
            order:[['nik', 'ASC']]
        });
        res.json(datauser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
 };

// post
const  createUser=  async (req, res) => {
    try { 
        const newUser = await dataUser.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// put
const putUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await dataUser.update(req.body, {
            where: { nik: id }
        });
        if (updatedUser[0] === 1) {
            res.json({ message: "Data user berhasil diperbarui" });
        } else {
            res.status(404).json({ message: "Data user tidak ditemukan" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// // DELETE 
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRows = await dataUser.destroy({
            where: { nik: id }
        });
        if (deletedRows === 1) {
            res.json({ message: "Data absensi berhasil dihapus" });
        } else {
            res.status(404).json({ message: "Data absensi tidak ditemukan" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports ={
    getUser, putUser, createUser, deleteUser
}