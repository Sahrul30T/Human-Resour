const {dataAbsen,dataUser} = require ('../models')
// get
const getAbsen = async (req, res) => {
    try {
        const dataabsen = await dataAbsen.findAll({
            include: [
                {
                    model: dataUser,
                },
            ],
            order:[['nik', 'ASC']]
        });
        res.json(dataabsen);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
     }
 };

// POST endpoint untuk menambahkan data absensi
const postAbsen = async (req, res) => {
    try {
        const newAttendance = await dataAbsen.create(req.body);
        res.status(201).json(newAttendance);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// PUT endpoint untuk memperbarui data absensi berdasarkan ID
const putAbsen = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedAttendance = await dataAbsen.update(req.body, {
            where: { idAbsen: id }
        });
        if (updatedAttendance[0] === 1) {
            res.json({ message: "Data absensi berhasil diperbarui" });
        } else {
            res.status(404).json({ message: "Data absensi tidak ditemukan" });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// DELETE endpoint untuk menghapus data absensi berdasarkan ID
const deleteAbsen = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRows = await dataAbsen.destroy({
            where: { idAbsen: id }
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

module.exports = {
    getAbsen, postAbsen, putAbsen, deleteAbsen
}